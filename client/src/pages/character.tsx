import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { characters } from "@/data/characters";
import { stories } from "@/data/stories";
import StoryCard from "@/components/stories/story-card";
import MinchaSVG from "@/components/characters/mincha-svg";
import BhinchaSVG from "@/components/characters/bhincha-svg";
import { Book, Crown, Heart, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Character() {
  const { name } = useParams();
  const character = characters.find(c => c.name.toLowerCase() === name?.toLowerCase());
  const characterStories = stories.filter(s => s.narrator.toLowerCase().includes(name?.toLowerCase() || ""));

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-newari-cream">
        <Card className="max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <h1 className="text-2xl font-bold newari-red mb-4">Character Not Found</h1>
            <p className="newari-brown mb-6">The character you're looking for doesn't exist.</p>
            <Link href="/">
              <Button className="bg-newari-red hover:bg-red-700 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-newari-cream">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-newari-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="newari-brown hover:newari-red mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full max-w-md mx-auto aspect-[4/5] bg-gradient-to-br from-newari-cream to-white rounded-3xl shadow-2xl border-4 border-newari-gold flex items-center justify-center p-8 overflow-hidden">
                {character.name === "Mincha" ? (
                  <MinchaSVG className="w-full h-full object-contain transform scale-110" />
                ) : (
                  <BhinchaSVG className="w-full h-full object-contain transform scale-110" />
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold newari-red mb-6">
                {character.name}
              </h1>
              <p className="text-2xl newari-brown mb-8 italic">"{character.quote}"</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="bg-white border-2 border-newari-beige">
                  <CardContent className="p-6 text-center">
                    <Crown className="newari-gold w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-semibold newari-red mb-2">Role</h3>
                    <p className="text-sm newari-brown">{character.role}</p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-2 border-newari-beige">
                  <CardContent className="p-6 text-center">
                    <Heart className="newari-gold w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-semibold newari-red mb-2">Trait</h3>
                    <p className="text-sm newari-brown">{character.trait}</p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg newari-brown leading-relaxed mb-8">
                {character.description}
              </p>

              <Button 
                size="lg" 
                className="bg-newari-red hover:bg-red-700 text-white transform hover:scale-105 transition-all"
              >
                <Book className="mr-2 h-5 w-5" />
                Read {character.name === "Mincha" ? "His" : "Her"} Stories
              </Button>
            </motion.div>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold newari-red mb-6">
              Stories by {character.name}
            </h2>
            <p className="text-xl newari-brown max-w-3xl mx-auto">
              Discover the wisdom and magic woven into every tale told by {character.name}, 
              each story carrying the essence of Newari culture and tradition.
            </p>
          </motion.div>

          {characterStories.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {characterStories.map((story, index) => (
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
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-newari-beige rounded-full flex items-center justify-center mx-auto mb-6">
                  <Book className="w-12 h-12 newari-brown" />
                </div>
                <h3 className="text-2xl font-bold newari-red mb-4">More Stories Coming Soon</h3>
                <p className="newari-brown mb-6">
                  We're working on bringing you more wonderful stories from {character.name}. 
                  Check back soon for new tales of wisdom and adventure!
                </p>
                <Link href="/stories">
                  <Button className="bg-newari-gold hover:bg-yellow-600 text-white">
                    View All Stories
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Cultural Background Section */}
      <section className="py-20 bg-gradient-to-br from-newari-beige to-newari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-newari-gold"
          >
            <h3 className="text-3xl md:text-4xl font-bold newari-red mb-6 text-center">
              Cultural Significance of {character.name}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg newari-brown leading-relaxed mb-6">
                  {character.name} represents the timeless values and traditions of the Newari people. 
                  Through {character.name === "Mincha" ? "his" : "her"} stories and teachings, children learn about 
                  the importance of cultural preservation, community bonds, and the wisdom passed down through generations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-newari-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold newari-red mb-1">Cultural Ambassador</h4>
                      <p className="text-sm newari-brown">
                        Represents authentic Newari values and traditions to new generations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-newari-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold newari-red mb-1">Educational Guide</h4>
                      <p className="text-sm newari-brown">
                        Makes learning about heritage engaging and accessible for all ages
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-newari-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold newari-red mb-1">Community Bridge</h4>
                      <p className="text-sm newari-brown">
                        Connects past wisdom with present understanding
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-newari-gold to-newari-red rounded-2xl shadow-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Cultural Heritage</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-newari-red/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
