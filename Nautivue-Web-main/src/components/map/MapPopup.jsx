import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import Badge from '../ui/Badge';
import RatingStars from '../ui/RatingStars';

export default function MapPopup({ destination }) {
  const { id, name, location, heroImage, description, difficulty, category, rating } = destination;

  return (
    <div className="w-64">
      <div className="relative h-32 -mx-3 -mt-3 mb-3 rounded-t-lg overflow-hidden">
        <img
          src={heroImage}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ocean-900/60 to-transparent" />
        <div className="absolute top-2 left-2 flex gap-1">
          <Badge label={difficulty} variant="difficulty" />
          <Badge label={category} variant="category" />
        </div>
      </div>
      <h3 className="text-base font-semibold text-white mb-1">{name}</h3>
      <div className="flex items-center gap-1 text-ocean-400 text-xs mb-2">
        <MapPin className="w-3 h-3" />
        <span>{location}</span>
      </div>
      <p className="text-ocean-300 text-xs line-clamp-2 mb-2">{description}</p>
      <div className="mb-3">
        <RatingStars rating={rating} />
      </div>
      <Link
        to={`/destination/${id}`}
        className="flex items-center justify-center gap-1.5 w-full px-3 py-2 bg-teal-500 hover:bg-teal-400 text-ocean-900 text-sm font-semibold rounded-lg transition-colors"
      >
        View Details
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
