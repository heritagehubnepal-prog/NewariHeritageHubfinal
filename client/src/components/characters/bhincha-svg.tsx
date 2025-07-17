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
      
      {/* Traditional Black Haku Patasi (Newari Sari) with Red Border */}
      {/* Main black sari body */}
      <ellipse cx="200" cy="390" rx="110" ry="95" fill="#1a1a1a" />
      
      {/* Traditional red border on sari */}
      <ellipse cx="200" cy="390" rx="110" ry="95" fill="none" stroke="#C41E3A" strokeWidth="8" />
      <ellipse cx="200" cy="390" rx="100" ry="85" fill="none" stroke="#C41E3A" strokeWidth="3" />
      
      {/* Black Cholo (Blouse) with intricate golden patterns */}
      <rect x="135" y="255" width="130" height="80" fill="#1a1a1a" rx="15" />
      
      {/* Red border on blouse */}
      <rect x="135" y="255" width="130" height="8" fill="#C41E3A" />
      <rect x="135" y="327" width="130" height="8" fill="#C41E3A" />
      <rect x="135" y="255" width="8" height="80" fill="#C41E3A" />
      <rect x="257" y="255" width="8" height="80" fill="#C41E3A" />
      
      {/* Intricate golden patterns on black fabric - Traditional Newari motifs */}
      <g stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" opacity="0.8">
        {/* Geometric diamond patterns */}
        <path d="M150 270 L158 278 L150 286 L142 278 Z" />
        <path d="M180 270 L188 278 L180 286 L172 278 Z" />
        <path d="M210 270 L218 278 L210 286 L202 278 Z" />
        <path d="M240 270 L248 278 L240 286 L232 278 Z" />
        
        {/* Floral motifs */}
        <circle cx="155" cy="295" r="3" />
        <circle cx="185" cy="295" r="3" />
        <circle cx="215" cy="295" r="3" />
        <circle cx="245" cy="295" r="3" />
        
        {/* Traditional weaving pattern */}
        <path d="M145 310 Q155 305 165 310 Q175 305 185 310 Q195 305 205 310 Q215 305 225 310 Q235 305 245 310 Q255 305 260 310" />
        <path d="M145 318 Q155 313 165 318 Q175 313 185 318 Q195 313 205 318 Q215 313 225 318 Q235 313 245 318 Q255 313 260 318" />
      </g>
      
      {/* Additional golden thread work details */}
      <g stroke="#FFD700" strokeWidth="1" fill="none" opacity="0.6">
        <path d="M140 265 L260 265" />
        <path d="M140 330 L260 330" />
        <circle cx="170" cy="280" r="2" />
        <circle cx="200" cy="280" r="2" />
        <circle cx="230" cy="280" r="2" />
      </g>
      
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
      
      {/* Elaborate Traditional Necklace (Tilhari) - Heavy gold jewelry */}
      <ellipse cx="200" cy="248" rx="50" ry="12" fill="none" stroke="#D4AF37" strokeWidth="6" />
      <circle cx="200" cy="248" r="10" fill="#FFD700" />
      <circle cx="185" cy="250" r="4" fill="#D4AF37" />
      <circle cx="215" cy="250" r="4" fill="#D4AF37" />
      <circle cx="170" cy="252" r="3" fill="#C41E3A" />
      <circle cx="230" cy="252" r="3" fill="#C41E3A" />
      <circle cx="155" cy="254" r="2" fill="#FFD700" />
      <circle cx="245" cy="254" r="2" fill="#FFD700" />
      
      {/* Multiple layers of traditional jewelry */}
      <ellipse cx="200" cy="260" rx="40" ry="10" fill="none" stroke="#C41E3A" strokeWidth="3" />
      <ellipse cx="200" cy="270" rx="30" ry="8" fill="none" stroke="#D4AF37" strokeWidth="2" />
      
      {/* Traditional Pote (Glass bead necklace) */}
      <g opacity="0.8">
        <circle cx="175" cy="265" r="2" fill="#C41E3A" />
        <circle cx="185" cy="263" r="2" fill="#228B22" />
        <circle cx="195" cy="262" r="2" fill="#C41E3A" />
        <circle cx="205" cy="262" r="2" fill="#228B22" />
        <circle cx="215" cy="263" r="2" fill="#C41E3A" />
        <circle cx="225" cy="265" r="2" fill="#228B22" />
      </g>
      
      {/* Traditional Black Surwal (Pants) underneath sari */}
      <rect x="170" y="420" width="60" height="55" fill="#1a1a1a" rx="5" />
      <rect x="175" y="420" width="50" height="55" fill="none" stroke="#C41E3A" strokeWidth="2" />
      
      {/* Traditional golden patterns on pants */}
      <g stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.7">
        <path d="M175 430 L225 430" />
        <path d="M175 440 L225 440" />
        <path d="M175 450 L225 450" />
        <path d="M175 460 L225 460" />
        <circle cx="185" cy="435" r="1.5" fill="#D4AF37" />
        <circle cx="200" cy="435" r="1.5" fill="#D4AF37" />
        <circle cx="215" cy="435" r="1.5" fill="#D4AF37" />
      </g>
      
      {/* Sari draping with authentic black fabric */}
      <path d="M125 390 Q100 410 130 430 Q160 450 190 430 Q220 410 250 430 Q280 450 310 430 Q340 410 315 390" 
            fill="#1a1a1a" opacity="0.9" />
      <path d="M125 390 Q100 410 130 430 Q160 450 190 430 Q220 410 250 430 Q280 450 310 430 Q340 410 315 390" 
            fill="none" stroke="#C41E3A" strokeWidth="4" opacity="0.8" />
      
      {/* Traditional golden thread work on sari draping */}
      <g stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.6">
        <path d="M140 400 Q170 395 200 400 Q230 395 260 400" />
        <path d="M150 415 Q180 410 210 415 Q240 410 270 415" />
        <circle cx="160" cy="405" r="2" fill="#FFD700" />
        <circle cx="200" cy="405" r="2" fill="#FFD700" />
        <circle cx="240" cy="405" r="2" fill="#FFD700" />
      </g>
      
      {/* Feet in traditional footwear */}
      <ellipse cx="180" cy="485" rx="20" ry="7" fill="#8B4513" />
      <ellipse cx="220" cy="485" rx="20" ry="7" fill="#8B4513" />
      
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
