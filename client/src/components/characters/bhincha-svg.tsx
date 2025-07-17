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
      {/* Body shape under sari - more natural torso */}
      <ellipse cx="200" cy="340" rx="35" ry="45" fill="#F4A460" opacity="0.8" />
      
      {/* Main black sari body */}
      <ellipse cx="200" cy="390" rx="100" ry="85" fill="#1a1a1a" />
      
      {/* Sari draping with natural folds */}
      <path d="M110 370 Q130 360 150 370 Q170 365 190 370 Q210 365 230 370 Q250 360 270 370 Q290 375 300 390 Q290 410 270 400 Q250 405 230 400 Q210 405 190 400 Q170 405 150 400 Q130 410 110 390 Q120 375 110 370" fill="#1a1a1a" opacity="0.9" />
      
      {/* Traditional red border on sari */}
      <ellipse cx="200" cy="390" rx="100" ry="85" fill="none" stroke="#C41E3A" strokeWidth="6" />
      <ellipse cx="200" cy="390" rx="90" ry="75" fill="none" stroke="#C41E3A" strokeWidth="2" />
      
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
      
      {/* Neck - more natural connection */}
      <ellipse cx="200" cy="245" rx="18" ry="20" fill="#F4A460" />
      <ellipse cx="200" cy="245" rx="15" ry="17" fill="#E6967A" opacity="0.2" />
      
      {/* Shoulders */}
      <ellipse cx="200" cy="275" rx="55" ry="20" fill="#F4A460" />
      <ellipse cx="200" cy="275" rx="50" ry="15" fill="#E6967A" opacity="0.3" />
      
      {/* Face with more human proportions */}
      <ellipse cx="200" cy="195" rx="40" ry="50" fill="#F4A460" />
      
      {/* Natural facial shading */}
      <ellipse cx="200" cy="195" rx="35" ry="45" fill="#F4A460" opacity="0.3" />
      <ellipse cx="195" cy="210" rx="6" ry="3" fill="#E6967A" opacity="0.5" />
      <ellipse cx="205" cy="210" rx="6" ry="3" fill="#E6967A" opacity="0.5" />
      
      {/* Traditional Hair Style - more natural */}
      <ellipse cx="200" cy="155" rx="60" ry="40" fill="#2F1B14" />
      <path d="M140 155 Q160 135 180 150 Q190 140 200 150 Q210 140 220 150 Q240 135 260 155 Q250 170 230 165 Q215 175 200 165 Q185 175 170 165 Q150 170 140 155" fill="#2F1B14" />
      
      {/* Hair parting and natural texture */}
      <path d="M200 125 Q205 140 210 155 Q200 160 190 155 Q195 140 200 125" fill="#1a0f0a" />
      
      {/* Elaborate Hair Ornaments (Sirbandi) */}
      <circle cx="165" cy="145" r="4" fill="#D4AF37" />
      <circle cx="200" cy="130" r="5" fill="#FFD700" />
      <circle cx="235" cy="145" r="4" fill="#D4AF37" />
      <rect x="197" y="127" width="6" height="2" fill="#C41E3A" />
      
      {/* Traditional hair decoration (Chhuti) */}
      <path d="M180 140 Q200 135 220 140" stroke="#D4AF37" strokeWidth="2" fill="none" />
      <circle cx="190" cy="138" r="1.5" fill="#FFD700" />
      <circle cx="200" cy="137" r="1.5" fill="#FFD700" />
      <circle cx="210" cy="138" r="1.5" fill="#FFD700" />
      
      {/* More expressive human eyes */}
      <ellipse cx="185" cy="180" rx="10" ry="8" fill="white" />
      <ellipse cx="215" cy="180" rx="10" ry="8" fill="white" />
      
      {/* Iris and pupils */}
      <circle cx="185" cy="180" r="5" fill="#4A4A4A" />
      <circle cx="215" cy="180" r="5" fill="#4A4A4A" />
      <circle cx="185" cy="180" r="3" fill="black" />
      <circle cx="215" cy="180" r="3" fill="black" />
      
      {/* Light reflection in eyes */}
      <circle cx="186" cy="178" r="1" fill="white" opacity="0.8" />
      <circle cx="216" cy="178" r="1" fill="white" opacity="0.8" />
      
      {/* Eyebrows - more natural shape */}
      <path d="M175 170 Q185 167 195 170" stroke="#2F1B14" strokeWidth="3" fill="none" />
      <path d="M205 170 Q215 167 225 170" stroke="#2F1B14" strokeWidth="3" fill="none" />
      
      {/* Traditional kohl with softer appearance */}
      <path d="M175 175 Q185 172 195 175" stroke="black" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M205 175 Q215 172 225 175" stroke="black" strokeWidth="1" fill="none" opacity="0.7" />
      
      {/* Natural eyelashes */}
      <g stroke="black" strokeWidth="0.8" opacity="0.6">
        <path d="M177 175 L175 172" />
        <path d="M180 174 L178 171" />
        <path d="M183 174 L182 171" />
        <path d="M187 174 L187 171" />
        <path d="M190 174 L191 171" />
        <path d="M193 174 L195 171" />
        
        <path d="M207 174 L205 171" />
        <path d="M210 174 L208 171" />
        <path d="M213 174 L212 171" />
        <path d="M217 174 L217 171" />
        <path d="M220 174 L221 171" />
        <path d="M223 175 L225 172" />
      </g>
      
      {/* More realistic nose */}
      <path d="M200 190 L198 198 Q200 202 202 198 Z" fill="#E6967A" />
      <path d="M198 195 Q200 197 202 195" stroke="#D2A679" strokeWidth="0.5" fill="none" />
      
      {/* Traditional Nose Ring (Phuli) - smaller and more delicate */}
      <circle cx="199" cy="198" r="2" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
      <circle cx="199" cy="198" r="0.8" fill="#D4AF37" />
      
      {/* Natural smile with lip definition */}
      <path d="M190 215 Q200 225 210 215" stroke="#B8860B" strokeWidth="1.5" fill="none" />
      <path d="M192 218 Q200 222 208 218" fill="#CD853F" opacity="0.6" />
      
      {/* Traditional Tilaka (Forehead marking) - more refined */}
      <circle cx="200" cy="160" r="3" fill="#C41E3A" />
      <path d="M200 154 L200 166" stroke="#C41E3A" strokeWidth="2" />
      <path d="M197 160 L203 160" stroke="#C41E3A" strokeWidth="1.5" />
      
      {/* More natural arms with proper joints */}
      <ellipse cx="120" cy="305" rx="15" ry="35" fill="#F4A460" />
      <ellipse cx="280" cy="305" rx="15" ry="35" fill="#F4A460" />
      
      {/* Forearms */}
      <ellipse cx="105" cy="350" rx="12" ry="30" fill="#F4A460" />
      <ellipse cx="295" cy="350" rx="12" ry="30" fill="#F4A460" />
      
      {/* Arm shading for depth */}
      <ellipse cx="115" cy="310" rx="8" ry="25" fill="#E6967A" opacity="0.3" />
      <ellipse cx="285" cy="310" rx="8" ry="25" fill="#E6967A" opacity="0.3" />
      
      {/* Elaborate Traditional Bangles (Chooda) on wrists */}
      <g stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37">
        <rect x="100" y="330" width="10" height="4" rx="2" />
        <rect x="100" y="336" width="10" height="4" rx="2" fill="#C41E3A" />
        <rect x="100" y="342" width="10" height="4" rx="2" />
        <rect x="100" y="348" width="10" height="4" rx="2" fill="#C41E3A" />
        
        <rect x="290" y="330" width="10" height="4" rx="2" />
        <rect x="290" y="336" width="10" height="4" rx="2" fill="#C41E3A" />
        <rect x="290" y="342" width="10" height="4" rx="2" />
        <rect x="290" y="348" width="10" height="4" rx="2" fill="#C41E3A" />
      </g>
      
      {/* More realistic hands with fingers */}
      <ellipse cx="95" cy="385" rx="12" ry="18" fill="#F4A460" />
      <ellipse cx="305" cy="385" rx="12" ry="18" fill="#F4A460" />
      
      {/* Fingers on left hand */}
      <ellipse cx="90" cy="375" rx="3" ry="8" fill="#F4A460" />
      <ellipse cx="94" cy="372" rx="3" ry="10" fill="#F4A460" />
      <ellipse cx="98" cy="373" rx="3" ry="9" fill="#F4A460" />
      <ellipse cx="102" cy="375" rx="3" ry="7" fill="#F4A460" />
      
      {/* Fingers on right hand */}
      <ellipse cx="298" cy="375" rx="3" ry="7" fill="#F4A460" />
      <ellipse cx="302" cy="373" rx="3" ry="9" fill="#F4A460" />
      <ellipse cx="306" cy="372" rx="3" ry="10" fill="#F4A460" />
      <ellipse cx="310" cy="375" rx="3" ry="8" fill="#F4A460" />
      
      {/* Left hand holding prayer beads (Mala) - more detailed */}
      <circle cx="88" cy="378" r="1.5" fill="#8B4513" />
      <circle cx="85" cy="381" r="1.5" fill="#8B4513" />
      <circle cx="88" cy="384" r="1.5" fill="#8B4513" />
      <circle cx="91" cy="381" r="1.5" fill="#8B4513" />
      <path d="M85 381 Q88 378 91 381 Q88 384 85 381" stroke="#654321" strokeWidth="0.5" fill="none" />
      
      {/* Right hand holding traditional lotus flower */}
      <ellipse cx="308" cy="378" rx="6" ry="8" fill="#FFB6C1" />
      <path d="M305 375 Q308 372 311 375 Q308 378 305 375" fill="#FF69B4" />
      <path d="M305 381 Q308 384 311 381 Q308 378 305 381" fill="#FF69B4" />
      <circle cx="308" cy="378" r="2" fill="#FFD700" />
      
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
