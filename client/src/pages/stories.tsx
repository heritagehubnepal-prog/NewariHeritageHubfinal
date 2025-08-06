import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StoryCard from "@/components/stories/story-card";
import { stories } from "@/data/stories";
import { Book, Filter, Search, Play } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { StorytellingPreview } from "@/components/interactive/StorytellingPreview";
import { StoryReader } from "@/components/stories/story-reader";
import { useQuery } from '@tanstack/react-query';
import { Story, Character } from '@shared/schema';

export default function Stories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNarrator, setSelectedNarrator] = useState("all");
  const [selectedStoryForPreview, setSelectedStoryForPreview] = useState<Story | null>(null);
  const [selectedStoryForReading, setSelectedStoryForReading] = useState<Story | null>(null);

  const { data: apiStories = [] } = useQuery<Story[]>({
    queryKey: ['/api/stories']
  });

  const { data: characters = [] } = useQuery<Character[]>({
    queryKey: ['/api/characters']
  });

  const narrators = ["all", "Mincha", "Bhincha", "Both"];
  
  // Merge stories and prevent key conflicts by prefixing static story IDs and ensuring proper typing
  const staticStoriesWithPrefix = stories.map(story => ({
    ...story,
    id: `static_${story.id}`,
    readingTime: parseInt(story.duration?.replace(/\D/g, '') || '5'),
    isPublished: true,
    createdAt: new Date()
  }));
  
  const allStories: any[] = [...staticStoriesWithPrefix, ...apiStories];
  
  const filteredStories = allStories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (story.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) || false);
    const matchesNarrator = selectedNarrator === "all" || 
                           story.narrator.includes(selectedNarrator) ||
                           (selectedNarrator === "Both" && story.narrator.includes("Together"));
    return matchesSearch && matchesNarrator;
  });

  const handleStoryPreview = (story: any) => {
    const convertedStory: import('@shared/schema').Story = {
      id: typeof story.id === 'string' ? story.id : story.id,
      title: story.title,
      excerpt: story.excerpt || null,
      content: story.content,
      narrator: story.narrator,
      readingTime: story.readingTime || 5,
      imageUrl: story.imageUrl || null,
      characterId: null,
      isPublished: true,
      createdAt: new Date()
    };
    setSelectedStoryForPreview(convertedStory);
  };

  const handleStoryRead = (story: any) => {
    const convertedStory: import('@shared/schema').Story = {
      id: typeof story.id === 'string' ? story.id : story.id,
      title: story.title,
      excerpt: story.excerpt || null,
      content: story.content,
      narrator: story.narrator,
      readingTime: story.readingTime || 5,
      imageUrl: story.imageUrl || null,
      characterId: null,
      isPublished: true,
      createdAt: new Date()
    };
    setSelectedStoryForReading(convertedStory);
  };

  const getCharacterForStory = (story: import('@shared/schema').Story) => {
    return characters.find(char => char.name === story.narrator) || characters[0] || {
      id: 1,
      name: story.narrator,
      role: 'Storyteller',
      description: `${story.narrator} loves sharing stories`,
      personality: 'friendly',
      imageUrl: null,
      isActive: true
    };
  };

  return (
    <div className="min-h-screen bg-newari-cream pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-newari-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold newari-red mb-6">Stories & Legends</h1>
            <p className="text-xl md:text-2xl newari-brown max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in timeless tales told by Mincha and Bhincha, where every story carries 
              the wisdom and magic of Newari culture.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-newari-brown w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-newari-beige focus:border-newari-gold"
                />
              </div>
              <div className="flex gap-2">
                <Filter className="newari-brown w-5 h-5 mt-3" />
                <div className="flex flex-wrap gap-2">
                  {narrators.map((narrator) => (
                    <Button
                      key={narrator}
                      variant={selectedNarrator === narrator ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedNarrator(narrator)}
                      className={selectedNarrator === narrator 
                        ? "bg-newari-red hover:bg-red-700 text-white" 
                        : "border-newari-gold newari-brown hover:bg-newari-gold hover:text-white"
                      }
                    >
                      {narrator}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredStories.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <StoryCard 
                    story={story} 
                    onPreview={() => handleStoryPreview(story)}
                    onRead={() => handleStoryRead(story)}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-newari-beige rounded-full flex items-center justify-center mx-auto mb-6">
                  <Book className="w-12 h-12 newari-brown" />
                </div>
                <h3 className="text-2xl font-bold newari-red mb-4">No Stories Found</h3>
                <p className="newari-brown mb-6">
                  Try adjusting your search terms or filters to find the stories you're looking for.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedNarrator("all");
                  }}
                  className="bg-newari-gold hover:bg-yellow-600 text-white"
                >
                  Clear Filters
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Story Categories */}
      <section className="py-20 bg-gradient-to-br from-newari-beige to-newari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold newari-red mb-6">Story Categories</h2>
            <p className="text-xl newari-brown max-w-3xl mx-auto">
              Explore different types of stories that preserve and share various aspects of Newari culture and wisdom.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Mythical Tales",
                description: "Ancient stories of gods, goddesses, and magical beings",
                icon: "🐉",
                count: "12 Stories"
              },
              {
                title: "Festival Stories",
                description: "Tales behind the traditions and celebrations",
                icon: "🎭",
                count: "8 Stories"
              },
              {
                title: "Moral Lessons",
                description: "Stories that teach values and life principles",
                icon: "💡",
                count: "15 Stories"
              },
              {
                title: "Historical Legends",
                description: "Real events transformed into timeless tales",
                icon: "🏛️",
                count: "6 Stories"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white rounded-2xl p-6 shadow-lg border-2 border-newari-gold hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold newari-red mb-3">{category.title}</h3>
                    <p className="newari-brown text-sm mb-4 leading-relaxed">{category.description}</p>
                    <div className="bg-newari-beige rounded-lg py-2 px-4">
                      <span className="text-sm font-semibold newari-brown">{category.count}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Storytelling Preview */}
      {selectedStoryForPreview && (
        <StorytellingPreview
          story={selectedStoryForPreview}
          character={getCharacterForStory(selectedStoryForPreview)}
          onClose={() => setSelectedStoryForPreview(null)}
        />
      )}

      {/* Story Reader with Voice Narration */}
      {selectedStoryForReading && (
        <StoryReader
          story={selectedStoryForReading}
          onBack={() => setSelectedStoryForReading(null)}
        />
      )}
    </div>
  );
}
