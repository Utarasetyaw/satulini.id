import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import data and types
import { articles } from '../data/articles';
import { events } from '../data/events';
import type { Article, Event, FeedItem } from '../types';

// Import components
import ArticleCard from '../components/ArticleCard';
import EventCard from '../components/EventCard';
import SideAd from '../components/SideAd';
import InFeedAd from '../components/InFeedAd';

// --- Mendeklarasikan Window untuk AdSense ---
declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[];
  }
}

// --- Komponen Lokal AdBanner ---
const AdBanner: React.FC = () => {
  React.useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense script not loaded:", e);
    }
  }, []);

  return (
    <div className="w-full my-8 text-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '90px' }}
        data-ad-client="ca-pub-7008233253543982"
        data-ad-slot="1254649439" // Ganti dengan ID unit iklan banner Anda
      ></ins>
    </div>
  );
};

// --- Pembagian Data ---
const featuredArticle = articles[0];
const secondaryArticles = articles.slice(1, 3);
const topHeadlines = articles.slice(3, 8);
const articlesForFeed = articles.slice(3);

// --- Komponen Lokal SidebarLink ---
const SidebarLink: React.FC<{ article: Article }> = ({ article }) => (
  <Link to={`/articles/${article.id}`} className="font-semibold text-gray-800 py-3 border-b border-gray-200 block transition-colors duration-200 hover:text-green-800">
    {article.title}
  </Link>
);

// --- Komponen Utama Halaman Home ---
const Home: React.FC = () => {
  const { t } = useTranslation();
  
  // Menggabungkan semua konten secara dinamis
  const contentFeed: FeedItem[] = [];

  const specialContent: (Event & { type: 'event' })[] = [
    ...events.map(event => ({ ...event, type: "event" as const })),
  ].sort(() => 0.5 - Math.random());

  let specialContentIndex = 0;
  for (let i = 0; i < articlesForFeed.length; i++) {
    contentFeed.push({ ...articlesForFeed[i], type: 'article' });
    if ((i + 1) % 3 === 0 && specialContentIndex < specialContent.length) {
      contentFeed.push(specialContent[specialContentIndex]);
      specialContentIndex++;
    }
  }

  interface AdPlaceholder { type: 'ad'; id: string; }
  type FeedUnion = (Article & { type: 'article' }) | (Event & { type: 'event' }) | AdPlaceholder;

  const finalFeed: FeedUnion[] = [];
  let adCount = 0;
  contentFeed.forEach((item) => {
    finalFeed.push(item as FeedUnion);
    if ((finalFeed.length % 3 === 0) && adCount < 2) {
      finalFeed.push({ type: 'ad', id: `in-feed-ad-${adCount}` });
      adCount++;
    }
  });

  return (
    <div className="relative w-full bg-stone-50">
      <SideAd position="left" />
      <SideAd position="right" />
      <AdBanner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8">
          
          <main className="lg:col-span-2">
            <section>
              <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="w-full h-auto mb-4 rounded-md" />
              <div className="text-green-800 font-bold uppercase text-sm tracking-wider">{featuredArticle.category}</div>
              <h2>
                <Link to={`/articles/${featuredArticle.id}`} className="text-3xl lg:text-4xl font-bold text-gray-900 my-2 block hover:underline">
                  {featuredArticle.title}
                </Link>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">{featuredArticle.excerpt}</p>
            </section>
            
            <hr className="my-10 border-gray-200" />

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryArticles.map(article => (
                // PERBAIKAN: Mengirim prop 'article' sebagai satu objek
                <ArticleCard
                  key={`article-${article.id}`}
                  article={article}
                />
              ))}
            </section>
          </main>

          <aside className="mt-12 lg:mt-0 lg:pl-8 lg:border-l lg:border-gray-200">
            <h3 className="text-lg font-bold uppercase text-green-800 border-b-2 border-green-800 pb-2 mb-6">
              {t('homePage.topHeadlines', 'Top Headlines')}
            </h3>
            <div className="flex flex-col">
              {topHeadlines.map(article => <SidebarLink key={`headline-${article.id}`} article={article} />)}
            </div>
            <AdBanner />
          </aside>
        </div>
      </div>

      {finalFeed.length > 0 && (
        <section className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
              {t('homePage.moreForYou', 'More For You')} 🌿
            </h2>
            <div className="grid grid-cols-1 gap-10">
              {finalFeed.map((item) => {
                switch (item.type) {
                  case 'article':
                    // PERBAIKAN: Mengirim prop 'article' sebagai satu objek
                    return <ArticleCard key={`article-${item.id}`} article={item} layout="horizontal" />;
                  case 'event':
                    // PERBAIKAN: Mengirim prop 'event' sebagai satu objek
                    return <EventCard key={`event-${item.id}`} event={item} />;
                  case 'ad':
                    return <InFeedAd key={item.id} />;
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
