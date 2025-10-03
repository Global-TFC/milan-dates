import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, Package, Award, Clock, Leaf, CheckCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "@/components/SEO";

const Craftsmanship = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const processSteps = [
    {
      number: "01",
      title: "Selection",
      description: "Hand-picking only the finest dates from premium farms across the Arabian Peninsula.",
      icon: <Award className="h-6 w-6" />
    },
    {
      number: "02",
      title: "Quality Check",
      description: "Each date undergoes rigorous quality inspection for size, texture, and sweetness.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Preparation",
      description: "Careful cleaning, pitting, and preparation while preserving natural flavors.",
      icon: <Package className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Crafting",
      description: "Expert artisans stuff dates with premium nuts or coat them in Belgian chocolate.",
      icon: <Leaf className="h-6 w-6" />
    },
    {
      number: "05",
      title: "Packaging",
      description: "Beautiful presentation in handcrafted boxes, perfect for gifting.",
      icon: <Package className="h-6 w-6" />
    },
    {
      number: "06",
      title: "Delivery",
      description: "Fresh delivery ensuring maximum freshness and quality upon arrival.",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  const qualityStandards = [
    {
      title: "Premium Sourcing",
      description: "We partner directly with certified organic farms that practice sustainable agriculture.",
      image: "/src/assets/hero-dates.jpg"
    },
    {
      title: "Artisan Techniques",
      description: "Traditional methods passed down through generations, combined with modern food safety standards.",
      image: "/src/assets/stuffed-dates.jpg"
    },
    {
      title: "Natural Ingredients",
      description: "No artificial preservatives, colors, or flavors. Just pure, natural goodness.",
      image: "/src/assets/chocolate-dates.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Our Craftsmanship - Artisan Excellence"
        description="Experience the meticulous craftsmanship behind MilanDates. From hand-selection to artisan preparation, discover how tradition and quality create the perfect luxury date."
        keywords="date craftsmanship, handcrafted dates, artisan dates, quality dates, traditional methods, premium date preparation"
      />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/src/assets/ramadan-hamper.jpg')` 
          }}
          role="img"
          aria-label="Luxury Ramadan gift hamper showcasing premium dates and gourmet products"
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Craftsmanship</h1>
          <p className="text-xl md:text-2xl text-white/90">
            Where tradition meets perfection in every handcrafted date
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Art of Perfect Dates
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every date that leaves our workshop is a testament to our commitment to excellence. 
            From the moment we select the raw dates to the final packaging, each step is performed 
            with meticulous attention to detail and respect for tradition.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <Card key={step.number} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-primary/20">{step.number}</div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-primary">{step.icon}</div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Watch Our Artisans at Work</h2>
              <p className="text-lg text-muted-foreground">
                Discover the meticulous process behind each handcrafted date. From selection to packaging, 
                witness the care and expertise that goes into creating our premium collection.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">100% handcrafted with care</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Traditional techniques preserved</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Quality checked at every step</span>
                </li>
              </ul>
              <Button 
                size="lg" 
                onClick={() => setVideoOpen(true)}
                className="gap-2"
              >
                <Play className="h-4 w-4" />
                Watch the Process
              </Button>
            </div>
            <div 
              className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setVideoOpen(true)}
            >
              <img 
                src="/src/assets/stuffed-dates.jpg" 
                alt="Artisans preparing premium stuffed dates with nuts and chocolate"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Quality Standards</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img 
                    src={standard.image} 
                    alt={`${standard.title} - premium date quality process`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{standard.title}</h3>
                  <p className="text-muted-foreground">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Certified Excellence</h2>
          <p className="text-lg text-muted-foreground">
            Our commitment to quality is recognized by international standards
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-primary/20">
              <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                <Award className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-semibold">ISO 22000</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                <Award className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-semibold">HACCP</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                <Award className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-semibold">Organic</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6 flex flex-col items-center justify-center h-32">
                <Award className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm font-semibold">Halal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Experience the Difference</h2>
          <p className="text-lg text-muted-foreground">
            Taste the result of our dedication to craftsmanship and quality
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="gap-2">
                Shop Collection <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/our-story">
              <Button size="lg" variant="outline">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl p-0">
          <div className="aspect-video bg-black">
            <div className="w-full h-full flex items-center justify-center text-white">
              {/* Video player would go here */}
              <p>Video player placeholder</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Craftsmanship;
