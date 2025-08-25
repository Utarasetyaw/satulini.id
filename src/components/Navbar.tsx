import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Component for Desktop Navigation Items
const NavItem: React.FC<{ to: string; children: React.ReactNode; end?: boolean }> = ({ to, children, end }) => {
  const baseClasses = "text-white font-medium tracking-wide py-2 relative transition-colors duration-300";
  const desktopHoverClasses = "group-hover:text-white/70 hover:!text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-emerald-300 after:bottom-0 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left";
  
  return (
    <li>
      <NavLink to={to} end={end} className={({ isActive }) => `${baseClasses} ${desktopHoverClasses} ${isActive ? 'after:scale-x-100 after:origin-bottom-left' : ''}`}>
        {children}
      </NavLink>
    </li>
  );
};

// Component for Mobile Navigation Items
const MobileNavItem: React.FC<{ to: string; children: React.ReactNode; end?: boolean; onClick: () => void; }> = ({ to, children, end, onClick }) => {
  return (
    <li>
      <NavLink
        to={to}
        end={end}
        onClick={onClick}
        className={({ isActive }) => `
          block w-full text-center text-lg py-3 rounded-md transition-colors duration-200
          ${isActive 
            ? 'bg-green-700 text-white font-semibold' 
            : 'text-gray-300 hover:bg-green-800/50 hover:text-white'
          }
        `}
      >
        {children}
      </NavLink>
    </li>
  );
};


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      <nav 
        className="sticky top-0 z-50 items-center px-6 lg:px-12 py-4
                   border-b border-white/10 shadow-lg
                   bg-green-900/80 backdrop-blur-md
                   flex justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]"
      >
        <Link to="/" className="lg:justify-self-start text-2xl font-bold text-white transition-transform duration-300 ease-in-out hover:scale-105">
          🌿 Portal Tanaman
        </Link>
        
        <ul className="hidden lg:flex justify-self-center gap-10 group">
          <NavItem to="/" end>Home</NavItem>
          <NavItem to="/plants">Tanaman</NavItem>
          <NavItem to="/articles">Artikel</NavItem>
          <NavItem to="/events">Event</NavItem>
          <NavItem to="/faq">FAQ</NavItem>
          <NavItem to="/about">About Us</NavItem>
        </ul>

        <div className="lg:hidden justify-self-end">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none p-2">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </nav>

      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-green-900/95 backdrop-blur-md
                    transition-all duration-500 ease-in-out
                    ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <ul className="flex flex-col p-4 space-y-2">
            <MobileNavItem to="/" end onClick={() => setIsMenuOpen(false)}>Home</MobileNavItem>
            <MobileNavItem to="/plants" onClick={() => setIsMenuOpen(false)}>Tanaman</MobileNavItem>
            <MobileNavItem to="/articles" onClick={() => setIsMenuOpen(false)}>Artikel</MobileNavItem>
            <MobileNavItem to="/events" onClick={() => setIsMenuOpen(false)}>Event</MobileNavItem>
            <MobileNavItem to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</MobileNavItem>
            <MobileNavItem to="/about" onClick={() => setIsMenuOpen(false)}>About Us</MobileNavItem>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;