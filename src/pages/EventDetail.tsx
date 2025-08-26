import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { events } from '../data/events'; // Sesuaikan path
import { ArrowLeft, Calendar, Clock, MapPin, User } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const event = events.find(e => e.id === parseInt(id || ''));

  if (!event) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Event tidak ditemukan</h2>
        <Link to="/events" className="text-green-700 mt-4 inline-block">Kembali ke daftar event</Link>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Tombol Kembali */}
        <Link to="/events" className="inline-flex items-center gap-2 text-green-800 font-semibold hover:underline mb-8">
          <ArrowLeft size={20} />
          {t('eventPage.detail.backLink')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          
          {/* Kolom Kiri: Konten Utama */}
          <div className="lg:col-span-2">
            {/* Gambar Event (Mobile) */}
            <img src={event.imageUrl} alt={event.title} className="w-full h-64 object-cover rounded-2xl shadow-lg mb-6 lg:hidden" />
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{event.title}</h1>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-4">{t('eventPage.detail.descriptionTitle')}</h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{event.description}</p>
          </div>

          {/* Kolom Kanan: Info & Pendaftaran */}
          <div className="lg:col-span-1 mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-24">
              {/* Gambar Event (Desktop) */}
              <img src={event.imageUrl} alt={event.title} className="hidden lg:block w-full h-56 object-cover rounded-2xl shadow-lg mb-6" />

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="text-green-700 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-800">{t('eventPage.detail.dateLabel')}</h3>
                      <p className="text-gray-600">{event.displayDate}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="text-green-700 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-800">{t('eventPage.detail.timeLabel')}</h3>
                      <p className="text-gray-600">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-green-700 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-800">{t('eventPage.detail.locationLabel')}</h3>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-3 border-t border-gray-200 pt-4">
                    <User className="text-green-700 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-800">{t('eventPage.detail.organizerLabel')}</h3>
                      <p className="text-gray-600">{event.organizer}</p>
                    </div>
                  </div>
                </div>
                <a href={event.url || '#'} target="_blank" rel="noopener noreferrer" className="mt-6 w-full text-center inline-block bg-green-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300">
                  {t('eventPage.registerButton')}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventDetail;
