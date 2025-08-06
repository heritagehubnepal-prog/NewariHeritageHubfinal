import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Package, DollarSign, Clock, Settings } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Service, InsertService } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';

export function ServicesManagement() {
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: services = [], isLoading } = useQuery<Service[]>({
    queryKey: ['/api/admin/services']
  });

  const createServiceMutation = useMutation({
    mutationFn: (service: InsertService) => apiRequest('/api/admin/services', {
      method: 'POST',
      body: JSON.stringify(service),
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/services'] });
      queryClient.invalidateQueries({ queryKey: ['/api/admin/stats'] });
      toast({ title: 'Success', description: 'Service created successfully' });
      setIsDialogOpen(false);
      setEditingService(null);
    },
    onError: () => {
      toast({ title: 'Error', description: 'Failed to create service' });
    },
  });

  const updateServiceMutation = useMutation({
    mutationFn: ({ id, service }: { id: number; service: Partial<InsertService> }) =>
      apiRequest(`/api/admin/services/${id}`, {
        method: 'PUT',
        body: JSON.stringify(service),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/services'] });
      toast({ title: 'Success', description: 'Service updated successfully' });
      setIsDialogOpen(false);
      setEditingService(null);
    },
    onError: () => {
      toast({ title: 'Error', description: 'Failed to update service' });
    },
  });

  const deleteServiceMutation = useMutation({
    mutationFn: (id: number) => apiRequest(`/api/admin/services/${id}`, {
      method: 'DELETE',
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/services'] });
      queryClient.invalidateQueries({ queryKey: ['/api/admin/stats'] });
      toast({ title: 'Success', description: 'Service deleted successfully' });
    },
    onError: () => {
      toast({ title: 'Error', description: 'Failed to delete service' });
    },
  });

  const serviceCategories = [
    { value: 'eco-products', label: 'Eco-Products & Merchandise' },
    { value: 'training', label: 'Training & Workshops' },
    { value: 'events', label: 'Event Hosting' },
    { value: 'market', label: 'Farmers Market Stalls' },
    { value: 'refreshments', label: 'Heritage Refreshments' },
    { value: 'digital', label: 'Digital Content' }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'eco-products': 'bg-green-100 text-green-800 border-green-200',
      'training': 'bg-blue-100 text-blue-800 border-blue-200',
      'events': 'bg-purple-100 text-purple-800 border-purple-200',
      'market': 'bg-orange-100 text-orange-800 border-orange-200',
      'refreshments': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'digital': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const features = formData.get('features')?.toString().split('\n').filter(f => f.trim()) || [];
    
    const serviceData: InsertService = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      category: formData.get('category') as string,
      price: formData.get('price') as string || null,
      duration: formData.get('duration') as string || null,
      features,
      imageUrl: formData.get('imageUrl') as string || null,
      isActive: true,
    };

    if (editingService) {
      updateServiceMutation.mutate({ id: editingService.id, service: serviceData });
    } else {
      createServiceMutation.mutate(serviceData);
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center p-8">Loading services...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Package className="h-6 w-6 text-eco-600" />
          <h2 className="text-2xl font-bold text-sage-900">Services Management</h2>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              onClick={() => {
                setEditingService(null);
                setIsDialogOpen(true);
              }}
              className="bg-eco-500 hover:bg-eco-600 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingService ? 'Edit Service' : 'Add New Service'}
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Service Title</Label>
                  <Input
                    id="title"
                    name="title"
                    defaultValue={editingService?.title || ''}
                    placeholder="e.g., Bamboo Crafts Workshop"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select name="category" defaultValue={editingService?.category || ''} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCategories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={editingService?.description || ''}
                  placeholder="Detailed description of the service..."
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    name="price"
                    defaultValue={editingService?.price || ''}
                    placeholder="e.g., NPR 2,500/person"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    name="duration"
                    defaultValue={editingService?.duration || ''}
                    placeholder="e.g., 2 hours"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="features">Features (one per line)</Label>
                <Textarea
                  id="features"
                  name="features"
                  defaultValue={editingService?.features?.join('\n') || ''}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  defaultValue={editingService?.imageUrl || ''}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={createServiceMutation.isPending || updateServiceMutation.isPending}
                  className="bg-eco-500 hover:bg-eco-600 text-white"
                >
                  {editingService ? 'Update' : 'Create'} Service
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} className="border-sage-200 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-sage-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <Badge className={getCategoryColor(service.category)}>
                    {serviceCategories.find(cat => cat.value === service.category)?.label}
                  </Badge>
                </div>
                <div className="flex space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setEditingService(service);
                      setIsDialogOpen(true);
                    }}
                    className="h-8 w-8 p-0 text-sage-600 hover:text-sage-900"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this service?')) {
                        deleteServiceMutation.mutate(service.id);
                      }
                    }}
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-sage-700 text-sm leading-relaxed">
                {service.description}
              </p>

              {(service.price || service.duration) && (
                <div className="flex flex-wrap gap-2">
                  {service.price && (
                    <div className="flex items-center gap-1 text-xs text-sage-600">
                      <DollarSign className="h-3 w-3" />
                      {service.price}
                    </div>
                  )}
                  {service.duration && (
                    <div className="flex items-center gap-1 text-xs text-sage-600">
                      <Clock className="h-3 w-3" />
                      {service.duration}
                    </div>
                  )}
                </div>
              )}

              {service.features && service.features.length > 0 && (
                <div className="space-y-1">
                  <p className="text-xs font-medium text-sage-800">Features:</p>
                  <ul className="text-xs text-sage-600 space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center gap-1">
                        <span className="w-1 h-1 bg-eco-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sage-500">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Settings className="h-3 w-3 text-sage-500" />
                  <span className="text-xs text-sage-500">
                    {service.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                {service.createdAt && (
                  <span className="text-xs text-sage-500">
                    Created: {new Date(service.createdAt).toLocaleDateString()}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {services.length === 0 && (
        <Card className="border-dashed border-2 border-sage-300 p-8">
          <div className="text-center">
            <Package className="h-12 w-12 text-sage-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-sage-900 mb-2">No Services Yet</h3>
            <p className="text-sage-600 mb-4">
              Add your first Heritage Hub Nepal service to get started.
            </p>
            <Button
              onClick={() => {
                setEditingService(null);
                setIsDialogOpen(true);
              }}
              className="bg-eco-500 hover:bg-eco-600 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add First Service
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}