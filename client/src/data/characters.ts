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
    role: "Wise Guardian",
    trait: "Compassionate",
    description: "Mincha embodies the wisdom of ancestors and the protective spirit of Newari culture. As a guardian of traditions, he guides young minds through the rich tapestry of Nepal's heritage, teaching them the importance of community, respect for elders, and the preservation of cultural values.",
    quote: "Wisdom flows like the sacred rivers through the valleys of tradition",
    imageUrl: "/images/mincha.svg"
  },
  {
    id: 2,
    name: "Bhincha",
    role: "Kind Storyteller",
    trait: "Joyful",
    description: "Bhincha brings joy and wonder to every tale she tells. Through her stories, children discover the magic of Newari festivals, legends, and the values that bind communities together. Her gentle spirit and infectious laughter make learning about heritage a delightful adventure for all ages.",
    quote: "Stories are the bridges that connect hearts across generations",
    imageUrl: "/images/bhincha.svg"
  }
];
