import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeritageItem } from "@/data/heritage";
import { ArrowRight } from "lucide-react";

interface CultureCardProps {
  item: HeritageItem;
}

export default function CultureCard({ item }: CultureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-newari-gold/20 hover:shadow-2xl hover:border-newari-gold transition-all duration-300 flex flex-col">
        <div className="w-full h-48 bg-gradient-to-br from-newari-beige to-newari-gold flex items-center justify-center shrink-0">
          <span className="newari-brown text-lg font-bold uppercase tracking-widest">{item.category}</span>
        </div>
        <CardContent className="p-6 flex flex-col flex-1">
          <h3 className="text-2xl font-bold newari-red mb-3 line-clamp-1">{item.title}</h3>
          <p className="newari-brown mb-6 leading-relaxed flex-1 line-clamp-3">{item.description}</p>
          <div className="mt-auto pt-4 border-t border-newari-gold/10">
            <Button variant="ghost" className="newari-red hover:text-red-700 hover:bg-newari-red/5 font-bold p-0 rounded-xl w-full flex justify-between">
              <span>Learn More</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
