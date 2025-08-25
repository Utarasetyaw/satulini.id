import React, { useState, useMemo } from 'react';
import { plants } from '../data/plants';
import PlantCard from '../components/PlantCard';

const Plant: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlants = useMemo(() => {
    if (!searchTerm.trim()) {
      return plants;
    }
    const lowercasedFilter = searchTerm.toLowerCase();
    return plants.filter(plant =>
      plant.name.toLowerCase().includes(lowercasedFilter) ||
      plant.scientificName.toLowerCase().includes(lowercasedFilter)
    );
  }, [searchTerm]);

  return (
    // `.page-container` -> `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Header Halaman */}
      {/* `.page-header` -> `text-center mb-12` */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4">
          Galeri Tanaman
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Jelajahi berbagai jenis tanaman populer untuk mempercantik rumah Anda. Gunakan pencarian untuk menemukan tanaman spesifik.
        </p>
      </div>
      
      {/* Fitur Pencarian */}
      {/* `.search-bar-container` & `.search-bar` */}
      <div className="mb-12 flex justify-center">
        <input
          type="text"
          placeholder="Cari nama tanaman (e.g., Monstera)..."
          className="w-full max-w-lg py-3 px-6 text-base border border-gray-300 rounded-full shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                     transition-shadow duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid Galeri Tanaman */}
      {filteredPlants.length > 0 ? (
        // `.plants-grid` -> grid classes responsif
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      ) : (
        // `.no-results`
        <p className="text-center text-gray-500 text-lg py-16">
          Oops! Tanaman dengan nama "{searchTerm}" tidak ditemukan.
        </p>
      )}
    </div>
  );
};

export default Plant;