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
            <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
              {character.name === "Mincha" ? (
                <MinchaSVG className="w-full h-full" />
              ) : (
                <BhinchaSVG className="w-full h-full" />
              )}
            </div>
            <h3 className="text-2xl font-bold newari-red text-center">{character.name}</h3>
            <p className="newari-brown text-center mt-2">{character.role}</p>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
