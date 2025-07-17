export default function BhinchaSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cute Traditional Newari Girl Character - Bhincha */}
      
      {/* Simple background */}
      <circle cx="200" cy="250" r="180" fill="url(#traditionalGradient)" opacity="0.05" />
      
      {/* Cute cartoon body - simple and rounded */}
      <ellipse cx="200" cy="320" rx="60" ry="80" fill="#FDBCB4" />
      
      {/* Traditional Black Haku Patasi (Newari Sari) - simplified cute version */}
      <ellipse cx="200" cy="360" rx="70" ry="70" fill="#1a1a1a" />
      <ellipse cx="200" cy="360" rx="70" ry="70" fill="none" stroke="#C41E3A" strokeWidth="4" />
      
      {/* Black Cholo (Blouse) - cute simple design */}
      <rect x="160" y="260" width="80" height="60" fill="#1a1a1a" rx="10" />
      <rect x="160" y="260" width="80" height="6" fill="#C41E3A" />
      <rect x="160" y="314" width="80" height="6" fill="#C41E3A" />
      
      {/* Simple golden patterns - cute and minimal */}
      <g fill="#D4AF37" opacity="0.8">
        <circle cx="180" cy="280" r="2" />
        <circle cx="200" cy="280" r="2" />
        <circle cx="220" cy="280" r="2" />
        <circle cx="180" cy="300" r="2" />
        <circle cx="200" cy="300" r="2" />
        <circle cx="220" cy="300" r="2" />
      </g>
      
      {/* Cute cartoon face - large and round like reference image */}
      <circle cx="200" cy="180" r="50" fill="#FDBCB4" />
      
      {/* Simple cute hair - black with traditional style */}
      <ellipse cx="200" cy="140" rx="55" ry="35" fill="#2F1B14" />
      <path d="M145 140 Q160 120 180 130 Q190 125 200 130 Q210 125 220 130 Q240 120 255 140 Q245 155 220 150 Q200 160 180 150 Q155 155 145 140" fill="#2F1B14" />
      
      {/* Traditional hair ornament - simplified */}
      <circle cx="200" cy="125" r="4" fill="#FFD700" />
      <circle cx="185" cy="135" r="2" fill="#D4AF37" />
      <circle cx="215" cy="135" r="2" fill="#D4AF37" />
      
      {/* Cute cartoon eyes - large and simple like reference */}
      <circle cx="185" cy="170" r="8" fill="black" />
      <circle cx="215" cy="170" r="8" fill="black" />
      
      {/* Eye highlights for cuteness */}
      <circle cx="187" cy="168" r="2" fill="white" />
      <circle cx="217" cy="168" r="2" fill="white" />
      
      {/* Simple cute nose - just two dots like reference */}
      <circle cx="198" cy="185" r="1" fill="#E6967A" />
      <circle cx="202" cy="185" r="1" fill="#E6967A" />
      
      {/* Cute simple smile */}
      <path d="M190 195 Q200 205 210 195" stroke="#FF6B9D" strokeWidth="2" fill="none" />
      
      {/* Traditional Tilaka (Forehead marking) - simplified */}
      <circle cx="200" cy="155" r="2" fill="#C41E3A" />
      
      {/* Cute simple arms */}
      <ellipse cx="130" cy="300" rx="12" ry="25" fill="#FDBCB4" />
      <ellipse cx="270" cy="300" rx="12" ry="25" fill="#FDBCB4" />
      
      {/* Simple cute hands */}
      <circle cx="120" cy="330" r="10" fill="#FDBCB4" />
      <circle cx="280" cy="330" r="10" fill="#FDBCB4" />
      
      {/* Traditional bangles - simplified */}
      <circle cx="120" cy="325" r="12" fill="none" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="280" cy="325" r="12" fill="none" stroke="#D4AF37" strokeWidth="2" />
      
      {/* Simple traditional necklace - cute version */}
      <ellipse cx="200" cy="235" rx="25" ry="8" fill="none" stroke="#D4AF37" strokeWidth="3" />
      <circle cx="200" cy="235" r="4" fill="#FFD700" />
      
      {/* Simple Pote beads */}
      <circle cx="185" cy="237" r="2" fill="#C41E3A" />
      <circle cx="195" cy="236" r="2" fill="#228B22" />
      <circle cx="205" cy="236" r="2" fill="#C41E3A" />
      <circle cx="215" cy="237" r="2" fill="#228B22" />
      
      {/* Cute simple legs */}
      <ellipse cx="185" cy="420" rx="8" ry="25" fill="#FDBCB4" />
      <ellipse cx="215" cy="420" rx="8" ry="25" fill="#FDBCB4" />
      
      {/* Traditional black pants - simplified */}
      <rect x="175" y="400" width="20" height="35" fill="#1a1a1a" rx="10" />
      <rect x="205" y="400" width="20" height="35" fill="#1a1a1a" rx="10" />
      
      {/* Cute simple feet */}
      <ellipse cx="185" cy="450" rx="12" ry="6" fill="#8B4513" />
      <ellipse cx="215" cy="450" rx="12" ry="6" fill="#8B4513" />
      
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="traditionalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#C41E3A" />
        </linearGradient>
        <linearGradient id="sariGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="30%" stopColor="#2a2a2a" />
          <stop offset="70%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="sariPattern" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <pattern id="newariPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#1a1a1a"/>
          <circle cx="10" cy="10" r="2" fill="#D4AF37" opacity="0.6"/>
          <path d="M5 5 L15 5 M5 15 L15 15" stroke="#C41E3A" strokeWidth="0.5" opacity="0.4"/>
        </pattern>
      </defs>
    </svg>
  );
}
