import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery({ images, alt = 'Gallery image' }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-ocean-800">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`${alt} ${activeIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                index === activeIndex
                  ? 'border-teal-400 opacity-100'
                  : 'border-ocean-700/50 opacity-60 hover:opacity-80'
              }`}
            >
              <img
                src={img}
                alt={`${alt} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
