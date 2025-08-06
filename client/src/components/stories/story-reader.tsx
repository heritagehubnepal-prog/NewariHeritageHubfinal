import React, { useState } from 'react';
import { Book, Volume2, VolumeX, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VoiceNarration } from '@/components/narration/voice-narration';
import GSAPWrapper from '@/components/animations/gsap-wrapper';
import { MinchaCharacter, BhinchaCharacter } from '@/components/characters/mincha-character';
import type { Story } from '@shared/schema';

interface StoryReaderProps {
  story: Story;
  onBack: () => void;
}

export function StoryReader({ story, onBack }: StoryReaderProps) {
  const [showNarration, setShowNarration] = useState(false);

  const getCharacterComponent = () => {
    if (story.narrator?.toLowerCase().includes('mincha')) {
      return <MinchaCharacter size="large" className="mx-auto" />;
    } else if (story.narrator?.toLowerCase().includes('bhincha')) {
      return <BhinchaCharacter size="large" className="mx-auto" />;
    }
    return null;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Traditional Tales': 'bg-heritage-100 text-heritage-800 border-heritage-200',
      'Eco Stories': 'bg-eco-100 text-eco-800 border-eco-200',
      'Cultural Legends': 'bg-sage-100 text-sage-800 border-sage-200',
      'Modern Stories': 'bg-earth-100 text-earth-800 border-earth-200',
      'Festival Tales': 'bg-bamboo-100 text-bamboo-800 border-bamboo-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-eco-50 dark:from-sage-950 dark:to-eco-950">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-sage-200 dark:border-sage-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-sage-700 dark:text-sage-300 hover:text-sage-900 dark:hover:text-sage-100"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Stories
            </Button>
            
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setShowNarration(!showNarration)}
                variant="outline"
                size="sm"
                className={`${showNarration 
                  ? 'bg-eco-500 hover:bg-eco-600 text-white border-eco-500' 
                  : 'text-sage-700 dark:text-sage-300 border-sage-300'
                }`}
              >
                {showNarration ? <VolumeX className="h-4 w-4 mr-1" /> : <Volume2 className="h-4 w-4 mr-1" />}
                {showNarration ? 'Hide' : 'Show'} Narration
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <GSAPWrapper animation="fadeIn" className="space-y-8">
          {/* Story Header */}
          <Card className="border-sage-200 dark:border-sage-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              {/* Character Narrator */}
              {story.narrator && (
                <GSAPWrapper animation="bounce" delay={0.2} className="mb-4">
                  {getCharacterComponent()}
                  <p className="text-sm text-sage-600 dark:text-sage-400 mt-2">
                    Narrated by {story.narrator}
                  </p>
                </GSAPWrapper>
              )}

              <GSAPWrapper animation="slideUp" delay={0.4}>
                <CardTitle className="text-3xl font-bold text-sage-900 dark:text-sage-100 mb-4">
                  {story.title}
                </CardTitle>
                
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                  {story.readingTime && (
                    <Badge variant="outline" className="text-sage-600 dark:text-sage-400">
                      <Book className="h-3 w-3 mr-1" />
                      {story.readingTime} min read
                    </Badge>
                  )}
                </div>

                {story.excerpt && (
                  <p className="text-lg text-sage-600 dark:text-sage-400 leading-relaxed max-w-2xl mx-auto">
                    {story.excerpt}
                  </p>
                )}
              </GSAPWrapper>
            </CardHeader>
          </Card>

          {/* Voice Narration Controls */}
          {showNarration && (
            <GSAPWrapper animation="slideUp" delay={0.6}>
              <VoiceNarration 
                text={`${story.title}. ${story.excerpt || ''}. ${story.content}`}
                className="mx-auto max-w-md"
              />
            </GSAPWrapper>
          )}

          {/* Story Content */}
          <GSAPWrapper animation="fadeIn" delay={0.8}>
            <Card className="border-sage-200 dark:border-sage-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <div 
                  className="prose prose-lg prose-sage dark:prose-invert max-w-none"
                  style={{
                    lineHeight: '1.8',
                    fontSize: '1.1rem'
                  }}
                >
                  {story.content.split('\n\n').map((paragraph, index) => (
                    <GSAPWrapper 
                      key={index} 
                      animation="slideUp" 
                      delay={1 + (index * 0.1)}
                    >
                      <p className="mb-4 text-sage-800 dark:text-sage-200">
                        {paragraph}
                      </p>
                    </GSAPWrapper>
                  ))}
                </div>
              </CardContent>
            </Card>
          </GSAPWrapper>

          {/* Story Footer */}
          {(story.narrator || story.createdAt) && (
            <GSAPWrapper animation="fadeIn" delay={1.5}>
              <Card className="border-sage-200 dark:border-sage-700 bg-sage-50/50 dark:bg-sage-900/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-sage-600 dark:text-sage-400">
                    {story.narrator && (
                      <span>Narrated by {story.narrator}</span>
                    )}
                    {story.createdAt && (
                      <span>
                        Created: {new Date(story.createdAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </GSAPWrapper>
          )}
        </GSAPWrapper>
      </div>
    </div>
  );
}