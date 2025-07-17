export interface Character {
  id: number;
  name: string;
  role: string;
  trait: string;
  description: string;
  quote: string;
  imageUrl?: string;
}

export const characters: Character[] = [
  {
    id: 1,
    name: "Mincha",
    role: "Modern Eco-Friendly Ambassador",
    trait: "Innovative & Sustainable",
    description: "Mincha champions sustainability, innovation, and social responsibility at Heritage Hub Nepal. This modern eco-friendly boy promotes urban farming, bamboo crafting, zero-waste practices, and renewable energy solutions. His adaptable design represents different regions while maintaining his core message of environmental stewardship and community engagement.",
    quote: "Where tradition meets innovation, sustainable futures take root",
    imageUrl: "/images/mincha.svg"
  },
  {
    id: 2,
    name: "Bhincha",
    role: "Traditional Newari Cultural Guardian",
    trait: "Wise & Nurturing",
    description: "Bhincha preserves Nepal's rich cultural heritage wearing authentic traditional Newari attire - black Haku Patasi sari with red borders, golden threaded Cholo blouse, Surwal pants, and ceremonial jewelry including Tilhari necklace and Pote beads. She guides cultural performances, storytelling sessions, and heritage workshops across all Heritage Hub locations, embodying the timeless beauty of Newari tradition.",
    quote: "Every tradition carries the heartbeat of our ancestors into tomorrow",
    imageUrl: "/images/bhincha.svg"
  }
];
