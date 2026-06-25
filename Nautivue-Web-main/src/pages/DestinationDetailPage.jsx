import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin, ArrowLeft, Calendar, Thermometer, Eye, DollarSign,
  CheckCircle, Waves, Fish, Ship, Camera, Anchor, Building,
  Utensils, Package, Compass, Leaf
} from 'lucide-react';
import Badge from '../components/ui/Badge';
import RatingStars from '../components/ui/RatingStars';
import Gallery from '../components/ui/Gallery';
import Button from '../components/ui/Button';
import { destinations } from '../data/destinations';

const activityIcons = {
  'scuba-diving': Waves,
  'snorkeling': Fish,
  'kayaking': Ship,
  'island-hopping': Compass,
  'surfing': Waves,
  'photography': Camera,
};

const facilityIcons = {
  'dive-center': Anchor,
  'resort': Building,
  'restaurant': Utensils,
  'boat-rental': Ship,
  'gear-rental': Package,
  'parking': MapPin,
  'wifi': Compass,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function DestinationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <Compass className="w-16 h-16 text-ocean-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Destination Not Found</h2>
          <p className="text-ocean-400 mb-6 max-w-md mx-auto">
            The destination you're looking for doesn't exist or has been removed.
          </p>
          <Button to="/recommendation">Browse Destinations</Button>
        </div>
      </div>
    );
  }

  const {
    name, location, coordinates, heroImage, longDescription,
    gallery, category, difficulty, rating, reviewCount, activities,
    facilities, marineEnvironment, highlights, estimatedCost
  } = destination;

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] min-h-100">
        <img
          src={heroImage}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ocean-900 via-ocean-900/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-ocean-900/60 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-4 left-4 z-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 bg-ocean-900/60 hover:bg-ocean-900/80 backdrop-blur-sm rounded-xl text-white text-sm font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge label={difficulty} variant="difficulty" />
                <Badge label={category} variant="category" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{name}</h1>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1.5 text-ocean-200">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
                <RatingStars rating={rating} reviewCount={reviewCount} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Quick Info Bar */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { icon: DollarSign, label: 'Estimated Cost', value: estimatedCost },
            { icon: Calendar, label: 'Best Season', value: marineEnvironment.bestSeason },
            { icon: Thermometer, label: 'Water Temp', value: marineEnvironment.waterTemperature },
            { icon: Eye, label: 'Visibility', value: marineEnvironment.visibility },
          ].map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="bg-ocean-800/50 border border-ocean-700/50 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-5 h-5 text-teal-400" />
                <span className="text-xs text-ocean-400 uppercase tracking-wider">{label}</span>
              </div>
              <p className="text-white font-medium text-sm">{value}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">About This Destination</h2>
              <div className="text-ocean-200 leading-relaxed space-y-4">
                {longDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </motion.section>

            {/* Highlights */}
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeUp} className="text-2xl font-bold mb-4">
                Highlights
              </motion.h2>
              <ul className="space-y-3">
                {highlights.map((highlight, i) => (
                  <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-ocean-200">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Activities & Facilities */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h3 variants={fadeUp} className="text-xl font-bold mb-4">
                  Activities
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {activities.map((activity) => {
                    const Icon = activityIcons[activity] || Waves;
                    return (
                      <motion.div
                        key={activity}
                        variants={fadeUp}
                        className="flex items-center gap-2 px-3 py-2 bg-ocean-800 border border-ocean-700/50 rounded-lg"
                      >
                        <Icon className="w-4 h-4 text-teal-400" />
                        <span className="text-sm text-ocean-200 capitalize">
                          {activity.replace('-', ' ')}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>

              <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h3 variants={fadeUp} className="text-xl font-bold mb-4">
                  Facilities
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {facilities.map((facility) => {
                    const Icon = facilityIcons[facility] || Anchor;
                    return (
                      <motion.div
                        key={facility}
                        variants={fadeUp}
                        className="flex items-center gap-2 px-3 py-2 bg-ocean-800 border border-ocean-700/50 rounded-lg"
                      >
                        <Icon className="w-4 h-4 text-teal-400" />
                        <span className="text-sm text-ocean-200 capitalize">
                          {facility.replace('-', ' ')}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>
            </div>

            {/* Gallery */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
              <Gallery images={gallery} alt={name} />
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Marine Environment Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-linear-to-br from-ocean-800 to-ocean-700/50 border border-ocean-600/30 rounded-2xl p-6 lg:sticky lg:top-24"
            >
              <div className="flex items-center gap-2 mb-5">
                <Leaf className="w-6 h-6 text-teal-400" />
                <h3 className="text-lg font-bold">Marine Environment</h3>
              </div>

              {/* Notable Species */}
              <div className="mb-5">
                <h4 className="text-xs text-ocean-400 uppercase tracking-wider mb-3 font-medium">
                  Notable Species
                </h4>
                <div className="flex flex-wrap gap-2">
                  {marineEnvironment.notableSpecies.map((species) => (
                    <span
                      key={species}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-lg text-xs text-teal-300"
                    >
                      <Fish className="w-3 h-3" />
                      {species}
                    </span>
                  ))}
                </div>
              </div>

              {/* Coral Types */}
              <div className="mb-5">
                <h4 className="text-xs text-ocean-400 uppercase tracking-wider mb-3 font-medium">
                  Coral Types
                </h4>
                <div className="flex flex-wrap gap-2">
                  {marineEnvironment.coralTypes.map((coral) => (
                    <span
                      key={coral}
                      className="px-2.5 py-1.5 bg-ocean-600/30 border border-ocean-600/50 rounded-lg text-xs text-ocean-200"
                    >
                      {coral}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3 pt-4 border-t border-ocean-600/30">
                {[
                  { label: 'Visibility', value: marineEnvironment.visibility },
                  { label: 'Water Temp', value: marineEnvironment.waterTemperature },
                  { label: 'Best Season', value: marineEnvironment.bestSeason },
                  { label: 'Coordinates', value: `${coordinates[0].toFixed(4)}, ${coordinates[1].toFixed(4)}` },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-sm text-ocean-400">{label}</span>
                    <span className="text-sm text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6">
                <Button to="/explore" variant="outline" className="w-full justify-center">
                  <MapPin className="w-4 h-4" />
                  View on Map
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
