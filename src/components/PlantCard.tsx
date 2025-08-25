import React from 'react';
import type { Plant } from '../types';
// Tidak perlu import './PlantCard.css' lagi

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden 
                   transition-all duration-300 ease-in-out 
                   hover:shadow-xl hover:-translate-y-1 group">
      
      <div className="h-64 overflow-hidden">
        <img 
          src={plant.imageUrl} 
          alt={plant.name} 
          className="w-full h-full object-cover 
                     transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          {plant.name}
        </h3>
        <p className="text-sm text-gray-500 italic">
          {plant.scientificName}
        </p>
      </div>
    </div>
  );
};

export default PlantCard;