import React from 'react';
import { events } from '../data/events'; // Mengambil data dari file events
import EventCard from '../components/EventCard'; // Menggunakan kembali komponen EventCard

const Event: React.FC = () => {
  // Jika tidak ada data event, tampilkan pesan
  if (!events || events.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Event Mendatang</h2>
        <p className="text-lg text-gray-500">Belum ada event yang dijadwalkan. Silakan cek kembali nanti!</p>
      </div>
    );
  }

  // Pisahkan event pertama sebagai 'featured' dan sisanya sebagai 'other'
  const featuredEvent = events[0];
  const otherEvents = events.slice(1);

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header Halaman */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4">
            Event & Workshop
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ikuti berbagai acara menarik kami, mulai dari pameran hingga workshop untuk memperdalam pengetahuan Anda tentang tanaman.
          </p>
        </div>

        {/* --- Event Unggulan (Featured Event) --- */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:grid md:grid-cols-2 md:gap-8 items-center">
            <div className="md:col-span-1">
              <img 
                src={featuredEvent.imageUrl} 
                alt={featuredEvent.title} 
                className="w-full h-64 md:h-full object-cover" 
              />
            </div>
            <div className="md:col-span-1 p-8">
              <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                EVENT TERDEKAT
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {featuredEvent.title}
              </h3>
              <div className="space-y-3 text-gray-600 mb-6">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>{featuredEvent.date}</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>{featuredEvent.location}</span>
                </p>
              </div>
              <a href="#" className="inline-block bg-green-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300">
                Daftar Sekarang
              </a>
            </div>
          </div>
        </section>

        {/* --- Event Lainnya --- */}
        {otherEvents.length > 0 && (
          <section>
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Event Lainnya
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}
        
      </div>
    </div>
  );
};

export default Event;