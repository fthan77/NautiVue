import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Badge from './Badge';
import RatingStars from './RatingStars';

export default function DestinationCard({ destination }) {
  const { id, name, location, heroImage, description, difficulty, category, rating, reviewCount } = destination;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group h-full"
    >
      <Link to={`/destination/${id}`} className="block h-full">
        <div className="bg-ocean-800 rounded-2xl overflow-hidden border border-ocean-700/50 hover:border-teal-500/30 transition-colors duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative h-48 overflow-hidden shrink-0">
            <img
              src={heroImage}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ocean-900/80 via-transparent to-transparent" />
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge label={difficulty} variant="difficulty" />
              <Badge label={category} variant="category" />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-1 text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-teal-300 transition-colors">
              {name}
            </h3>
            <div className="flex items-center justify-center sm:justify-start gap-1 text-ocean-400 text-sm mb-2">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{location}</span>
            </div>
            <p className="text-ocean-300 text-sm line-clamp-2 mb-3 flex-1">
              {description}
            </p>
            <div className="flex justify-center sm:justify-start">
              <RatingStars rating={rating} reviewCount={reviewCount} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
