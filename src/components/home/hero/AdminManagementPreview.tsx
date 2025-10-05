import { useState } from 'react';
import type { FC } from 'react';
import {
    Layout,
    Menu,
    Typography,
    Row,
    Col,
    Card,
    Space,
} from 'antd';
import {
    TableOutlined,
    CreditCardOutlined,
    FormOutlined
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

// --- Palet Warna untuk Siluet ---
const purple = 'rgb(77, 72, 213)';
const lightPurple = 'rgba(77, 72, 213, 0.1)';
const grey = '#f0f0f0';
const lightGrey = '#fafafa';

// =================================================================================
// --- Komponen-Komponen Siluet untuk Setiap Bagian ---
// =================================================================================

// 1. Siluet untuk Tampilan Tabel (Desktop)
const AdminTablePreview: FC = () => {
    const TableRowSilhouette = () => (
        <Row align="middle" style={{ padding: '16px 8px', borderBottom: `1px solid ${grey}` }}>
            <Col span={7}>
                <Space>
                    <div style={{ width: 32, height: 32, background: grey, borderRadius: '50%' }} />
                    <div style={{ width: 120, height: 16, background: lightGrey, borderRadius: 4 }} />
                </Space>
            </Col>
            <Col span={7}><div style={{ width: '80%', height: 16, background: lightGrey, borderRadius: 4 }} /></Col>
            <Col span={6}>
                <Space size={4}><div style={{ width: 60, height: 22, background: lightPurple, borderRadius: 4 }} /></Space>
            </Col>
            <Col span={4} style={{ textAlign: 'right' }}><div style={{ width: 90, height: 32, background: grey, borderRadius: 6, display: 'inline-block' }} /></Col>
        </Row>
    );
     return (
        <Card title="Pratinjau Tampilan Tabel (Desktop)">
             <div style={{ padding: '16px 24px', borderBottom: `1px solid ${grey}`, background: lightGrey }}>
                <Row align="middle">
                    <Col span={7}><Text strong type="secondary">Admin</Text></Col>
                    <Col span={7}><Text strong type="secondary">Email</Text></Col>
                    <Col span={6}><Text strong type="secondary">Hak Akses</Text></Col>
                    <Col span={4} style={{ textAlign: 'right' }}><Text strong type="secondary">Aksi</Text></Col>
                </Row>
            </div>
            <div style={{padding: '0 16px'}}>
                <TableRowSilhouette />
                <TableRowSilhouette />
                <TableRowSilhouette />
            </div>
        </Card>
    );
};

// 2. Siluet untuk Tampilan Kartu (Mobile)
const AdminCardsPreview: FC = () => {
     const CardSilhouette = () => (
        <Card style={{ border: `1px solid ${grey}` }}>
            <Space direction="vertical" style={{ width: '100%' }}>
                <Space><div style={{ width: 40, height: 40, background: grey, borderRadius: '50%' }} />
                    <div>
                        <div style={{ width: 150, height: 18, background: lightGrey, borderRadius: 4, marginBottom: 8 }} />
                        <div style={{ width: 180, height: 14, background: lightGrey, borderRadius: 4 }} />
                    </div>
                </Space>
                <div style={{ width: '100%', height: 1, background: grey, margin: '8px 0' }} />
                <div style={{ width: 80, height: 14, background: lightGrey, borderRadius: 4, marginBottom: 4 }} />
                <Space size={4}><div style={{ width: 70, height: 22, background: lightPurple, borderRadius: 4 }} /></Space>
                <div style={{ width: '100%', height: 1, background: grey, margin: '8px 0' }} />
                <Row gutter={8}>
                    <Col span={12}><div style={{ height: 32, background: grey, borderRadius: 6 }} /></Col>
                    <Col span={12}><div style={{ height: 32, background: grey, borderRadius: 6 }} /></Col>
                </Row>
            </Space>
        </Card>
    );
    return (
        <Card title="Pratinjau Tampilan Kartu (Mobile)">
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}><CardSilhouette /></Col>
                <Col xs={24} sm={12}><CardSilhouette /></Col>
            </Row>
        </Card>
    );
};

// 3. Siluet untuk Form Tambah/Edit
const AdminFormPreview: FC = () => (
    <Card title="Pratinjau Formulir Admin">
        <Space direction="vertical" size="large" style={{width: '100%', padding: '24px'}}>
             <div>
                <div style={{ width: 100, height: 14, background: lightGrey, borderRadius: 4, marginBottom: 8 }} />
                <div style={{ width: '100%', height: 40, background: grey, borderRadius: 6 }} />
            </div>
             <div>
                <div style={{ width: 100, height: 14, background: lightGrey, borderRadius: 4, marginBottom: 8 }} />
                <div style={{ width: '100%', height: 40, background: grey, borderRadius: 6 }} />
            </div>
             <div>
                <div style={{ width: 100, height: 14, background: lightGrey, borderRadius: 4, marginBottom: 8 }} />
                <div style={{ width: '100%', height: 40, background: grey, borderRadius: 6 }} />
            </div>
             <div style={{ width: '100%', height: 48, background: purple, borderRadius: 8, marginTop: 16 }} />
        </Space>
    </Card>
);

// =================================================================================
// --- Komponen Utama Pratinjau Manajemen Admin ---
// =================================================================================
export const AdminManagementPreview: FC<{ className?: string }> = ({ className }) => {
    const [selectedSection, setSelectedSection] = useState("desktop_view");

    const menuItems = [
        { key: "desktop_view", icon: <TableOutlined />, label: "Tampilan Desktop" },
        { key: "mobile_view", icon: <CreditCardOutlined />, label: "Tampilan Mobile" },
        { key: "form_view", icon: <FormOutlined />, label: "Formulir Admin" },
    ];

    const renderPreview = () => {
        switch (selectedSection) {
            case "desktop_view": return <AdminTablePreview />;
            case "mobile_view": return <AdminCardsPreview />;
            case "form_view": return <AdminFormPreview />;
            default: return <AdminTablePreview />;
        }
    };

    return (
        <Card className={`w-full rounded-2xl shadow-2xl overflow-hidden ${className}`} bodyStyle={{ padding: 0, height: '100%' }}>
            <Layout style={{ background: "#fff", height: '100%' }}>
                <Sider width={250} style={{ background: "#fff", borderRight: "1px solid #f0f0f0" }}>
                    <div style={{ padding: "24px" }}>
                        <Title level={4}>Pratinjau Fitur</Title>
                        <Paragraph type="secondary">Manajemen Admin (ERP)</Paragraph>
                    </div>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["desktop_view"]}
                        items={menuItems}
                        onSelect={({ key }) => setSelectedSection(key)}
                        style={{ borderRight: 0 }}
                    />
                </Sider>
                <Content style={{ padding: "24px", background: "#f9fafb", overflowY: 'auto' }}>
                    {renderPreview()}
                </Content>
            </Layout>
        </Card>
    );
};