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
    title: "The Cursed Princess of Bhaktapur",
    excerpt: "The legendary tale behind Bisket Jatra festival, where a brave suitor freed a cursed princess by slaying serpents that emerged from her nostrils each night.",
    content: "In ancient Bhaktapur, there lived a beautiful princess cursed by dark magic. Every suitor who tried to marry her would mysteriously die during their wedding night. The curse manifested as deadly serpents that emerged from her nostrils while she slept. One brave young man discovered the secret and stayed awake, killing the serpents with his sword. His courage broke the curse forever, and their union is celebrated to this day through the dramatic chariot processions of Bhairab and Bhadrakali during Bisket Jatra, marking the Nepali New Year with the triumph of love over evil.",
    narrator: "Told by Bhincha",
    duration: "8 min read",
    imageUrl: "/images/stories/cursed-princess.jpg",
    characterId: 2
  },
  {
    id: 2,
    title: "The Sacred Flood of Phewa Lake",
    excerpt: "How divine intervention transformed the valley of Pokhara, creating the sacred lake where Nagas guard the waters and protect the faithful.",
    content: "Long before Phewa Lake graced the valley of Pokhara, a thriving community lived in the area. One day, a divine being disguised as a wandering jogi (ascetic) appeared and warned an elderly woman of an impending catastrophe. 'Leave this place,' he said, 'for the heavens will open and flood the earth.' The compassionate woman heeded the warning and evacuated with her family. That very night, torrential rains fell for days, transforming the valley into the sacred lake we see today. Fragments of a statue honoring this wise woman were later discovered near where King Kulmandan Shah built the Taal Barahi temple, following his own divine vision. The Nagas, serpent guardians of water bodies, now protect this sacred space where the temple stands as an island sanctuary.",
    narrator: "Told by Mincha",
    duration: "10 min read",
    imageUrl: "/images/stories/phewa-lake-formation.jpg",
    characterId: 1
  },
  {
    id: 3,
    title: "The Lotus-Born Master's Sacred Caves",
    excerpt: "Guru Padmasambhava's meditation in Yanglesho and Asura caves, where he transformed local spirits into Buddhist protectors.",
    content: "In the sacred caves of Yanglesho and Asura near Pharping, the great Guru Padmasambhava undertook profound meditation to bring harmony between ancient spirits and Buddhist teachings. Known as the Lotus-Born master, he possessed the extraordinary ability to communicate with local deities and spirits who had protected the land for centuries. Through patient meditation and compassionate wisdom, he convinced these powerful beings to become protectors of the Buddhist Dharma rather than obstacles to it. His eight manifestations—including the fierce Guru Dorje Drolo wielding vajra and trident—demonstrate different aspects of compassion needed to overcome spiritual obstacles. This transformation created a beautiful synthesis where indigenous Kirat and Bon traditions could coexist with Vajrayana Buddhism, enriching both while preserving the spiritual essence of each.",
    narrator: "Told Together",
    duration: "12 min read",
    imageUrl: "/images/stories/padmasambhava-caves.jpg"
  },
  {
    id: 4,
    title: "King Manadeva's Sacred Pillar",
    excerpt: "The story of the Changunārāyana pillar inscription from 464 CE and how it became a bridge between myth and history.",
    content: "During the reign of the great Licchavi King Manadeva I in 464 CE, a magnificent stone pillar was erected at Changu Narayan temple. This wasn't merely a royal monument—it was a sacred bridge connecting earthly rule with divine blessing. The pillar's inscription tells of King Manadeva's devotion to Lord Vishnu and his dedication to protecting both Hindu and Buddhist traditions in his realm. Over the centuries, this ancient stone has become more than historical record; local communities worship at the pillar, believing it holds the power to bless their prayers with the king's righteous spirit. The ten avatars of Vishnu carved in authentic Newari style around the temple seem to dance in the flickering light of oil lamps, reminding visitors that history and mythology are interwoven threads in the fabric of Newari culture.",
    narrator: "Told by Bhincha",
    duration: "7 min read",
    imageUrl: "/images/stories/manadeva-pillar.jpg",
    characterId: 2
  },
  {
    id: 5,
    title: "The Divine Unity of Uma-Maheswara",
    excerpt: "The 12th-century sculpture that teaches the sacred balance between masculine and feminine cosmic energies through Shiva and Parvati.",
    content: "In the Gallery B of Patan Museum stands a remarkable 12th-century grey limestone sculpture that tells the eternal story of cosmic balance. Uma-Maheswara depicts Lord Shiva and his beloved consort Parvati in perfect harmony, representing far more than divine love—they embody the fundamental principle that creation requires both masculine and feminine energies in equal measure. During the Malla period, artists understood that depicting deities wasn't merely artistic expression but spiritual teaching. The sculpture shows how apparent opposites—strength and gentleness, creation and destruction, earth and sky—must unite to achieve cosmic harmony. Devotees who meditate before this sacred image learn that within each person exists both energies, and true enlightenment comes from balancing them just as Shiva and Parvati demonstrate through their eternal embrace.",
    narrator: "Told by Mincha",
    duration: "9 min read",
    imageUrl: "/images/stories/uma-maheswara.jpg",
    characterId: 1
  },
  {
    id: 6,
    title: "The Eternal Dance of Nagas and Garudas",
    excerpt: "Ancient legends of the cosmic struggle between serpent guardians of water and celestial bird warriors, maintaining universal balance.",
    content: "In the mountains surrounding Pokhara, an eternal cosmic dance plays out between two magnificent creatures—the Nagas and Garudas. Nagas, serpent-like beings with wisdom deeper than the ocean trenches, guard all water sources and underground treasures. They bring fertility to the land and healing rains to farmers. Garudas, majestic bird-like creatures with wings that span the heavens, represent divine justice and spiritual liberation. Though these beings appear as eternal enemies in their cosmic struggle, wise ones understand they maintain perfect balance. When Nagas ensure water flows through valleys, Garudas lift prayers to the heavens. When Garudas bring divine messages from above, Nagas root them in earthly wisdom. Their dance in the skies above Phewa Lake reminds us that opposition often conceals deeper unity, and that heaven and earth need each other to sustain all life.",
    narrator: "Told Together",
    duration: "11 min read",
    imageUrl: "/images/stories/nagas-garudas.jpg"
  },
  {
    id: 7,
    title: "The Master Builders of Nyatapola",
    excerpt: "The remarkable construction of Bhaktapur's five-tiered temple by King Bhupatindra Malla and the mythical protectors carved in stone.",
    content: "In 1702, King Bhupatindra Malla of Bhaktapur dreamed of building a temple so magnificent that it would surpass all others in the valley. Dedicated to Goddess Siddhi Lakshmi, the Nyatapola Temple would rise five tiers toward heaven, each level protected by increasingly powerful guardians. The master craftsmen began with elephants at the base—symbols of strength and wisdom. Above them, fierce lions representing royal power and courage. Third came the mythical griffins, protectors of divine treasures. Fourth tier featured the goddess Baghini and god Singhini, fierce protectors with supernatural strength. At the highest level, Goddess Siddhi Lakshmi herself resides, whose power is ten times greater than the fearsome Bhairava. Each guardian is said to possess ten times the strength of the one below, creating an impenetrable spiritual fortress. The temple has survived countless earthquakes, its five-tiered structure swaying but never falling, protected by the guardian spirits carved in stone who keep eternal watch over Bhaktapur.",
    narrator: "Told by Bhincha",
    duration: "8 min read",
    imageUrl: "/images/stories/nyatapola-builders.jpg",
    characterId: 2
  }
];
