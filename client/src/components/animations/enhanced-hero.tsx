import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import GSAPWrapper from './gsap-wrapper';
import LottieCharacter from './lottie-character';
import ParticleBackground from './particle-background';
import MorphingBackground from './morphing-background';
import BhinchaSvg from '@/components/characters/bhincha-svg';
import MinchaSvg from '@/components/characters/mincha-svg';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

gsap.registerPlugin(TextPlugin);

export default function EnhancedHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animated text typing effect
    if (titleRef.current) {
      tl.to(titleRef.current, {
        duration: 2,
        text: "Heritage Hub Nepal",
        ease: "none"
      });
    }

    if (subtitleRef.current) {
      tl.to(subtitleRef.current, {
        duration: 1.5,
        text: "Preserving Culture • Embracing Sustainability • Building Community",
        ease: "none",
        delay: 0.5
      }, "-=1");
    }

    // Floating animation for characters
    gsap.to(".character-float", {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-newari-cream via-newari-gold/20 to-newari-sage">
      {/* Advanced Background Effects */}
      <MorphingBackground />
      <ParticleBackground />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <GSAPWrapper animation="rotate" duration={20} trigger={false}>
          <div className="absolute top-20 left-10 w-32 h-32 bg-newari-gold/10 rounded-full blur-xl"></div>
        </GSAPWrapper>
        <GSAPWrapper animation="bounce" duration={15} delay={2} trigger={false}>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-newari-red/10 rounded-full blur-2xl"></div>
        </GSAPWrapper>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <GSAPWrapper animation="slideUp" duration={1.2} delay={0.3}>
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold text-newari-brown mb-6 tracking-tight"
          >
            {/* Text will be animated by GSAP */}
          </h1>
        </GSAPWrapper>

        <GSAPWrapper animation="fadeIn" duration={1} delay={0.8}>
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-newari-brown/80 mb-12 max-w-4xl mx-auto"
          >
            {/* Text will be animated by GSAP */}
          </p>
        </GSAPWrapper>

        {/* Enhanced character showcase */}
        <div className="flex justify-center items-center gap-16 mb-12">
          <GSAPWrapper animation="slideLeft" duration={1.2} delay={1.5}>
            <div className="text-center character-float">
              <LottieCharacter
                fallbackSvg={<BhinchaSvg />}
                size="xl"
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold text-newari-brown mb-2">Bhincha</h3>
              <p className="text-newari-brown/70">Cultural Guardian</p>
            </div>
          </GSAPWrapper>

          <GSAPWrapper animation="scale" duration={1.5} delay={2}>
            <div className="text-6xl text-newari-gold">✦</div>
          </GSAPWrapper>

          <GSAPWrapper animation="slideLeft" duration={1.2} delay={1.8}>
            <div className="text-center character-float">
              <LottieCharacter
                fallbackSvg={<MinchaSvg />}
                size="xl"
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold text-newari-brown mb-2">Mincha</h3>
              <p className="text-newari-brown/70">Eco-Cultural Bridge</p>
            </div>
          </GSAPWrapper>
        </div>

        <GSAPWrapper animation="bounce" duration={1} delay={2.5}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/heritage">
              <Button size="lg" className="bg-newari-red hover:bg-newari-red/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Heritage
              </Button>
            </Link>
            <Link href="/games">
              <Button size="lg" className="bg-newari-sage hover:bg-newari-sage/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Play Games
              </Button>
            </Link>
          </div>
        </GSAPWrapper>
      </div>

      {/* Scroll indicator */}
      <GSAPWrapper animation="bounce" duration={2} delay={3} trigger={false}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-newari-brown/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-newari-brown/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </GSAPWrapper>
    </section>
  );
}