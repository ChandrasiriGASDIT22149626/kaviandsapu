import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
interface LightboxProps {
  image: string | null;
  onClose: () => void;
}
export function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {image &&
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}>
        
          <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 rounded-full backdrop-blur-md transition-colors z-10">
          
            <X size={24} />
          </button>
          <motion.img
          initial={{
            scale: 0.9,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          exit={{
            scale: 0.9,
            opacity: 0
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300
          }}
          src={image}
          alt="Enlarged memory"
          className="max-w-full max-h-[90vh] rounded-xl shadow-2xl shadow-pink-500/20 object-contain"
          onClick={(e) => e.stopPropagation()} />
        
        </motion.div>
      }
    </AnimatePresence>);

}