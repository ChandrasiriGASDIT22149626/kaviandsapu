import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoveMessage() {
  const [animationPhase, setAnimationPhase] = useState('initial');

  // These are the variants that define the different animation stages.
  const wrapperVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    opening: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    revealing: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.2, 
      },
    },
    done: {},
  };

  const flapVariants = {
    closed: {
      rotateX: 0,
    },
    open: {
      rotateX: 180, 
      zIndex: -1, 
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
        delay: 0.2, 
        onComplete: () => setAnimationPhase('revealing'),
      },
    },
  };

  const messagePaperVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1, 
        ease: 'easeOut',
      },
    },
  };

  const handleMessageComplete = () => {
    setAnimationPhase('done');
  };

  return (
    <section className="min-h-screen flex items-center justify-center snap-start relative px-6 py-20 bg-pink-50/50">
      <AnimatePresence>
        <motion.div
          className="max-w-4xl mx-auto relative z-10 w-full flex flex-col items-center"
          variants={wrapperVariants}
          initial="initial"
          animate={
            animationPhase === 'initial' || animationPhase === 'opening'
              ? 'opening'
              : 'revealing'
          }
        >
          {/* Confetti / Particle effect */}
          {animationPhase === 'revealing' && <ParticleConfetti />}

          {/* Envelope Body */}
          {(animationPhase === 'opening' || animationPhase === 'initial') && (
            <motion.div
              className="relative w-[300px] h-[200px] flex items-end justify-center perspective-1000 z-10 cursor-pointer"
              // ADDED CLICK EVENT AND HOVER EFFECTS HERE
              onClick={() => {
                if (animationPhase === 'initial') setAnimationPhase('opening');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              
              {/* Added a prompt so the user knows to click */}
              {animationPhase === 'initial' && (
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute -top-12 text-pink-500 font-bold tracking-widest uppercase text-sm drop-shadow-sm"
                >
                  Tap to open
                </motion.div>
              )}

              {/* Envelope Body (Bottom) */}
              <div className="absolute inset-x-0 bottom-0 top-[30%] bg-pink-500 rounded-b-xl rounded-t-lg z-10 shadow-xl">
                <div className="absolute inset-0 bg-pink-600 rounded-b-xl rounded-t-lg opacity-80" />
              </div>

              {/* Envelope Body (Top Flap) */}
              <motion.div
                className="absolute inset-x-0 top-0 bottom-[60%] rounded-t-xl z-20 origin-bottom"
                variants={flapVariants}
                initial="closed"
                animate={animationPhase === 'opening' ? 'open' : 'closed'}
              >
                <div className="absolute inset-0 bg-pink-400 rounded-t-xl" />
                <div className="absolute inset-0 bg-pink-100 rounded-t-xl rotate-x-180 opacity-90 backface-hidden" />
              </motion.div>
            </motion.div>
          )}

          {/* The Final Message Paper */}
          {animationPhase === 'revealing' || animationPhase === 'done' ? (
            <motion.div
              className="relative w-full z-20"
              variants={messagePaperVariants}
              initial="hidden"
              animate="visible"
              onAnimationComplete={handleMessageComplete}
            >
              <LoveMessagePaper />
            </motion.div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

// Particle emitter for confetti
function ParticleConfetti() {
  const count = 15;
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            backgroundColor: i % 2 === 0 ? '#ec4899' : '#fdf2f8',
          }}
          initial={{
            opacity: 1,
            x: '50%',
            y: '45%', 
            scale: 0.1,
          }}
          animate={{
            opacity: [1, 0],
            x: `${Math.random() * 80 + 10}%`, 
            y: `${Math.random() * -100 - 50}%`, 
            scale: [0.1, 1, 0.5],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            delay: Math.random() * 0.5,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

// The inner message component
function LoveMessagePaper() {
  const text =
    'Every moment with you feels like a beautiful dream. You make my world brighter, my heart fuller, and my life more meaningful than I ever thought possible. This is my little way of telling you — you are loved beyond words.';
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <div className="p-10 md:p-16 relative bg-white rounded-2xl shadow-2xl border-4 border-pink-100 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-pink-300/20 blur-[80px] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: '-100px',
        }}
        className="font-cursive text-4xl md:text-5xl leading-relaxed md:leading-relaxed text-pink-600 relative z-10 drop-shadow-sm"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}