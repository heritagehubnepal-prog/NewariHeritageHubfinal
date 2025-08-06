import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface VoiceNarrationProps {
  text: string;
  className?: string;
  autoPlay?: boolean;
}

export function VoiceNarration({ text, className = '', autoPlay = false }: VoiceNarrationProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [rate, setRate] = useState([1]);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  // Initialize speech synthesis
  useEffect(() => {
    if ('speechSynthesis' in window) {
      setIsEnabled(true);
    }
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && isEnabled && text) {
      handlePlay();
    }
    
    return () => {
      if (speechRef.current) {
        window.speechSynthesis.cancel();
      }
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [autoPlay, isEnabled, text]);

  const handlePlay = () => {
    if (!isEnabled || !text) return;

    // Cancel any existing speech
    window.speechSynthesis.cancel();
    
    // Create new speech synthesis utterance
    speechRef.current = new SpeechSynthesisUtterance(text);
    speechRef.current.rate = rate[0];
    speechRef.current.volume = 0.8;
    speechRef.current.pitch = 1;

    // Set up event listeners
    speechRef.current.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      startProgressTracking();
    };

    speechRef.current.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(0);
      stopProgressTracking();
    };

    speechRef.current.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(0);
      stopProgressTracking();
    };

    // Start speaking
    window.speechSynthesis.speak(speechRef.current);
  };

  const handlePause = () => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      stopProgressTracking();
    }
  };

  const handleResume = () => {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      startProgressTracking();
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
    stopProgressTracking();
  };

  const handleRateChange = (newRate: number[]) => {
    setRate(newRate);
    if (speechRef.current) {
      speechRef.current.rate = newRate[0];
    }
  };

  const startProgressTracking = () => {
    const words = text.split(' ').length;
    const estimatedDuration = (words / (rate[0] * 180)) * 60000; // Approximate duration in ms
    const updateInterval = estimatedDuration / 100; // Update progress 100 times

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          stopProgressTracking();
          return 100;
        }
        return prev + 1;
      });
    }, updateInterval);
  };

  const stopProgressTracking = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
  };

  if (!isEnabled) {
    return (
      <div className={`text-sm text-muted-foreground ${className}`}>
        Voice narration not available in this browser
      </div>
    );
  }

  return (
    <div className={`voice-narration bg-gradient-to-r from-sage-100 to-eco-100 dark:from-sage-900 dark:to-eco-900 rounded-lg p-4 border border-sage-200 dark:border-sage-700 ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <Volume2 className="h-5 w-5 text-sage-600 dark:text-sage-400" />
        <span className="text-sm font-medium text-sage-800 dark:text-sage-200">
          Voice Narration
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        {!isPlaying ? (
          <Button
            onClick={handlePlay}
            size="sm"
            variant="outline"
            className="h-8 px-3 bg-eco-500 hover:bg-eco-600 text-white border-eco-500"
          >
            <Play className="h-3 w-3 mr-1" />
            Play
          </Button>
        ) : (
          <div className="flex gap-1">
            {isPaused ? (
              <Button
                onClick={handleResume}
                size="sm"
                variant="outline"
                className="h-8 px-3 bg-eco-500 hover:bg-eco-600 text-white border-eco-500"
              >
                <Play className="h-3 w-3 mr-1" />
                Resume
              </Button>
            ) : (
              <Button
                onClick={handlePause}
                size="sm"
                variant="outline"
                className="h-8 px-3 bg-amber-500 hover:bg-amber-600 text-white border-amber-500"
              >
                <Pause className="h-3 w-3 mr-1" />
                Pause
              </Button>
            )}
            <Button
              onClick={handleStop}
              size="sm"
              variant="outline"
              className="h-8 px-3 bg-red-500 hover:bg-red-600 text-white border-red-500"
            >
              <VolumeX className="h-3 w-3 mr-1" />
              Stop
            </Button>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {isPlaying && (
        <div className="mb-3">
          <div className="w-full bg-sage-200 dark:bg-sage-700 rounded-full h-2">
            <div 
              className="bg-eco-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-sage-600 dark:text-sage-400 mt-1">
            {isPaused ? 'Paused' : 'Playing...'}
          </p>
        </div>
      )}

      {/* Speed Control */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-sage-700 dark:text-sage-300">
          Speed: {rate[0]}x
        </label>
        <Slider
          value={rate}
          onValueChange={handleRateChange}
          min={0.5}
          max={2}
          step={0.1}
          className="w-full"
        />
      </div>
    </div>
  );
}