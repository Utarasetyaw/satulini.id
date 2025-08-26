import { useState, Fragment } from 'react';
import type { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, Transition } from '@headlessui/react';

// --- Interface & Tipe Data ---
interface NavItemProps { to: string; text: string; end?: boolean; }
interface MobileNavItemProps extends NavItemProps { onClick: () => void; }
interface NavLinkItem { to: string; textKey: string; end?: boolean; }
interface LanguageSwitcherProps { displayType?: 'dropdown' | 'inline'; }

// --- Komponen Ikon ---
const MenuIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" /></svg> );
const CloseIcon: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> );
const FlagIndonesia: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-8 h-auto rounded-md shadow-md flex-shrink-0"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#ce1126" d="M0 0h640v240H0z"/></svg> );
const FlagUSA: FC = () => ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" className="w-8 h-auto rounded-md shadow-md flex-shrink-0"><path fill="#b22234" d="M0 0h72v48H0z"/><path fill="#fff" d="M0 8h72v8H0zm0 16h72v8H0zm0 16h72v8H0z"/><path fill="#3c3b6e" d="M0 0h36v24H0z"/>{[...Array(4)].map((_, r) => [...Array(5)].map((_, c) => ( <path key={`${r}-${c}`} fill="#fff" d={`m${c*7+3.5},${r*6+3} l2,0 -1.5,1.5 0.5,2 -1.5,-1.5 -1.5,1.5 0.5,-2 -1.5,-1.5 2,0`}/> )))}</svg> );

// --- Komponen Language Switcher ---
const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ displayType = 'dropdown' }) => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: 'id' | 'en') => i18n.changeLanguage(lng);
  const currentLang = i18n.language;

  if (displayType === 'inline') {
    return (
      <div className="flex items-center justify-center gap-6 py-2">
        <button onClick={() => changeLanguage('id')} className={`transition-all duration-200 ease-in-out ${currentLang === 'id' ? 'scale-110 opacity-100' : 'scale-100 opacity-60 hover:opacity-100'}`} aria-label="Ubah ke Bahasa Indonesia"><FlagIndonesia /></button>
        <button onClick={() => changeLanguage('en')} className={`transition-all duration-200 ease-in-out ${currentLang === 'en' ? 'scale-110 opacity-100' : 'scale-100 opacity-60 hover:opacity-100'}`} aria-label="Switch to English"><FlagUSA /></button>
      </div>
    );
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center p-2 rounded-md text-white transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400">
          {currentLang === 'id' ? <FlagIndonesia /> : <FlagUSA />}
        </Menu.Button>
      </div>
      <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>{({ active }) => ( <button onClick={() => changeLanguage('id')} className={`${ active ? 'bg-gray-100 text-gray-900' : 'text-gray-700' } group flex rounded-md items-center w-full px-4 py-2 text-sm`}><FlagIndonesia /><span className="ml-3 whitespace-nowrap">Bahasa Indonesia</span></button> )}</Menu.Item>
            <Menu.Item>{({ active }) => ( <button onClick={() => changeLanguage('en')} className={`${ active ? 'bg-gray-100 text-gray-900' : 'text-gray-700' } group flex rounded-md items-center w-full px-4 py-2 text-sm`}><FlagUSA /><span className="ml-3 whitespace-nowrap">English</span></button> )}</Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

// --- Komponen Navigasi ---
const NavItem: FC<NavItemProps> = ({ to, text, end }) => (
    <li>
        <NavLink 
            to={to} 
            end={end} 
            className={({ isActive }) => 
               `whitespace-nowrap text-white font-medium tracking-wide py-2 relative transition-colors duration-300 group-hover:text-white/70 hover:!text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-emerald-300 after:bottom-0 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left ${isActive ? 'after:scale-x-100 after:origin-bottom-left !text-white' : ''}`
            }
        >
            {text}
        </NavLink>
    </li>
);

const MobileNavItem: FC<MobileNavItemProps> = ({ to, text, end, onClick }) => (<li><NavLink to={to} end={end} onClick={onClick} className={({ isActive }) => `block w-full text-center text-lg py-3 rounded-md transition-colors duration-200 ${isActive ? 'bg-emerald-500 text-white font-semibold' : 'text-gray-300 hover:bg-green-800/50 hover:text-white'}`}>{text}</NavLink></li>);

// --- Komponen Utama Navbar ---
const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const navLinkData: NavLinkItem[] = [
    { to: "/", textKey: 'home', end: true }, { to: "/plants", textKey: 'plants' }, { to: "/articles", textKey: 'articles' },
    { to: "/events", textKey: 'events' }, { to: "/about", textKey: 'about' },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="flex items-center justify-between px-6 lg:px-12 py-3 bg-green-900/80 backdrop-blur-md border-b border-white/10 shadow-lg lg:grid lg:grid-cols-3">
        <div className="lg:justify-self-start">
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-white transition-transform duration-300 ease-in-out hover:scale-105">
            🌿 {t('brand')}
          </Link>
        </div>
        <div className="hidden lg:flex lg:justify-self-center">
          <ul className="flex items-center gap-8 group">
            {navLinkData.map(link => (
              <NavItem key={link.to} to={link.to} text={t(link.textKey)} end={link.end} />
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2 lg:justify-self-end">
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 focus:outline-none rounded-md hover:bg-white/10" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>
      <Transition show={isMenuOpen} as="div" className="lg:hidden absolute top-full left-0 w-full bg-green-900/95 backdrop-blur-md shadow-xl" enter="transition-transform ease-out duration-300" enterFrom="-translate-y-4 opacity-0" enterTo="translate-y-0 opacity-100" leave="transition-transform ease-in duration-200" leaveFrom="translate-y-0 opacity-100" leaveTo="-translate-y-4 opacity-0">
        <ul className="flex flex-col p-4 space-y-2">
          {navLinkData.map(link => (
            <MobileNavItem key={link.to} to={link.to} text={t(link.textKey)} end={link.end} onClick={() => setIsMenuOpen(false)} />
          ))}
          <div className="border-t border-white/10 mt-4 pt-2 flex justify-center">
             <LanguageSwitcher displayType="inline" />
          </div>
        </ul>
      </Transition>
    </header>
  );
};

export default Navbar;
