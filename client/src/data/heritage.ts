export interface HeritageItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
}

export const heritageItems: HeritageItem[] = [
  {
    id: 1,
    title: "Traditional Architecture",
    description: "Discover the intricate wooden carvings and pagoda-style temples that define Newari architectural mastery.",
    category: "Architecture",
    imageUrl: "/images/heritage/architecture.jpg"
  },
  {
    id: 2,
    title: "Sacred Festivals",
    description: "Experience the vibrant celebrations of Indra Jatra, Gai Jatra, and other sacred festivals.",
    category: "Festivals",
    imageUrl: "/images/heritage/festivals.jpg"
  },
  {
    id: 3,
    title: "Traditional Cuisine",
    description: "Taste the rich flavors of traditional dishes like Newari khaja and sacred food offerings.",
    category: "Cuisine",
    imageUrl: "/images/heritage/cuisine.jpg"
  },
  {
    id: 4,
    title: "Artistic Traditions",
    description: "Explore the world of traditional crafts, from metalwork to wood carving and painting.",
    category: "Arts",
    imageUrl: "/images/heritage/arts.jpg"
  },
  {
    id: 5,
    title: "Sacred Rituals",
    description: "Understanding the spiritual practices and ceremonies that connect the community.",
    category: "Religion",
    imageUrl: "/images/heritage/rituals.jpg"
  },
  {
    id: 6,
    title: "Musical Heritage",
    description: "Traditional instruments and songs that have echoed through the valleys for centuries.",
    category: "Music",
    imageUrl: "/images/heritage/music.jpg"
  },
  {
    id: 7,
    title: "Traditional Clothing",
    description: "The beautiful garments and their cultural significance in Newari society.",
    category: "Fashion",
    imageUrl: "/images/heritage/clothing.jpg"
  },
  {
    id: 8,
    title: "Language Preservation",
    description: "Keeping the Newari language alive through stories, songs, and daily practice.",
    category: "Language",
    imageUrl: "/images/heritage/language.jpg"
  },
  {
    id: 9,
    title: "Agricultural Traditions",
    description: "Ancient farming practices and the seasonal celebrations that honor the earth.",
    category: "Agriculture",
    imageUrl: "/images/heritage/agriculture.jpg"
  }
];
