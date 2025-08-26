import { Link } from 'react-router-dom';
import type { FC } from 'react';
import type { Plant } from '../data/plants'; // Sesuaikan path

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: FC<PlantCardProps> = ({ plant }) => {
  return (
    <Link to={`/plants/${plant.id}`} className="block bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <img src={plant.imageUrl} alt={plant.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">{plant.name}</h3>
        <p className="text-gray-500 text-sm italic">{plant.scientificName}</p>
      </div>
    </Link>
  );
};

export default PlantCard;
