import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import MinchaSVG from "@/components/characters/mincha-svg";
import BhinchaSVG from "@/components/characters/bhincha-svg";
import { BookOpen, Sparkles, Share2, Download, RotateCcw } from "lucide-react";

interface StoryPrompt {
  id: number;
  category: "culture" | "sustainability" | "adventure";
  setting: string;
  character: "Mincha" | "Bhincha" | "Both";
  prompt: string;
  keywords: string[];
}

const storyPrompts: StoryPrompt[] = [
  {
    id: 1,
    category: "culture",
    setting: "Nyatapola Temple, Bhaktapur",
    character: "Bhincha",
    prompt: "Bhincha discovers that the five-tiered guardian statues of Nyatapola Temple come alive at night to protect the city from...",
    keywords: ["guardians", "mythical protectors", "Goddess Siddhi Lakshmi", "Bhairava", "temple"]
  },
  {
    id: 2,
    category: "sustainability",
    setting: "Heritage Hub Nepal - Bamboo Workshop",
    character: "Mincha",
    prompt: "Mincha shows a group of children how bamboo crafting can replace plastic items while preserving traditional skills...",
    keywords: ["bamboo", "eco-friendly", "traditional crafts", "plastic reduction", "sustainability"]
  },
  {
    id: 3,
    category: "adventure",
    setting: "Phewa Lake, Pokhara",
    character: "Both",
    prompt: "Mincha and Bhincha meet the ancient Nagas who guard Phewa Lake and must help them solve a problem threatening the water's purity...",
    keywords: ["Nagas", "water guardians", "lake protection", "teamwork", "environmental crisis"]
  },
  {
    id: 4,
    category: "culture",
    setting: "Changu Narayan Temple",
    character: "Bhincha",
    prompt: "While exploring the ancient Licchavi inscriptions from 464 CE, Bhincha discovers King Manadeva's spirit still watches over the temple...",
    keywords: ["Licchavi dynasty", "King Manadeva", "ancient inscriptions", "Vishnu avatars", "heritage"]
  },
  {
    id: 5,
    category: "sustainability",
    setting: "Heritage Hub Microgreen Farm",
    character: "Mincha",
    prompt: "Mincha's innovative microgreen system helps urban families grow fresh food, but a challenge arises that tests the community's cooperation...",
    keywords: ["urban farming", "microgreens", "food security", "community cooperation", "innovation"]
  },
  {
    id: 6,
    category: "adventure",
    setting: "Bisket Jatra Festival",
    character: "Both",
    prompt: "During Bisket Jatra, Mincha and Bhincha must prevent a modern threat from disrupting the ancient chariot procession honoring the cursed princess legend...",
    keywords: ["festival", "chariot procession", "Bhairab", "Bhadrakali", "tradition vs modernity"]
  },
  {
    id: 7,
    category: "culture",
    setting: "Guru Padmasambhava's Sacred Caves",
    character: "Bhincha",
    prompt: "Bhincha enters the meditation caves of Yanglesho where spirits share the story of how the Lotus-Born Master brought harmony between Buddhist and indigenous beliefs...",
    keywords: ["meditation caves", "spiritual harmony", "Vajrayana Buddhism", "indigenous traditions", "transformation"]
  },
  {
    id: 8,
    category: "sustainability",
    setting: "Zero-Waste Heritage Hub Community",
    character: "Mincha",
    prompt: "Mincha leads a community challenge to achieve zero waste for a month, but unexpected obstacles test everyone's commitment to sustainability...",
    keywords: ["zero waste", "circular economy", "community challenge", "environmental commitment", "problem-solving"]
  },
  {
    id: 9,
    category: "adventure",
    setting: "Uma-Maheswara Gallery, Patan Museum",
    character: "Both",
    prompt: "The 12th-century Uma-Maheswara sculpture begins glowing mysteriously, and Mincha and Bhincha must discover what cosmic imbalance needs to be restored...",
    keywords: ["divine balance", "cosmic harmony", "Shiva and Parvati", "museum mystery", "spiritual quest"]
  },
  {
    id: 10,
    category: "culture",
    setting: "Hadigaun Archaeological Site",
    character: "Bhincha",
    prompt: "While exploring the former Licchavi capital at Hadigaun, Bhincha uncovers artifacts that reveal a forgotten celebration connecting all Heritage Hub regions...",
    keywords: ["archaeological discovery", "Licchavi capital", "ancient artifacts", "cultural connections", "forgotten traditions"]
  }
];

const storyTips = [
  "Include sensory details (what characters see, hear, smell, touch)",
  "Show character emotions through actions and dialogue",
  "Add cultural elements like festivals, traditional foods, or customs",
  "Include a challenge or problem that gets resolved",
  "Make the story teach something about heritage or sustainability",
  "End with a positive message or lesson"
];

export default function StoryBuilder() {
  const [selectedPrompt, setSelectedPrompt] = useState<StoryPrompt | null>(null);
  const [userStory, setUserStory] = useState("");
  const [showTips, setShowTips] = useState(false);
  const [storyComplete, setStoryComplete] = useState(false);
  const [characterReaction, setCharacterReaction] = useState("");

  const handlePromptSelect = (prompt: StoryPrompt) => {
    setSelectedPrompt(prompt);
    setUserStory("");
    setStoryComplete(false);
    setCharacterReaction("");
  };

  const generateCharacterReaction = (story: string) => {
    const reactions = {
      Mincha: [
        "What an innovative story! I love how you combined tradition with modern thinking!",
        "Excellent! This story shows great creativity and environmental awareness!",
        "Fantastic! Your story demonstrates the perfect balance of sustainability and culture!",
        "Amazing storytelling! This shows how we can protect our planet and heritage together!"
      ],
      Bhincha: [
        "Beautiful story! You've captured the essence of our cultural traditions wonderfully!",
        "Wonderful! This tale honors our ancestors while teaching important lessons!",
        "Excellent storytelling! You understand the deep wisdom of our heritage!",
        "Magnificent! This story will be treasured for generations to come!"
      ],
      Both: [
        "What a wonderful collaboration of ideas! Just like our friendship!",
        "Perfect! This story brings together the best of tradition and innovation!",
        "Excellent teamwork in your storytelling! We're proud of your creativity!",
        "Amazing! Your story shows how heritage and sustainability work together beautifully!"
      ]
    };

    if (selectedPrompt) {
      const characterReactions = reactions[selectedPrompt.character];
      return characterReactions[Math.floor(Math.random() * characterReactions.length)];
    }
    return "Great story!";
  };

  const handleStorySubmit = () => {
    if (userStory.trim().length < 50) {
      alert("Please write a longer story (at least 50 characters)!");
      return;
    }
    
    setStoryComplete(true);
    setCharacterReaction(generateCharacterReaction(userStory));
  };

  const resetStoryBuilder = () => {
    setSelectedPrompt(null);
    setUserStory("");
    setStoryComplete(false);
    setCharacterReaction("");
    setShowTips(false);
  };

  const shareStory = () => {
    const storyText = `My Heritage Story:\n\n"${selectedPrompt?.prompt}"\n\n${userStory}\n\n- Created with Heritage Hub Nepal Story Builder`;
    navigator.clipboard.writeText(storyText);
    alert("Story copied to clipboard! You can now share it.");
  };

  const downloadStory = () => {
    const storyContent = `Heritage Story
Created with Heritage Hub Nepal

Prompt: ${selectedPrompt?.prompt}
Setting: ${selectedPrompt?.setting}
Character: ${selectedPrompt?.character}
Category: ${selectedPrompt?.category}

Story:
${userStory}

Character Reaction: ${characterReaction}

---
Created at Heritage Hub Nepal - Preserving Culture, Building Sustainability
`;
    
    const blob = new Blob([storyContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-heritage-story.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (storyComplete) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <BookOpen className="h-8 w-8 newari-red" />
                <h2 className="text-2xl font-bold newari-red">Story Complete!</h2>
                <Sparkles className="h-8 w-8 newari-gold" />
              </div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Character Reaction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-newari-cream to-eco-green/10 rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {selectedPrompt?.character === "Mincha" && (
                    <div className="w-16 h-16">
                      <MinchaSVG className="w-full h-full" />
                    </div>
                  )}
                  {selectedPrompt?.character === "Bhincha" && (
                    <div className="w-16 h-16">
                      <BhinchaSVG className="w-full h-full" />
                    </div>
                  )}
                  {selectedPrompt?.character === "Both" && (
                    <div className="flex gap-2">
                      <div className="w-12 h-12">
                        <MinchaSVG className="w-full h-full" />
                      </div>
                      <div className="w-12 h-12">
                        <BhinchaSVG className="w-full h-full" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold newari-brown mb-2">
                    {selectedPrompt?.character} says:
                  </h3>
                  <p className="clay-brown italic">"{characterReaction}"</p>
                </div>
              </div>
            </motion.div>

            {/* Story Display */}
            <div>
              <h3 className="text-xl font-semibold newari-brown mb-3">Your Story:</h3>
              <Card className="bg-white border-2 border-newari-gold">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      {selectedPrompt?.setting}
                    </Badge>
                    <p className="font-medium clay-brown mb-3">
                      "{selectedPrompt?.prompt}"
                    </p>
                  </div>
                  <div className="prose max-w-none">
                    <p className="whitespace-pre-wrap leading-relaxed clay-brown">
                      {userStory}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <Button 
                onClick={shareStory}
                variant="outline"
                className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Story
              </Button>
              <Button 
                onClick={downloadStory}
                variant="outline"
                className="border-newari-gold text-newari-gold hover:bg-newari-gold hover:text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button 
                onClick={resetStoryBuilder}
                className="bg-newari-red hover:bg-red-700 text-white"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                New Story
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16">
                <BhinchaSVG className="w-full h-full" />
              </div>
              <div>
                <h2 className="text-2xl font-bold newari-red">Heritage Story Builder</h2>
                <p className="text-sm clay-brown">Create your own cultural adventure!</p>
              </div>
              <div className="w-16 h-16">
                <MinchaSVG className="w-full h-full" />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>

      {!selectedPrompt ? (
        <div className="space-y-6">
          {/* Story Tips */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold newari-brown">Storytelling Tips</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowTips(!showTips)}
                >
                  {showTips ? "Hide" : "Show"} Tips
                </Button>
              </div>
              
              <AnimatePresence>
                {showTips && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid md:grid-cols-2 gap-3"
                  >
                    {storyTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-eco-green mt-2 flex-shrink-0" />
                        <p className="text-sm clay-brown">{tip}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Prompt Selection */}
          <div>
            <h3 className="text-lg font-semibold newari-brown mb-4">Choose Your Story Prompt:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {storyPrompts.map((prompt) => (
                <motion.div
                  key={prompt.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className="cursor-pointer border-2 hover:border-eco-green transition-all duration-200"
                    onClick={() => handlePromptSelect(prompt)}
                  >
                    <CardContent className="p-4">
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <Badge 
                            variant="outline"
                            className={`${
                              prompt.category === 'culture' ? 'bg-newari-red/10 text-newari-red' :
                              prompt.category === 'sustainability' ? 'bg-eco-green/10 text-eco-green' :
                              'bg-newari-gold/10 text-newari-gold'
                            }`}
                          >
                            {prompt.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {prompt.character === "Mincha" && (
                              <div className="w-6 h-6">
                                <MinchaSVG className="w-full h-full" />
                              </div>
                            )}
                            {prompt.character === "Bhincha" && (
                              <div className="w-6 h-6">
                                <BhinchaSVG className="w-full h-full" />
                              </div>
                            )}
                            {prompt.character === "Both" && (
                              <>
                                <div className="w-5 h-5">
                                  <MinchaSVG className="w-full h-full" />
                                </div>
                                <div className="w-5 h-5">
                                  <BhinchaSVG className="w-full h-full" />
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{prompt.setting}</p>
                      </div>
                      
                      <p className="clay-brown font-medium mb-3">{prompt.prompt}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {prompt.keywords.map((keyword, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Selected Prompt */}
          <Card className="border-2 border-eco-green">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {selectedPrompt.setting}
                  </Badge>
                  <p className="font-semibold newari-brown text-lg">
                    {selectedPrompt.prompt}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedPrompt(null)}
                >
                  Change Prompt
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {selectedPrompt.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="text-sm bg-eco-green/10 text-eco-green px-3 py-1 rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Story Writing Area */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold newari-brown mb-4">Write Your Story:</h3>
              <Textarea
                value={userStory}
                onChange={(e) => setUserStory(e.target.value)}
                placeholder="Continue the story... Let your imagination flow! Include details about the characters, setting, and what happens next."
                className="min-h-[300px] text-base leading-relaxed"
              />
              
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-gray-600">
                  Words: {userStory.split(' ').filter(word => word.length > 0).length} | 
                  Characters: {userStory.length}
                </p>
                
                <Button 
                  onClick={handleStorySubmit}
                  disabled={userStory.trim().length < 50}
                  className="bg-newari-red hover:bg-red-700 text-white"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Complete Story
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}