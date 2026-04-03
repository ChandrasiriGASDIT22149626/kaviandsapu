import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export function FloatingHearts() {
  const [hearts, setHearts] = useState<
    {
      id: number;
      left: number;
      delay: number;
      duration: number;
      size: number;
    }[]>(
    []);
  useEffect(() => {
    // Generate random hearts only on the client side
    const newHearts = Array.from({
      length: 35
    }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 25,
      size: 10 + Math.random() * 20
    }));
    setHearts(newHearts);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) =>
      <motion.div
        key={heart.id}
        className="absolute bottom-[-100px] text-pink-500/40"
        initial={{
          y: 0,
          x: 0,
          opacity: 0
        }}
        animate={{
          y: '-120vh',
          x: Math.sin(heart.delay) * 100,
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: heart.duration,
          delay: heart.delay,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          left: `${heart.left}%`,
          fontSize: heart.size
        }}>
        
          ❤️
        </motion.div>
      )}
    </div>);

}