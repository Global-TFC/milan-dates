import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import theArtOfImage from '@/assets/theartof.png';

const VideoSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <section className="py-5 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6">
                {t('sections.video.title')}
              </h2>
              
              <p className="text-muted-foreground mb-6">
                {t('sections.video.description')}
              </p>

              <div className="space-y- mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✦</span>
                  <div>
                    <h4 className="font-semibold mb-1">{t('sections.video.features.selection.title')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('sections.video.features.selection.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✦</span>
                  <div>
                    <h4 className="font-semibold mb-1">{t('sections.video.features.craftsmanship.title')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('sections.video.features.craftsmanship.description')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✦</span>
                  <div>
                    <h4 className="font-semibold mb-1">{t('sections.video.features.presentation.title')}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t('sections.video.features.presentation.description')}
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
                {t('sections.video.watchProcess')}
              </Button>
            </div>

            {/* Image Replacement */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-luxury mx-auto" style={{ maxWidth: '80%' }}>
                <img
                  src={theArtOfImage}
                  alt="The Art of Creating Perfect Gift Boxes"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium shadow-lg">
                {t('sections.video.behindScenes')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl p-0">
          <div className="aspect-video bg-background rounded-lg flex items-center justify-center">
            <img
              src={theArtOfImage}
              alt="The Art of Creating Perfect Gift Boxes"
              className="w-full h-full object-contain p-4"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoSection;