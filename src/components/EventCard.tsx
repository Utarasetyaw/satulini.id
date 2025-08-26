import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import type { FC } from 'react';
import type { Event } from '../data/events'; // Sesuaikan path jika perlu
import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  event: Event;
  isPast?: boolean;
}

const EventCard: FC<EventCardProps> = ({ event, isPast = false }) => {
  const { t } = useTranslation();

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col group transition-all duration-300 ${isPast ? 'opacity-70' : 'hover:shadow-xl hover:-translate-y-1'}`}>
      <div className="relative">
        <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
        {isPast && (
          <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
            {t('eventPage.statusFinished')}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 flex-grow">{event.title}</h3>
        <div className="space-y-2 text-gray-600 text-sm mb-4">
          <p className="flex items-center"><Calendar size={16} className="mr-2 text-green-700" /> {event.displayDate}</p>
          <p className="flex items-center"><MapPin size={16} className="mr-2 text-green-700" /> {event.location}</p>
        </div>
        <Link 
          to={`/events/${event.id}`}
          className={`mt-auto inline-block text-center font-bold py-2 px-4 rounded-lg transition-colors duration-300 ${isPast ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-green-100 text-green-800 group-hover:bg-green-700 group-hover:text-white'}`}
        >
          {isPast ? t('eventPage.statusFinished') : t('eventPage.detailsButton')}
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
