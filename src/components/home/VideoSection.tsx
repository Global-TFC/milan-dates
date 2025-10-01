import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

const VideoSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6">
                The Art of Creating Perfect Gift Boxes
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Watch our master craftsmen carefully select and arrange each premium date, 
                chocolate, and delicacy into our signature gift boxes. Every MilanDates creation 
                is a work of art, designed to deliver moments of pure luxury.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✦</span>
                  <div>
                    <h4 className="font-semibold mb-1">Handpicked Selection</h4>
                    <p className="text-sm text-muted-foreground">
                      Each date is individually inspected for perfect ripeness and quality
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✦</span>
                  <div>
                    <h4 className="font-semibold mb-1">Artisanal Craftsmanship</h4>
                    <p className="text-sm text-muted-foreground">
                      Traditional techniques passed down through generations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✦</span>
                  <div>
                    <h4 className="font-semibold mb-1">Elegant Presentation</h4>
                    <p className="text-sm text-muted-foreground">
                      Luxurious packaging that makes every gift unforgettable
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-luxury text-primary-foreground"
                onClick={() => setVideoOpen(true)}
              >
                <Play className="h-5 w-5 mr-2" />
                Watch the Process
              </Button>
            </div>

            {/* Video Thumbnail */}
            <div className="relative group cursor-pointer" onClick={() => setVideoOpen(true)}>
              <div className="aspect-video rounded-lg overflow-hidden shadow-luxury">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800"
                  alt="Gift box creation process"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-luxury-brown ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium shadow-lg">
                Behind the Scenes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl p-0">
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
            <p className="text-white">Video player would be embedded here</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoSection;