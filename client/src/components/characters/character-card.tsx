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
        <Card className="bg-white rounded-2xl p-6 shadow-xl border-4 border-newari-gold hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-0">
            <div className="w-full h-56 mb-6 overflow-hidden rounded-xl flex items-center justify-center bg-gradient-to-b from-eco-green/5 to-transparent">
              {character.name === "Mincha" ? (
                <MinchaSVG className="w-full h-full transform scale-110" />
              ) : (
                <BhinchaSVG className="w-full h-full transform scale-110" />
              )}
            </div>
            <div className="relative z-10 pt-2 bg-white">
              <h3 className="text-2xl font-bold newari-red text-center">{character.name}</h3>
              <p className="newari-brown text-center mt-2">{character.role}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
