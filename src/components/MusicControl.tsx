import React, { useState, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';
export function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Using a public domain romantic piano placeholder track
        audioRef.current.
        play().
        catch((e) => console.log('Audio play failed:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="fixed top-6 right-6 z-50">
      <audio ref={audioRef} loop>
        <source
          src="https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=romantic-piano-112135.mp3"
          type="audio/mpeg" />
        
      </audio>
      <button
        onClick={toggleMusic}
        className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]"
        aria-label={isPlaying ? 'Mute music' : 'Play music'}>
        
        {isPlaying ?
        <Music size={24} className="text-pink-300" /> :

        <VolumeX size={24} className="text-white/70" />
        }
      </button>
    </div>);

}