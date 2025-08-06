import React from 'react';

interface CharacterProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export function MinchaCharacter({ size = 'medium', className = '' }: CharacterProps) {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Mincha - Modern eco-friendly character */}
        {/* Background circle */}
        <circle cx="100" cy="100" r="95" fill="#e8f5e8" stroke="#4ade80" strokeWidth="2"/>
        
        {/* Body */}
        <rect x="75" y="120" width="50" height="60" rx="25" fill="#22c55e"/>
        
        {/* Head */}
        <circle cx="100" cy="80" r="25" fill="#fbbf24"/>
        
        {/* Hair */}
        <path d="M75 65 Q100 55 125 65 Q125 75 100 75 Q75 75 75 65" fill="#374151"/>
        
        {/* Eyes */}
        <circle cx="92" cy="75" r="3" fill="#374151"/>
        <circle cx="108" cy="75" r="3" fill="#374151"/>
        
        {/* Smile */}
        <path d="M90 85 Q100 92 110 85" stroke="#374151" strokeWidth="2" fill="none"/>
        
        {/* Arms */}
        <circle cx="65" cy="140" r="12" fill="#fbbf24"/>
        <circle cx="135" cy="140" r="12" fill="#fbbf24"/>
        
        {/* Eco symbol on shirt */}
        <circle cx="100" cy="140" r="8" fill="#16a34a"/>
        <path d="M95 140 L105 140 M100 135 L100 145" stroke="#ffffff" strokeWidth="2"/>
        
        {/* Legs */}
        <rect x="85" y="175" width="12" height="20" rx="6" fill="#1f2937"/>
        <rect x="103" y="175" width="12" height="20" rx="6" fill="#1f2937"/>
        
        {/* Small plant/leaf decoration */}
        <path d="M120 65 Q125 60 130 65 Q125 70 120 65" fill="#22c55e"/>
      </svg>
    </div>
  );
}

export function BhinchaCharacter({ size = 'medium', className = '' }: CharacterProps) {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Bhincha - Traditional Newari character */}
        {/* Background circle */}
        <circle cx="100" cy="100" r="95" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
        
        {/* Traditional dress (black Haku Patasi sari) */}
        <rect x="65" y="120" width="70" height="65" rx="35" fill="#1f2937"/>
        
        {/* Red border on sari */}
        <rect x="65" y="120" width="70" height="8" rx="4" fill="#dc2626"/>
        <rect x="65" y="177" width="70" height="8" rx="4" fill="#dc2626"/>
        
        {/* Golden patterns on sari */}
        <circle cx="85" cy="150" r="3" fill="#fbbf24"/>
        <circle cx="100" cy="140" r="3" fill="#fbbf24"/>
        <circle cx="115" cy="150" r="3" fill="#fbbf24"/>
        
        {/* Head */}
        <circle cx="100" cy="80" r="25" fill="#fbbf24"/>
        
        {/* Traditional hair style */}
        <path d="M75 60 Q100 50 125 60 Q125 80 100 85 Q75 80 75 60" fill="#1f2937"/>
        
        {/* Hair ornament */}
        <circle cx="100" cy="65" r="4" fill="#fbbf24"/>
        
        {/* Eyes */}
        <circle cx="92" cy="75" r="3" fill="#374151"/>
        <circle cx="108" cy="75" r="3" fill="#374151"/>
        
        {/* Bindi (traditional forehead decoration) */}
        <circle cx="100" cy="70" r="2" fill="#dc2626"/>
        
        {/* Smile */}
        <path d="M90 85 Q100 92 110 85" stroke="#374151" strokeWidth="2" fill="none"/>
        
        {/* Arms */}
        <circle cx="55" cy="140" r="12" fill="#fbbf24"/>
        <circle cx="145" cy="140" r="12" fill="#fbbf24"/>
        
        {/* Traditional jewelry (Tilhari necklace) */}
        <ellipse cx="100" cy="108" rx="15" ry="3" fill="#fbbf24"/>
        <circle cx="90" cy="108" r="2" fill="#fbbf24"/>
        <circle cx="100" cy="108" r="2" fill="#fbbf24"/>
        <circle cx="110" cy="108" r="2" fill="#fbbf24"/>
        
        {/* Traditional feet */}
        <ellipse cx="85" cy="195" rx="8" ry="4" fill="#1f2937"/>
        <ellipse cx="115" cy="195" rx="8" ry="4" fill="#1f2937"/>
        
        {/* Cultural pattern decoration */}
        <path d="M40 160 Q50 155 60 160" stroke="#d97706" strokeWidth="2" fill="none"/>
        <path d="M140 160 Q150 155 160 160" stroke="#d97706" strokeWidth="2" fill="none"/>
      </svg>
    </div>
  );
}