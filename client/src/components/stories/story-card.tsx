import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Story } from "@/data/stories";
import { Story as DBStory } from "@shared/schema";
import { ArrowRight, User, Play } from "lucide-react";

interface StoryCardProps {
  story: Story | DBStory;
  onPreview?: () => void;
  onRead?: () => void;
}

export default function StoryCard({ story, onPreview, onRead }: StoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full bg-gradient-to-br from-newari-cream to-white rounded-2xl overflow-hidden shadow-lg border-2 border-newari-gold/20 hover:shadow-2xl hover:border-newari-gold transition-all duration-300 flex flex-col">
        <div className="w-full h-48 bg-gradient-to-br from-newari-gold to-newari-red flex items-center justify-center shrink-0">
          <span className="text-white text-lg font-bold">Story Image</span>
        </div>
        <CardContent className="p-6 flex flex-col flex-1">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-newari-gold/10 rounded-xl mr-3 flex items-center justify-center shrink-0">
              <User className="w-5 h-5 newari-gold" />
            </div>
            <span className="text-sm newari-brown font-semibold">{story.narrator}</span>
          </div>
          <h3 className="text-xl font-bold newari-red mb-3 line-clamp-2">{story.title}</h3>
          <p className="newari-brown text-sm mb-6 leading-relaxed flex-1 line-clamp-3">
            {story.excerpt || story.content.substring(0, 100) + "..."}
          </p>
          <div className="flex justify-between items-center mt-auto pt-4 border-t border-newari-gold/10">
            <span className="text-xs font-bold uppercase tracking-wider newari-sienna">
              {'duration' in story ? story.duration : `${story.readingTime || 5} min read`}
            </span>
            <div className="flex gap-2">
              {onPreview && (
                <Button 
                  onClick={onPreview}
                  size="sm" 
                  className="bg-newari-red hover:bg-red-700 text-white rounded-xl px-4"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              )}
              {onRead && (
                <Button 
                  onClick={onRead}
                  variant="ghost" 
                  className="newari-red hover:text-red-700 hover:bg-newari-red/5 font-bold text-sm px-2 rounded-xl"
                >
                  Read Story <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
