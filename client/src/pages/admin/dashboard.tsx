import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, Building, Users, BarChart3, Package,
  Plus, Edit, Trash2, LogOut, Shield, Save, Eye
} from 'lucide-react';
import { ServicesManagement } from '@/components/admin/services-management';
import { useLocation } from 'wouter';
import { apiRequest } from '@/lib/queryClient';

interface AdminStats {
  totalStories: number;
  totalHeritage: number;
  totalCharacters: number;
  totalServices: number;
  totalUsers: number;
}

interface Story {
  id: number;
  title: string;
  content: string;
  narrator: string;
  readingTime: number;
}

interface HeritageItem {
  id: number;
  name: string;
  description: string;
  category: string;
  significance: string;
  location: string;
}

interface Character {
  id: number;
  name: string;
  description: string;
  role: string;
  personality: string;
}

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [stories, setStories] = useState<any[]>([]);
  const [heritage, setHeritage] = useState<HeritageItem[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  
  // Form states
  const [showAddStoryForm, setShowAddStoryForm] = useState(false);
  const [showAddHeritageForm, setShowAddHeritageForm] = useState(false);
  const [showAddCharacterForm, setShowAddCharacterForm] = useState(false);
  const [editingStory, setEditingStory] = useState<any>(null);
  const [editingHeritage, setEditingHeritage] = useState<HeritageItem | null>(null);
  const [editingCharacter, setEditingCharacter] = useState<Character | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setLocation('/admin/login');
        return;
      }

      const [statsRes, storiesRes, heritageRes, charactersRes] = await Promise.all([
        fetch('/api/admin/stats', { 
          headers: { Authorization: `Bearer ${token}` } 
        }).then(res => res.json()),
        fetch('/api/stories').then(res => res.json()),
        fetch('/api/heritage').then(res => res.json()),
        fetch('/api/characters').then(res => res.json())
      ]);

      setStats(statsRes);
      setStories(storiesRes);
      setHeritage(heritageRes);
      setCharacters(charactersRes);
    } catch (error: any) {
      console.error('Failed to fetch data:', error);
      if (error.message?.includes('401')) {
        setLocation('/admin/login');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setLocation('/admin/login');
  };

  // Story Management
  const handleAddStory = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const content = formData.get('content') as string;
    const readingTimeValue = formData.get('readingTime') as string;
    
    // Auto-calculate reading time if not provided (average 200 words per minute)
    const calculatedReadingTime = readingTimeValue ? 
      parseInt(readingTimeValue) : 
      Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
    
    const storyData = {
      title: formData.get('title') as string,
      excerpt: formData.get('excerpt') as string || null,
      content: content,
      narrator: formData.get('narrator') as string,
      readingTime: calculatedReadingTime
    };

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/stories', {
        method: 'POST',
        body: JSON.stringify(storyData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        setShowAddStoryForm(false);
        fetchData();
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error('Failed to add story:', error);
    }
  };

  const handleEditStory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStory) return;
    
    const formData = new FormData(e.target as HTMLFormElement);
    const content = formData.get('content') as string;
    const readingTimeValue = formData.get('readingTime') as string;
    
    // Auto-calculate reading time if not provided (average 200 words per minute)
    const calculatedReadingTime = readingTimeValue ? 
      parseInt(readingTimeValue) : 
      Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
    
    const storyData = {
      title: formData.get('title') as string,
      excerpt: formData.get('excerpt') as string || null,
      content: content,
      narrator: formData.get('narrator') as string,
      readingTime: calculatedReadingTime
    };

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/stories/${editingStory.id}`, {
        method: 'PUT',
        body: JSON.stringify(storyData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        setEditingStory(null);
        fetchData();
      }
    } catch (error) {
      console.error('Failed to edit story:', error);
    }
  };

  const handleDeleteStory = async (id: number) => {
    if (!confirm('Are you sure you want to delete this story?')) return;
    
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/stories/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Failed to delete story:', error);
    }
  };

  // Heritage Management
  const handleAddHeritage = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const heritageData = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      category: formData.get('category') as string,
      significance: formData.get('significance') as string,
      location: formData.get('location') as string
    };

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/heritage', {
        method: 'POST',
        body: JSON.stringify(heritageData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        setShowAddHeritageForm(false);
        fetchData();
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error('Failed to add heritage item:', error);
    }
  };

  const handleDeleteHeritage = async (id: number) => {
    if (!confirm('Are you sure you want to delete this heritage item?')) return;
    
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/heritage/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Failed to delete heritage item:', error);
    }
  };

  // Character Management
  const handleAddCharacter = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const characterData = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      role: formData.get('role') as string,
      personality: formData.get('personality') as string
    };

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/characters', {
        method: 'POST',
        body: JSON.stringify(characterData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        setShowAddCharacterForm(false);
        fetchData();
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error('Failed to add character:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-newari-red" />
              <h1 className="text-2xl font-bold text-gray-900">Heritage Hub Nepal Admin</h1>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Stories</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalStories || stories.length}</div>
              <p className="text-xs text-muted-foreground">Cultural stories and legends</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Heritage Items</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalHeritage || heritage.length}</div>
              <p className="text-xs text-muted-foreground">Cultural artifacts and sites</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Characters</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalCharacters || characters.length}</div>
              <p className="text-xs text-muted-foreground">Cultural ambassadors</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Services</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalServices || 0}</div>
              <p className="text-xs text-muted-foreground">Hub services available</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Content Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="stories" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="stories">Stories</TabsTrigger>
              <TabsTrigger value="heritage">Heritage</TabsTrigger>
              <TabsTrigger value="characters">Characters</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Stories Tab */}
            <TabsContent value="stories" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Stories</h2>
                <Button 
                  onClick={() => setShowAddStoryForm(true)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Story
                </Button>
              </div>
              
              {/* Add/Edit Story Form */}
              {(showAddStoryForm || editingStory) && (
                <Card>
                  <CardHeader>
                    <CardTitle>{editingStory ? 'Edit Story' : 'Add New Story'}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={editingStory ? handleEditStory : handleAddStory} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <Input
                          name="title"
                          required
                          defaultValue={editingStory?.title || ''}
                          placeholder="Enter story title"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Excerpt (Brief Summary)</label>
                        <textarea
                          name="excerpt"
                          rows={2}
                          defaultValue={editingStory?.excerpt || ''}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-newari-red focus:border-transparent"
                          placeholder="Enter a brief excerpt or summary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Content</label>
                        <textarea
                          name="content"
                          required
                          rows={6}
                          defaultValue={editingStory?.content || ''}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-newari-red focus:border-transparent"
                          placeholder="Enter story content"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Narrator</label>
                          <select 
                            name="narrator" 
                            required 
                            defaultValue={editingStory?.narrator || ''}
                            className="w-full p-2 border border-gray-300 rounded-md"
                          >
                            <option value="">Select narrator</option>
                            <option value="Mincha">Mincha</option>
                            <option value="Bhincha">Bhincha</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Reading Time (minutes) <span className="text-gray-500 text-xs">- Optional, auto-calculated if empty</span></label>
                          <Input
                            type="number"
                            name="readingTime"
                            defaultValue={editingStory?.readingTime || editingStory?.reading_time || ''}
                            placeholder="Auto-calculated from content"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" className="bg-green-600 hover:bg-green-700">
                          <Save className="mr-2 h-4 w-4" />
                          {editingStory ? 'Update Story' : 'Save Story'}
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => {
                            setShowAddStoryForm(false);
                            setEditingStory(null);
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
              
              {/* Stories List */}
              <Card>
                <CardHeader>
                  <CardTitle>Existing Stories ({stories.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {stories.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No stories added yet. Click "Add Story" to get started.</p>
                  ) : (
                    <div className="space-y-4">
                      {stories.map((story) => (
                        <div key={story.id} className="border rounded-lg p-4 flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{story.title}</h3>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{story.content.substring(0, 150)}...</p>
                            <div className="flex gap-4 mt-3 text-xs text-gray-500">
                              <span className="bg-gray-100 px-2 py-1 rounded">Narrator: {story.narrator}</span>
                              <span className="bg-gray-100 px-2 py-1 rounded">Reading Time: {story.readingTime || story.reading_time || 5} min</span>
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button size="sm" variant="outline" onClick={() => setEditingStory(story)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600" onClick={() => handleDeleteStory(story.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Heritage Tab */}
            <TabsContent value="heritage" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Heritage Items</h2>
                <Button 
                  onClick={() => setShowAddHeritageForm(true)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Heritage Item
                </Button>
              </div>
              
              {/* Add Heritage Form */}
              {showAddHeritageForm && (
                <Card>
                  <CardHeader>
                    <CardTitle>Add New Heritage Item</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddHeritage} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <Input name="name" required placeholder="Enter heritage item name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                          name="description"
                          required
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-newari-red focus:border-transparent"
                          placeholder="Enter description"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Category</label>
                          <select name="category" required className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">Select category</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Festivals">Festivals</option>
                            <option value="Cuisine">Cuisine</option>
                            <option value="Arts">Arts</option>
                            <option value="Religion">Religion</option>
                            <option value="Music">Music</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Location</label>
                          <Input name="location" required placeholder="Enter location" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Cultural Significance</label>
                        <textarea
                          name="significance"
                          required
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-newari-red focus:border-transparent"
                          placeholder="Enter cultural significance"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" className="bg-green-600 hover:bg-green-700">
                          <Save className="mr-2 h-4 w-4" />
                          Save Heritage Item
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => setShowAddHeritageForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
              
              {/* Heritage List */}
              <Card>
                <CardHeader>
                  <CardTitle>Existing Heritage Items ({heritage.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {heritage.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No heritage items added yet.</p>
                  ) : (
                    <div className="grid gap-4">
                      {heritage.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4 flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{item.description.substring(0, 100)}...</p>
                            <div className="flex gap-2 mt-3">
                              <span className="bg-newari-gold/20 text-newari-brown px-2 py-1 rounded text-xs">{item.category}</span>
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{item.location}</span>
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600" onClick={() => handleDeleteHeritage(item.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Characters Tab */}
            <TabsContent value="characters" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Characters</h2>
                <Button 
                  onClick={() => setShowAddCharacterForm(true)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Character
                </Button>
              </div>
              
              {/* Add Character Form */}
              {showAddCharacterForm && (
                <Card>
                  <CardHeader>
                    <CardTitle>Add New Character</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddCharacter} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Name</label>
                          <Input name="name" required placeholder="Enter character name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Role</label>
                          <Input name="role" required placeholder="e.g., Cultural Guardian" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                          name="description"
                          required
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-newari-red focus:border-transparent"
                          placeholder="Enter character description"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Personality</label>
                        <textarea
                          name="personality"
                          required
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-newari-red focus:border-transparent"
                          placeholder="Enter personality traits"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" className="bg-green-600 hover:bg-green-700">
                          <Save className="mr-2 h-4 w-4" />
                          Save Character
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => setShowAddCharacterForm(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
              
              {/* Characters List */}
              <Card>
                <CardHeader>
                  <CardTitle>Existing Characters ({characters.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {characters.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No characters added yet.</p>
                  ) : (
                    <div className="grid gap-4">
                      {characters.map((character) => (
                        <div key={character.id} className="border rounded-lg p-4 flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{character.name}</h3>
                            <p className="text-sm text-newari-gold font-medium">{character.role}</p>
                            <p className="text-sm text-gray-600 mt-2">{character.description.substring(0, 120)}...</p>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-6">
              <ServicesManagement />
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Settings</CardTitle>
                  <CardDescription>Configure platform preferences and security settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">Change Admin Password</h3>
                        <p className="text-sm text-gray-600">Update your admin password for security</p>
                      </div>
                      <Button variant="outline">Change Password</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">Backup Content</h3>
                        <p className="text-sm text-gray-600">Download a backup of all content data</p>
                      </div>
                      <Button variant="outline">Download Backup</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">View Public Site</h3>
                        <p className="text-sm text-gray-600">Preview how the public site appears</p>
                      </div>
                      <Button variant="outline" onClick={() => window.open('/', '_blank')}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Site
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}