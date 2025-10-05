// src/components/EcommerceBuilderPreview.tsx

import React, { useState, useEffect } from "react";
import {
    Layout,
    Menu,
    Typography,
    Row,
    Col,
    Card,
    Flex, // Menggunakan Flex untuk layout yang lebih mudah
} from "antd";
import {
    HomeOutlined,
    ShopOutlined,
    ProfileOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    CreditCardOutlined,
    LoginOutlined,
} from "@ant-design/icons";

const { Sider, Content, Header } = Layout;
const { Title, Paragraph } = Typography;
const MOBILE_BREAKPOINT = 768; // Titik breakpoint untuk beralih ke layout mobile

// --- (Komponen-komponen Pratinjau tidak perlu diubah) ---
const HomePreview = () => (
    <Card title="Pratinjau Home (Hero)">
        <Row gutter={16} align="middle">
            <Col xs={24} md={12}>
                <div style={{ background: "#f0f0f0", height: 200, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#bfbfbf" }}>
                    Gambar Utama
                </div>
            </Col>
            <Col xs={24} md={12}>
                <div style={{ background: "#f0f0f0", height: 32, width: "90%", borderRadius: 4, marginBottom: 16 }} />
                <div style={{ background: "#fafafa", height: 16, borderRadius: 4, marginBottom: 8 }} />
                <div style={{ background: "#fafafa", height: 16, width: "70%", borderRadius: 4, marginBottom: 24 }} />
                <div style={{ background: "rgba(77, 72, 213, 1)", height: 40, width: 120, borderRadius: 8 }} />
            </Col>
        </Row>
    </Card>
);
// --- (Pastikan semua komponen preview lainnya ada di sini) ---


// --- Komponen Utama Pratinjau dengan Logika Responsif ---
export const EcommerceBuilderPreview: React.FC<{ className?: string }> = ({ className }) => {
    const [selectedSection, setSelectedSection] = useState("home");
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

    // Effect untuk mendeteksi perubahan ukuran layar
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menuItems = [
        { key: "home", icon: <HomeOutlined />, label: "Home" },
        { key: "all-product", icon: <ShopOutlined />, label: "Produk" },
        { key: "detail-product", icon: <ProfileOutlined />, label: "Detail" },
        { key: "profile", icon: <UserOutlined />, label: "Profil" },
        { key: "cart", icon: <ShoppingCartOutlined />, label: "Keranjang" },
        { key: "checkout", icon: <CreditCardOutlined />, label: "Checkout" },
        { key: "login", icon: <LoginOutlined />, label: "Login" },
    ];

    const renderPreview = () => {
        switch (selectedSection) {
            case "home": return <HomePreview />;
            // Tambahkan case lain jika ada
            default: return <HomePreview />;
        }
    };

    // Layout untuk Desktop
    const DesktopLayout = (
        <Layout style={{ background: "#fff", height: '100%' }}>
            <Sider width={200} style={{ background: "#fff", borderRight: "1px solid #f0f0f0", overflowY: 'auto' }}>
                <div style={{ padding: "24px 16px 16px 24px" }}>
                    <Title level={5}>Pratinjau Builder</Title>
                    <Paragraph type="secondary" style={{fontSize: '12px', marginBottom: 0}}>Pilih bagian</Paragraph>
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["home"]}
                    items={menuItems}
                    onSelect={({ key }) => setSelectedSection(key as string)}
                    style={{ borderRight: 0 }}
                />
            </Sider>
            <Content style={{ padding: "24px", background: "#f9fafb", overflowY: 'auto' }}>
                {renderPreview()}
            </Content>
        </Layout>
    );

    // Layout untuk Mobile
    const MobileLayout = (
        <Layout style={{ background: "#fff", height: '100%' }}>
            <Header style={{ padding: '0 16px', background: '#fff', borderBottom: '1px solid #f0f0f0', height: 'auto', lineHeight: 'normal' }}>
                <Flex vertical gap="small" style={{padding: '12px 0'}}>
                    <div>
                        <Title level={5} style={{marginBottom: 0}}>Pratinjau Builder</Title>
                        <Paragraph type="secondary" style={{fontSize: '12px', margin: 0}}>Pilih bagian</Paragraph>
                    </div>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={["home"]}
                        items={menuItems}
                        onSelect={({ key }) => setSelectedSection(key as string)}
                        // Style agar menu bisa di-scroll horizontal
                        style={{ borderBottom: 0, width: '100%', overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                    />
                </Flex>
            </Header>
            <Content style={{ padding: "16px", background: "#f9fafb", overflowY: 'auto', flexGrow: 1 }}>
                {renderPreview()}
            </Content>
        </Layout>
    );

    return (
        <Card
            className={`w-full rounded-2xl shadow-2xl overflow-hidden ${className}`}
            bodyStyle={{ padding: 0, height: '100%' }}
        >
            {isMobile ? MobileLayout : DesktopLayout}
        </Card>
    );
};