import { useState } from "react";
import { motion } from "framer-motion";

interface MinchaSVGProps {
  className?: string;
  interactive?: boolean;
  onCharacterClick?: () => void;
}

export default function MinchaSVG({ 
  className = "w-full h-full", 
  interactive = false,
  onCharacterClick 
}: MinchaSVGProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [eyesBlink, setEyesBlink] = useState(false);
  const [waveHand, setWaveHand] = useState(false);

  const handleCharacterClick = () => {
    if (onCharacterClick) {
      onCharacterClick();
    }
    setEyesBlink(true);
    setWaveHand(true);
    setTimeout(() => setEyesBlink(false), 300);
    setTimeout(() => setWaveHand(false), 1000);
  };

  return (
    <motion.div
      className={interactive ? "cursor-pointer" : ""}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={interactive ? handleCharacterClick : undefined}
      whileHover={interactive ? { scale: 1.05 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
    >
      <svg
        viewBox="0 0 400 500"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      {/* Modern Eco-Friendly Character - Mincha */}
      
      {/* Background with eco elements */}
      <circle cx="200" cy="250" r="180" fill="url(#ecoGradient)" opacity="0.1" />
      
      {/* Floating leaves and eco symbols */}
      <g opacity="0.3">
        <path d="M100 120 Q105 110 110 120 Q105 130 100 120 Z" fill="#228B22" />
        <path d="M320 150 Q325 140 330 150 Q325 160 320 150 Z" fill="#228B22" />
        <path d="M80 380 Q85 370 90 380 Q85 390 80 380 Z" fill="#228B22" />
      </g>
      
      {/* Body in modern clothing */}
      <ellipse cx="200" cy="350" rx="85" ry="110" fill="#4A90E2" />
      
      {/* Modern hair style */}
      <ellipse cx="200" cy="160" rx="65" ry="35" fill="#2F1B14" />
      <path d="M140 160 Q170 140 200 150 Q230 140 260 160" fill="#2F1B14" />
      
      {/* Face */}
      <ellipse cx="200" cy="200" rx="55" ry="65" fill="#F4A460" />
      
      {/* Eyes with glasses */}
      <ellipse cx="185" cy="185" rx="8" ry="12" fill="white" />
      <ellipse cx="215" cy="185" rx="8" ry="12" fill="white" />
      <circle cx="185" cy="185" r="4" fill="black" />
      <circle cx="215" cy="185" r="4" fill="black" />
      
      {/* Eco-friendly glasses */}
      <circle cx="185" cy="185" r="15" fill="none" stroke="#228B22" strokeWidth="2" />
      <circle cx="215" cy="185" r="15" fill="none" stroke="#228B22" strokeWidth="2" />
      <path d="M200 185 L205 185" stroke="#228B22" strokeWidth="2" />
      
      {/* Nose */}
      <path d="M200 195 L195 205 Q200 210 205 205 Z" fill="#E6967A" />
      
      {/* Smile */}
      <path d="M185 220 Q200 235 215 220" stroke="#4A90E2" strokeWidth="2" fill="none" />
      
      {/* Modern t-shirt with eco message */}
      <rect x="135" y="270" width="130" height="140" fill="#66BB6A" rx="15" />
      <text x="200" y="320" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">ECO</text>
      <text x="200" y="335" textAnchor="middle" fill="white" fontSize="12">HERO</text>
      
      {/* Recycling symbol on shirt */}
      <g transform="translate(200, 360)">
        <path d="M-8 -5 L-4 5 L4 5 L8 -5 Z" fill="none" stroke="white" strokeWidth="2" />
        <circle r="2" fill="white" />
      </g>
      
      {/* Arms */}
      <ellipse cx="115" cy="320" rx="18" ry="55" fill="#F4A460" />
      <ellipse cx="285" cy="320" rx="18" ry="55" fill="#F4A460" />
      
      {/* Hands holding eco items */}
      {/* Left hand holding plant */}
      <ellipse cx="95" cy="380" rx="12" ry="18" fill="#F4A460" />
      <rect x="90" y="365" width="4" height="20" fill="#8B4513" />
      <circle cx="92" cy="360" r="8" fill="#228B22" />
      <path d="M88 355 Q92 350 96 355" stroke="#228B22" strokeWidth="2" fill="none" />
      
      {/* Right hand with solar panel */}
      <ellipse cx="305" cy="380" rx="12" ry="18" fill="#F4A460" />
      <rect x="295" y="370" width="20" height="15" fill="#1E3A8A" />
      <rect x="297" y="372" width="4" height="3" fill="#60A5FA" />
      <rect x="303" y="372" width="4" height="3" fill="#60A5FA" />
      <rect x="309" y="372" width="4" height="3" fill="#60A5FA" />
      <rect x="297" y="377" width="4" height="3" fill="#60A5FA" />
      <rect x="303" y="377" width="4" height="3" fill="#60A5FA" />
      <rect x="309" y="377" width="4" height="3" fill="#60A5FA" />
      
      {/* Modern jeans */}
      <rect x="175" y="410" width="22" height="70" fill="#4169E1" />
      <rect x="203" y="410" width="22" height="70" fill="#4169E1" />
      <path d="M180 430 L180 460" stroke="#1E3A8A" strokeWidth="1" />
      <path d="M208 430 L208 460" stroke="#1E3A8A" strokeWidth="1" />
      
      {/* Eco-friendly sneakers */}
      <ellipse cx="186" cy="485" rx="18" ry="8" fill="#228B22" />
      <ellipse cx="214" cy="485" rx="18" ry="8" fill="#228B22" />
      <path d="M172 485 Q186 480 200 485" stroke="#32CD32" strokeWidth="2" fill="none" />
      <path d="M200 485 Q214 480 228 485" stroke="#32CD32" strokeWidth="2" fill="none" />
      
      {/* Backpack with water bottle */}
      <ellipse cx="140" cy="300" rx="12" ry="25" fill="#8B4513" />
      <rect x="133" y="280" width="6" height="15" fill="#4A90E2" />
      <circle cx="136" cy="275" r="3" fill="#4A90E2" />
      
      {/* Eco badges/symbols */}
      <circle cx="160" cy="290" r="6" fill="#FFD700" />
      <text x="160" y="293" textAnchor="middle" fill="#228B22" fontSize="8">♻</text>
      
      {/* Traditional scarf with modern pattern */}
      <path
        d="M140 270 Q120 250 100 270 Q115 285 140 280"
        fill="url(#modernPattern)"
        opacity="0.8"
      />
      
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="ecoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#228B22" />
          <stop offset="50%" stopColor="#32CD32" />
          <stop offset="100%" stopColor="#66BB6A" />
        </linearGradient>
        <linearGradient id="modernPattern" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A90E2" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>
      </svg>
    </motion.div>
  );
}
