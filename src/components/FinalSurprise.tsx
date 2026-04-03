import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// Including the floating hearts background to maintain consistency across sections
const FloatingHeartsBackground = () => {
  const heartColors = [
    'text-pink-300 fill-pink-300', 
    'text-rose-300 fill-rose-300', 
    'text-pink-400 fill-pink-400',
    'text-red-300 fill-red-300'
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => {
        const size = Math.random() * 30 + 10;
        const startX = Math.random() * 100;
        const endX = startX + (Math.random() * 20 - 10);
        const randomColor = heartColors[Math.floor(Math.random() * heartColors.length)];
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: '100vh', x: `${startX}vw`, scale: Math.random() * 0.5 + 0.5 }}
            animate={{ opacity: [0, 0.6, 0], y: '-10vh', x: `${endX}vw`, rotate: Math.random() * 360 }}
            transition={{ duration: Math.random() * 15 + 15, repeat: Infinity, delay: Math.random() * 10, ease: "linear" }}
            className={`absolute ${randomColor}`}
            style={{ filter: `drop-shadow(0 0 8px rgba(244, 114, 182, 0.4))` }}
          >
            <Heart size={size} />
          </motion.div>
        );
      })}
    </div>
  );
};

export function FinalSurprise() {
  return (
    // Updated background to the soft pink gradient
    <section className="min-h-screen flex flex-col items-center justify-center snap-start py-20 px-6 relative z-10 overflow-hidden bg-gradient-to-b from-pink-50 via-pink-100 to-rose-100">
      
      {/* Light theme floating hearts */}
      <FloatingHeartsBackground />

      <motion.div
        initial={{
          scale: 0.8, // Slightly softer initial scale
          opacity: 0
        }}
        whileInView={{
          scale: 1,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 1.2,
          type: 'spring',
          bounce: 0.4
        }}
        className="text-center relative w-full max-w-5xl z-10">
        
        {/* Softened Glowing background effect for the light theme */}
        <div className="absolute inset-0 bg-pink-300/40 blur-[150px] rounded-full" />

        {/* Text updated to deep pink/rose gradient for readability and pop */}
        <h2 className="font-cursive text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 mb-8 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
          You Mean Everything To Me
        </h2>

        <motion.div
          animate={{
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="flex justify-center mt-16 relative">
          
          {/* Subtle glow behind the heart */}
          <div className="absolute inset-0 bg-pink-300/50 rounded-full blur-[40px] scale-50" />

          {/* Heart updated to pink with a softer shadow */}
          <Heart
            size={120}
            className="text-pink-500 fill-pink-500 drop-shadow-[0_10px_20px_rgba(236,72,153,0.5)] relative z-10" />
          
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 1,
            duration: 1
          }}
          className="mt-16 text-2xl md:text-4xl font-medium text-pink-500 tracking-[0.3em] uppercase opacity-90">
          
          Forever Yours
        </motion.p>
      </motion.div>
    </section>
  );
}