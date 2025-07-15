export default function MinchaSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Traditional Newari Male Character - Mincha */}
      
      {/* Background Circle */}
      <circle cx="200" cy="250" r="180" fill="url(#bgGradient)" opacity="0.1" />
      
      {/* Body */}
      <ellipse cx="200" cy="350" rx="80" ry="120" fill="#8B4513" />
      
      {/* Traditional Dhaka Topi (Cap) */}
      <path
        d="M120 150 Q200 100 280 150 Q280 120 200 110 Q120 120 120 150"
        fill="#C41E3A"
        stroke="#D4AF37"
        strokeWidth="2"
      />
      <rect x="190" y="105" width="20" height="15" fill="#D4AF37" />
      
      {/* Face */}
      <ellipse cx="200" cy="200" rx="60" ry="70" fill="#F4A460" />
      
      {/* Eyes */}
      <ellipse cx="185" cy="185" rx="8" ry="12" fill="white" />
      <ellipse cx="215" cy="185" rx="8" ry="12" fill="white" />
      <circle cx="185" cy="185" r="4" fill="black" />
      <circle cx="215" cy="185" r="4" fill="black" />
      
      {/* Nose */}
      <path d="M200 195 L195 205 Q200 210 205 205 Z" fill="#E6967A" />
      
      {/* Mouth */}
      <path d="M190 220 Q200 230 210 220" stroke="#8B4513" strokeWidth="2" fill="none" />
      
      {/* Mustache */}
      <path d="M180 210 Q200 215 220 210" stroke="#4A4A4A" strokeWidth="3" fill="none" />
      
      {/* Traditional Daura Suruwal (Shirt) */}
      <rect x="140" y="270" width="120" height="160" fill="#FFFFFF" rx="10" />
      <path d="M160 270 L240 270" stroke="#D4AF37" strokeWidth="4" />
      <circle cx="170" cy="300" r="3" fill="#D4AF37" />
      <circle cx="170" cy="330" r="3" fill="#D4AF37" />
      <circle cx="170" cy="360" r="3" fill="#D4AF37" />
      
      {/* Arms */}
      <ellipse cx="120" cy="320" rx="20" ry="60" fill="#F4A460" />
      <ellipse cx="280" cy="320" rx="20" ry="60" fill="#F4A460" />
      
      {/* Hands in Namaste gesture */}
      <ellipse cx="110" cy="380" rx="12" ry="20" fill="#F4A460" transform="rotate(-30 110 380)" />
      <ellipse cx="290" cy="380" rx="12" ry="20" fill="#F4A460" transform="rotate(30 290 380)" />
      
      {/* Traditional Scarf */}
      <path
        d="M140 270 Q120 250 100 270 Q120 290 140 280"
        fill="#C41E3A"
        opacity="0.8"
      />
      
      {/* Legs */}
      <rect x="170" y="430" width="25" height="60" fill="#FFFFFF" />
      <rect x="205" y="430" width="25" height="60" fill="#FFFFFF" />
      
      {/* Traditional Shoes */}
      <ellipse cx="182" cy="495" rx="20" ry="8" fill="#8B4513" />
      <ellipse cx="218" cy="495" rx="20" ry="8" fill="#8B4513" />
      
      {/* Decorative Elements */}
      <circle cx="150" cy="180" r="3" fill="#D4AF37" opacity="0.7" />
      <circle cx="250" cy="180" r="3" fill="#D4AF37" opacity="0.7" />
      <circle cx="170" cy="160" r="2" fill="#C41E3A" opacity="0.5" />
      <circle cx="230" cy="160" r="2" fill="#C41E3A" opacity="0.5" />
      
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
