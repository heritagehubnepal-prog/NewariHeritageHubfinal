import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MinchaSVG from "@/components/characters/mincha-svg";
import BhinchaSVG from "@/components/characters/bhincha-svg";
import { Trophy, Star, RefreshCw, CheckCircle, XCircle } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: "culture" | "sustainability" | "heritage";
  narrator: "Mincha" | "Bhincha";
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the traditional Newari festival that honors Lord Indra?",
    options: ["Indra Jatra", "Dashain", "Tihar", "Holi"],
    correctAnswer: 0,
    category: "culture",
    narrator: "Bhincha",
    explanation: "Indra Jatra is one of the most celebrated festivals in Nepal, featuring traditional dances and the Living Goddess Kumari parade.",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Which sustainable practice does Heritage Hub Nepal promote for urban living?",
    options: ["Plastic use", "Urban farming", "Car dependency", "Food waste"],
    correctAnswer: 1,
    category: "sustainability",
    narrator: "Mincha",
    explanation: "Urban farming helps communities grow their own food while reducing environmental impact and promoting food security.",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "What is the traditional Newari dress worn by women called?",
    options: ["Sari", "Haku Patasi", "Cholo", "Gunyu"],
    correctAnswer: 1,
    category: "heritage",
    narrator: "Bhincha",
    explanation: "Haku Patasi is the traditional black sari with red border worn by Newari women, often paired with a blouse called Cholo.",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Which renewable energy source is featured in Heritage Hub Nepal's eco-initiatives?",
    options: ["Coal", "Solar panels", "Nuclear", "Natural gas"],
    correctAnswer: 1,
    category: "sustainability",
    narrator: "Mincha",
    explanation: "Solar panels convert sunlight into clean electricity, reducing carbon footprint and promoting energy independence.",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "What material is commonly used for traditional Newari wood carvings?",
    options: ["Pine", "Sal wood", "Bamboo", "Teak"],
    correctAnswer: 1,
    category: "heritage",
    narrator: "Bhincha",
    explanation: "Sal wood is traditionally used for intricate Newari carvings due to its durability and workability.",
    difficulty: "hard"
  }
];

export default function CulturalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const question = quizQuestions[currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
      setStreak(streak + 1);
      setMaxStreak(Math.max(maxStreak, streak + 1));
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setGameFinished(true);
    }
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setGameFinished(false);
    setShowExplanation(false);
    setStreak(0);
  };

  const getPerformanceMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "Excellent! You're a true Heritage Hero! 🌟";
    if (percentage >= 60) return "Great job! You know your culture well! 👏";
    if (percentage >= 40) return "Good effort! Keep learning about heritage! 📚";
    return "Don't worry! Every expert was once a beginner! 💪";
  };

  if (gameFinished) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Trophy className="h-16 w-16 text-newari-gold mx-auto mb-4" />
              <h2 className="text-3xl font-bold newari-red mb-2">Quiz Complete!</h2>
              <p className="text-lg clay-brown">{getPerformanceMessage()}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-eco-green/10 p-4 rounded-lg">
                <div className="text-2xl font-bold eco-green">{score}/{quizQuestions.length}</div>
                <div className="text-sm text-gray-600">Correct Answers</div>
              </div>
              <div className="bg-newari-gold/10 p-4 rounded-lg">
                <div className="text-2xl font-bold newari-gold">{maxStreak}</div>
                <div className="text-sm text-gray-600">Best Streak</div>
              </div>
            </div>

            <div className="flex justify-center items-center mb-6">
              <div className="w-32 h-32 mr-4">
                <MinchaSVG className="w-full h-full" />
              </div>
              <div className="w-32 h-32">
                <BhinchaSVG className="w-full h-full" />
              </div>
            </div>

            <Button 
              onClick={resetGame} 
              size="lg"
              className="bg-newari-red hover:bg-red-700 text-white"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Play Again
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium clay-brown">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="bg-eco-green/10">
                Score: {score}
              </Badge>
              {streak > 1 && (
                <Badge variant="outline" className="bg-newari-gold/10">
                  <Star className="h-3 w-3 mr-1" />
                  Streak: {streak}
                </Badge>
              )}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-eco-green h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Character and Question */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-2">
                {question.narrator === "Mincha" ? (
                  <MinchaSVG className="w-full h-full" />
                ) : (
                  <BhinchaSVG className="w-full h-full" />
                )}
              </div>
              <Badge 
                variant="outline" 
                className={`${question.category === 'culture' ? 'bg-newari-red/10 text-newari-red' : 
                           question.category === 'sustainability' ? 'bg-eco-green/10 text-eco-green' : 
                           'bg-newari-gold/10 text-newari-gold'}`}
              >
                {question.category}
              </Badge>
              <div className="text-sm clay-brown mt-1">{question.narrator} asks:</div>
            </motion.div>
          </div>

          <div className="md:col-span-2">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold newari-brown mb-4">
                {question.question}
              </h3>

              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-3 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === null
                        ? "border-gray-200 hover:border-eco-green hover:bg-eco-green/5"
                        : selectedAnswer === index
                        ? index === question.correctAnswer
                          ? "border-green-500 bg-green-50"
                          : "border-red-500 bg-red-50"
                        : index === question.correctAnswer
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                    whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                    whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {selectedAnswer !== null && (
                        <div>
                          {index === question.correctAnswer ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="h-5 w-5 text-red-600" />
                          ) : null}
                        </div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Explanation */}
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <Card className="bg-gradient-to-r from-newari-cream to-eco-green/5 border-l-4 border-eco-green">
                <CardContent className="p-4">
                  <h4 className="font-semibold eco-green mb-2">
                    {question.narrator} explains:
                  </h4>
                  <p className="clay-brown">{question.explanation}</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next Button */}
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Button 
              onClick={handleNextQuestion}
              className="bg-newari-red hover:bg-red-700 text-white"
            >
              {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}