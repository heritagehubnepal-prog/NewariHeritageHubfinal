import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Story } from "@/data/stories";
import { ArrowRight, User } from "lucide-react";

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-gradient-to-br from-newari-cream to-white rounded-2xl overflow-hidden shadow-xl border-2 border-newari-beige hover:shadow-2xl transition-all duration-300">
        <div className="w-full h-48 bg-gradient-to-br from-newari-gold to-newari-red flex items-center justify-center">
          <span className="text-white text-lg font-bold">Story Image</span>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-newari-gold rounded-full mr-3 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm newari-brown font-semibold">{story.narrator}</span>
          </div>
          <h3 className="text-xl font-bold newari-red mb-3">{story.title}</h3>
          <p className="newari-brown text-sm mb-4 leading-relaxed">{story.excerpt}</p>
          <div className="flex justify-between items-center">
            <span className="text-xs newari-sienna">{story.duration}</span>
            <Button variant="ghost" className="newari-red hover:text-red-700 text-sm p-0">
              Read Story <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
