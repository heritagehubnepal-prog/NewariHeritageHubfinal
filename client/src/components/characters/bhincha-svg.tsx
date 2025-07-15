export default function BhinchaSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Traditional Newari Female Character - Bhincha */}
      
      {/* Background with traditional patterns */}
      <circle cx="200" cy="250" r="180" fill="url(#traditionalGradient)" opacity="0.1" />
      
      {/* Traditional mandala patterns in background */}
      <g opacity="0.2">
        <circle cx="120" cy="120" r="15" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="120" cy="120" r="8" fill="none" stroke="#C41E3A" strokeWidth="1" />
        <circle cx="320" cy="380" r="12" fill="none" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="320" cy="380" r="6" fill="none" stroke="#C41E3A" strokeWidth="1" />
      </g>
      
      {/* Traditional Haku Patasi (Blouse) and Phariya (Wrap) */}
      <ellipse cx="200" cy="370" rx="95" ry="105" fill="url(#sariGradient)" />
      <rect x="125" y="265" width="150" height="130" fill="#D4AF37" rx="20" />
      
      {/* Intricate traditional patterns on clothing */}
      <g stroke="#C41E3A" strokeWidth="2" fill="none" opacity="0.8">
        <path d="M140 280 Q160 275 180 280 Q200 275 220 280 Q240 275 260 280" />
        <path d="M140 300 Q160 295 180 300 Q200 295 220 300 Q240 295 260 300" />
        <path d="M140 320 Q160 315 180 320 Q200 315 220 320 Q240 315 260 320" />
      </g>
      
      {/* Traditional border designs */}
      <rect x="130" y="265" width="140" height="8" fill="#8B4513" />
      <path d="M135 269 L145 269 M155 269 L165 269 M175 269 L185 269 M195 269 L205 269 M215 269 L225 269 M235 269 L245 269 M255 269 L265 269" 
            stroke="#D4AF37" strokeWidth="2" />
      
      {/* Face */}
      <ellipse cx="200" cy="200" rx="55" ry="65" fill="#F4A460" />
      
      {/* Traditional Hair Style with regional variation */}
      <ellipse cx="200" cy="145" rx="75" ry="45" fill="#2F1B14" />
      <path d="M125 145 Q145 120 165 135 Q185 115 200 135 Q215 115 235 135 Q255 120 275 145" fill="#2F1B14" />
      
      {/* Elaborate Hair Ornaments (Sirbandi) */}
      <circle cx="150" cy="135" r="5" fill="#D4AF37" />
      <circle cx="200" cy="120" r="6" fill="#FFD700" />
      <circle cx="250" cy="135" r="5" fill="#D4AF37" />
      <rect x="195" y="115" width="10" height="3" fill="#C41E3A" />
      
      {/* Traditional hair decoration (Chhuti) */}
      <path d="M180 130 Q200 125 220 130" stroke="#D4AF37" strokeWidth="3" fill="none" />
      <circle cx="190" cy="128" r="2" fill="#FFD700" />
      <circle cx="200" cy="127" r="2" fill="#FFD700" />
      <circle cx="210" cy="128" r="2" fill="#FFD700" />
      
      {/* Eyes with traditional kohl */}
      <ellipse cx="185" cy="185" rx="8" ry="12" fill="white" />
      <ellipse cx="215" cy="185" rx="8" ry="12" fill="white" />
      <circle cx="185" cy="185" r="4" fill="black" />
      <circle cx="215" cy="185" r="4" fill="black" />
      
      {/* Extended eyelashes and kohl */}
      <path d="M175 175 L178 170" stroke="black" strokeWidth="1.5" />
      <path d="M193 175 L190 169" stroke="black" strokeWidth="1.5" />
      <path d="M207 175 L210 169" stroke="black" strokeWidth="1.5" />
      <path d="M225 175 L222 170" stroke="black" strokeWidth="1.5" />
      
      {/* Nose */}
      <path d="M200 195 L195 205 Q200 210 205 205 Z" fill="#E6967A" />
      
      {/* Traditional Nose Ring (Phuli) */}
      <circle cx="198" cy="205" r="3" fill="none" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="198" cy="205" r="1" fill="#D4AF37" />
      
      {/* Gentle smile */}
      <path d="M188 225 Q200 238 212 225" stroke="#8B4513" strokeWidth="2" fill="none" />
      
      {/* Traditional Tilaka (Forehead marking) */}
      <circle cx="200" cy="165" r="4" fill="#C41E3A" />
      <path d="M200 158 L200 172" stroke="#C41E3A" strokeWidth="3" />
      <path d="M196 165 L204 165" stroke="#C41E3A" strokeWidth="2" />
      
      {/* Arms */}
      <ellipse cx="105" cy="320" rx="20" ry="58" fill="#F4A460" />
      <ellipse cx="295" cy="320" rx="20" ry="58" fill="#F4A460" />
      
      {/* Elaborate Traditional Bangles (Chooda) */}
      <g stroke="#D4AF37" strokeWidth="2" fill="#D4AF37">
        <rect x="100" y="305" width="12" height="5" rx="2" />
        <rect x="100" y="315" width="12" height="5" rx="2" fill="#C41E3A" />
        <rect x="100" y="325" width="12" height="5" rx="2" />
        <rect x="100" y="335" width="12" height="5" rx="2" fill="#C41E3A" />
        
        <rect x="290" y="305" width="12" height="5" rx="2" />
        <rect x="290" y="315" width="12" height="5" rx="2" fill="#C41E3A" />
        <rect x="290" y="325" width="12" height="5" rx="2" />
        <rect x="290" y="335" width="12" height="5" rx="2" fill="#C41E3A" />
      </g>
      
      {/* Hands holding traditional items */}
      <ellipse cx="85" cy="385" rx="14" ry="20" fill="#F4A460" />
      <ellipse cx="315" cy="385" rx="14" ry="20" fill="#F4A460" />
      
      {/* Left hand holding prayer beads (Mala) */}
      <circle cx="78" cy="375" r="2" fill="#8B4513" />
      <circle cx="75" cy="378" r="2" fill="#8B4513" />
      <circle cx="78" cy="381" r="2" fill="#8B4513" />
      <circle cx="81" cy="378" r="2" fill="#8B4513" />
      
      {/* Right hand holding traditional bamboo basket */}
      <ellipse cx="320" cy="375" rx="8" ry="12" fill="#DEB887" stroke="#8B4513" strokeWidth="1" />
      <path d="M315 370 L325 370 M315 375 L325 375 M315 380 L325 380" stroke="#8B4513" strokeWidth="1" />
      
      {/* Elaborate Traditional Necklace (Tilhari) */}
      <ellipse cx="200" cy="248" rx="45" ry="10" fill="none" stroke="#D4AF37" strokeWidth="4" />
      <circle cx="200" cy="248" r="8" fill="#D4AF37" />
      <circle cx="185" cy="250" r="3" fill="#FFD700" />
      <circle cx="215" cy="250" r="3" fill="#FFD700" />
      <circle cx="175" cy="252" r="2" fill="#C41E3A" />
      <circle cx="225" cy="252" r="2" fill="#C41E3A" />
      
      {/* Additional jewelry layers */}
      <ellipse cx="200" cy="260" rx="35" ry="8" fill="none" stroke="#C41E3A" strokeWidth="2" />
      
      {/* Traditional long skirt/sari draping */}
      <path d="M125 390 Q100 410 130 450 Q160 470 190 450 Q220 430 250 450 Q280 470 310 450 Q340 410 315 390" 
            fill="url(#sariPattern)" opacity="0.9" />
      
      {/* Feet in traditional footwear */}
      <ellipse cx="180" cy="490" rx="20" ry="7" fill="#8B4513" />
      <ellipse cx="220" cy="490" rx="20" ry="7" fill="#8B4513" />
      
      {/* Traditional decorative elements on shoes */}
      <circle cx="180" cy="488" r="2" fill="#D4AF37" />
      <circle cx="220" cy="488" r="2" fill="#D4AF37" />
      
      {/* Decorative marigold flowers in hair */}
      <g transform="translate(130, 155)">
        <circle r="4" fill="#FF8C00" />
        <circle r="2" fill="#FFD700" />
        <path d="M-2 0 L2 0 M0 -2 L0 2" stroke="#FF6347" strokeWidth="1" />
      </g>
      <g transform="translate(270, 155)">
        <circle r="4" fill="#FF8C00" />
        <circle r="2" fill="#FFD700" />
        <path d="M-2 0 L2 0 M0 -2 L0 2" stroke="#FF6347" strokeWidth="1" />
      </g>
      
      {/* Traditional temple motifs */}
      <g transform="translate(160, 350)" opacity="0.6">
        <path d="M0 0 L-3 -6 L3 -6 Z" fill="#8B4513" />
        <rect x="-2" y="0" width="4" height="8" fill="#8B4513" />
      </g>
      <g transform="translate(240, 350)" opacity="0.6">
        <path d="M0 0 L-3 -6 L3 -6 Z" fill="#8B4513" />
        <rect x="-2" y="0" width="4" height="8" fill="#8B4513" />
      </g>
      
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="traditionalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#C41E3A" />
        </linearGradient>
        <linearGradient id="sariGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C41E3A" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#A0522D" />
        </linearGradient>
        <linearGradient id="sariPattern" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#CD853F" />
        </linearGradient>
      </defs>
    </svg>
  );
}
