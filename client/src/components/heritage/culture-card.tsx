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
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-white rounded-2xl p-6 shadow-xl border-2 border-newari-gold hover:shadow-2xl transition-all duration-300">
        <div className="w-full h-48 mb-4 bg-gradient-to-br from-newari-beige to-newari-gold rounded-xl flex items-center justify-center">
          <span className="newari-brown text-lg font-bold">{item.category}</span>
        </div>
        <CardContent className="p-0">
          <h3 className="text-2xl font-bold newari-red mb-3">{item.title}</h3>
          <p className="newari-brown mb-4">{item.description}</p>
          <Button variant="ghost" className="newari-red hover:text-red-700 p-0">
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
