export default function BhinchaSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Traditional Newari Female Character - Bhincha */}
      
      {/* Background Circle */}
      <circle cx="200" cy="250" r="180" fill="url(#bgGradient)" opacity="0.1" />
      
      {/* Body */}
      <ellipse cx="200" cy="370" rx="90" ry="100" fill="#C41E3A" />
      
      {/* Traditional Haaku Patasi (Blouse) */}
      <rect x="130" y="270" width="140" height="120" fill="#D4AF37" rx="15" />
      <path d="M150 270 L250 270" stroke="#C41E3A" strokeWidth="3" />
      
      {/* Traditional Phariya (Sari) */}
      <path
        d="M130 350 Q100 360 120 400 Q150 420 180 400 Q200 380 220 400 Q250 420 280 400 Q300 360 270 350"
        fill="#8B4513"
        opacity="0.8"
      />
      
      {/* Face */}
      <ellipse cx="200" cy="200" rx="55" ry="65" fill="#F4A460" />
      
      {/* Traditional Hair Style */}
      <ellipse cx="200" cy="150" rx="70" ry="40" fill="#2F1B14" />
      <path
        d="M130 150 Q150 130 170 140 Q190 120 200 140 Q210 120 230 140 Q250 130 270 150"
        fill="#2F1B14"
      />
      
      {/* Hair Ornaments */}
      <circle cx="160" cy="140" r="4" fill="#D4AF37" />
      <circle cx="200" cy="125" r="5" fill="#D4AF37" />
      <circle cx="240" cy="140" r="4" fill="#D4AF37" />
      
      {/* Eyes */}
      <ellipse cx="185" cy="185" rx="8" ry="12" fill="white" />
      <ellipse cx="215" cy="185" rx="8" ry="12" fill="white" />
      <circle cx="185" cy="185" r="4" fill="black" />
      <circle cx="215" cy="185" r="4" fill="black" />
      
      {/* Eyelashes */}
      <path d="M177 175 L180 170" stroke="black" strokeWidth="1" />
      <path d="M193 175 L190 170" stroke="black" strokeWidth="1" />
      <path d="M207 175 L210 170" stroke="black" strokeWidth="1" />
      <path d="M223 175 L220 170" stroke="black" strokeWidth="1" />
      
      {/* Nose */}
      <path d="M200 195 L195 205 Q200 210 205 205 Z" fill="#E6967A" />
      
      {/* Nose Ring (Traditional) */}
      <circle cx="198" cy="205" r="2" fill="none" stroke="#D4AF37" strokeWidth="1" />
      
      {/* Mouth */}
      <path d="M190 225 Q200 235 210 225" stroke="#8B4513" strokeWidth="2" fill="none" />
      
      {/* Tilaka (Forehead marking) */}
      <circle cx="200" cy="165" r="3" fill="#C41E3A" />
      <path d="M200 160 L200 170" stroke="#C41E3A" strokeWidth="2" />
      
      {/* Arms */}
      <ellipse cx="110" cy="320" rx="18" ry="55" fill="#F4A460" />
      <ellipse cx="290" cy="320" rx="18" ry="55" fill="#F4A460" />
      
      {/* Traditional Bangles */}
      <rect x="105" y="310" width="10" height="4" fill="#D4AF37" />
      <rect x="105" y="320" width="10" height="4" fill="#C41E3A" />
      <rect x="285" y="310" width="10" height="4" fill="#D4AF37" />
      <rect x="285" y="320" width="10" height="4" fill="#C41E3A" />
      
      {/* Hands */}
      <ellipse cx="95" cy="380" rx="12" ry="18" fill="#F4A460" />
      <ellipse cx="305" cy="380" rx="12" ry="18" fill="#F4A460" />
      
      {/* Traditional Necklace */}
      <ellipse cx="200" cy="250" rx="40" ry="8" fill="none" stroke="#D4AF37" strokeWidth="3" />
      <circle cx="200" cy="250" r="6" fill="#D4AF37" />
      
      {/* Legs (partially visible under sari) */}
      <rect x="175" y="450" width="20" height="40" fill="#F4A460" />
      <rect x="205" y="450" width="20" height="40" fill="#F4A460" />
      
      {/* Traditional Shoes */}
      <ellipse cx="185" cy="495" rx="18" ry="6" fill="#8B4513" />
      <ellipse cx="215" cy="495" rx="18" ry="6" fill="#8B4513" />
      
      {/* Decorative Flowers */}
      <g transform="translate(130, 170)">
        <circle r="3" fill="#FF69B4" />
        <circle r="1.5" fill="#FFB6C1" />
      </g>
      <g transform="translate(270, 170)">
        <circle r="3" fill="#FF69B4" />
        <circle r="1.5" fill="#FFB6C1" />
      </g>
      
      {/* Cultural Pattern on Dress */}
      <path d="M140 290 L160 290 M180 290 L200 290 M220 290 L240 290 M260 290" 
            stroke="#8B4513" strokeWidth="2" opacity="0.6" />
      <path d="M140 310 L160 310 M180 310 L200 310 M220 310 L240 310 M260 310" 
            stroke="#8B4513" strokeWidth="2" opacity="0.6" />
      
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#C41E3A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
