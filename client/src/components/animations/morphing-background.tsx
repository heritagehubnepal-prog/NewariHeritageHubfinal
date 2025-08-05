import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function MorphingBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create morphing shapes
    const shapes: HTMLDivElement[] = [];
    for (let i = 0; i < 5; i++) {
      const shape = document.createElement('div');
      shape.className = 'morphing-shape';
      shape.style.cssText = `
        position: absolute;
        width: ${Math.random() * 200 + 100}px;
        height: ${Math.random() * 200 + 100}px;
        border-radius: 50%;
        opacity: 0.1;
        pointer-events: none;
      `;
      
      const colors = ['#D4AF37', '#8B4513', '#228B22', '#FF6B35', '#6B8E23'];
      shape.style.background = `linear-gradient(45deg, ${colors[i]}, ${colors[(i + 1) % colors.length]})`;
      
      container.appendChild(shape);
      shapes.push(shape);
    }

    // Animate shapes
    shapes.forEach((shape, index) => {
      gsap.set(shape, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(shape, {
        x: `+=${Math.random() * 400 - 200}`,
        y: `+=${Math.random() * 400 - 200}`,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 10 + 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 2
      });

      // Morphing animation
      gsap.to(shape, {
        borderRadius: Math.random() > 0.5 ? '30%' : '70%',
        duration: Math.random() * 8 + 4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 1.5
      });
    });

    return () => {
      shapes.forEach((shape: HTMLDivElement) => shape.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}