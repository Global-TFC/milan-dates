import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const OurStory = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Our Story - Heritage of Excellence"
        description="Discover MilanDates' journey from a family tradition to becoming a trusted name in premium Arabian dates. Three generations of expertise in selecting and crafting the world's finest dates."
        keywords="about MilanDates, date company history, Arabian dates heritage, family business, premium dates"
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/src/assets/hero-dates.jpg')` 
          }}
          role="img"
          aria-label="Premium Arabian dates representing MilanDates heritage and tradition"
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-white/90">
            A journey of passion, tradition, and the finest dates from the heart of Arabia
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Beginning */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">The Beginning</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey began in 2015 with a simple mission: to share the exceptional quality and rich heritage of Arabian dates with the world. What started as a family tradition of selecting the finest dates during Ramadan has grown into a passionate pursuit of excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Growing up in a family where dates were more than just food – they were a symbol of hospitality, tradition, and celebration – our founder recognized the need to preserve and share this cultural treasure with a modern touch.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 gap-8 py-8">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Passion for Quality</h3>
                <p className="text-muted-foreground">
                  Every date is hand-selected from premium farms, ensuring only the finest quality reaches our customers.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Family Heritage</h3>
                <p className="text-muted-foreground">
                  Three generations of expertise in selecting and preparing the world's finest dates.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Combining traditional methods with modern presentation to create unique gift experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To make premium Arabian dates accessible to everyone while preserving their cultural significance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Journey Timeline */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Journey</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-primary font-semibold">2015</div>
                <div className="flex-grow">
                  <h4 className="font-semibold mb-2">The Beginning</h4>
                  <p className="text-muted-foreground">Started with a small collection of premium dates, focusing on quality over quantity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-primary font-semibold">2017</div>
                <div className="flex-grow">
                  <h4 className="font-semibold mb-2">Expansion</h4>
                  <p className="text-muted-foreground">Introduced chocolate-covered dates and expanded our product line with innovative flavors.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-primary font-semibold">2019</div>
                <div className="flex-grow">
                  <h4 className="font-semibold mb-2">Recognition</h4>
                  <p className="text-muted-foreground">Received awards for excellence in quality and presentation at international food exhibitions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-primary font-semibold">2021</div>
                <div className="flex-grow">
                  <h4 className="font-semibold mb-2">Digital Transformation</h4>
                  <p className="text-muted-foreground">Launched our online platform to reach customers worldwide with same-day delivery options.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-primary font-semibold">Today</div>
                <div className="flex-grow">
                  <h4 className="font-semibold mb-2">Growing Strong</h4>
                  <p className="text-muted-foreground">Serving thousands of satisfied customers with an expanded range of premium dates and gift boxes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Looking Forward</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As we continue to grow, our commitment remains unchanged: to provide the finest quality dates while honoring the traditions that make them special. We're constantly innovating, exploring new flavors and presentations, while maintaining the authenticity that our customers trust.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our vision is to become the global ambassador for premium Arabian dates, introducing more people to their incredible taste and nutritional benefits while supporting sustainable farming practices and local communities.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center py-12 space-y-6">
            <h2 className="text-3xl font-bold">Experience Our Passion</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in celebrating the rich heritage of Arabian dates. Discover our collection and taste the difference that passion and tradition make.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg" className="gap-2">
                  Explore Collection <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/craftsmanship">
                <Button size="lg" variant="outline">
                  Our Craftsmanship
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;