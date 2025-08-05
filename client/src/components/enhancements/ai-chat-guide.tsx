import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, Bot, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BhinchaSvg from '@/components/characters/bhincha-svg';
import MinchaSvg from '@/components/characters/mincha-svg';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bhincha' | 'mincha';
  timestamp: Date;
}

export default function AIChatGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Namaste! I'm Bhincha, your cultural guide. Ask me about Newari traditions, festivals, or heritage sites!",
      sender: 'bhincha',
      timestamp: new Date()
    },
    {
      id: '2', 
      text: "And I'm Mincha! I can help you learn about eco-friendly practices and sustainable living in Nepal.",
      sender: 'mincha',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): { text: string; sender: 'bhincha' | 'mincha' } => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Cultural/Heritage topics - Bhincha responds
    if (lowerMessage.includes('festival') || lowerMessage.includes('culture') || 
        lowerMessage.includes('tradition') || lowerMessage.includes('heritage') ||
        lowerMessage.includes('temple') || lowerMessage.includes('newari')) {
      
      const responses = [
        "Newari culture is incredibly rich! Our festivals like Bisket Jatra celebrate the victory of good over evil. The procession through Bhaktapur's ancient streets connects us to centuries of tradition.",
        "The temples in Patan and Bhaktapur showcase exquisite woodcarving and metalwork. Each carving tells a story of our ancestors' devotion and artistic mastery.",
        "Traditional Newari cuisine reflects our agricultural heritage. Dishes like bara and chatamari are not just food - they're cultural expressions passed down through generations.",
        "Our traditional dress carries deep meaning. My black Haku Patasi sari with golden threads represents the elegance and strength of Newari women throughout history."
      ];
      
      return {
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'bhincha'
      };
    }
    
    // Sustainability/Eco topics - Mincha responds
    if (lowerMessage.includes('eco') || lowerMessage.includes('sustain') || 
        lowerMessage.includes('environment') || lowerMessage.includes('green') ||
        lowerMessage.includes('waste') || lowerMessage.includes('organic')) {
      
      const responses = [
        "Traditional Newari practices are naturally sustainable! Ancient water management systems and terraced farming show how our ancestors lived in harmony with nature.",
        "Zero-waste practices can be learned from traditional methods. Bamboo crafts, organic farming, and local food systems reduce our environmental impact significantly.",
        "Urban farming using traditional knowledge helps communities become self-sufficient. Growing microgreens and herbs connects us to the land while reducing food miles.",
        "Heritage preservation and environmental protection go hand in hand. Protecting cultural landscapes also protects biodiversity and traditional ecological knowledge."
      ];
      
      return {
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'mincha'
      };
    }
    
    // General questions - alternate between characters
    const generalResponses = [
      { text: "That's a wonderful question! Heritage Hub Nepal combines cultural preservation with sustainable practices. What specific aspect interests you most?", sender: 'bhincha' as const },
      { text: "I love how curious you are! Learning about our heritage helps build a more sustainable future. Would you like to explore our interactive games?", sender: 'mincha' as const },
      { text: "Every question helps preserve our knowledge! Our stories and traditions offer wisdom for modern challenges. What would you like to discover?", sender: 'bhincha' as const }
    ];
    
    return generalResponses[Math.floor(Math.random() * generalResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateAIResponse(inputText);
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: response.sender,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-16 h-16 bg-newari-red hover:bg-newari-red/90 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 w-96 h-[500px]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <Card className="h-full flex flex-col shadow-2xl border-2 border-newari-gold">
        <CardHeader className="bg-gradient-to-r from-newari-red to-eco-green text-white p-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Cultural AI Guides
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender !== 'user' && (
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-newari-cream flex-shrink-0">
                      {message.sender === 'bhincha' ? (
                        <BhinchaSvg className="w-full h-full" />
                      ) : (
                        <MinchaSvg className="w-full h-full" />
                      )}
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user' 
                      ? 'bg-newari-gold text-white' 
                      : message.sender === 'bhincha'
                      ? 'bg-newari-red/10 text-newari-brown'
                      : 'bg-eco-green/10 text-newari-brown'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                  
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-newari-cream flex items-center justify-center">
                    <div className="w-2 h-2 bg-newari-gold rounded-full animate-bounce"></div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Newari culture or sustainability..."
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-newari-red hover:bg-newari-red/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}