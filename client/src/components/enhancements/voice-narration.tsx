import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface VoiceNarrationProps {
  text: string;
  character?: 'mincha' | 'bhincha';
  autoPlay?: boolean;
}

export default function VoiceNarration({ text, character = 'bhincha', autoPlay = false }: VoiceNarrationProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (autoPlay && isEnabled) {
      speak();
    }
  }, [text, autoPlay, isEnabled]);

  const speak = () => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Configure voice based on character
      const voices = window.speechSynthesis.getVoices();
      if (character === 'bhincha') {
        // Prefer female voice for Bhincha
        const femaleVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('female') || 
          voice.name.toLowerCase().includes('woman')
        );
        if (femaleVoice) utterance.voice = femaleVoice;
        utterance.pitch = 1.2;
      } else {
        // Prefer male voice for Mincha
        const maleVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('male') || 
          voice.name.toLowerCase().includes('man')
        );
        if (maleVoice) utterance.voice = maleVoice;
        utterance.pitch = 0.9;
      }
      
      utterance.rate = 0.8;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const toggle = () => {
    if (isPlaying) {
      stop();
    } else {
      speak();
    }
  };

  if (!isEnabled) {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsEnabled(true)}
        className="gap-2"
      >
        <VolumeX className="h-4 w-4" />
        Enable Audio
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={toggle}
        className="gap-2"
      >
        {isPlaying ? (
          <>
            <Pause className="h-4 w-4" />
            Pause {character === 'bhincha' ? 'Bhincha' : 'Mincha'}
          </>
        ) : (
          <>
            <Play className="h-4 w-4" />
            Listen to {character === 'bhincha' ? 'Bhincha' : 'Mincha'}
          </>
        )}
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsEnabled(false)}
        className="p-1"
      >
        <VolumeX className="h-4 w-4" />
      </Button>
    </div>
  );
}