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
    description: "Mincha represents modernity, sustainability, and the younger generation's role in addressing societal challenges. As a forward-thinking boy who champions eco-friendly practices like composting, rainwater harvesting, urban farming, and renewable energy, he bridges traditional wisdom with contemporary environmental stewardship.",
    quote: "Innovation and tradition dance together in harmony for a sustainable future",
    imageUrl: "/images/mincha.svg"
  },
  {
    id: 2,
    name: "Bhincha",
    role: "Traditional Newari Cultural Guardian",
    trait: "Wise & Nurturing",
    description: "Bhincha embodies the rich cultural heritage of the Newar community from across Nepal. As a custodian of rituals, traditions, and crafts, she represents the diversity of Newari culture from Kathmandu Valley to Patan, Bhaktapur, and Bandipur. Through her nurturing wisdom, she preserves and shares the sacred knowledge of festivals, arts, and ancestral practices.",
    quote: "In every tradition lies the wisdom of generations, waiting to bloom in modern hearts",
    imageUrl: "/images/bhincha.svg"
  }
];
