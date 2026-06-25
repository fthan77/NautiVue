const difficultyColors = {
  beginner: 'bg-seafoam-500/20 text-seafoam-400 border-seafoam-500/30',
  intermediate: 'bg-kelp-500/20 text-kelp-400 border-kelp-500/30',
  advanced: 'bg-abyss-500/20 text-abyss-400 border-abyss-500/30',
};

const categoryColors = {
  diving: 'bg-marine-500/20 text-marine-400 border-marine-500/30',
  snorkeling: 'bg-reef-500/20 text-reef-400 border-reef-500/30',
  'marine-life': 'bg-tide-500/20 text-tide-400 border-tide-500/30',
};

export default function Badge({ label, variant = 'default' }) {
  const colorMap = variant === 'difficulty' ? difficultyColors : variant === 'category' ? categoryColors : {};
  const colors = colorMap[label] || 'bg-ocean-700/50 text-ocean-200 border-ocean-600/50';

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize ${colors}`}
    >
      {label?.replace('-', ' ')}
    </span>
  );
}
