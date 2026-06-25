import { Search } from 'lucide-react';

export default function SearchInput({ value, onChange, placeholder = 'Search destinations...' }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 bg-ocean-800 border border-ocean-700/50 rounded-xl text-white text-sm placeholder-ocean-400 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30 transition-all"
      />
    </div>
  );
}
