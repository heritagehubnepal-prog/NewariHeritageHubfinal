import { motion } from "framer-motion";

interface QuizSelectorProps {
  onSelect: (difficulty: 'easy' | 'medium' | 'hard') => void;
}

export default function QuizSelector({ onSelect }: QuizSelectorProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#FFF9F0] p-8 rounded-2xl shadow-xl max-w-md w-full text-center border-2 border-newari-gold"
      >
        <h2 className="text-3xl font-bold text-[#B71C1C] mb-8 font-serif">Choose Your Challenge</h2>
        
        <div className="space-y-4">
          <button
            onClick={() => onSelect('easy')}
            className="w-full py-4 rounded-xl text-white font-bold text-xl transition-transform hover:scale-105 shadow-lg active:scale-95 flex items-center justify-center gap-3"
            style={{ background: '#4CAF50' }}
          >
            <span>🌱</span> Easy (5 Questions)
          </button>
          
          <button
            onClick={() => onSelect('medium')}
            className="w-full py-4 rounded-xl text-white font-bold text-xl transition-transform hover:scale-105 shadow-lg active:scale-95 flex items-center justify-center gap-3"
            style={{ background: '#FF9800' }}
          >
            <span>🏯</span> Medium (8 Questions)
          </button>
          
          <button
            onClick={() => onSelect('hard')}
            className="w-full py-4 rounded-xl text-white font-bold text-xl transition-transform hover:scale-105 shadow-lg active:scale-95 flex items-center justify-center gap-3"
            style={{ background: '#F44336' }}
          >
            <span>🔥</span> Hard (12 Questions)
          </button>
        </div>
        
        <p className="mt-8 text-sm text-[#5D4037] italic font-medium">
          Complete levels to earn special heritage badges!
        </p>
      </motion.div>
    </div>
  );
}
