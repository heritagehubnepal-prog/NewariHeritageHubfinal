import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Character } from "@/data/characters";
import { Link } from "wouter";
import MinchaSVG from "./mincha-svg";
import BhinchaSVG from "./bhincha-svg";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link href={`/character/${character.name.toLowerCase()}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer"
      >
        <Card className="bg-white rounded-2xl p-6 shadow-xl border-4 border-newari-gold hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
          <CardContent className="p-0 flex flex-col h-full">
            <div className="w-full h-56 mb-6 overflow-hidden rounded-xl flex items-center justify-center bg-gradient-to-b from-eco-green/5 to-transparent flex-shrink-0">
              {character.name === "Mincha" ? (
                <MinchaSVG className="w-full h-full transform scale-110 p-2" />
              ) : (
                <BhinchaSVG className="w-full h-full transform scale-110 p-2" />
              )}
            </div>
            <div className="relative z-10 pt-2 bg-white flex-grow flex flex-col justify-center">
              <h3 className="text-2xl font-bold newari-red text-center">{character.name}</h3>
              <p className="newari-brown text-center mt-2">{character.role}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
