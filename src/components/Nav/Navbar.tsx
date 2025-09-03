'use client'; 

import React, { useState, Fragment } from 'react';
import type { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Popover, Transition, Disclosure, Dialog } from '@headlessui/react';

// Impor komponen Modal dan logo
import logo from '../../assets/Logo.png'; 
import AuthModal from './AuthModal';
import WalletConnectModal from './WalletConnectModal';

// =================================================================================
// SECTION 1: INTERFACES, ICONS & DATA
// =================================================================================

// --- Interface & Tipe Data ---
interface FeatureItem { 
  icon: React.ReactElement; 
  label: string; 
  to: string; 
}

interface SolutionCategory {
    title: string;
    description: string;
    features: FeatureItem[];
}

interface SolutionsContent {
    [key: string]: SolutionCategory;
}

// --- Komponen Ikon ---
const MenuIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg> );
const CloseIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg> );
const ChevronDownIcon: FC<{className?: string}> = ({className}) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>);

// Ikon untuk fitur
const ShoppingBagIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>);
const BoxIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>);
const ShoppingCartIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>);
const ClipboardIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>);
const TrendingUpIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>);
const MessageCircleIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>);
const LinkIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L9.4 6.6A.2.2 0 0 1 9.4 6.94"/><path d="M4.6 9.06a.2.2 0 0 1 0-.28L7.07 6.07a5 5 0 0 1 7.07 7.07l-3 3a5 5 0 0 1-7.54-.54"/></svg>);
const ImagePlusIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><line x1="16" y1="5" x2="21" y2="5"/><line x1="18.5" y1="2.5" x2="18.5" y2="7.5"/><path d="M12 8l-3 3-5-5"/><circle cx="8.5" cy="8.5" r="2"/></svg>);
const HandshakeIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 11.5V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5.5L4 12V6a2 2 0 0 1 2-2h3"/><path d="M21 12V7a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v5l1 1.5V19a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-7.5l1-1.5z"/></svg>);
const DollarSignIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>);
const MegaphoneIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-3-2 12L3 11"/><path d="M11.62 10.18L10 21.68l-2-2-3 3"/></svg>);
const BarChartIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>);
const LockIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);
const ScaleIcon: FC = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16.5-6-3-6 3V2l6-3 6 3v14.5Zm-10 0v-5l6-3 6 3v5l-6 3-6-3Z"/></svg>);

// --- Navigation Data (Translated to English) ---
const navTexts: { [key: string]: string } = {
    home: "Home",
    tagline: "The all-in-one platform",
    product: "Product",
    pricing: "Pricing",
};

const solutionsMegaMenuContent: SolutionsContent = {
  business: {
    title: 'Complete Solution for Your Business',
    description: 'Advanced tools to automate and grow your business operations.',
    features: [
      { icon: <ShoppingBagIcon />, label: 'AI Auto Builder E-commerce', to: '/product/ai-auto-builder-e-commerce' },
      { icon: <BoxIcon />, label: 'ERP', to: '/product/erp' },
      { icon: <ShoppingCartIcon />, label: 'POS', to: '/product/pos' },
      { icon: <ClipboardIcon />, label: 'CMS', to: '/product/cms' },
      { icon: <TrendingUpIcon />, label: 'Finance Analyst & Report', to: '/product/finance-analyst-report' },
      { icon: <MessageCircleIcon />, label: 'Live Chat', to: '/product/live-chat' },
      { icon: <LinkIcon />, label: 'Auto Audit with Blockchain', to: '/product/auto-audit-blockchain' },
    ],
  },
  personal: {
    title: 'Build Your Personal Brand',
    description: 'Maximize your online potential with a powerful website and marketing tools.',
    features: [
      { icon: <ImagePlusIcon />, label: 'AI Builder Web Portfolio', to: '/product/ai-builder-web-portofolio' },
      { icon: <HandshakeIcon />, label: 'Affiliate Marketing', to: '/product/affiliate-marketing' },
      { icon: <DollarSignIcon />, label: 'Sell Products & Services', to: '/product/sell-products-services' },
      { icon: <MegaphoneIcon />, label: 'Digital Marketing Tools', to: '/product/digital-marketing-tools' },
    ],
  },
  investor: {
    title: 'Smart & Transparent Investments',
    description: 'Get data and insights for better investment decisions.',
    features: [
      { icon: <BarChartIcon />, label: 'Tracking Score Company', to: '/product/tracking-score-company' },
      { icon: <LockIcon />, label: 'Funding Transparency', to: '/product/funding-transparency' },
      { icon: <ScaleIcon />, label: 'Acquisition and Merger', to: '/product/acquisition-merger' },
    ],
  },
};

const solutionCategories = [
    { 
        id: 'business', 
        name: 'Business', 
        iconUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/big-business-2453818-2030375.png' 
    },
    { 
        id: 'personal', 
        name: 'Personal', 
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
    },
    { 
        id: 'investor', 
        name: 'Investor', 
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2422/2422793.png'
    },
];


// =================================================================================
// SECTION 2: SUB-COMPONENTS
// =================================================================================

const NavItem: FC<{ to: string; text: string; }> = ({ to, text }) => ( <NavLink to={to} className="flex items-center h-full px-4 py-2 text-sm font-medium text-gray-500 transition-colors rounded-full hover:text-gray-900 hover:bg-black/5">{text}</NavLink> );

const DropdownNavItem: FC<{ title: string; content: SolutionsContent }> = ({ title, content }) => {
    const [activeCategory, setActiveCategory] = useState<string>('business');
    const activeContent = content[activeCategory];

    return (
        <Popover className="relative flex items-center h-full">
            {({ open, close }) => (
                <>
                    <Popover.Button className={`group inline-flex items-center h-full space-x-1 px-4 py-2 text-sm font-medium transition-colors outline-none rounded-full ${open ? 'text-gray-900 bg-black/5' : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'}`}>
                        <span>{title}</span>
                        <ChevronDownIcon className="w-4 h-4" /> 
                    </Popover.Button>
                    <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel className="absolute left-1/2 z-50 top-full mt-2 w-screen max-w-4xl -translate-x-1/2 transform px-4">
                            <div className="overflow-hidden bg-white rounded-2xl shadow-lg ring-1 ring-black/5">
                                <div className="flex">
                                    <div className="w-1/3 p-5 bg-white border-r border-gray-100">
                                        <nav className="flex flex-col space-y-2">
                                            {solutionCategories.map((cat) => (
                                                <div 
                                                    key={cat.id} 
                                                    onMouseEnter={() => setActiveCategory(cat.id)}
                                                    className={`flex items-center p-3 text-sm font-medium rounded-lg transition-colors cursor-pointer ${activeCategory === cat.id ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'}`}
                                                >
                                                   <img src={cat.iconUrl} alt={`${cat.name} icon`} className="w-6 h-6 mr-3 shrink-0" />
                                                   <span>{cat.name}</span>
                                                </div>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="flex-1 p-8 bg-gray-50/50 flex flex-col">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{activeContent.title}</h3>
                                            <p className="mt-2 text-sm text-gray-600 max-w-lg">{activeContent.description}</p>
                                        </div>
                                        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
                                            {activeContent.features.map(feature => (
                                                <Link 
                                                    key={feature.label} 
                                                    to={feature.to} 
                                                    onClick={() => close()}
                                                    className="flex items-center gap-x-3 p-2 rounded-md transition-colors hover:bg-gray-100 -ml-2"
                                                >
                                                    <span className="text-purple-600 shrink-0">{feature.icon}</span>
                                                    <span className="text-sm font-medium text-gray-800">{feature.label}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

const MobileMenu: FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
    return (
        <div className="space-y-1">
            <NavLink to="/" onClick={closeMenu} className="block rounded-lg py-2 px-3 text-base font-medium text-gray-700 hover:bg-black/5">{navTexts['home']}</NavLink>
            <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex items-center justify-between w-full rounded-lg py-2 pl-3 pr-3.5 text-base font-medium text-gray-700 hover:bg-black/5">
                            {navTexts['product']}
                            <ChevronDownIcon className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-1 space-y-1 pl-4 border-l-2 border-gray-200 ml-2">
                            {solutionCategories.map((category) => (
                                <Disclosure as="div" key={category.id} className="space-y-1">
                                    {({ open: subOpen }) => (
                                        <>
                                            <Disclosure.Button className="flex items-center justify-between w-full rounded-lg py-2 pl-3 pr-3.5 text-base font-medium text-gray-600 hover:bg-black/5">
                                                {category.name}
                                                <ChevronDownIcon className={`w-5 h-5 transition-transform ${subOpen ? 'rotate-180' : ''}`} />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="space-y-1 pl-4 border-l-2 border-gray-200 ml-2">
                                                {solutionsMegaMenuContent[category.id].features.map((feature) => (
                                                    <NavLink
                                                        key={feature.label}
                                                        to={feature.to}
                                                        onClick={closeMenu}
                                                        className="flex items-center gap-x-3 rounded-lg py-2 pl-3 pr-3.5 text-sm font-medium text-gray-600 hover:bg-black/5"
                                                    >
                                                        <span className="text-purple-600 shrink-0">{feature.icon}</span>
                                                        {feature.label}
                                                    </NavLink>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <NavLink to="/pricing" onClick={closeMenu} className="block rounded-lg py-2 px-3 text-base font-medium text-gray-700 hover:bg-black/5">{navTexts['pricing']}</NavLink>
        </div>
    );
}

// =================================================================================
// SECTION 3: MAIN NAVBAR COMPONENT
// =================================================================================
const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
  const openWalletModal = () => setIsWalletModalOpen(true);
  const closeWalletModal = () => setIsWalletModalOpen(false);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-40 px-4">
        <div className="max-w-7xl mx-auto relative flex justify-center items-center h-12">
          
          <nav className="relative hidden lg:flex items-stretch h-full space-x-2">
            
            <div className="flex-shrink-0 flex items-center p-2 rounded-full shadow-lg ring-1 bg-white/70 ring-black/5 backdrop-blur-lg h-full">
              <Link to="/" className="flex items-center h-full space-x-3 pr-3">
                <img src={logo} alt="Satulini Logo" className="h-7 w-auto" />
              </Link>
              <div className="w-px h-6 my-auto bg-gray-200 mx-2"></div>
              <span className="pl-1 text-sm text-gray-500 flex items-center">{navTexts['tagline']}</span>
              <span className="w-4"></span>
            </div>

            <div className="flex items-center p-1 rounded-full shadow-lg ring-1 bg-white/70 ring-black/5 backdrop-blur-lg h-full">
                <NavItem to="/" text={navTexts['home']} />
                <DropdownNavItem title={navTexts['product']} content={solutionsMegaMenuContent} />
                <NavItem to="/pricing" text={navTexts['pricing']} />
            </div>

            <div className="flex items-stretch h-full space-x-2">
                <div className="flex items-center rounded-full shadow-lg ring-1 bg-white/70 ring-black/5 backdrop-blur-lg h-full">
                    <button onClick={openAuthModal} className="flex items-center h-full px-4 text-sm font-medium text-gray-500 transition-colors hover:bg-black/5 rounded-l-full">Log In</button>
                    <div className="w-px h-6 my-auto bg-gray-200"></div>
                    <button onClick={openWalletModal} className="flex items-center h-full gap-x-2 px-4 text-sm font-medium text-gray-500 transition-colors hover:bg-black/5 rounded-r-full">
                        <img 
                            src="https://static.vecteezy.com/system/resources/previews/026/362/279/original/digital-wallet-icon-vector.jpg" 
                            alt="Wallet Icon" 
                            className="w-5 h-5 rounded-sm"
                        />
                        Connect Wallet
                    </button>
                </div>
                
                <button onClick={openAuthModal} className="h-full flex items-center bg-purple-600 hover:bg-purple-700 text-white px-5 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">Sign Up</button>
            </div>
          </nav>

          {/* --- PERUBAHAN DI SINI: Menu Mobile Direvisi Total --- */}
          <nav className="relative lg:hidden flex items-center justify-between p-2 rounded-full shadow-lg ring-1 bg-white/80 ring-black/5 backdrop-blur-lg w-full">
              <Link to="/" className="flex-shrink-0 flex items-center p-2">
                <img src={logo} alt="Satulini Logo" className="h-7 w-auto" />
              </Link>
              <button onClick={() => setIsMenuOpen(true)} className="p-2 text-gray-500 transition-colors">
                <span className="sr-only">Open main menu</span>
                <MenuIcon />
              </button>
          </nav>
        
           <Transition
              show={isMenuOpen}
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
                <Dialog as="div" className="lg:hidden" onClose={setIsMenuOpen}>
                    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="-m-1.5 p-1.5">
                                <span className="sr-only">Satulini</span>
                                <img
                                className="h-8 w-auto"
                                src={logo}
                                alt="Satulini Logo"
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <CloseIcon />
                            </button>
                        </div>
                        <MobileMenu closeMenu={() => setIsMenuOpen(false)} />
                        <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                           <button onClick={() => { openAuthModal(); setIsMenuOpen(false); }} className="block w-full text-center px-4 py-3 text-base font-semibold leading-7 text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-50">Log In</button>
                           <button onClick={() => { openWalletModal(); setIsMenuOpen(false); }} className="flex items-center justify-center w-full gap-x-2 px-4 py-3 text-base font-semibold leading-7 text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-50">
                               <img src="https://static.vecteezy.com/system/resources/previews/026/362/279/original/digital-wallet-icon-vector.jpg" alt="Wallet Icon" className="w-5 h-5 rounded-sm"/>
                               Connect Wallet
                           </button>
                           <button onClick={() => { openAuthModal(); setIsMenuOpen(false); }} className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg text-base font-semibold">Sign Up</button>
                        </div>
                    </Dialog.Panel>
              </Dialog>
            </Transition>
        </div>
      </header>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
      <WalletConnectModal isOpen={isWalletModalOpen} onClose={closeWalletModal} />
    </>
  );
};

export default Navbar;

