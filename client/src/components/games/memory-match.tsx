import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MinchaSVG from "@/components/characters/mincha-svg";
import BhinchaSVG from "@/components/characters/bhincha-svg";
import { Timer, RotateCcw, Trophy, Star } from "lucide-react";

interface MemoryCard {
  id: number;
  content: string;
  emoji: string;
  category: "culture" | "sustainability";
  isFlipped: boolean;
  isMatched: boolean;
}

const cardPairs = [
  { content: "Bisket Jatra Festival", emoji: "🎭", category: "culture" as const },
  { content: "Cursed Princess Legend", emoji: "🎭", category: "culture" as const },
  { content: "Bamboo Crafting", emoji: "🎋", category: "sustainability" as const },
  { content: "Eco-Friendly Materials", emoji: "🎋", category: "sustainability" as const },
  { content: "Nyatapola Temple", emoji: "🏛️", category: "culture" as const },
  { content: "Five-Tiered Pagoda", emoji: "🏛️", category: "culture" as const },
  { content: "Microgreen Growing", emoji: "🌱", category: "sustainability" as const },
  { content: "Urban Agriculture", emoji: "🌱", category: "sustainability" as const },
  { content: "Zero-Waste Practices", emoji: "♻️", category: "sustainability" as const },
  { content: "Circular Economy", emoji: "♻️", category: "sustainability" as const },
  { content: "Guru Padmasambhava", emoji: "🧘", category: "culture" as const },
  { content: "Lotus-Born Master", emoji: "🧘", category: "culture" as const },
  { content: "Nagas Water Guardians", emoji: "🐍", category: "culture" as const },
  { content: "Phewa Lake Spirits", emoji: "🐍", category: "culture" as const },
  { content: "Solar Energy", emoji: "☀️", category: "sustainability" as const },
  { content: "Renewable Power", emoji: "☀️", category: "sustainability" as const },
  { content: "Licchavi Inscriptions", emoji: "📜", category: "culture" as const },
  { content: "King Manadeva 464 CE", emoji: "📜", category: "culture" as const },
  { content: "Composting Systems", emoji: "🌿", category: "sustainability" as const },
  { content: "Organic Waste Reduction", emoji: "🌿", category: "sustainability" as const }
];

export default function MemoryMatch() {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameTime, setGameTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameStarted && !gameFinished) {
      interval = setInterval(() => {
        setGameTime(time => time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameFinished]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards.find(card => card.id === first);
      const secondCard = cards.find(card => card.id === second);

      if (firstCard && secondCard && firstCard.emoji === secondCard.emoji) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isMatched: true }
              : card
          ));
          setMatchedPairs(prev => prev + 1);
          setFlippedCards([]);
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (matchedPairs === cardPairs.length && !gameFinished) {
      setGameFinished(true);
      setGameStarted(false);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  }, [matchedPairs, gameFinished]);

  const initializeGame = () => {
    const shuffledCards = [...cardPairs]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        id: index,
        ...card,
        isFlipped: false,
        isMatched: false,
      }));
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setGameTime(0);
    setGameStarted(false);
    setGameFinished(false);
  };

  const handleCardClick = (cardId: number) => {
    if (!gameStarted) setGameStarted(true);
    
    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched || flippedCards.length >= 2) {
      return;
    }

    setCards(prev => prev.map(c => 
      c.id === cardId ? { ...c, isFlipped: true } : c
    ));
    setFlippedCards(prev => [...prev, cardId]);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPerformanceRating = () => {
    if (moves <= 12) return { rating: "Perfect!", stars: 3, message: "Amazing memory skills!" };
    if (moves <= 18) return { rating: "Excellent!", stars: 3, message: "Great concentration!" };
    if (moves <= 24) return { rating: "Good!", stars: 2, message: "Well done!" };
    return { rating: "Keep Practicing!", stars: 1, message: "Every expert was once a beginner!" };
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Game Header */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16">
                <BhinchaSVG className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-2xl font-bold newari-red">Heritage Memory Match</h2>
                <p className="text-sm clay-brown">Match cultural and sustainability pairs!</p>
              </div>
              <div className="w-16 h-16">
                <MinchaSVG className="w-full h-full" />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="flex justify-center items-center space-x-6 mb-4">
            <Badge variant="outline" className="bg-eco-green/10">
              <Timer className="h-4 w-4 mr-2" />
              {formatTime(gameTime)}
            </Badge>
            <Badge variant="outline" className="bg-newari-gold/10">
              Moves: {moves}
            </Badge>
            <Badge variant="outline" className="bg-newari-red/10">
              Pairs: {matchedPairs}/{cardPairs.length}
            </Badge>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={initializeGame}
              variant="outline"
              className="border-newari-red text-newari-red hover:bg-newari-red hover:text-white"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              New Game
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Game Board */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: card.isMatched ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="aspect-square"
              >
                <div
                  onClick={() => handleCardClick(card.id)}
                  className={`
                    w-full h-full rounded-lg border-2 cursor-pointer transition-all duration-300
                    ${card.isMatched 
                      ? 'border-green-500 bg-green-50 cursor-default' 
                      : card.isFlipped 
                      ? 'border-newari-gold bg-newari-cream' 
                      : 'border-gray-300 bg-white hover:border-eco-green hover:shadow-md'
                    }
                  `}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-2">
                    {card.isFlipped || card.isMatched ? (
                      <>
                        <div className="text-2xl md:text-3xl mb-1">{card.emoji}</div>
                        <div className={`text-xs text-center font-medium ${
                          card.category === 'culture' ? 'text-newari-red' : 'text-eco-green'
                        }`}>
                          {card.content}
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-newari-gold to-newari-red rounded-md flex items-center justify-center">
                        <div className="text-white text-lg font-bold">?</div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Game Complete Modal */}
      <AnimatePresence>
        {gameFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
            >
              <div className="mb-6">
                <Trophy className="h-16 w-16 text-newari-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold newari-red mb-2">Congratulations!</h3>
                <p className="clay-brown">{getPerformanceRating().message}</p>
              </div>

              <div className="mb-6">
                <div className="flex justify-center mb-2">
                  {[...Array(3)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-6 w-6 ${
                        i < getPerformanceRating().stars 
                          ? 'text-newari-gold fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <div className="text-lg font-semibold newari-brown">
                  {getPerformanceRating().rating}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="bg-eco-green/10 p-3 rounded-lg">
                  <div className="font-bold eco-green">{formatTime(gameTime)}</div>
                  <div className="text-gray-600">Time</div>
                </div>
                <div className="bg-newari-gold/10 p-3 rounded-lg">
                  <div className="font-bold newari-gold">{moves}</div>
                  <div className="text-gray-600">Moves</div>
                </div>
              </div>

              <Button 
                onClick={initializeGame}
                className="w-full bg-newari-red hover:bg-red-700 text-white"
              >
                Play Again
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Celebration Animation */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-40"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  y: window.innerHeight, 
                  x: Math.random() * window.innerWidth,
                  rotate: 0 
                }}
                animate={{ 
                  opacity: 1, 
                  y: -100, 
                  rotate: 360 
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 3, 
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                className="absolute text-2xl"
              >
                {['🎉', '⭐', '🏆', '🎊'][Math.floor(Math.random() * 4)]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}