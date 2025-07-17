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
    title: "Nyatapola Temple - Bhaktapur",
    description: "Built in 1702 by King Bhupatindra Malla, this five-tiered pagoda dedicated to Goddess Siddhi Lakshmi features carvings of mythical protectors like elephants and tigers, symbolizing her dominance over Bhairava.",
    category: "Architecture",
    imageUrl: "/images/heritage/nyatapola.jpg"
  },
  {
    id: 2,
    title: "Bisket Jatra Festival",
    description: "Marking the Nepali New Year in Bhaktapur, this festival revolves around the legend of a cursed princess freed by a brave suitor who killed serpents emerging from her nostrils. Features dramatic chariot processions of Bhairab and Bhadrakali.",
    category: "Festivals",
    imageUrl: "/images/heritage/bisket-jatra.jpg"
  },
  {
    id: 3,
    title: "Changu Narayan Temple",
    description: "One of Nepal's oldest temples housing ten avatars of Vishnu carved in authentic Newari style, alongside inscriptions dating back to 464 CE from King Manadeva's reign.",
    category: "Architecture",
    imageUrl: "/images/heritage/changu-narayan.jpg"
  },
  {
    id: 4,
    title: "Uma-Maheswara Sculpture",
    description: "12th-century grey limestone statue from Patan Museum symbolizing divine unity through Shiva and Parvati, embodying harmonious balance between masculine and feminine cosmic energies.",
    category: "Arts",
    imageUrl: "/images/heritage/uma-maheswara.jpg"
  },
  {
    id: 5,
    title: "Guru Padmasambhava Sacred Caves",
    description: "Yanglesho and Asura caves near Pharping where the Lotus-Born master meditated to subdue local spirits and integrate them into the Buddhist pantheon, symbolizing harmony between indigenous beliefs and Vajrayana teachings.",
    category: "Religion",
    imageUrl: "/images/heritage/padmasambhava-caves.jpg"
  },
  {
    id: 6,
    title: "Phewa Lake and Taal Barahi",
    description: "Sacred lake in Pokhara formed by divine intervention, where Nagas (serpent guardians) protect water bodies. King Kulmandan Shah established Taal Barahi temple following a divine vision.",
    category: "Religion",
    imageUrl: "/images/heritage/phewa-lake.jpg"
  },
  {
    id: 7,
    title: "Sithi Nakha Festival",
    description: "Celebrated to honor Kumar Kartikeya and Ganesha, involving rituals for prosperity and familial harmony. Demonstrates the integration of agricultural cycles with spiritual practices.",
    category: "Festivals",
    imageUrl: "/images/heritage/sithi-nakha.jpg"
  },
  {
    id: 8,
    title: "Krishna Temple - Patan",
    description: "Built in 1636 by Siddhi Narsingh Malla, this masterpiece features intricate carvings and multistoried pagoda-style architecture, exemplifying Newari craftsmanship and religious devotion.",
    category: "Architecture",
    imageUrl: "/images/heritage/krishna-temple.jpg"
  },
  {
    id: 9,
    title: "Licchavi Stone Inscriptions",
    description: "Ancient stone inscriptions from the 4th-9th century CE providing tangible evidence of historical events and religious practices, including the famous Changunārāyana pillar dated 464 CE.",
    category: "Language",
    imageUrl: "/images/heritage/licchavi-inscriptions.jpg"
  },
  {
    id: 10,
    title: "Baghwan Bahal Temple - Thamel",
    description: "Historic temple showcasing how Guru Padmasambhava's teachings transformed religious practices while preserving pre-existing belief systems, blending Hindu and Buddhist architectural motifs.",
    category: "Religion",
    imageUrl: "/images/heritage/baghwan-bahal.jpg"
  },
  {
    id: 11,
    title: "Hadigaun Archaeological Site",
    description: "Former capital of Licchavi dynasty with artifacts over 1,300 years old, including life-size stone statue of Jaya Varma from 2nd century CE and remnants of Kailashkut Bhawan palace.",
    category: "Architecture",
    imageUrl: "/images/heritage/hadigaun.jpg"
  },
  {
    id: 12,
    title: "Mythical Nagas and Garudas",
    description: "Serpent-like beings revered as guardians of water bodies and bird-like creatures symbolizing heavenly power, representing eternal cosmic struggle between heaven and underworld in Hindu-Buddhist cosmology.",
    category: "Religion",
    imageUrl: "/images/heritage/nagas-garudas.jpg"
  }
];
