import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from 'lucide-react';
import { Story, Character } from '@shared/schema';
import MinchaSVG from '../characters/mincha-svg';
import BhinchaSVG from '../characters/bhincha-svg';

interface StorytellingPreviewProps {
  story: Story;
  character: Character;
  onClose: () => void;
}

interface StorySegment {
  id: number;
  text: string;
  narrator: 'Mincha' | 'Bhincha';
  emotion: 'happy' | 'curious' | 'wise' | 'excited' | 'calm';
  duration: number;
}

export const StorytellingPreview: React.FC<StorytellingPreviewProps> = ({
  story,
  character,
  onClose
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  
  const storyRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const progressInterval = useRef<NodeJS.Timeout>();
  
  // Split story content into segments for animated storytelling
  const storySegments: StorySegment[] = React.useMemo(() => {
    const sentences = story.content.split(/[.!?]+/).filter(s => s.trim().length > 0);
    return sentences.map((sentence, index) => ({
      id: index,
      text: sentence.trim() + '.',
      narrator: index % 2 === 0 ? 'Mincha' : 'Bhincha',
      emotion: ['happy', 'curious', 'wise', 'excited', 'calm'][index % 5] as any,
      duration: Math.max(3, sentence.length / 10) // Dynamic duration based on text length
    }));
  }, [story.content]);

  const currentNarrator = storySegments[currentSegment]?.narrator || 'Mincha';
  const currentEmotion = storySegments[currentSegment]?.emotion || 'calm';

  // Initialize GSAP animations
  useEffect(() => {
    if (characterRef.current && backgroundRef.current) {
      // Initial character entrance animation
      gsap.fromTo(characterRef.current, 
        { scale: 0, rotation: -10, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      );

      // Background morphing animation
      gsap.to(backgroundRef.current, {
        backgroundPosition: "100% 100%",
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true
      });
    }
  }, []);

  // Character transition animations
  useEffect(() => {
    if (characterRef.current) {
      // Animate character based on emotion and narrator
      const tl = gsap.timeline();
      
      if (currentNarrator === 'Mincha') {
        tl.to(characterRef.current, {
          x: -50,
          scale: 1.1,
          rotation: 2,
          duration: 0.8,
          ease: "power2.out"
        });
      } else {
        tl.to(characterRef.current, {
          x: 50,
          scale: 1.05,
          rotation: -2,
          duration: 0.8,
          ease: "power2.out"
        });
      }

      // Emotion-based animations
      switch (currentEmotion) {
        case 'excited':
          tl.to(characterRef.current, {
            y: -10,
            duration: 0.3,
            yoyo: true,
            repeat: 3,
            ease: "power2.inOut"
          });
          break;
        case 'wise':
          tl.to(characterRef.current, {
            scale: 1.15,
            duration: 0.5,
            ease: "power2.inOut"
          });
          break;
        case 'curious':
          tl.to(characterRef.current, {
            rotation: currentNarrator === 'Mincha' ? 5 : -5,
            duration: 0.4,
            yoyo: true,
            repeat: 2,
            ease: "power2.inOut"
          });
          break;
      }
    }
  }, [currentSegment, currentNarrator, currentEmotion]);

  // Story progression logic
  useEffect(() => {
    if (isPlaying) {
      const segmentDuration = storySegments[currentSegment]?.duration || 5;
      const updateInterval = 50; // Update every 50ms for smooth progress
      const totalUpdates = (segmentDuration * 1000) / updateInterval;
      let currentUpdate = 0;

      progressInterval.current = setInterval(() => {
        currentUpdate++;
        const segmentProgress = (currentUpdate / totalUpdates) * 100;
        setProgress(segmentProgress);

        if (currentUpdate >= totalUpdates) {
          if (currentSegment < storySegments.length - 1) {
            setCurrentSegment(prev => prev + 1);
            setProgress(0);
          } else {
            setIsPlaying(false);
            setProgress(100);
          }
        }
      }, updateInterval);
    } else {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, currentSegment, storySegments]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (currentSegment < storySegments.length - 1) {
      setCurrentSegment(prev => prev + 1);
      setProgress(0);
    }
  };

  const handlePrevious = () => {
    if (currentSegment > 0) {
      setCurrentSegment(prev => prev - 1);
      setProgress(0);
    }
  };

  const handleRestart = () => {
    setCurrentSegment(0);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-full max-h-[90vh] overflow-hidden relative"
      >
        {/* Animated Background */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 opacity-10 bg-gradient-to-br from-newari-red via-newari-gold to-newari-sage"
          style={{
            backgroundSize: '400% 400%',
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(185, 28, 28, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)'
          }}
        />

        {/* Header */}
        <div className="relative z-10 p-6 border-b border-gray-200 bg-white bg-opacity-95">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{story.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                Narrated by {currentNarrator} • Segment {currentSegment + 1} of {storySegments.length}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-light"
            >
              ×
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 flex flex-1 h-full">
          {/* Character Animation Area */}
          <div className="flex-1 flex items-center justify-center p-8 relative">
            <div ref={characterRef} className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNarrator}
                  initial={{ opacity: 0, scale: 0.8, x: currentNarrator === 'Mincha' ? -100 : 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: currentNarrator === 'Mincha' ? 100 : -100 }}
                  transition={{ duration: 0.6, ease: "power2.out" }}
                  className="w-64 h-64 md:w-80 md:h-80"
                >
                  {currentNarrator === 'Mincha' ? (
                    <MinchaSVG 
                      className="w-full h-full drop-shadow-2xl" 
                    />
                  ) : (
                    <BhinchaSVG 
                      className="w-full h-full drop-shadow-2xl" 
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Character Speech Bubble */}
              <motion.div
                key={currentSegment}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-80 max-w-xs"
              >
                <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-newari-gold relative">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {storySegments[currentSegment]?.text}
                  </p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-newari-gold"></div>
                  </div>
                </div>
              </motion.div>

              {/* Emotion Particles */}
              <AnimatePresence>
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ 
                          opacity: 0, 
                          scale: 0, 
                          x: Math.random() * 100 - 50,
                          y: Math.random() * 100 - 50
                        }}
                        animate={{ 
                          opacity: [0, 1, 0], 
                          scale: [0, 1, 0], 
                          y: [0, -100],
                          rotate: [0, 360]
                        }}
                        transition={{ 
                          duration: 2 + Math.random() * 2, 
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                        className={`absolute w-2 h-2 rounded-full ${
                          currentEmotion === 'excited' ? 'bg-yellow-400' :
                          currentEmotion === 'wise' ? 'bg-purple-400' :
                          currentEmotion === 'curious' ? 'bg-blue-400' :
                          currentEmotion === 'happy' ? 'bg-pink-400' :
                          'bg-green-400'
                        }`}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Story Text Panel */}
          <div className="w-1/3 bg-gray-50 p-6 overflow-y-auto border-l border-gray-200">
            <div className="mb-4">
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="text-sm text-newari-red hover:text-newari-red/80 font-medium"
              >
                {showTranscript ? 'Hide' : 'Show'} Full Story
              </button>
            </div>

            {showTranscript && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="text-sm text-gray-700 leading-relaxed"
              >
                <div className="space-y-3">
                  {storySegments.map((segment, index) => (
                    <div
                      key={segment.id}
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        index === currentSegment
                          ? 'bg-newari-gold/20 border-l-4 border-newari-gold'
                          : index < currentSegment
                          ? 'bg-gray-100 opacity-60'
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          segment.narrator === 'Mincha' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {segment.narrator}
                        </span>
                        <span className="text-xs text-gray-500">
                          {segment.emotion}
                        </span>
                      </div>
                      <p>{segment.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="relative z-10 p-6 border-t border-gray-200 bg-white bg-opacity-95">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>Segment {currentSegment + 1} of {storySegments.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="h-2 bg-gradient-to-r from-newari-red to-newari-gold rounded-full"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentSegment === 0}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            <button
              onClick={handlePlayPause}
              className="p-4 rounded-full bg-newari-red hover:bg-newari-red/90 text-white transition-colors"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>

            <button
              onClick={handleNext}
              disabled={currentSegment === storySegments.length - 1}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 ml-8">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={handleRestart}
                className="px-4 py-2 text-sm font-medium text-newari-red hover:bg-newari-red/10 rounded-lg transition-colors"
              >
                Restart
              </button>
            </div>
          </div>
        </div>

        {/* Character Info Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="absolute top-20 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-newari-gold to-newari-red flex items-center justify-center text-white font-bold">
              {currentNarrator[0]}
            </div>
            <div>
              <h4 className="font-semibold text-sm">{currentNarrator}</h4>
              <p className="text-xs text-gray-600 capitalize">
                Feeling {currentEmotion}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};