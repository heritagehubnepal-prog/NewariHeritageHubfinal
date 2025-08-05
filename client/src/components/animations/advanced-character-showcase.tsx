import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import LottieCharacter from './lottie-character';
import BhinchaSvg from '@/components/characters/bhincha-svg';
import MinchaSvg from '@/components/characters/mincha-svg';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Heart, Leaf, Sparkles } from 'lucide-react';

gsap.registerPlugin(MotionPathPlugin);

export default function AdvancedCharacterShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bhinchRef = useRef<HTMLDivElement>(null);
  const minchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !bhinchRef.current || !minchaRef.current) return;

    // Create magical sparkles animation
    const createSparkle = (x: number, y: number) => {
      const sparkle = document.createElement('div');
      sparkle.innerHTML = '✨';
      sparkle.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        font-size: 20px;
        pointer-events: none;
        z-index: 10;
      `;
      containerRef.current?.appendChild(sparkle);

      gsap.fromTo(sparkle, 
        { scale: 0, rotation: 0, opacity: 0 },
        { 
          scale: 1, 
          rotation: 360, 
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          onComplete: () => {
            gsap.to(sparkle, {
              y: -50,
              opacity: 0,
              duration: 1,
              onComplete: () => sparkle.remove()
            });
          }
        }
      );
    };

    // Character floating animation with sparkles
    const floatTL = gsap.timeline({ repeat: -1, yoyo: true });
    
    floatTL.to([bhinchRef.current, minchaRef.current], {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      stagger: 0.5
    });

    // Magical interaction animations
    const bhinchClick = () => {
      const rect = bhinchRef.current?.getBoundingClientRect();
      if (rect) {
        createSparkle(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
      
      gsap.to(bhinchRef.current, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      });
    };

    const minchaClick = () => {
      const rect = minchaRef.current?.getBoundingClientRect();
      if (rect) {
        createSparkle(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
      
      gsap.to(minchaRef.current, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      });
    };

    bhinchRef.current?.addEventListener('click', bhinchClick);
    minchaRef.current?.addEventListener('click', minchaClick);

    return () => {
      floatTL.kill();
      bhinchRef.current?.removeEventListener('click', bhinchClick);
      minchaRef.current?.removeEventListener('click', minchaClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative flex justify-center items-center gap-20 py-16">
      {/* Bhincha Character */}
      <div ref={bhinchRef} className="text-center cursor-pointer group">
        <div className="relative">
          <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-newari-red/20 to-newari-gold/20 p-4 shadow-2xl group-hover:shadow-newari-red/50 transition-all duration-300">
            <LottieCharacter
              fallbackSvg={<BhinchaSvg />}
              size="xl"
              className="w-full h-full"
            />
          </div>
          
          {/* Floating cultural elements */}
          <div className="absolute -top-4 -right-4 animate-bounce">
            <div className="w-8 h-8 bg-newari-red rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        
        <h3 className="text-3xl font-bold text-newari-red mb-2">Bhincha</h3>
        <p className="text-newari-brown mb-4 italic">"守护传统文化的传承者"</p>
        <p className="text-gray-600 max-w-xs">Traditional Newari cultural guardian preserving sacred heritage and stories</p>
        
        <Link href="/character/bhincha">
          <Button className="mt-4 bg-newari-red hover:bg-newari-red/90 group-hover:scale-105 transition-all">
            Learn About Bhincha
          </Button>
        </Link>
      </div>

      {/* Connection Animation */}
      <div className="flex flex-col items-center">
        <Sparkles className="w-8 h-8 text-newari-gold animate-pulse" />
        <div className="w-1 h-16 bg-gradient-to-b from-newari-red to-eco-green rounded-full my-4"></div>
        <Sparkles className="w-8 h-8 text-eco-green animate-pulse" />
      </div>

      {/* Mincha Character */}
      <div ref={minchaRef} className="text-center cursor-pointer group">
        <div className="relative">
          <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-gradient-to-br from-eco-green/20 to-newari-sage/20 p-4 shadow-2xl group-hover:shadow-eco-green/50 transition-all duration-300">
            <LottieCharacter
              fallbackSvg={<MinchaSvg />}
              size="xl"
              className="w-full h-full"
            />
          </div>
          
          {/* Floating eco elements */}
          <div className="absolute -top-4 -left-4 animate-bounce delay-1000">
            <div className="w-8 h-8 bg-eco-green rounded-full flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        
        <h3 className="text-3xl font-bold text-eco-green mb-2">Mincha</h3>
        <p className="text-newari-brown mb-4 italic">"可持续发展的文化桥梁"</p>
        <p className="text-gray-600 max-w-xs">Eco-cultural bridge connecting ancient wisdom with modern sustainability</p>
        
        <Link href="/character/mincha">
          <Button className="mt-4 bg-eco-green hover:bg-eco-green/90 group-hover:scale-105 transition-all">
            Learn About Mincha
          </Button>
        </Link>
      </div>
    </div>
  );
}