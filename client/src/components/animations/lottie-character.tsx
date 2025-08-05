import { useState, useRef } from 'react';
import Lottie from 'lottie-react';

interface LottieCharacterProps {
  animationData?: any;
  fallbackSvg: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loop?: boolean;
  autoplay?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24', 
  lg: 'w-32 h-32',
  xl: 'w-48 h-48'
};

export default function LottieCharacter({
  animationData,
  fallbackSvg,
  size = 'lg',
  loop = true,
  autoplay = true,
  onClick,
  className = ''
}: LottieCharacterProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const lottieRef = useRef<any>(null);

  const handleClick = () => {
    if (onClick) onClick();
    
    // Trigger animation on click
    if (lottieRef.current) {
      lottieRef.current.goToAndPlay(0);
      setIsPlaying(true);
    }
  };

  const handleAnimationComplete = () => {
    if (!loop) {
      setIsPlaying(false);
    }
  };

  // If no Lottie data provided, use fallback SVG
  if (!animationData) {
    return (
      <div 
        className={`${sizeClasses[size]} ${className} cursor-pointer transition-transform hover:scale-110`}
        onClick={handleClick}
      >
        {fallbackSvg}
      </div>
    );
  }

  return (
    <div 
      className={`${sizeClasses[size]} ${className} cursor-pointer transition-transform hover:scale-110`}
      onClick={handleClick}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={isPlaying}
        onComplete={handleAnimationComplete}
        className="w-full h-full"
      />
    </div>
  );
}