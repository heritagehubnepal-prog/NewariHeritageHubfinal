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
    role: "Eco-Friendly Cultural Learner",
    trait: "Curious & Passionate",
    description: "Mincha is an enthusiastic young man who married into Newari culture through his beloved wife Bhincha. Though not originally from the Newari community, he is deeply fascinated by the rich cultural heritage and actively learning traditions, stories, and customs. His passion for eco-friendly practices drives him to discover beautiful connections between ancient myths and sustainable living, making him a bridge between modern environmental consciousness and traditional wisdom.",
    quote: "Every ancient story holds the seeds of our sustainable future",
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
