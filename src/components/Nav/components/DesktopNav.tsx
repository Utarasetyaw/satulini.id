// src/components/Navbar/components/DesktopNav.tsx
import { type FC, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { useLanguage, type Language } from '../../../context/LanguageContext';
import { GlobeIcon, ChevronDownIcon } from '../Icons';
import logo from '../../../assets/Logo.png';

// Tipe untuk props yang diterima
interface DesktopNavProps {
    openAuthModal: () => void;
    openWalletModal: () => void;
}

// Komponen kecil khusus untuk DesktopNav
const NavItem: FC<{ to: string; text: string; }> = ({ to, text }) => (
    <NavLink to={to} className="flex items-center h-full px-4 py-2 text-sm font-medium text-gray-500 transition-colors rounded-full hover:text-gray-900 hover:bg-black/5">
        {text}
    </NavLink>
);

const LanguageSwitcher: FC = () => {
    const { language, setLanguage } = useLanguage();
    const languages: { code: Language, name: string }[] = [
        { code: 'en', name: 'English' },
        { code: 'id', name: 'Indonesia' },
        { code: 'zh', name: '中文' },
    ];
    return (
        <Popover className="relative flex items-center h-full">
            {({ open, close }) => (
                <>
                    <Popover.Button className={`group inline-flex items-center h-full space-x-2 px-4 py-2 text-sm font-medium transition-colors outline-none rounded-full ${open ? 'text-gray-900 bg-black/5' : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'}`}>
                        <GlobeIcon />
                        <span className='hidden sm:inline'>{language.toUpperCase()}</span>
                        <ChevronDownIcon className="w-4 h-4" />
                    </Popover.Button>
                    <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
                        <Popover.Panel className="absolute right-0 z-50 top-full mt-2 w-40 origin-top-right">
                            <div className="overflow-hidden bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-1">
                                {languages.map((lang) => (
                                    <button key={lang.code} onClick={() => { setLanguage(lang.code); close(); }} className={`w-full text-left flex items-center px-3 py-2 text-sm rounded-lg ${language === lang.code ? 'bg-gray-100 font-semibold text-gray-900' : 'text-gray-700 hover:bg-gray-50'}`}>
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

// Komponen utama DesktopNav
export const DesktopNav: FC<DesktopNavProps> = ({ openAuthModal, openWalletModal }) => {
    const { t } = useLanguage();

    return (
        <nav className="relative hidden lg:flex items-stretch justify-center h-12 space-x-2">
            {/* Logo and Tagline */}
            <div className="flex-shrink-0 flex items-center p-2 rounded-full shadow-lg ring-1 bg-white/70 ring-black/5 backdrop-blur-lg h-full">
                <Link to="/" className="flex items-center h-full space-x-3 pr-3">
                    <img src={logo} alt="Satulini Logo" className="h-7 w-auto" />
                </Link>
                <div className="w-px h-6 my-auto bg-gray-200 mx-2"></div>
                <span className="pl-1 text-sm text-gray-500 flex items-center">{t('tagline')}</span>
                <span className="w-4"></span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center p-1 rounded-full shadow-lg ring-1 bg-white/70 ring-black/5 backdrop-blur-lg h-full">
                <NavItem to="/" text={t('home')} />
                <NavItem to="/pricing" text={t('pricing')} />
                <NavItem to="/whitepaper" text={t('whitepaper')} />
                {/* Note: Product dropdown would be its own component if needed */}
            </div>

            {/* Actions: Language and Pre-Register */}
            <div className="flex items-stretch h-full">
                <div className="flex items-center rounded-full shadow-lg ring-1 bg-white/70 ring-black/5 backdrop-blur-lg h-full p-1">
                    <LanguageSwitcher />
                    <div className="w-px h-6 my-auto bg-gray-200 mx-1"></div>
                    <button onClick={openAuthModal} className="flex items-center h-full px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 rounded-l-full">
                        {t('preRegister')}
                    </button>
                    <div className="w-px h-6 my-auto bg-gray-200"></div>
                    <button onClick={openWalletModal} className="flex items-center h-full px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 rounded-r-full">
                        {t('preRegisterWeb3')}
                    </button>
                </div>
            </div>
        </nav>
    );
};