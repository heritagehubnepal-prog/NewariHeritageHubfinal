import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Smartphone, QrCode, Eye } from 'lucide-react';

interface ARViewerProps {
  heritage: {
    name: string;
    description: string;
    image?: string;
    location?: string;
  };
}

export default function ARViewer({ heritage }: ARViewerProps) {
  const [isARActive, setIsARActive] = useState(false);
  const [hasCamera, setHasCamera] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startAR = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsARActive(true);
        setHasCamera(true);
      }
    } catch (error) {
      console.error('Camera access denied:', error);
      setHasCamera(false);
    }
  };

  const stopAR = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
    setIsARActive(false);
  };

  if (!isARActive) {
    return (
      <Card className="border-2 border-dashed border-newari-gold">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-newari-brown">
            <Eye className="h-5 w-5" />
            AR Heritage Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-newari-gold/20 rounded-full flex items-center justify-center">
            <QrCode className="h-12 w-12 text-newari-gold" />
          </div>
          
          <p className="text-gray-600">
            Point your camera at heritage sites to see interactive 3D models and historical information
          </p>
          
          <div className="space-y-2">
            <Button 
              onClick={startAR}
              className="w-full bg-newari-gold hover:bg-newari-gold/90"
            >
              <Camera className="mr-2 h-4 w-4" />
              Start AR Experience
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Smartphone className="h-4 w-4" />
              Works best on mobile devices
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-96 object-cover rounded-lg"
      />
      
      {/* AR Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Heritage Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm">
          <h3 className="font-bold text-lg mb-2">{heritage.name}</h3>
          <p className="text-sm opacity-90">{heritage.description}</p>
          {heritage.location && (
            <p className="text-xs text-newari-gold mt-2">📍 {heritage.location}</p>
          )}
        </div>
        
        {/* AR Frame Indicator */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-newari-gold"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-newari-gold"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-newari-gold"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-newari-gold"></div>
      </div>
      
      {/* Controls */}
      <div className="absolute top-4 right-4 pointer-events-auto">
        <Button
          onClick={stopAR}
          variant="secondary"
          size="sm"
          className="bg-black/80 text-white hover:bg-black/60"
        >
          Exit AR
        </Button>
      </div>
    </div>
  );
}