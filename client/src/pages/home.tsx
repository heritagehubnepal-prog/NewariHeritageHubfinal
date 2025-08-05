import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CharacterCard from "@/components/characters/character-card";
import StoryCard from "@/components/stories/story-card";
import CultureCard from "@/components/heritage/culture-card";
import DownloadSection from "@/components/download/download-section";
import MinchaSVG from "@/components/characters/mincha-svg";
import BhinchaSVG from "@/components/characters/bhincha-svg";
import GSAPWrapper from "@/components/animations/gsap-wrapper";
import LottieCharacter from "@/components/animations/lottie-character";
import EnhancedHero from "@/components/animations/enhanced-hero";
import ParticleBackground from "@/components/animations/particle-background";
import { EnhancedCharacterSection, EnhancedServicesSection } from "@/components/animations/enhanced-sections";
import VoiceNarration from "@/components/enhancements/voice-narration";
import ARViewer from "@/components/enhancements/ar-viewer";
import AIChatGuide from "@/components/enhancements/ai-chat-guide";
import { characters } from "@/data/characters";
import { stories } from "@/data/stories";
import { heritageItems } from "@/data/heritage";
import { 
  Play, Book, GraduationCap, ArrowRight, Leaf, Recycle, Users, 
  ShoppingBag, Calendar, Coffee, Video, MapPin, Heart, Star,
  Building, TreePine, Sprout, Gamepad2
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const featuredStories = stories.slice(0, 3);
  const featuredHeritage = heritageItems.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section with GSAP Animations */}
      <EnhancedHero />
      
      {/* Original Content Sections with GSAP Enhancements */}
      <section className="relative py-20 bg-gradient-to-br from-newari-cream via-white to-sage-green/10">
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
              <div className="inline-flex items-center gap-2 bg-eco-green/10 px-4 py-2 rounded-full mb-6">
                <Leaf className="h-5 w-5 eco-green" />
                <span className="text-sm font-semibold eco-green">Heritage Hub Nepal</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Meet <span className="newari-gold">Mincha</span> & <span className="eco-green">Bhincha</span>
              </h1>
              <p className="text-xl md:text-2xl newari-brown mb-4 leading-relaxed">
                Preserving <span className="font-semibold newari-red">Licchavi heritage</span> and promoting <span className="font-semibold eco-green">zero-waste practices</span> across Nepal's sacred cultural landscapes.
              </p>
              <p className="text-lg clay-brown mb-8">
                From Hadigaun's ancient capital to Bhaktapur's Nyatapola Temple, Patan's Krishna Temple, Pokhara's Phewa Lake, and Lumbini's sacred grounds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#characters">
                  <Button size="lg" className="bg-eco-green hover:bg-forest-green text-white transform hover:scale-105 transition-all">
                    <Heart className="mr-2 h-5 w-5" />
                    Meet Our Ambassadors
                  </Button>
                </Link>
                <Link href="#services">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-earth-orange earth-orange hover:bg-earth-orange hover:text-white transform hover:scale-105 transition-all"
                  >
                    <Building className="mr-2 h-5 w-5" />
                    Explore Hub Services
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

      {/* Heritage Hub Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-eco-green/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold eco-green mb-6">Heritage Hub Nepal Services</h2>
            <p className="text-xl clay-brown max-w-4xl mx-auto">
              A cultural and eco-friendly initiative preserving Nepal's heritage while promoting sustainability, 
              zero-waste practices, and community engagement across multiple regions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <ShoppingBag className="h-8 w-8" />,
                title: "Eco-Products & Merchandise",
                description: "Bamboo crafts, microgreens kits, and Mincha & Bhincha themed merchandise including keychains, bookmarks, and coasters.",
                color: "bg-bamboo-yellow",
                textColor: "text-yellow-800"
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Training & Workshops",
                description: "Urban farming, bamboo crafting, Newari cooking, zero-waste practices, and cultural preservation programs.",
                color: "bg-eco-green",
                textColor: "text-green-100"
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Event Hosting",
                description: "Private events, weddings, corporate retreats, and cultural festivals in our heritage-themed venues.",
                color: "bg-earth-orange",
                textColor: "text-orange-100"
              },
              {
                icon: <Building className="h-8 w-8" />,
                title: "Farmers Market Stalls",
                description: "Weekly market spaces for local vendors (NPR 500-1,000/day) promoting local produce and crafts.",
                color: "bg-sage-green",
                textColor: "text-green-100"
              },
              {
                icon: <Coffee className="h-8 w-8" />,
                title: "Heritage Refreshments",
                description: "Eco-friendly snacks and traditional drinks served in our dedicated refreshment areas.",
                color: "bg-clay-brown",
                textColor: "text-amber-100"
              },
              {
                icon: <Video className="h-8 w-8" />,
                title: "Digital Content",
                description: "Recorded workshops, cultural performances, and storytelling sessions available for online access.",
                color: "bg-temple-stone",
                textColor: "text-slate-100"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className={`${service.color} ${service.textColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold newari-brown mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Regional Expansion */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-newari-cream to-sage-green/10 rounded-3xl p-8 border-2 border-newari-gold"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold newari-red mb-4">
                <MapPin className="inline h-8 w-8 mr-2" />
                Expanding Across Nepal
              </h3>
              <p className="text-lg clay-brown max-w-2xl mx-auto">
                Starting in Hadigaun, Heritage Hub Nepal will expand to culturally significant regions
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { name: "Hadigaun", status: "Current Hub", color: "bg-eco-green text-white" },
                { name: "Patan", status: "Coming Soon", color: "bg-newari-gold text-white" },
                { name: "Bhaktapur", status: "Planned", color: "bg-earth-orange text-white" },
                { name: "Pokhara", status: "Planned", color: "bg-sage-green text-white" },
                { name: "Lumbini", status: "Future", color: "bg-clay-brown text-white" }
              ].map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${location.color} rounded-2xl p-4 text-center transform hover:scale-105 transition-all`}
                >
                  <h4 className="font-bold text-lg mb-1">{location.name}</h4>
                  <p className="text-sm opacity-90">{location.status}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Characters Section with GSAP */}
      <EnhancedCharacterSection characters={characters} />

      {/* Heritage Education Section */}
      <section className="py-20 bg-gradient-to-br from-newari-beige to-newari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold newari-red mb-6">Our Cultural Ambassadors</h2>
            <p className="text-xl newari-brown max-w-3xl mx-auto">
              Mincha bridges traditional wisdom with modern sustainability while Bhincha preserves the sacred stories of 
              Guru Padmasambhava, the Bisket Jatra festival, and ancient Newari culture across all Heritage Hub locations.
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
                  <div className="w-64 h-80 mx-auto mb-6 rounded-2xl shadow-lg border-4 border-newari-gold overflow-hidden bg-gradient-to-br from-newari-cream to-white">
                    {character.name === "Mincha" ? (
                      <MinchaSVG className="w-full h-full" />
                    ) : (
                      <BhinchaSVG className="w-full h-full" />
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
                  
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {character.name === "Mincha" ? (
                      <>
                        <span className="bg-eco-green/20 eco-green px-3 py-1 rounded-full text-xs font-medium">
                          <Leaf className="inline h-3 w-3 mr-1" />
                          Sustainability
                        </span>
                        <span className="bg-bamboo-yellow/20 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                          <Recycle className="inline h-3 w-3 mr-1" />
                          Zero Waste
                        </span>
                        <span className="bg-sage-green/20 sage-green px-3 py-1 rounded-full text-xs font-medium">
                          <Sprout className="inline h-3 w-3 mr-1" />
                          Urban Farming
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="bg-newari-red/20 newari-red px-3 py-1 rounded-full text-xs font-medium">
                          <Book className="inline h-3 w-3 mr-1" />
                          Heritage
                        </span>
                        <span className="bg-newari-gold/20 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                          <Users className="inline h-3 w-3 mr-1" />
                          Community
                        </span>
                        <span className="bg-clay-brown/20 clay-brown px-3 py-1 rounded-full text-xs font-medium">
                          <Star className="inline h-3 w-3 mr-1" />
                          Traditions
                        </span>
                      </>
                    )}
                  </div>
                  
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

      {/* Character Integration Section */}
      <section className="py-20 bg-gradient-to-br from-eco-green/5 to-sage-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold eco-green mb-6">
              Mincha & Bhincha Integration
            </h2>
            <p className="text-xl clay-brown max-w-4xl mx-auto">
              Our versatile mascots represent the harmony between tradition and modernity, 
              integrated across marketing, education, and product design for Heritage Hub Nepal.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10" />,
                title: "Marketing Campaigns",
                description: "Social media posts, flyers, posters, and storytelling narratives featuring Mincha and Bhincha as brand ambassadors across all Heritage Hub locations.",
                features: ["Regional customization", "Social media content", "Brand storytelling", "Community engagement"],
                color: "bg-earth-orange",
                borderColor: "border-earth-orange"
              },
              {
                icon: <GraduationCap className="h-10 w-10" />,
                title: "Educational Content",
                description: "Workshops, training programs, and guided tours led by our characters, making cultural preservation and sustainability education engaging and memorable.",
                features: ["Interactive workshops", "Cultural tours", "Sustainability training", "Heritage education"],
                color: "bg-eco-green",
                borderColor: "border-eco-green"
              },
              {
                icon: <ShoppingBag className="h-10 w-10" />,
                title: "Product Design",
                description: "Eco-friendly merchandise featuring Mincha and Bhincha, from bamboo crafts and keychains to educational materials and digital content subscriptions.",
                features: ["Themed merchandise", "Educational materials", "Digital content", "Craft products"],
                color: "bg-bamboo-yellow",
                borderColor: "border-yellow-500"
              }
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${integration.borderColor}`}>
                  <CardContent className="p-6">
                    <div className={`${integration.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                      {integration.icon}
                    </div>
                    <h3 className="text-2xl font-bold newari-brown mb-4 text-center">{integration.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-center">{integration.description}</p>
                    
                    <div className="space-y-2">
                      {integration.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${integration.color}`}></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Character Collaboration */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-newari-cream to-eco-green/10 rounded-3xl p-8 border-2 border-newari-gold"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold newari-red mb-4">
                  <Heart className="inline h-8 w-8 mr-2 eco-green" />
                  Perfect Partnership
                </h3>
                <p className="text-lg clay-brown mb-6">
                  Mincha and Bhincha work together to demonstrate how traditional wisdom and modern innovation 
                  can create sustainable solutions for heritage preservation and community development.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🤝</div>
                    <h4 className="font-semibold newari-brown text-sm">Collaboration</h4>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🌱</div>
                    <h4 className="font-semibold newari-brown text-sm">Growth</h4>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-eco-green transform -rotate-3">
                    <MinchaSVG className="w-full h-32" />
                    <p className="text-center eco-green font-bold mt-2">Mincha</p>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-newari-red transform rotate-3">
                    <BhinchaSVG className="w-full h-32" />
                    <p className="text-center newari-red font-bold mt-2">Bhincha</p>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-newari-gold text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="h-6 w-6" />
                  </div>
                </div>
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

      {/* Interactive Games Section */}
      <section className="py-20 bg-gradient-to-br from-newari-gold/10 to-eco-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold newari-red mb-6">Interactive Learning Games</h2>
            <p className="text-xl newari-brown max-w-3xl mx-auto">
              Learn Newari heritage and sustainability through fun, educational games guided by Mincha and Bhincha!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Cultural Quiz",
                description: "Test your knowledge of Newari traditions and eco-practices",
                icon: "🧠",
                color: "bg-newari-red"
              },
              {
                title: "Memory Match",
                description: "Match cultural and sustainability pairs to improve focus",
                icon: "🎯", 
                color: "bg-eco-green"
              },
              {
                title: "Story Builder",
                description: "Create your own heritage adventures with guided prompts",
                icon: "📚",
                color: "bg-newari-gold"
              }
            ].map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-eco-green">
                  <CardContent className="p-6 text-center">
                    <div className={`${game.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto text-2xl`}>
                      {game.icon}
                    </div>
                    <h3 className="text-xl font-bold newari-brown mb-3">{game.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{game.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/games">
              <Button 
                size="lg" 
                className="bg-newari-red hover:bg-red-700 text-white transform hover:scale-105 transition-all"
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Start Playing Games
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <DownloadSection />
      
      {/* AI Chat Guide */}
      <AIChatGuide />
    </div>
  );
}
