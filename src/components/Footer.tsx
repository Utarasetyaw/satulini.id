import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube } from 'lucide-react'; // Mengganti Facebook dengan Youtube/TikTok

// Impor logo dari path lokal
import logo from '../assets/Logo.png'; 

// --- Data untuk Link Footer Sederhana ---
const footerLinks = [
    { name: 'Help Center', to: '/help' },
    { name: 'Community', to: '/community' },
];

const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/satulini.id', icon: <Instagram size={22} /> },
    { name: 'Twitter', href: 'https://twitter.com/satulini.id', icon: <Twitter size={22} /> },
    { name: 'TikTok', href: 'https://tiktok.com/@satulini.id', icon: <Youtube size={22} /> }, // Lucide tidak punya ikon TikTok, kita pakai Youtube sebagai placeholder
];

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Kolom Kiri: Tentang Situs & Social Media */}
          <div className="space-y-6">
            <Link to="/">
              <img src={logo} alt="Satulini Logo" className="h-8 w-auto" />
            </Link>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              The all-in-one decentralized platform for your business, personal brand, and investments.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map(social => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  aria-label={social.name} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Link Bantuan & Komunitas */}
          <div className="flex-shrink-0">
            <h4 className="font-semibold text-gray-900 mb-4 tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.to} className="text-gray-600 hover:text-purple-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bagian Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Satulini. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;