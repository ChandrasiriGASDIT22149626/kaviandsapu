import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Image as ImageIcon } from 'lucide-react';
import { Lightbox } from './Lightbox'; // Ensure this import path is correct for your project

// Added 'image' property to link each milestone to a local file in the public folder
const milestones = [
  {
    date: 'The Beginning',
    title: 'The Day We Met',
    desc: 'Two strangers crossing paths, not knowing it would change everything.',
    image: '/photo5.jpeg' 
  },
  {
    date: 'First Sparks',
    title: 'Our First Date',
    desc: 'Nervous laughs, endless talking, and a connection that felt like home.',
    image: '/photo2.jpeg'
  },
  {
    date: 'Adventures',
    title: 'Our First Trip',
    desc: 'Exploring new places and making memories that will last a lifetime.',
    image: '/photo3.jpeg'
  },
  {
    date: 'Always',
    title: 'Today & Forever',
    desc: "Every day is a new adventure, and I wouldn't want it with anyone else.",
    image: '/photo4.jpeg'
  }
];

export function Timeline() {
  // State to handle the lightbox image reveal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    // Updated to match the light pink theme
    <section className="min-h-screen flex flex-col items-center justify-center snap-start py-20 px-6 relative z-10 bg-pink-50/50">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-cursive text-5xl md:text-7xl text-pink-600 mb-20 text-center drop-shadow-sm"
      >
        Our Journey Together
      </motion.h2>

      <div className="max-w-4xl w-full relative">
        {/* Vertical Line - Light Theme */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-200/50 via-pink-300 to-pink-200/50 md:-translate-x-1/2 rounded-full" />

        <div className="space-y-16">
          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot - Light Theme */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white border-4 border-pink-400 rounded-full flex items-center justify-center md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(244,114,182,0.4)]">
                  <Heart size={20} className="text-pink-500 fill-pink-500" />
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  
                  {/* Added onClick and cursor-pointer to make the whole card clickable */}
                  <div 
                    onClick={() => setSelectedImage(item.image)}
                    className="bg-white/90 backdrop-blur-md border-2 border-pink-100 p-8 rounded-3xl hover:bg-pink-50 hover:border-pink-300 hover:-translate-y-1 transition-all shadow-xl cursor-pointer group relative overflow-hidden"
                  >
                    <span className="text-pink-400 font-semibold text-sm tracking-widest uppercase">
                      {item.date}
                    </span>
                    <h3 className="font-cursive text-4xl text-pink-600 mt-3 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-pink-900/70 leading-relaxed text-lg font-light">
                      {item.desc}
                    </p>

                    {/* Small hint icon that appears on hover to show it's a clickable image */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-pink-300">
                       <ImageIcon size={24} />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}