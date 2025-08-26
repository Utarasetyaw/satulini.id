import React from 'react';
import type { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    // Menggunakan `h-full` untuk memastikan semua card memiliki tinggi yang sama
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <img 
        src={event.imageUrl} 
        alt={event.title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">
            {event.title}
          </h4>
          <div className="space-y-2 text-gray-500 text-sm">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span>{event.date}</span>
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>{event.location}</span>
            </p>
          </div>
        </div>
        
        {/* Tombol "Daftar Sekarang" */}
        <div className="mt-4">
          <a 
            href={event.url || '#'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block w-full text-center bg-green-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;