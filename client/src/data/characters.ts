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
    description: "Bhincha preserves Nepal's rich cultural heritage, rituals, and traditions across all Heritage Hub locations. As a traditional Newari girl, she guides cultural performances, storytelling sessions, and heritage workshops. Her versatile design adapts to represent different regional themes while maintaining her core identity as a cultural custodian and educator.",
    quote: "Every tradition carries the heartbeat of our ancestors into tomorrow",
    imageUrl: "/images/bhincha.svg"
  }
];
