import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { events } from '../data/events'; // Sesuaikan path jika perlu
import EventCard from '../components/EventCard'; // Sesuaikan path jika perlu
import { Calendar, MapPin } from 'lucide-react';

const EventPage: FC = () => {
  const { t } = useTranslation();

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalisasi ke awal hari

  const upcomingEvents = events.filter(event => new Date(event.date) >= today).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastEvents = events.filter(event => new Date(event.date) < today).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : null;
  const otherUpcomingEvents = upcomingEvents.slice(1);

  if (events.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">{t('eventPage.title')}</h2>
        <p className="text-lg text-gray-500">{t('eventPage.noEvents')}</p>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Halaman */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4">
            {t('eventPage.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('eventPage.description')}
          </p>
        </div>

        {/* --- Event Unggulan (Featured Event) --- */}
        {featuredEvent && (
          <section className="mb-20">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:col-span-1">
                <img src={featuredEvent.imageUrl} alt={featuredEvent.title} className="w-full h-64 md:h-full object-cover" />
              </div>
              <div className="md:col-span-1 p-8">
                <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {t('eventPage.featuredBadge')}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{featuredEvent.title}</h3>
                <div className="space-y-3 text-gray-600 mb-6">
                  <p className="flex items-center"><Calendar size={20} className="mr-2 text-green-700" /> {featuredEvent.displayDate}</p>
                  <p className="flex items-center"><MapPin size={20} className="mr-2 text-green-700" /> {featuredEvent.location}</p>
                </div>
                <a href={featuredEvent.url || '#'} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300">
                  {t('eventPage.registerButton')}
                </a>
              </div>
            </div>
          </section>
        )}

        {/* --- Event Mendatang Lainnya --- */}
        {otherUpcomingEvents.length > 0 && (
          <section className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">{t('eventPage.otherEvents')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherUpcomingEvents.map(event => <EventCard key={event.id} event={event} />)}
            </div>
          </section>
        )}

        {/* --- Event Lampau --- */}
        {pastEvents.length > 0 && (
          <section>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">{t('eventPage.pastEvents')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map(event => <EventCard key={event.id} event={event} isPast />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default EventPage;
