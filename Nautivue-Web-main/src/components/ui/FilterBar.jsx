import { motion } from 'framer-motion';
import { Waves, Fish, Anchor, SlidersHorizontal } from 'lucide-react';
import SearchInput from './SearchInput';

const categories = [
  { value: 'all', label: 'All', icon: SlidersHorizontal },
  { value: 'diving', label: 'Diving', icon: Waves },
  { value: 'snorkeling', label: 'Snorkeling', icon: Fish },
  { value: 'marine-life', label: 'Marine Life', icon: Anchor },
];

const difficulties = [
  { value: 'all', label: 'All Levels' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

export default function FilterBar({ filters, onFilterChange }) {
  return (
    <div className="space-y-4">
      {/* Search */}
      <SearchInput
        value={filters.search}
        onChange={(search) => onFilterChange({ ...filters, search })}
        placeholder="Search destinations, locations..."
      />

      {/* Category Filter */}
      <div>
        <label className="text-xs font-medium text-ocean-400 uppercase tracking-wider mb-2 block">
          Category
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map(({ value, label, icon: Icon }) => (
            <motion.button
              key={value}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange({ ...filters, category: value })}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                filters.category === value
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                  : 'bg-ocean-800 text-ocean-300 border border-ocean-700/50 hover:border-ocean-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div>
        <label className="text-xs font-medium text-ocean-400 uppercase tracking-wider mb-2 block">
          Difficulty
        </label>
        <div className="flex flex-wrap gap-2">
          {difficulties.map(({ value, label }) => (
            <motion.button
              key={value}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange({ ...filters, difficulty: value })}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                filters.difficulty === value
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                  : 'bg-ocean-800 text-ocean-300 border border-ocean-700/50 hover:border-ocean-600'
              }`}
            >
              {label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
