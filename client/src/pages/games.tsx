import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CulturalQuiz from "@/components/games/cultural-quiz";
import MemoryMatch from "@/components/games/memory-match";
import StoryBuilder from "@/components/games/story-builder";
import MinchaSVG from "@/components/characters/mincha-svg";
import BhinchaSVG from "@/components/characters/bhincha-svg";
import { 
  Brain, 
  BookOpen, 
  Gamepad2, 
  Star, 
  Users, 
  Trophy,
  Target,
  Lightbulb
} from "lucide-react";

type GameType = "quiz" | "memory" | "story" | null;

const gameFeatures = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Cultural Quiz",
    description: "Test your knowledge of Newari heritage and sustainability practices",
    difficulty: "Easy to Hard",
    players: "1 Player",
    time: "5-10 minutes",
    gameType: "quiz" as const,
    color: "bg-newari-red",
    narrator: "Both Mincha & Bhincha"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Memory Match",
    description: "Match cultural and sustainability pairs to improve concentration",
    difficulty: "Medium",
    players: "1 Player", 
    time: "3-8 minutes",
    gameType: "memory" as const,
    color: "bg-eco-green",
    narrator: "Interactive Characters"
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Story Builder",
    description: "Create your own heritage adventures with guided prompts",
    difficulty: "Creative",
    players: "1+ Players",
    time: "10-30 minutes",
    gameType: "story" as const,
    color: "bg-newari-gold",
    narrator: "Character Guided"
  }
];

const learningOutcomes = [
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Cultural Awareness",
    description: "Learn about Newari traditions, festivals, and heritage"
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: "Sustainability Knowledge", 
    description: "Understand eco-friendly practices and environmental stewardship"
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Creative Expression",
    description: "Develop storytelling and creative thinking skills"
  },
  {
    icon: <Trophy className="h-5 w-5" />,
    title: "Memory & Focus",
    description: "Improve concentration and cognitive abilities"
  }
];

export default function Games() {
  const [selectedGame, setSelectedGame] = useState<GameType>(null);

  if (selectedGame) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-newari-cream via-white to-eco-green/5 py-8 px-4 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 sticky top-0 bg-gradient-to-b from-newari-cream via-newari-cream to-transparent pt-4 pb-2 z-10"
          >
            <Button 
              variant="outline"
              onClick={() => setSelectedGame(null)}
              className="mb-4"
            >
              ← Back to Games
            </Button>
          </motion.div>

          {/* Game Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full pb-12"
          >
            <div className="w-full flex justify-center">
              {selectedGame === "quiz" && <CulturalQuiz />}
              {selectedGame === "memory" && <MemoryMatch />}
              {selectedGame === "story" && <StoryBuilder />}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-newari-cream via-white to-eco-green/5">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-newari-red via-newari-gold to-eco-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-24 h-24 flex-shrink-0"
              >
                <MinchaSVG className="w-full h-full" />
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 break-words">
                  Heritage Games
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
                  Learn, play, and explore Newari culture through interactive educational games
                  guided by Mincha and Bhincha!
                </p>
              </div>

              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="w-24 h-24 flex-shrink-0"
              >
                <BhinchaSVG className="w-full h-full" />
              </motion.div>
            </div>

            <div className="flex justify-center mt-6">
              <Badge className="bg-white/20 text-white border-white/30 text-base md:text-lg px-6 py-2">
                <Gamepad2 className="h-5 w-5 mr-2" />
                Interactive Learning Adventures
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Games Selection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold newari-red mb-6">Choose Your Adventure</h2>
            <p className="text-xl clay-brown max-w-3xl mx-auto">
              Each game is designed to teach different aspects of Newari heritage and sustainability
              while providing engaging entertainment for learners of all ages.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {gameFeatures.map((game, index) => (
              <motion.div
                key={game.gameType}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-eco-green cursor-pointer">
                  <CardHeader>
                    <div className={`${game.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {game.icon}
                    </div>
                    <CardTitle className="text-xl newari-brown text-center">{game.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6 leading-relaxed">{game.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Difficulty:</span>
                        <Badge variant="outline">{game.difficulty}</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Players:</span>
                        <span className="text-gray-600">{game.players}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Duration:</span>
                        <span className="text-gray-600">{game.time}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Guide:</span>
                        <span className="text-gray-600 text-xs">{game.narrator}</span>
                      </div>
                    </div>

                    <Button 
                      onClick={() => setSelectedGame(game.gameType)}
                      className={`w-full ${game.color} hover:opacity-90 text-white transform group-hover:scale-105 transition-all duration-200`}
                    >
                      Start Playing
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Learning Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-eco-green/10 to-newari-cream rounded-3xl p-8 border-2 border-eco-green/20"
          >
            <h3 className="text-3xl font-bold text-center newari-red mb-8">What You'll Learn</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningOutcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="eco-green">{outcome.icon}</div>
                  </div>
                  <h4 className="font-semibold newari-brown mb-2">{outcome.title}</h4>
                  <p className="text-sm text-gray-600">{outcome.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Character Encouragement */}
      <section className="py-16 bg-gradient-to-r from-newari-gold/10 to-eco-green/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="p-6 bg-gradient-to-br from-eco-green/5 to-white border-2 border-eco-green/20">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <MinchaSVG className="w-full h-full" />
                  </div>
                  <h3 className="font-bold eco-green mb-2">Mincha says:</h3>
                  <p className="italic clay-brown">
                    "Learning through play is the most sustainable way to grow! 
                    These games will help you become an eco-hero while discovering our beautiful heritage."
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-newari-red/5 to-white border-2 border-newari-red/20">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <BhinchaSVG className="w-full h-full" />
                  </div>
                  <h3 className="font-bold newari-red mb-2">Bhincha says:</h3>
                  <p className="italic clay-brown">
                    "Every story, every game, every moment of learning connects you deeper to our 
                    ancestors' wisdom. Play, learn, and carry our culture forward!"
                  </p>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}