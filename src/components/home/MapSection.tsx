import { MapPin, Navigation } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MapSection = () => {
  const { t } = useTranslation();
  
  // Addresses for the two locations
  const locations = [
    {
      title: "Saudi Arabia Location",
      address: "Rashidi station, G8FQ+RFC, Al Thamad 43831, Saudi Arabia",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Rashidi+station,+G8FQ%2BRFC,+Al+Thamad+43831,+Saudi+Arabia"
    },
    {
      title: "Kerala Location",
      address: "Mukkam, Kozhikkode, Kerala",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Mukkam,+Kozhikkode,+Kerala"
    }
  ];
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">{t('sections.map.title')}</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-2">{location.title}</h3>
              <p className="text-muted-foreground flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-5 w-5" />
                {location.address}
              </p>
              {/* Map visible only on desktop (md and above) */}
              <div className="hidden md:block w-full h-[400px] rounded-lg overflow-hidden shadow-lg mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.9364758837967!2d39.33851237543965!3d25.524551377474158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15a2d596802cf4ed%3A0xc743f983c9c47ed7!2sRashidi%20station!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`MilanDates Location ${index + 1}`}
                />
              </div>
              {/* Direction button visible on all screens */}
              <button
                onClick={() => window.open(location.directionsUrl, '_blank')}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;