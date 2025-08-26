import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Twitter } from 'lucide-react'; 

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-green-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Konten Utama Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Kolom 1: Tentang Situs */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-white">🌿 {t('brand')}</h3>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.description')}
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
            <h4 className="font-bold text-white mb-6 tracking-wider">{t('footer.explore')}</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white transition-colors duration-300">{t('home')}</Link></li>
              <li><Link to="/articles" className="hover:text-white transition-colors duration-300">{t('articles')}</Link></li>
              <li><Link to="/plants" className="hover:text-white transition-colors duration-300">{t('footer.gallery')}</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors duration-300">{t('events')}</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Link Bantuan */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">{t('footer.support')}</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-white transition-colors duration-300">{t('about')}</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors duration-300">{t('faq')}</Link></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">{t('footer.contact')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">{t('footer.privacy')}</a></li>
            </ul>
          </div>

          {/* Kolom 4: Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wider">{t('footer.newsletterTitle')}</h4>
            <p className="text-gray-400 mb-4 text-sm">{t('footer.newsletterDescription')}</p>
            <form className="flex mt-2">
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')}
                required 
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-2 rounded-l-md 
                           focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
              />
              <button 
                type="submit"
                className="bg-green-600 text-white font-bold px-4 py-2 rounded-r-md
                           hover:bg-green-500 transition-colors duration-300 whitespace-nowrap"
              >
                {t('footer.subscribeButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bagian Copyright */}
      <div className="bg-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {t('brand')}. {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
