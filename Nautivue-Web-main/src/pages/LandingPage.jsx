import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, TrendingUp, BookOpen, ArrowRight, Anchor, Waves, Users, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import DestinationCard from '../components/ui/DestinationCard';
import { destinations } from '../data/destinations';

const features = [
  {
    icon: Map,
    title: 'Interactive Map',
    description: 'Explore underwater destinations across Indonesia through our interactive GIS map with real-time location markers.',
  },
  {
    icon: TrendingUp,
    title: 'Smart Recommendations',
    description: 'Get personalized destination suggestions based on your preferences, skill level, and interests.',
  },
  {
    icon: BookOpen,
    title: 'Detailed Guides',
    description: 'Access comprehensive information about each destination including marine life, facilities, and conditions.',
  },
];

const stats = [
  { icon: Anchor, value: '10+', label: 'Destinations' },
  { icon: Waves, value: '50+', label: 'Dive Sites' },
  { icon: Users, value: '1,000+', label: 'Happy Divers' },
  { icon: Star, value: '4.8', label: 'Average Rating' },
];

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function LandingPage() {
  const featuredDestinations = [...destinations]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&h=900&fit=crop"
            alt="Underwater scenery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-ocean-900/95 via-ocean-900/80 to-ocean-900/40" />
          <div className="absolute inset-0 bg-linear-to-t from-ocean-900 via-transparent to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-teal-400" />
              <span className="text-teal-400 text-sm font-medium tracking-wider uppercase">
                Explore the Deep
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover Indonesia's{' '}
              <span className="text-teal-400">Underwater Paradise</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-ocean-200 mb-8 leading-relaxed max-w-xl">
              NautiVue is your interactive guide to the most breathtaking underwater destinations
              across the Indonesian archipelago. Dive into crystal-clear waters, explore vibrant coral
              reefs, and encounter magnificent marine life.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button to="/explore" size="lg">
                <Map className="w-5 h-5" />
                Explore Map
              </Button>
              <Button to="/recommendation" variant="outline" size="lg">
                Browse Destinations
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - full width background */}
      <section className="w-full py-16 bg-ocean-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <motion.div key={label} variants={fadeUp} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-500/10 mb-3 mx-auto">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-sm text-ocean-400">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div variants={fadeUp} className="mb-14">
              <span className="text-teal-400 text-sm font-medium tracking-wider uppercase block mb-3">
                Why NautiVue
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Underwater Exploration Platform
              </h2>
              <p className="text-ocean-300 max-w-2xl mx-auto">
                Everything you need to plan your next underwater adventure in Indonesia,
                from interactive maps to personalized recommendations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-ocean-800/50 border border-ocean-700/50 rounded-2xl p-8 hover:border-teal-500/30 transition-colors duration-300 text-center md:text-left"
                >
                  <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5 mx-auto md:mx-0">
                    <Icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-ocean-300 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations - full width background */}
      <section className="w-full py-20 bg-ocean-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center md:items-end justify-between mb-10 text-center md:text-left gap-4">
              <div>
                <span className="text-teal-400 text-sm font-medium tracking-wider uppercase block mb-3">
                  Top Rated
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Featured Destinations
                </h2>
              </div>
              <Link
                to="/recommendation"
                className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors text-sm"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDestinations.map((dest) => (
                <motion.div key={dest.id} variants={fadeUp} className="flex">
                  <DestinationCard destination={dest} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-linear-to-br from-ocean-700 via-ocean-800 to-ocean-900 border border-ocean-600/30 p-10 sm:p-16 text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <Waves className="w-12 h-12 text-teal-400 mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ready to Explore the Deep?
              </h2>
              <p className="text-ocean-300 max-w-xl mx-auto mb-8">
                Start your underwater adventure today. Discover pristine reefs, swim with manta rays,
                and explore the most biodiverse marine ecosystems on Earth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button to="/explore" size="lg">
                  <Map className="w-5 h-5" />
                  Open Map
                </Button>
                <Button to="/recommendation" variant="secondary" size="lg">
                  Get Recommendations
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
