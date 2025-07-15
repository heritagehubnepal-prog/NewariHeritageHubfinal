import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CharacterCard from "@/components/characters/character-card";
import StoryCard from "@/components/stories/story-card";
import CultureCard from "@/components/heritage/culture-card";
import DownloadSection from "@/components/download/download-section";
import { characters } from "@/data/characters";
import { stories } from "@/data/stories";
import { heritageItems } from "@/data/heritage";
import { Play, Book, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const featuredStories = stories.slice(0, 3);
  const featuredHeritage = heritageItems.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-newari-cream to-newari-beige">
        {/* Cultural pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full cultural-pattern"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Meet <span className="newari-gold">Mincha</span> & <span className="newari-gold">Bhincha</span>
              </h1>
              <p className="text-xl md:text-2xl newari-brown mb-8 leading-relaxed">
                Discover the rich heritage of Nepal through our beloved Newari characters - guardians of tradition, culture, and timeless stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#characters">
                  <Button size="lg" className="bg-newari-red hover:bg-red-700 text-white transform hover:scale-105 transition-all">
                    <Play className="mr-2 h-5 w-5" />
                    Explore Characters
                  </Button>
                </Link>
                <Link href="/heritage">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-newari-gold newari-brown hover:bg-newari-gold hover:text-white transform hover:scale-105 transition-all"
                  >
                    <Book className="mr-2 h-5 w-5" />
                    Learn Heritage
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {characters.map((character, index) => (
                  <motion.div
                    key={character.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <CharacterCard character={character} />
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative cultural elements */}
              <motion.div 
                className="absolute -top-8 -right-8 w-16 h-16 bg-newari-gold rounded-full opacity-60 pulse-glow"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-newari-red rounded-full opacity-40"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Characters Gallery Section */}
      <section id="characters" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold newari-red mb-6">Our Heritage Characters</h2>
            <p className="text-xl newari-brown max-w-3xl mx-auto">
              Mincha and Bhincha represent the essence of Newari culture, carrying forward traditions, values, 
              and stories that have shaped Nepal's rich heritage for centuries.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {characters.map((character, index) => (
              <motion.div
                key={character.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-newari-cream to-white rounded-3xl p-8 shadow-2xl border-2 border-newari-gold"
              >
                <div className="text-center mb-8">
                  <div className="w-64 h-80 mx-auto mb-6">
                    {character.name === "Mincha" ? (
                      <div className="w-full h-full bg-gradient-to-b from-newari-gold to-newari-red rounded-2xl shadow-lg border-4 border-newari-gold flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">Mincha SVG</span>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-b from-newari-red to-newari-brown rounded-2xl shadow-lg border-4 border-newari-gold flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">Bhincha SVG</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-3xl font-bold newari-red mb-4">{character.name}</h3>
                  <p className="text-lg newari-brown mb-6 italic">"{character.quote}"</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 border-2 border-newari-beige">
                      <div className="newari-gold text-2xl mb-2">👑</div>
                      <h4 className="font-semibold newari-red">Role</h4>
                      <p className="text-sm newari-brown">{character.role}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-2 border-newari-beige">
                      <div className="newari-gold text-2xl mb-2">❤️</div>
                      <h4 className="font-semibold newari-red">Trait</h4>
                      <p className="text-sm newari-brown">{character.trait}</p>
                    </div>
                  </div>
                  
                  <p className="newari-brown leading-relaxed mb-6">
                    {character.description}
                  </p>
                  
                  <Link href={`/character/${character.name.toLowerCase()}`}>
                    <Button className="bg-newari-red hover:bg-red-700 text-white">
                      <Book className="mr-2 h-4 w-4" />
                      Read {character.name === "Mincha" ? "His" : "Her"} Stories
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Education Section */}
      <section className="py-20 bg-gradient-to-br from-newari-beige to-newari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold newari-red mb-6">Newari Heritage</h2>
            <p className="text-xl newari-brown max-w-3xl mx-auto">
              Explore the rich cultural tapestry of the Newari people through interactive learning experiences 
              guided by Mincha and Bhincha.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredHeritage.map((item, index) => (
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

          {/* Interactive Learning Section */}
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
                
                <div className="space-y-4 mb-8">
                  {[
                    "Cultural timeline exploration",
                    "Traditional language lessons", 
                    "Festival celebration guides"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-newari-gold rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="newari-brown">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/heritage">
                  <Button 
                    size="lg" 
                    className="bg-newari-red hover:bg-red-700 text-white transform hover:scale-105 transition-all"
                  >
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Start Learning
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-newari-gold to-newari-red rounded-2xl shadow-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">Cultural Learning Image</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-newari-red/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold newari-red mb-6">Stories & Legends</h2>
            <p className="text-xl newari-brown max-w-3xl mx-auto">
              Immerse yourself in timeless tales told by Mincha and Bhincha, where every story carries 
              the wisdom and magic of Newari culture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <StoryCard story={story} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/stories">
              <Button 
                size="lg" 
                className="bg-newari-gold hover:bg-yellow-600 text-white transform hover:scale-105 transition-all"
              >
                <Book className="mr-2 h-5 w-5" />
                View All Stories
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
    </div>
  );
}
