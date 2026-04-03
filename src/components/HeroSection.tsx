import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';

// Custom component for the floating hearts background (Light Theme)
const FloatingHeartsBackground = () => {
  // Softer, lighter pink colors for the hearts
  const heartColors = [
    'text-pink-300 fill-pink-300', 
    'text-rose-300 fill-rose-300', 
    'text-pink-400 fill-pink-400',
    'text-red-300 fill-red-300'
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(25)].map((_, i) => {
        const size = Math.random() * 35 + 10;
        const startX = Math.random() * 100;
        const endX = startX + (Math.random() * 30 - 15);
        const randomColor = heartColors[Math.floor(Math.random() * heartColors.length)];
        
        return (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              y: '100vh', 
              x: `${startX}vw`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              opacity: [0, 0.7, 0], 
              y: '-10vh',
              x: `${endX}vw`,
              rotate: Math.random() * 360
            }}
            transition={{
              duration: Math.random() * 15 + 12,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className={`absolute ${randomColor}`}
            style={{
              filter: `drop-shadow(0 0 8px rgba(244, 114, 182, 0.5))` // Softer shadow for light theme
            }}
          >
            <Heart size={size} />
          </motion.div>
        );
      })}
    </div>
  );
};

export function HeroSection() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    // Updated background to a soft, light pink romantic gradient
    <section className="min-h-screen flex flex-col items-center justify-center snap-start relative z-10 px-6 overflow-hidden bg-pink-50 bg-gradient-to-br from-pink-50 via-pink-100 to-rose-100">
      
      {/* Animated Floating Hearts Background */}
      <FloatingHeartsBackground />

      <AnimatePresence mode="wait">
        {!isClicked ? (
          /* --- INITIAL VIEW: Text & Heart Button --- */
          <motion.div
            key="initial-view"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center relative z-10"
          >
            {/* Deep Pink Text for contrast against light background */}
            <h1 
              className="font-cursive text-6xl md:text-8xl lg:text-9xl text-pink-600 mb-4 tracking-wider drop-shadow-md"
            >
              Hey Baby, I love you
            </h1>

            
            
            <motion.button
              onClick={() => setIsClicked(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group flex flex-col items-center focus:outline-none cursor-pointer"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                className="p-8 rounded-full relative"
              >
                {/* Soft glow behind the main heart */}
                <div className="absolute inset-0 bg-pink-300 rounded-full blur-[30px] opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                
                <Heart 
                  size={100} 
                  className="text-pink-500 fill-pink-500 relative z-10 group-hover:fill-pink-600 group-hover:text-pink-600 transition-colors duration-300 drop-shadow-xl" 
                />
              </motion.div>
              
              {/* Added "Click me" text here */}
              <p className="mt-4 text-pink-600 font-bold tracking-widest uppercase text-sm animate-pulse">
                Click me
              </p>

            </motion.button>
          </motion.div>
        ) : (
          /* --- REVEALED VIEW: Image, Surprise Text, Scroll Down --- */
          <motion.div
            key="revealed-view"
            className="flex flex-col items-center w-full max-w-4xl relative z-10"
          >
            {/* 1. Image Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(219,39,119,0.3)] border-4 border-white mb-8 bg-white"
            >
              <img 
                src="/cou.jpeg" 
                alt="Us together" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 2. Delayed Surprise Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-2xl md:text-4xl text-pink-600 font-light tracking-wide text-center drop-shadow-sm mb-12"
            >
              A Special Surprise Just For You
            </motion.p>

            {/* 3. Delayed Scroll Down Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 1 }}
              className="flex flex-col items-center text-pink-500"
            >
              <span className="text-sm uppercase tracking-widest mb-2 font-medium opacity-90">
                Scroll Down
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown size={32} />
              </motion.div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}