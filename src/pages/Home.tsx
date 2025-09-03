import React, { useState, Fragment } from 'react';
import type { FC } from 'react';
import { Transition } from '@headlessui/react';

// =================================================================================
// SECTION 1: SETUP & DATA
// =================================================================================

// Hook palsu untuk tema, agar komponen bisa mandiri
const useTheme = () => {
  const [isDark] = React.useState(false); 
  return { isDark };
};

// Data untuk fitur produk dinamis di kartu interaktif
const productFeatures = {
  bisnis: {
    title: 'Solusi Lengkap untuk Bisnis Anda',
    description: 'Alat canggih untuk mengotomatisasi dan mengembangkan operasi bisnis Anda.',
    imageSrc: "https://images.ctfassets.net/w8fc6tgspyjz/3FllRRqmlYB2Bdf3ASg3fT/14ff2e7789c12cfc0a55358c50aa5312/home-tabs-v3-projects-desktop.png",
    features: [
      { 
        icon: '🛍️', 
        label: 'AI Auto Builder E-commerce',
        imageSrc: "https://images.ctfassets.net/w8fc6tgspyjz/3FllRRqmlYB2Bdf3ASg3fT/14ff2e7789c12cfc0a55358c50aa5312/home-tabs-v3-projects-desktop.png"
      },
      { 
        icon: '📦', 
        label: 'ERP',
        imageSrc: "https://images.ctfassets.net/w8fc6tgspyjz/ANJFM8HigJCMUwQxflBvU/226711f57db215ba057f50f7a9b68c37/home-tabs-v4-chat-desktop.png"
      },
      { icon: '🛒', label: 'POS', imageSrc: undefined },
      { icon: '📝', label: 'CMS', imageSrc: undefined },
      { icon: '📈', label: 'Finance Analyst & Report', imageSrc: undefined },
      { icon: '💬', label: 'Live Chat', imageSrc: undefined },
      { icon: '🔗', label: 'Auto Audit with Blockchain', imageSrc: undefined },
    ],
  },
  personal: {
    title: 'Bangun Brand Personal Anda',
    description: 'Maksimalkan potensi online Anda dengan website dan alat pemasaran yang kuat.',
    imageSrc: "https://images.ctfassets.net/w8fc6tgspyjz/ANJFM8HigJCMUwQxflBvU/226711f57db215ba057f50f7a9b68c37/home-tabs-v4-chat-desktop.png",
    features: [
      { icon: '🖼️', label: 'AI Builder Web Portofolio', imageSrc: undefined },
      { icon: '🤝', label: 'Affiliate Marketing', imageSrc: undefined },
      { icon: '💰', label: 'Jual Produk & Jasa', imageSrc: undefined },
      { icon: '📢', label: 'Digital Marketing Tools', imageSrc: undefined },
    ],
  },
  investor: {
    title: 'Investasi Cerdas & Transparan',
    description: 'Dapatkan data dan wawasan untuk keputusan investasi yang lebih baik.',
    imageSrc: "https://clickup.com/blog/wp-content/uploads/2023/08/new-home-hero-image.png",
    features: [
      { icon: '📊', label: 'Tracking Score Company', imageSrc: undefined },
      { icon: '⛓️', label: 'Funding Transparance', imageSrc: undefined },
      { icon: '⚖️', label: 'Acquisition and Marge', imageSrc: undefined },
    ],
  },
};

type ProductKey = keyof typeof productFeatures;

// Data untuk bagian logo "Trusted By"
const companyLogos = [
  { name: 'Microsoft', src: 'https://d1n3oewcfgleny.cloudfront.net/assets/MS_Startups.png' },
  { name: 'Supabase', src: 'https://docs.noodl.net/2.9/assets/images/thumb-482e9d6fff2db0af7ec052ddd85e66b0.png' },
];

// Data untuk bagian fitur AI & Blockchain
const featureData = [
  {
    label: "Smart AI Assistant",
    title: "Satu AI untuk Mengoptimalkan Seluruh Pekerjaan Anda",
    description: "AI kami bukan sekadar chatbot. Ia terintegrasi secara mendalam ke dalam ekosistem, membantu Anda mengotomatisasi alur kerja, menganalisis data investor, membuat draf proposal bisnis, dan mengoptimalkan personal branding Anda secara instan.",
    imageSrc: "https://cdn-icons-png.flaticon.com/512/10644/10644640.png",
    imageAlt: "AI Assistant automating workflows",
    imagePosition: 'left',
  },
  {
    label: "Decentralized Core",
    title: "Transparansi dan Keamanan di Setiap Transaksi",
    description: "Dibangun di atas jaringan blockchain, platform kami memastikan setiap kesepakatan, kepemilikan saham, dan riwayat proyek tercatat secara permanen dan tidak dapat diubah. Investor mendapatkan transparansi penuh, bisnis beroperasi dengan aman, dan talenta membangun reputasi yang terverifikasi.",
    imageSrc: "https://png.pngtree.com/png-clipart/20230127/original/pngtree-blockchain-vector-icon-png-image_8932227.png",
    imageAlt: "Blockchain network ensuring security",
    imagePosition: 'right',
  },
];

// --- PERUBAHAN DI SINI: Data testimoni diperbarui ---
const testimonialData = [
  {
    quote: "Satulini merevolusi cara kami mengelola inventaris dan terhubung dengan investor. Transparansi blockchain-nya memberikan kepercayaan, dan alat AI-nya membantu kami menganalisis tren pasar dengan akurasi yang luar biasa.",
    author: {
      name: "Mohammad Iqbal",
      title: "Owner, Growroom.id",
    },
  },
  {
    quote: "Sebagai platform yang berfokus pada produk-produk unik, kami membutuhkan solusi yang bisa mengintegrasikan penjualan, pemasaran, dan branding. Satulini memberikan semua itu dalam satu ekosistem yang powerful dan mudah digunakan.",
    author: {
      name: "Ebit",
      title: "Owner, Daunx.id",
    },
  },
  {
    quote: "Akhirnya, sebuah platform di mana saya bisa melakukan due diligence dengan data yang nyata. Alur investasi menjadi 10x lebih efisien dan aman. Ini adalah masa depan angel investing.",
    author: {
      name: "Maria G.",
      title: "Angel Investor",
    },
  },
];


// =================================================================================
// SECTION 2: CHILD COMPONENTS
// =================================================================================

// Komponen Kartu Interaktif
const DynamicFeatureCard: FC<{
  isDark: boolean, 
  onTabChange: (key: ProductKey) => void,
  onFeatureClick: (imageUrl: string) => void
}> = ({ isDark, onTabChange, onFeatureClick }) => {
    const [activeTab, setActiveTab] = useState<ProductKey>('bisnis');
    const currentProduct = productFeatures[activeTab];

    const handleTabClick = (tabKey: ProductKey) => {
      setActiveTab(tabKey);
      onTabChange(tabKey);
    };

    const TabButton: FC<{tabKey: ProductKey, children: React.ReactNode}> = ({ tabKey, children }) => (
        <button
            onClick={() => handleTabClick(tabKey)}
            className={`w-full py-2.5 text-sm font-semibold leading-5 rounded-lg transition-colors focus:outline-none ${
                activeTab === tabKey
                    ? (isDark ? 'bg-purple-600 text-white' : 'bg-purple-600 text-white shadow')
                    : (isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100')
            }`}
        >
            {children}
        </button>
    );

    const MAX_FEATURES = 8;
    type Feature = { icon: string; label: string; imageSrc?: string };
    const paddedFeatures: (Feature | null)[] = [...currentProduct.features];
    while (paddedFeatures.length < MAX_FEATURES) {
      paddedFeatures.push(null);
    }

    return (
        <div className={`rounded-2xl p-6 sm:p-8 transition-colors duration-300 ${isDark ? 'bg-gray-900/70 border-gray-700/50' : 'bg-white/70 border-gray-200/50'} border shadow-2xl backdrop-blur-xl`}>
            <div className={`flex p-1 space-x-1 rounded-xl mb-6 ${isDark ? 'bg-gray-800/60' : 'bg-gray-200/60'}`}>
                <TabButton tabKey="bisnis">Bisnis</TabButton>
                <TabButton tabKey="personal">Personal</TabButton>
                <TabButton tabKey="investor">Investor</TabButton>
            </div>
            <Transition as={Fragment} show={true} key={activeTab} enter="transition-opacity duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="flex flex-col min-h-[420px]">
                     <div className="mb-6">
                        <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{currentProduct.title}</h3>
                        <p className={`text-sm transition-colors duration-300 min-h-[3rem] ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{currentProduct.description}</p>
                    </div>
                    <div className="flex-grow">
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
                        {paddedFeatures.map((item, index) => (
                           item ? (
                                <div key={item.label} onClick={() => item.imageSrc && onFeatureClick(item.imageSrc)} className={`flex flex-col items-center justify-center p-2 rounded-lg border text-center cursor-pointer transition-all duration-200 hover:scale-105 aspect-square ${isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-white/50 border-gray-200'}`}>
                                    <div className="text-2xl mb-1">{item.icon}</div>
                                    <div className={`text-[11px] font-medium leading-tight transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.label}</div>
                                </div>
                           ) : <div key={`placeholder-${index}`} className="aspect-square"></div>
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 mt-8">
                        Get started with {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                    </button>
                </div>
            </Transition>
        </div>
    );
};

// Komponen "Trusted By"
const TrustedBy = () => {
  return (
    <div className={`py-16 bg-white`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className={`text-center text-lg font-semibold leading-8 text-gray-900`}>
          Trusted by the world’s leading businesses
        </h2>
        <div className="mx-auto mt-10 flex flex-wrap justify-center items-center gap-x-16 sm:gap-x-20 lg:gap-x-24">
          {companyLogos.map((logo) => (
            <img
              key={logo.name}
              className={`h-16 w-auto object-contain transition-transform duration-300 hover:scale-105`}
              src={logo.src}
              alt={logo.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Komponen Feature Section (AI & Blockchain)
const FeatureSection = () => {
  return (
    <div className={`relative bg-white pt-24 pb-32 overflow-hidden`}>
      <div className="text-center mb-16">
        <p className={`font-semibold leading-7 text-purple-600`}>10x your work with smarter tools</p>
        <h2 className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900`}>Smart tools for smarter workflows</h2>
        <p className={`mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600`}>Work smarter in every way.</p>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {featureData.map((feature, index) => (
          <div key={feature.label} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index !== featureData.length - 1 ? 'mb-32' : ''}`}> 
            <div className={`lg:w-1/2 text-center lg:text-left ${feature.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
              <p className={`font-semibold leading-7 text-purple-600`}>{feature.label}</p>
              <h3 className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900`}>{feature.title}</h3>
              <p className={`mt-6 text-lg leading-8 text-gray-500`}>{feature.description}</p>
            </div>
            <div className={`lg:w-1/2 ${feature.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
              <img src={feature.imageSrc} alt={feature.imageAlt} className="w-full h-auto rounded-2xl shadow-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Komponen Testimonial
const Testimonials = () => {
  return (
    <div className={`bg-white py-24 sm:py-32`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl text-gray-900`}>
            Testimoni Kami
          </h2>
          <p className={`mt-6 text-lg leading-8 text-gray-600`}>Lihat apa yang dikatakan para inovator, developer, dan investor tentang platform kami.</p>
        </div>
        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="-m-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonialData.map((testimonial) => (
                <div key={testimonial.author.name} className={`p-8 rounded-2xl bg-gray-50`}>
                  <figure className="flex flex-col h-full">
                    <blockquote className={`flex-grow text-lg leading-7 text-gray-600`}>
                      <p>“{testimonial.quote}”</p>
                    </blockquote>
                    <figcaption className="mt-8">
                      <div className={`font-semibold text-gray-900`}>{testimonial.author.name}</div>
                      <div className={`text-sm text-gray-600`}>{testimonial.author.title}</div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen CTA Penutup
const FinalCTA = () => {
  return (
    <div className={`bg-white`}>
      <div className="max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-8">
        <div className="relative isolate overflow-hidden bg-purple-600 shadow-2xl rounded-3xl px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Siap untuk Memulai?</h2>
            <p className="mt-6 text-lg leading-8 text-purple-100">Bergabunglah dengan masa depan dunia kerja. Bangun, berkolaborasi, dan berinvestasi di platform terdesentralisasi yang dapat Anda percayai sepenuhnya.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg mb-4">Get started. Join Waiting List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// =================================================================================
// SECTION 3: MAIN PAGE COMPONENT (`Home`)
// =================================================================================

const Home: FC = () => {
  const { isDark } = useTheme();
  const [activeImageTab, setActiveImageTab] = useState<ProductKey>('bisnis');
  const [activeFeatureImage, setActiveFeatureImage] = useState<string | null>(null);

  const handleTabChange = (tabKey: ProductKey) => {
    setActiveImageTab(tabKey);
    setActiveFeatureImage(null);
  };
  
  const handleFeatureClick = (imageUrl: string) => {
    setActiveFeatureImage(imageUrl);
  };

  const currentImageSrc = activeFeatureImage || productFeatures[activeImageTab].imageSrc;

  return (
    <>
      {/* ----- HERO & INTERACTIVE SECTION ----- */}
      <section className={`pt-10 pb-32 overflow-hidden bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-5xl md:text-7xl font-bold mb-8 mt-4 text-gray-900`}>The all-in-one platform for Decentralized Ecosystem</h1>
            <div className="max-w-3xl mx-auto mb-8">
              <p className={`text-xl md:text-2xl text-gray-700`}>Manage your business, personal website, and investments all in one place—with AI and blockchain helping you.</p>
            </div>
          </div>
        </div>
        <div className="mt-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="relative lg:w-[75%] lg:-ml-16 z-0">
              <Transition as={Fragment} show={true} key={currentImageSrc} enter="transition-opacity duration-500 ease-in-out" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-300 ease-in-out absolute inset-0" leaveFrom="opacity-100" leaveTo="opacity-0">
                <img src={currentImageSrc} alt={`App dashboard feature`} className="w-full rounded-2xl shadow-2xl" />
              </Transition>
              <div className={`absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-r from-transparent via-transparent to-white`}></div>
            </div>
            <div className="mt-8 lg:mt-0 lg:absolute lg:top-1/2 lg:right-0 lg:transform lg:-translate-y-1/2 lg:w-full lg:max-w-md xl:max-w-lg z-10">
              <DynamicFeatureCard isDark={isDark} onTabChange={handleTabChange} onFeatureClick={handleFeatureClick} />
            </div>
          </div>
        </div>
      </section>

      {/* ----- TRUSTED BY SECTION ----- */}
      <TrustedBy />

      {/* ----- AI & BLOCKCHAIN FEATURE SECTION ----- */}
      <FeatureSection />

      {/* ----- TESTIMONIALS SECTION ----- */}
      <Testimonials />
      
      {/* ----- FINAL CTA SECTION ----- */}
      <FinalCTA />
    </>
  );
};

export default Home;

