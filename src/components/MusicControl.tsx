import React, { useState } from 'react';
import { Music, VolumeX } from 'lucide-react';

export function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  // YouTube Video ID extracted from your link: kHCP0Eq_kxo
  // autoplay=1 : Plays as soon as the iframe loads
  // loop=1 & playlist=... : Tells YouTube to loop the song forever
  const youtubeUrl = "https://www.youtube.com/embed/kHCP0Eq_kxo?autoplay=1&loop=1&playlist=kHCP0Eq_kxo";

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center justify-center">
      
      {/* We use an off-screen iframe instead of an <audio> tag.
        It only renders (and plays) when isPlaying is true.
        When false, it unmounts and the music stops instantly.
      */}
      {isPlaying && (
        <iframe
          src={youtubeUrl}
          allow="autoplay; encrypted-media"
          className="absolute w-1 h-1 opacity-0 pointer-events-none"
          title="Romantic Background Music"
        />
      )}

      <button
        onClick={toggleMusic}
        className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]"
        aria-label={isPlaying ? 'Mute music' : 'Play music'}
      >
        {isPlaying ? (
          // Added a gentle pulse animation to the music icon when it's playing
          <Music size={24} className="text-pink-300 animate-pulse" /> 
        ) : (
          <VolumeX size={24} className="text-white/70" />
        )}
      </button>
    </div>
  );
}