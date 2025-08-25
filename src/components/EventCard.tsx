import React from 'react';
import type { Event } from '../types';
// Tidak perlu import './EventCard.css' lagi

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden text-center
                   transition-all duration-300 ease-in-out 
                   hover:shadow-lg hover:-translate-y-1">
      
      <img 
        src={event.imageUrl} 
        alt={event.title} 
        className="w-full h-40 object-cover" 
      />
      
      <div className="p-6">
        <div className="inline-block bg-green-800 text-white text-xs font-bold px-3 py-1 rounded-md mb-3">
          {event.date}
        </div>
        
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          {event.title}
        </h4>
        
        <p className="text-sm text-gray-500">
          {event.location}
        </p>
      </div>
    </div>
  );
};

export default EventCard;