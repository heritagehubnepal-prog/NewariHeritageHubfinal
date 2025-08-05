import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GSAPWrapper from './gsap-wrapper';
import LottieCharacter from './lottie-character';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { 
  Heart, Building, Users, Leaf, 
  ShoppingBag, Calendar, Coffee, Video,
  Play, Book, GraduationCap, ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface EnhancedCharacterSectionProps {
  characters: any[];
}

export function EnhancedCharacterSection({ characters }: EnhancedCharacterSectionProps) {
  useEffect(() => {
    // Staggered card animations
    gsap.fromTo('.character-card', 
      { 
        y: 100, 
        opacity: 0, 
        scale: 0.8 
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.character-section',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="characters" className="character-section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GSAPWrapper animation="slideUp" trigger>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-newari-brown mb-6">
              Meet Our Cultural Ambassadors
            </h2>
            <p className="text-xl text-clay-brown max-w-3xl mx-auto">
              Discover the beautiful union of tradition and modernity through Mincha and Bhincha's journey
            </p>
          </div>
        </GSAPWrapper>

        <div className="grid md:grid-cols-2 gap-12">
          {characters.map((character, index) => (
            <Card key={character.id} className="character-card overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative h-96 bg-gradient-to-br from-newari-cream to-newari-gold/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LottieCharacter
                      fallbackSvg={character.name === 'Bhincha' ? 
                        <div className="w-48 h-48 bg-newari-red/20 rounded-full flex items-center justify-center">
                          <Heart className="w-16 h-16 text-newari-red" />
                        </div> :
                        <div className="w-48 h-48 bg-eco-green/20 rounded-full flex items-center justify-center">
                          <Leaf className="w-16 h-16 text-eco-green" />
                        </div>
                      }
                      size="xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{character.name}</h3>
                    <p className="text-white/90">{character.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{character.description}</p>
                  <Link href={`/character/${character.name.toLowerCase()}`}>
                    <Button className="w-full bg-newari-red hover:bg-newari-red/90">
                      Learn More About {character.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

interface EnhancedServicesSectionProps {
  services: any[];
}

export function EnhancedServicesSection({ services }: EnhancedServicesSectionProps) {
  useEffect(() => {
    // Service card hover animations
    gsap.utils.toArray('.service-card').forEach((card: any) => {
      const tl = gsap.timeline({ paused: true });
      
      tl.to(card, {
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.out"
      });

      card.addEventListener('mouseenter', () => tl.play());
      card.addEventListener('mouseleave', () => tl.reverse());
    });

    // Staggered entrance animation
    gsap.fromTo('.service-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section id="services" className="services-section py-20 bg-gradient-to-br from-newari-sage/10 to-eco-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GSAPWrapper animation="slideUp" trigger>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-newari-brown mb-6">
              Heritage Hub Services
            </h2>
            <p className="text-xl text-clay-brown max-w-3xl mx-auto">
              Comprehensive cultural preservation and sustainability solutions across Nepal
            </p>
          </div>
        </GSAPWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${service.iconBg}`}>
                  <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-newari-brown mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-sm text-eco-green font-medium">{service.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}