import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CultureCard from "@/components/heritage/culture-card";
import { heritageItems } from "@/data/heritage";
import { GraduationCap, ArrowRight, Calendar, Building, UtensilsCrossed, Volume2, VolumeX } from "lucide-react";
import MinchaSVG from "@/components/characters/mincha-svg";
import BhinchaSVG from "@/components/characters/bhincha-svg";

import patanImg1 from "@assets/stock_images/patan_durbar_square__f251ae1e.jpg";
import patanImg2 from "@assets/stock_images/patan_durbar_square__800b6cc8.jpg";
import bhaktapurImg1 from "@assets/stock_images/bhaktapur_nyatapola__4db5b080.jpg";
import indraJatraImg1 from "@assets/stock_images/indra_jatra_festival_c61bf207.jpg";
import cuisineImg1 from "@assets/stock_images/traditional_newari_c_14b8bc6d.jpg";

const slideshowImages = [
  { url: patanImg1, title: "Patan Durbar Square" },
  { url: bhaktapurImg1, title: "Bhaktapur Temples" },
  { url: indraJatraImg1, title: "Indra Jatra Festival" },
  { url: cuisineImg1, title: "Traditional Newari Cuisine" },
  { url: patanImg2, title: "Ancient Architecture" }
];

export default function Heritage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedGuide, setSelectedGuide] = useState<"mincha" | "bhincha">("mincha");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  const speakDialogue = (text: string) => {
    if (!isMuted) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = selectedGuide === "mincha" ? 1.1 : 1.3;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const categories = [
    { 
      id: "architecture", 
      name: "Architecture", 
      icon: Building,
      dialogue: {
        mincha: "Did you know the windows in Patan Durbar Square tell stories? Tap to find the hidden ones!",
        bhincha: "Our temples are not just stone and wood; they are homes for our gods and spirits."
      }
    },
    { 
      id: "festivals", 
      name: "Festivals", 
      icon: Calendar,
      dialogue: {
        mincha: "I'm still learning the complex rituals of Indra Jatra, but the energy is incredible!",
        bhincha: "Wait until you see the Lakhey dance! It's the heartbeat of our city."
      }
    },
    { 
      id: "cuisine", 
      name: "Cuisine", 
      icon: UtensilsCrossed,
      dialogue: {
        mincha: "Bhincha's Yomari is the best! Did you know it represents the moon?",
        bhincha: "A Newari feast is incomplete without Samay Baji. Let's explore the flavors together!"
      }
    },
  ];

  return (
    <div className="min-h-screen bg-newari-cream">
      {/* Hero Section with Slideshow */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000"
              style={{ backgroundImage: `url(${slideshowImages[currentSlide].url})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Character Selection Toggle */}
        <div className="absolute top-24 left-8 z-20 flex flex-col gap-4">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20"
          >
            <p className="text-white text-xs font-bold mb-3 uppercase tracking-wider">Choose Your Guide</p>
            <div className="flex gap-4">
              <button 
                onClick={() => setSelectedGuide("mincha")}
                className={`relative group transition-all ${selectedGuide === "mincha" ? "scale-110" : "opacity-50 grayscale hover:grayscale-0 hover:opacity-100"}`}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center p-2 border-2 border-white/40">
                  <MinchaSVG className="w-full h-full" />
                </div>
                {selectedGuide === "mincha" && (
                  <motion.div layoutId="guide-ring" className="absolute -inset-1 border-2 border-newari-gold rounded-full" />
                )}
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">MINCHA</span>
              </button>
              <button 
                onClick={() => setSelectedGuide("bhincha")}
                className={`relative group transition-all ${selectedGuide === "bhincha" ? "scale-110" : "opacity-50 grayscale hover:grayscale-0 hover:opacity-100"}`}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center p-2 border-2 border-white/40">
                  <BhinchaSVG className="w-full h-full" />
                </div>
                {selectedGuide === "bhincha" && (
                  <motion.div layoutId="guide-ring" className="absolute -inset-1 border-2 border-newari-gold rounded-full" />
                )}
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">BHINCHA</span>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">Newari Heritage</h1>
            <p className="text-xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-xl mb-12">
              Walk through centuries of Newari art, ritual, and flavor — guided by {selectedGuide === "mincha" ? "Mincha, our history buff" : "Bhincha, our cultural guardian"}.
            </p>

            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-6">
              {categories.map((category) => {
                const IconComponent = category.icon;
                const dialogue = category.dialogue[selectedGuide];
                return (
                  <div key={category.id} className="group relative">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => speakDialogue(dialogue)}
                      className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-newari-red transition-all shadow-lg min-w-[160px]"
                    >
                      <IconComponent className="mr-2 h-5 w-5" />
                      {category.name}
                    </Button>
                    
                    {/* Character Dialogue Bubble */}
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        whileHover={{ opacity: 1, scale: 1, y: -10 }}
                        className="absolute -top-32 left-1/2 -translate-x-1/2 w-48 pointer-events-none opacity-0 group-hover:opacity-100 transition-all z-30"
                      >
                        <div className="bg-white text-newari-brown p-3 rounded-2xl shadow-2xl border-2 border-newari-gold text-sm font-medium relative">
                          <p>"{dialogue}"</p>
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-newari-gold rotate-45" />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Audio Control */}
          <div className="absolute bottom-8 right-8">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleAudio}
              className="rounded-full bg-black/20 backdrop-blur-md border-white/30 text-white hover:bg-white/40"
            >
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </Button>
            <audio 
              ref={audioRef}
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
              loop 
            />
          </div>
        </div>
      </section>

      {/* Heritage Items Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold newari-red mb-6">Cultural Elements</h2>
            <p className="text-xl newari-brown max-w-3xl mx-auto">
              Discover the intricate details of Newari culture through these carefully curated cultural elements, 
              each representing centuries of tradition and wisdom.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heritageItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CultureCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Learning Section */}
      <section className="py-20 bg-gradient-to-br from-newari-beige to-newari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-newari-gold"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold newari-red mb-6">Interactive Learning Journey</h3>
                <p className="text-lg newari-brown mb-8 leading-relaxed">
                  Join Mincha and Bhincha on an educational adventure through Nepal's cultural heritage. 
                  Our interactive modules make learning about traditions, languages, and customs engaging for all ages.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-newari-beige rounded-lg p-4">
                    <h4 className="font-semibold newari-red mb-2">Cultural Timeline</h4>
                    <p className="text-sm newari-brown">
                      Explore the evolution of Newari culture through interactive historical timelines
                    </p>
                  </div>
                  <div className="bg-newari-beige rounded-lg p-4">
                    <h4 className="font-semibold newari-red mb-2">Language Lessons</h4>
                    <p className="text-sm newari-brown">
                      Learn traditional Newari phrases and their cultural significance
                    </p>
                  </div>
                  <div className="bg-newari-beige rounded-lg p-4">
                    <h4 className="font-semibold newari-red mb-2">Festival Guides</h4>
                    <p className="text-sm newari-brown">
                      Understand the rituals and meanings behind major Newari celebrations
                    </p>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-newari-red hover:bg-red-700 text-white transform hover:scale-105 transition-all"
                >
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Start Learning Journey
                </Button>
              </div>
              
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-newari-gold to-newari-red rounded-2xl shadow-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">Interactive Learning</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-newari-red/20 to-transparent rounded-2xl"></div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-newari-gold rounded-full opacity-70"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-8 h-8 bg-white rounded-full opacity-80"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cultural Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold newari-red mb-6">Core Values</h2>
            <p className="text-xl newari-brown max-w-3xl mx-auto">
              The fundamental principles that have guided Newari society for generations, 
              preserved and passed down through stories and traditions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Community Harmony",
                description: "The belief that individual well-being is inseparable from community prosperity",
                icon: "🤝"
              },
              {
                title: "Cultural Preservation",
                description: "Dedication to maintaining traditions while adapting to modern times",
                icon: "🏛️"
              },
              {
                title: "Artistic Expression",
                description: "The integration of beauty and meaning in daily life through art and craft",
                icon: "🎨"
              },
              {
                title: "Spiritual Balance",
                description: "Harmony between material life and spiritual practice",
                icon: "🕉️"
              },
              {
                title: "Educational Wisdom",
                description: "The sharing of knowledge across generations through storytelling",
                icon: "📚"
              },
              {
                title: "Environmental Respect",
                description: "Living in harmony with nature and honoring the earth",
                icon: "🌱"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-newari-cream to-white rounded-2xl p-6 shadow-lg border-2 border-newari-beige hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold newari-red mb-3">{value.title}</h3>
                    <p className="newari-brown text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
