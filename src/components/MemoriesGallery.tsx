import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbox } from './Lightbox';

// Update these paths to match the names of the PNG files you put in your public folder
const images = [
  {
    src: '/photo1.jpg',
    alt: 'Forest walk'
  },
  {
    src: '/photo2.jpg',
    alt: 'Beach sunset'
  },
  {
    src: '/photo3.jpg',
    alt: 'Ocean view'
  },
  {
    src: '/photo4.jpg',
    alt: 'Into the woods'
  },
  {
    src: '/photo5.jpg',
    alt: 'Mountain peak'
  },
  {
    src: '/photo6.jpg',
    alt: 'Calm waters'
  }
];

export function MemoriesGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    // Added a subtle light pink background to blend with the rest of the site
    <section className="min-h-screen flex flex-col items-center justify-center snap-start py-20 px-6 relative z-10 bg-pink-50/50">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        // Changed text color to a deeper pink for the light theme
        className="font-cursive text-5xl md:text-7xl text-pink-600 mb-16 text-center drop-shadow-sm"
      >
        Our Beautiful Moments
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
              type: 'spring'
            }}
            // Updated shadows and borders for the light theme
            className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-lg shadow-pink-200/50 border-4 border-white"
            onClick={() => setSelectedImage(img.src)} // Now passes the local image path to the Lightbox
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            
            {/* Softer pink gradient hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-400/40 via-pink-400/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* White/Pink ring on hover */}
            <div className="absolute inset-0 ring-4 ring-pink-300/0 group-hover:ring-pink-300/80 rounded-2xl transition-all duration-300" />
          </motion.div>
        ))}
      </div>

      {/* The Lightbox component handles displaying it full-screen */}
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}