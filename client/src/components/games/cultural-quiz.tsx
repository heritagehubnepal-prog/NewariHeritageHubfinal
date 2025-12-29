import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, RefreshCw, CheckCircle, XCircle, RotateCcw, LayoutGrid } from "lucide-react";

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
    question: "Which king built the five-tiered Nyatapola Temple in Bhaktapur in 1702?",
    options: ["King Manadeva I", "King Bhupatindra Malla", "Siddhi Narsingh Malla", "Jayasthiti Malla"],
    correctAnswer: 1,
    category: "heritage",
    narrator: "Bhincha",
    explanation: "King Bhupatindra Malla built the Nyatapola Temple in 1702, dedicated to Goddess Siddhi Lakshmi with mythical protectors carved on each tier.",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "What legendary tale is celebrated during Bisket Jatra festival?",
    options: ["Dancing goddess", "Cursed princess freed by brave suitor", "Golden pagoda", "Sacred flood"],
    correctAnswer: 1,
    category: "culture",
    narrator: "Bhincha",
    explanation: "Bisket Jatra celebrates the legend of a cursed princess freed by a brave suitor who killed serpents emerging from her nostrils, marking the Nepali New Year.",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Which sustainable practice helps reduce environmental impact in urban areas?",
    options: ["Bamboo crafting", "Microgreen cultivation", "Zero-waste practices", "All of the above"],
    correctAnswer: 3,
    category: "sustainability",
    narrator: "Mincha",
    explanation: "Heritage Hub Nepal promotes bamboo crafting, microgreen cultivation, and zero-waste practices as part of comprehensive sustainable living.",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "Where did Guru Padmasambhava meditate to transform local spirits into Buddhist protectors?",
    options: ["Phewa Lake", "Yanglesho and Asura caves", "Changu Narayan", "Baghwan Bahal"],
    correctAnswer: 1,
    category: "heritage",
    narrator: "Mincha",
    explanation: "Guru Padmasambhava meditated in Yanglesho and Asura caves near Pharping to harmonize indigenous beliefs with Vajrayana Buddhism.",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "What year was the oldest documented Licchavi inscription created by King Manadeva?",
    options: ["464 CE", "505 CE", "621 CE", "636 CE"],
    correctAnswer: 0,
    category: "heritage",
    narrator: "Bhincha",
    explanation: "The Changunārāyana pillar inscription from 464 CE is one of the earliest documented records of the Licchavi dynasty under King Manadeva I.",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Which temple in Patan was built by Siddhi Narsingh Malla in 1636?",
    options: ["Nyatapola Temple", "Krishna Temple", "Changu Narayan", "Taal Barahi"],
    correctAnswer: 1,
    category: "heritage",
    narrator: "Bhincha",
    explanation: "The Krishna Temple in Patan was commissioned by Siddhi Narsingh Malla in 1636, featuring intricate carvings and multistoried pagoda-style architecture.",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "What do Nagas represent in Newari mythology around Pokhara?",
    options: ["Mountain spirits", "Serpent guardians of water bodies", "Bird warriors", "Forest protectors"],
    correctAnswer: 1,
    category: "culture",
    narrator: "Mincha",
    explanation: "Nagas are serpent-like beings revered as guardians of water bodies and fertility, particularly associated with Phewa Lake in Pokhara.",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Which eco-friendly material is promoted by Heritage Hub Nepal for sustainable crafting?",
    options: ["Plastic", "Bamboo", "Synthetic fibers", "Metal"],
    correctAnswer: 1,
    category: "sustainability",
    narrator: "Mincha",
    explanation: "Bamboo is a renewable, biodegradable material perfect for crafting eco-friendly products while supporting traditional skills.",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "What does the Uma-Maheswara sculpture in Patan Museum represent?",
    options: ["War victory", "Divine unity of Shiva and Parvati", "Harvest celebration", "Royal power"],
    correctAnswer: 1,
    category: "heritage",
    narrator: "Bhincha",
    explanation: "The 12th-century Uma-Maheswara sculpture symbolizes divine unity and harmonious balance between masculine and feminine cosmic energies.",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "Which festival honors Kumar Kartikeya and Ganesha with rituals for prosperity?",
    options: ["Bisket Jatra", "Sithi Nakha", "Indra Jatra", "Dashain"],
    correctAnswer: 1,
    category: "culture",
    narrator: "Bhincha",
    explanation: "Sithi Nakha is celebrated to honor Kumar Kartikeya and Ganesha, involving rituals for prosperity and familial harmony, integrating agricultural cycles with spiritual practices.",
    difficulty: "hard"
  },
  {
    id: 11,
    question: "What sustainable practice reduces household waste while creating nutrient-rich soil?",
    options: ["Burning trash", "Composting", "Plastic recycling", "Water conservation"],
    correctAnswer: 1,
    category: "sustainability",
    narrator: "Mincha",
    explanation: "Composting organic waste creates nutrient-rich soil for gardens while significantly reducing household waste sent to landfills.",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "Which ancient Newari site was the former capital of the Licchavi dynasty?",
    options: ["Patan", "Bhaktapur", "Hadigaun", "Pokhara"],
    correctAnswer: 2,
    category: "heritage",
    narrator: "Bhincha",
    explanation: "Hadigaun was the capital of the Licchavi dynasty, with archaeological artifacts over 1,300 years old including the life-size statue of Jaya Varma from the 2nd century CE.",
    difficulty: "hard"
  }
];

import { filterQuizQuestions, getBadge } from "@/utils/quiz-utils";
import QuizSelector from "./quiz-selector";

// ... (keep previous interfaces and questions)

export default function CulturalQuiz() {
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  useEffect(() => {
    // Scroll to top of quiz card smoothly when component mounts or difficulty changes
    if (difficulty) {
      const quizCard = document.getElementById('quiz-card');
      if (quizCard) {
        quizCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [difficulty]);

  if (!difficulty) {
    return <QuizSelector onSelect={setDifficulty} />;
  }

  const filteredQuestions = filterQuizQuestions(quizQuestions, difficulty);
  const question = filteredQuestions[currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    // Scroll to top of quiz card smoothly
    const quizCard = document.getElementById('quiz-card');
    if (quizCard) {
      quizCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
      setStreak(streak + 1);
      setMaxStreak(Math.max(maxStreak, streak + 1));
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setGameFinished(true);
    }
  };

  const resetGame = () => {
    setDifficulty(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setGameFinished(false);
    setShowExplanation(false);
    setStreak(0);
  };

  const badge = getBadge(difficulty, score, filteredQuestions.length);

  return (
    <div id="quiz-card" style={{
      background: '#FFF9F0',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <div className="">
        {!gameFinished ? (
          <>
            {/* Progress Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ 
                width: '18px', 
                height: '18px', 
                background: '#2196F3', 
                color: 'white', 
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>?</div>
              <div style={{ fontSize: '14px', color: '#5D4037' }}>
                <strong>{question.narrator} asks:</strong> Question {currentQuestion + 1} of {filteredQuestions.length}
              </div>
            </div>

            <div style={{
              height: '6px',
              background: 'linear-gradient(to right, #9C27B0, #FF5722)',
              borderRadius: '3px',
              marginBottom: '24px'
            }} />

            <h2 style={{ color: '#B71C1C', fontSize: '18px', fontWeight: '600', marginBottom: '24px', lineHeight: '1.4' }}>
              {question.question}
            </h2>
// ... (rest of the file remains similar but use filteredQuestions.length)

            <div className="space-y-3">
              {question.options.map((option: string, index: number) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    onMouseEnter={(e) => {
                      if (selectedAnswer === null) {
                        e.currentTarget.style.borderColor = '#FF5722';
                        e.currentTarget.style.boxShadow = '0 0 8px rgba(255,87,34,0.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedAnswer === null) {
                        e.currentTarget.style.borderColor = '#E64A19';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                    style={{
                      width: '100%',
                      padding: '14px',
                      margin: '8px 0',
                      background: 'white',
                      border: `1px solid ${
                        selectedAnswer === null 
                          ? '#E64A19' 
                          : isSelected 
                            ? isCorrect ? '#22C55E' : '#EF4444' 
                            : isCorrect ? '#22C55E' : '#E5E7EB'
                      }`,
                      borderRadius: '10px',
                      textAlign: 'left',
                      fontSize: '16px',
                      cursor: selectedAnswer === null ? 'pointer' : 'default',
                      transition: 'all 0.2s ease',
                      opacity: selectedAnswer !== null && !isSelected && !isCorrect ? 0.5 : 1,
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Character Feedback */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', gap: '12px', marginTop: '16px' }}
                >
                  <img 
                    src={question.narrator === "Mincha" ? "/assets/mincha.png" : "/assets/bhincha.png"} 
                    alt={question.narrator}
                    style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                  />
                  <div style={{ 
                    background: selectedAnswer === question.correctAnswer
                      ? (question.narrator === "Mincha" ? '#E8F5E9' : '#F1F8E9')
                      : '#FFEBEE', 
                    color: selectedAnswer === question.correctAnswer
                      ? (question.narrator === "Mincha" ? '#2E7D32' : '#33691E')
                      : '#D32F2F', 
                    padding: '12px', 
                    borderRadius: '8px', 
                    fontSize: '14px',
                    border: '1px solid currentColor',
                    position: 'relative'
                  }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                      {selectedAnswer === question.correctAnswer ? "✨ Correct!" : "❌ Not quite right..."}
                    </div>
                    {question.explanation}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {selectedAnswer !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-6"
              >
                <Button 
                  onClick={handleNextQuestion}
                  className="bg-newari-red hover:bg-red-700 text-white min-h-[48px] px-8"
                >
                  {currentQuestion < filteredQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              </motion.div>
            )}
          </>
        ) : (
          <div className="text-center py-8">
            <Trophy className="h-16 w-16 text-newari-gold mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#B71C1C] mb-2">Quiz Complete!</h2>
            <p className="text-lg text-[#5D4037] mb-4">You scored {score} out of {filteredQuestions.length}</p>
            
            <div 
              className="text-white inline-block px-6 py-2 rounded-full my-4 text-sm font-bold shadow-lg"
              style={{ background: badge.color }}
            >
              {badge.icon} {badge.name}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                onClick={resetGame}
                className="bg-[#9C27B0] hover:bg-[#7B1FA2] text-white gap-2 h-12 px-6 min-h-[48px]"
              >
                <RotateCcw className="h-4 w-4" /> Play Again
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = "/games"}
                className="border-[#E64A19] text-[#E64A19] hover:bg-[#E64A19] hover:text-white gap-2 h-12 px-6 min-h-[48px]"
              >
                <LayoutGrid className="h-4 w-4" /> Explore More Games
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}