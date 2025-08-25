import React from 'react';

// Import data dan tipe
import { articles } from '../data/articles';
import { events } from '../data/events';
import { reviews } from '../data/reviews';
import type { Article, Event, ProductReview, Ad, FeedItem } from '../types';

// Import komponen (pastikan komponen anak juga sudah diubah ke Tailwind)
import ArticleCard from '../components/ArticleCard';
import EventCard from '../components/EventCard';
import ReviewCard from '../components/ReviewCard';
import SideAd from '../components/SideAd';
import InFeedAd from '../components/InFeedAd';

// --- Pembagian Data ---
const featuredArticle = articles[0];
const secondaryArticles = articles.slice(1, 3);
const topHeadlines = articles.slice(3, 8);
const articlesForFeed = articles.slice(3);

// --- Komponen Lokal ---
const SidebarLink: React.FC<{ article: Article }> = ({ article }) => (
  <a href="#" className="font-semibold text-gray-800 py-3 border-b border-gray-200 block transition-colors duration-200 hover:text-green-800">
    {article.title}
  </a>
);

const AdBanner: React.FC<{ type: 'top' | 'sidebar' }> = ({ type }) => {
  const isTopBanner = type === 'top';
  const className = `
    bg-stone-200 border border-dashed border-gray-400 flex items-center justify-center text-gray-500 font-bold rounded-md
    ${isTopBanner ? 'w-full h-24 my-8' : 'w-full h-64 mt-8'}
  `;
  return <div className={className}>Space for Advertisement</div>;
};


// --- Komponen Utama Halaman Home ---
const Home: React.FC = () => {
  
  // Menggabungkan semua konten secara dinamis
  const contentFeed: FeedItem[] = [];

  const specialContent: (Event | ProductReview | Ad)[] = [
    ...(events),
    ...(reviews),
    { type: "ad" as const, id: 'in-feed-ad-1' },
    { type: "ad" as const, id: 'in-feed-ad-2' },
  ].sort(() => 0.5 - Math.random());

  let specialContentIndex = 0;
  for (let i = 0; i < articlesForFeed.length; i++) {
    contentFeed.push(articlesForFeed[i]);
    if ((i + 1) % 3 === 0 && specialContentIndex < specialContent.length) {
      contentFeed.push(specialContent[specialContentIndex]);
      specialContentIndex++;
    }
  }

  return (
    <div className="relative w-full"> {/* .home-wrapper */}
      <SideAd position="left" />
      <SideAd position="right" />
      <AdBanner type="top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* .page-container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8"> {/* Responsive grid */}
          
          {/* Main Content Column (Left) */}
          <main className="lg:col-span-2">
            <section> {/* .featured-article */}
              <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="w-full h-auto mb-4 rounded-md" />
              <div className="text-green-800 font-bold uppercase text-sm tracking-wider">{featuredArticle.category}</div>
              <h2>
                <a href="#" className="text-3xl lg:text-4xl font-bold text-gray-900 my-2 block hover:underline">
                  {featuredArticle.title}
                </a>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">{featuredArticle.excerpt}</p>
            </section>
            
            <hr className="my-10 border-gray-200" /> {/* .section-divider */}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* .secondary-articles */}
              {secondaryArticles.map(article => (
                <ArticleCard key={`article-${article.id}`} {...article} />
              ))}
            </section>
          </main>

          {/* Sidebar Column (Right) */}
          <aside className="mt-12 lg:mt-0 lg:pl-8 lg:border-l lg:border-gray-200">
            <h3 className="text-lg font-bold uppercase text-green-800 border-b-2 border-green-800 pb-2 mb-6">
              Top Headlines
            </h3>
            <div className="flex flex-col">
              {topHeadlines.map(article => <SidebarLink key={`headline-${article.id}`} article={article} />)}
            </div>
            <AdBanner type="sidebar" />
          </aside>
        </div>
      </div>

      {/* Integrated Content Feed */}
      {contentFeed.length > 0 && (
        <section className="mt-12 pt-8 border-t border-gray-200"> {/* .content-section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
              More For You 🌿
            </h2>
            <div className="grid grid-cols-1 gap-10"> {/* .content-feed */}
              {contentFeed.map((item) => {
                switch (item.type) {
                  case 'article':
                    return <ArticleCard key={`feed-article-${item.id}`} layout="horizontal" {...item} />;
                  case 'event':
                    return <EventCard key={`feed-event-${item.id}`} event={item} />;
                  case 'review':
                    return <ReviewCard key={`feed-review-${item.id}`} review={item} />;
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