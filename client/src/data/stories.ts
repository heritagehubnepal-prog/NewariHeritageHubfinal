export interface Story {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  narrator: string;
  duration: string;
  imageUrl?: string;
  characterId?: number;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "The Golden Pagoda",
    excerpt: "A tale of ancient wisdom and the sacred temple that watches over Kathmandu Valley, teaching lessons of devotion and community.",
    content: "Long ago, in the heart of Kathmandu Valley, there stood a magnificent pagoda made of pure gold...",
    narrator: "Told by Mincha",
    duration: "8 min read",
    imageUrl: "/images/stories/golden-pagoda.jpg",
    characterId: 1
  },
  {
    id: 2,
    title: "Festival of Lights",
    excerpt: "Discover how the celebration of lights brings families together and honors the gods during the most magical time of year.",
    content: "When darkness falls upon the valley and the autumn air grows crisp, the Newari people prepare for the most beautiful celebration...",
    narrator: "Told by Bhincha",
    duration: "6 min read",
    imageUrl: "/images/stories/festival-lights.jpg",
    characterId: 2
  },
  {
    id: 3,
    title: "The Dancing Goddess",
    excerpt: "A mystical legend of the goddess who taught the people the sacred dances that connect earth to heaven.",
    content: "In ancient times, when the gods still walked among mortals, a beautiful goddess descended from the heavens...",
    narrator: "Told Together",
    duration: "10 min read",
    imageUrl: "/images/stories/dancing-goddess.jpg"
  },
  {
    id: 4,
    title: "The Master Craftsman",
    excerpt: "Learn about the legendary artisan whose woodcarvings came to life and protected the city.",
    content: "In the old quarters of Bhaktapur lived a master craftsman whose skill with wood was unmatched...",
    narrator: "Told by Mincha",
    duration: "7 min read",
    imageUrl: "/images/stories/master-craftsman.jpg",
    characterId: 1
  },
  {
    id: 5,
    title: "The Rice Festival Miracle",
    excerpt: "A heartwarming story about sharing and community during the harvest celebration.",
    content: "During the great rice festival, when the golden grains filled every storehouse in the valley...",
    narrator: "Told by Bhincha",
    duration: "5 min read",
    imageUrl: "/images/stories/rice-festival.jpg",
    characterId: 2
  },
  {
    id: 6,
    title: "The Wisdom of the Banyan Tree",
    excerpt: "An ancient tree shares its knowledge with a young seeker, revealing the secrets of time.",
    content: "At the center of the village square grew an enormous banyan tree, older than memory itself...",
    narrator: "Told by Mincha",
    duration: "9 min read",
    imageUrl: "/images/stories/banyan-tree.jpg",
    characterId: 1
  }
];
