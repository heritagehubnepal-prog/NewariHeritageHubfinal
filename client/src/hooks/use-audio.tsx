import { createContext, useContext, useState, useEffect, useRef } from 'react';

interface AudioContextType {
  isSoundEnabled: boolean;
  toggleSound: () => void;
  playChime: () => void;
  playVoiceover: (character: 'mincha' | 'bhincha') => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const chimeRef = useRef<HTMLAudioElement | null>(null);
  const minchaVoiceRef = useRef<HTMLAudioElement | null>(null);
  const bhinchaVoiceRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Standard lightweight UI sounds (using public URLs for standard chimes)
    chimeRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    minchaVoiceRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/134/134-preview.mp3'); // Placeholder for voice
    bhinchaVoiceRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/133/133-preview.mp3'); // Placeholder for voice

    const saved = localStorage.getItem('heritage-hub-sound');
    if (saved === 'enabled') setIsSoundEnabled(true);
  }, []);

  const toggleSound = () => {
    const newState = !isSoundEnabled;
    setIsSoundEnabled(newState);
    localStorage.setItem('heritage-hub-sound', newState ? 'enabled' : 'disabled');
  };

  const playChime = () => {
    if (isSoundEnabled && chimeRef.current) {
      chimeRef.current.volume = 0.2;
      chimeRef.current.play().catch(() => {});
    }
  };

  const playVoiceover = (character: 'mincha' | 'bhincha') => {
    if (isSoundEnabled) {
      const audio = character === 'mincha' ? minchaVoiceRef.current : bhinchaVoiceRef.current;
      if (audio) {
        audio.volume = 0.4;
        audio.play().catch(() => {});
      }
    }
  };

  return (
    <AudioContext.Provider value={{ isSoundEnabled, toggleSound, playChime, playVoiceover }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) throw new Error('useAudio must be used within AudioProvider');
  return context;
}
