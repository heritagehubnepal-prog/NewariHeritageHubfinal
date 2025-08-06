import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface GSAPWrapperProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'bounce' | 'scale' | 'rotate';
  duration?: number;
  delay?: number;
  trigger?: boolean;
  className?: string;
}

export default function GSAPWrapper({ 
  children, 
  animation = 'fadeIn', 
  duration = 1, 
  delay = 0, 
  trigger = false,
  className = '' 
}: GSAPWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animations = {
      fadeIn: { opacity: 0, y: 20 },
      slideUp: { y: 50, opacity: 0 },
      slideLeft: { x: -50, opacity: 0 },
      bounce: { scale: 0, opacity: 0 },
      scale: { scale: 0.8, opacity: 0 },
      rotate: { rotation: 360, opacity: 0, scale: 0.5 }
    };

    const fromProps = animations[animation] as any;
    const toProps = { ...fromProps };
    
    // Reset all properties to final state
    Object.keys(toProps).forEach((key: string) => {
      if (key === 'opacity') toProps[key] = 1;
      else if (key === 'scale') toProps[key] = 1;
      else if (key === 'rotation') toProps[key] = 0;
      else toProps[key] = 0;
    });

    if (trigger) {
      gsap.fromTo(element, fromProps, {
        ...toProps,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    } else {
      gsap.fromTo(element, fromProps, {
        ...toProps,
        duration,
        delay,
        ease: "power2.out"
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, [animation, duration, delay, trigger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}