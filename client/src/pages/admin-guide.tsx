import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'wouter';
import { 
  Shield, User, Key, Plus, Edit, Trash2, 
  FileText, Image, Users, BookOpen, 
  Settings, Database, Upload, Save
} from 'lucide-react';

export default function AdminGuide() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-newari-brown mb-4">
            Heritage Hub Nepal - Admin Platform Guide
          </h1>
          <p className="text-xl text-gray-600">
            Complete guide to managing content and accessing the admin dashboard
          </p>
        </div>

        {/* Admin Credentials Section */}
        <Alert className="mb-8 border-newari-red bg-newari-red/5">
          <Shield className="h-4 w-4" />
          <AlertTitle>Admin Login Credentials</AlertTitle>
          <AlertDescription className="mt-2">
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg border">
                <h3 className="font-semibold mb-2">Default Admin Account</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Username:</strong> <code className="bg-gray-100 px-2 py-1 rounded">admin</code></div>
                  <div><strong>Password:</strong> <code className="bg-gray-100 px-2 py-1 rounded">admin123</code></div>
                  <div><strong>Admin URL:</strong> <Link href="/admin/login" className="text-newari-red hover:underline">/admin/login</Link></div>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="font-semibold mb-2 text-yellow-800">Security Notice</h3>
                <p className="text-sm text-yellow-700">
                  Please change the default password immediately after first login for security.
                </p>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="access" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="access">Access Guide</TabsTrigger>
            <TabsTrigger value="content">Content Management</TabsTrigger>
            <TabsTrigger value="features">Platform Features</TabsTrigger>
            <TabsTrigger value="security">Security & Settings</TabsTrigger>
          </TabsList>

          {/* Access Guide */}
          <TabsContent value="access" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  How to Access Admin Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Step 1: Navigate to Login</h3>
                    <div className="space-y-2">
                      <p>• Click the "Admin" link in the website footer</p>
                      <p>• Or go directly to: <code className="bg-gray-100 px-2 py-1 rounded">/admin/login</code></p>
                      <Link href="/admin/login">
                        <Button className="bg-newari-red hover:bg-newari-red/90">
                          <Shield className="mr-2 h-4 w-4" />
                          Go to Admin Login
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Step 2: Login with Credentials</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Key className="h-4 w-4" />
                          <span>Username: <strong>admin</strong></span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Key className="h-4 w-4" />
                          <span>Password: <strong>admin123</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-3">Step 3: Access Dashboard Features</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <FileText className="h-8 w-8 mx-auto mb-2 text-newari-red" />
                        <h4 className="font-semibold">Stories Management</h4>
                        <p className="text-sm text-gray-600">Add, edit, and organize cultural stories</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <BookOpen className="h-8 w-8 mx-auto mb-2 text-eco-green" />
                        <h4 className="font-semibold">Heritage Items</h4>
                        <p className="text-sm text-gray-600">Manage cultural artifacts and traditions</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <Users className="h-8 w-8 mx-auto mb-2 text-newari-gold" />
                        <h4 className="font-semibold">Characters</h4>
                        <p className="text-sm text-gray-600">Update Mincha and Bhincha profiles</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Management */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Content Management Platform
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Managing Stories
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Add New Story</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Click "Add Story" button</li>
                            <li>• Fill in title, content, and narrator</li>
                            <li>• Set reading time and category</li>
                            <li>• Save to publish</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Edit Existing Stories</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Find story in the list</li>
                            <li>• Click edit icon</li>
                            <li>• Modify content as needed</li>
                            <li>• Save changes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Heritage Items Management
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Categories Available</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Architecture (temples, palaces)</li>
                            <li>• Festivals (cultural celebrations)</li>
                            <li>• Cuisine (traditional foods)</li>
                            <li>• Arts (crafts, music, dance)</li>
                            <li>• Religion (spiritual practices)</li>
                            <li>• Music (traditional instruments)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Content Fields</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Name and description</li>
                            <li>• Category classification</li>
                            <li>• Historical significance</li>
                            <li>• Location information</li>
                            <li>• Cultural importance</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Character Profiles
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Mincha Profile</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Eco-cultural bridge builder</li>
                            <li>• Sustainability advocate</li>
                            <li>• Cultural learner through marriage</li>
                            <li>• Modern environmental consciousness</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Bhincha Profile</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Traditional Newari cultural guardian</li>
                            <li>• Heritage preservation expert</li>
                            <li>• Storytelling specialist</li>
                            <li>• Cultural performance guide</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Platform Features */}
          <TabsContent value="features" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Admin Dashboard Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Dashboard Overview</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">📊</div>
                        <div>
                          <h4 className="font-medium">Statistics Overview</h4>
                          <p className="text-sm text-gray-600">Total stories, heritage items, characters, and views</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">📝</div>
                        <div>
                          <h4 className="font-medium">Content Management Tabs</h4>
                          <p className="text-sm text-gray-600">Easy navigation between different content types</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">🔒</div>
                        <div>
                          <h4 className="font-medium">Secure Authentication</h4>
                          <p className="text-sm text-gray-600">JWT-based login with session management</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Content Operations</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                        <Plus className="h-5 w-5 text-yellow-600" />
                        <div>
                          <h4 className="font-medium">Create New Content</h4>
                          <p className="text-sm text-gray-600">Add stories, heritage items, and character updates</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                        <Edit className="h-5 w-5 text-orange-600" />
                        <div>
                          <h4 className="font-medium">Edit Existing Content</h4>
                          <p className="text-sm text-gray-600">Modify and update all published content</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                        <Trash2 className="h-5 w-5 text-red-600" />
                        <div>
                          <h4 className="font-medium">Delete Content</h4>
                          <p className="text-sm text-gray-600">Remove outdated or incorrect information</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security & Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className="border-yellow-200 bg-yellow-50">
                  <Shield className="h-4 w-4" />
                  <AlertTitle>Important Security Notes</AlertTitle>
                  <AlertDescription className="mt-2">
                    <ul className="space-y-2">
                      <li>• Change default password immediately after first login</li>
                      <li>• Use a strong password with numbers, letters, and symbols</li>
                      <li>• Log out when finished managing content</li>
                      <li>• Don't share admin credentials with unauthorized users</li>
                      <li>• Regularly review and backup your content</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Authentication System</h3>
                    <div className="space-y-3 text-sm">
                      <p><strong>Technology:</strong> JWT (JSON Web Tokens)</p>
                      <p><strong>Session Duration:</strong> 24 hours</p>
                      <p><strong>Password Encryption:</strong> bcryptjs hashing</p>
                      <p><strong>Protection:</strong> Admin-only routes with middleware</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Data Protection</h3>
                    <div className="space-y-3 text-sm">
                      <p><strong>Database:</strong> PostgreSQL with secure connections</p>
                      <p><strong>Validation:</strong> Zod schema validation</p>
                      <p><strong>Access Control:</strong> Admin verification on all operations</p>
                      <p><strong>Backup:</strong> Automatic database snapshots</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-3">Content Guidelines</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Cultural Content</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Ensure cultural accuracy and respect</li>
                        <li>• Verify historical information</li>
                        <li>• Use appropriate cultural language</li>
                        <li>• Respect traditional values</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Technical Content</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Use clear, descriptive titles</li>
                        <li>• Include proper categories</li>
                        <li>• Optimize content for readability</li>
                        <li>• Test functionality after updates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Access Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Access Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Link href="/admin/login">
                <Button className="bg-newari-red hover:bg-newari-red/90">
                  <Shield className="mr-2 h-4 w-4" />
                  Admin Login
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  View Public Site
                </Button>
              </Link>
              <Link href="/heritage">
                <Button variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Heritage Section
                </Button>
              </Link>
              <Link href="/stories">
                <Button variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Stories Section
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}