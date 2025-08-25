import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Konten Utama Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Kolom 1: Tentang Situs (dibuat lebih lebar) */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-white">🌿 Portal Tanaman</h3>
            <p className="text-gray-400 leading-relaxed">
              Sumber informasi terlengkap seputar dunia tanaman hias, dari perawatan hingga inspirasi dekorasi urban jungle.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Link Navigasi */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">Jelajahi</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/articles" className="hover:text-white transition-colors duration-300">Artikel</Link></li>
              <li><Link to="/plants" className="hover:text-white transition-colors duration-300">Galeri Tanaman</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors duration-300">Event</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Link Bantuan */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">Dukungan</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors duration-300">FAQ</Link></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Kontak Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Kolom 4: Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">Langganan Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Dapatkan tips dan berita terbaru langsung ke inbox Anda.</p>
            <form className="flex mt-2">
              <input 
                type="email" 
                placeholder="Email Anda" 
                required 
                className="w-full bg-green-800 border border-green-700 text-white px-4 py-2 rounded-l-md 
                           focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
              />
              <button 
                type="submit"
                className="bg-white text-green-900 font-bold px-4 py-2 rounded-r-md
                           hover:bg-stone-200 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bagian Copyright */}
      <div className="bg-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Portal Tanaman. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;