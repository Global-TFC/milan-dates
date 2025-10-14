import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const OurStory = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="min-h-screen">
      <SEO 
        title={isArabic ? "من نحن - ميلان للتمور" : "About Us - Milan Dates"}
        description={isArabic ? "ميلان للتمور شركة جديدة مكرسة لتقديم أجود التمور العربية الفاخرة والهدايا المتميزة. اكتشف تشكيلتنا المتميزة." : "Milan Dates is a new venture dedicated to providing premium Arabian dates and exquisite gifts. Discover our premium collection."}
        keywords={isArabic ? "ميلان للتمور، تمر فاخر، هدايا عربية، تمر مجدول، تمر محشو" : "Milan Dates, luxury dates, Arabic gifts, Medjool dates, stuffed dates"}
      />
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "من نحن" : "About Us"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {isArabic ? "تقديم أجود التمور العربية الفاخرة" : "Delivering premium Arabian dates with excellence"}
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold text-foreground ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "قصتنا" : "Our Story"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "ميلان للتمور مشروع جديد مكرس لتقديم أجود التمور العربية الفاخرة والهدايا المتميزة. نحن متحمسون لتقديم تجربة لا تُنسى للعملاء من خلال منتجاتنا المتميزة." : "Milan Dates is a new venture dedicated to providing premium Arabian dates and exquisite gifts. We are passionate about delivering an unforgettable experience to our customers through our premium products."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "رغم كوننا مشروعًا جديدًا، فإن التزامنا بالجودة والتميز يدفعنا لتحقيق المعايير العالية في كل منتج نقدمه." : "Although we are a new venture, our commitment to quality and excellence drives us to meet the highest standards in every product we offer."}
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-6 py-6">
            <Card className="border-primary/20">
              <CardContent className="p-5">
                <Heart className="h-8 w-8 text-primary mb-3" />
                <h3 className={`text-lg font-semibold mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? "شغف بالجودة" : "Passion for Quality"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {isArabic ? "نختار كل تمر بعناية لضمان أعلى جودة لعملائنا." : "We carefully select each date to ensure the highest quality for our customers."}
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-5">
                <Sparkles className="h-8 w-8 text-primary mb-3" />
                <h3 className={`text-lg font-semibold mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? "هدايا مميزة" : "Exquisite Gifts"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {isArabic ? "نقدم تجارب هدايا لا تُنسى مع عبوات أنيقة." : "We offer unforgettable gift experiences with elegant packaging."}
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-5">
                <Heart className="h-8 w-8 text-primary mb-3" />
                <h3 className={`text-lg font-semibold mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? "الاستدامة" : "Sustainability"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {isArabic ? "ندعم الممارسات الزراعية المستدامة والمجتمعات المحلية." : "We support sustainable farming practices and local communities."}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Approach */}
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold text-foreground ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "نهجنا" : "Our Approach"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "نركز على تقديم تمر عالي الجودة مع عبوات أنيقة تجعل كل هدية مميزة. نؤمن أن التفاصيل الصغيرة تصنع الفرق الكبير." : "We focus on delivering high-quality dates with elegant packaging that makes every gift special. We believe that small details make a big difference."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "رضا العملاء هو أولويتنا، ونسعى جاهدين لتقديم خدمة استثنائية مع كل طلب." : "Customer satisfaction is our priority, and we strive to provide exceptional service with every order."}
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center py-8 space-y-4">
            <h2 className={`text-2xl font-bold ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "اكتشف تشكيلتنا" : "Discover Our Collection"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isArabic ? "استمتع بأجود التمور العربية مع ميلان للتمور. اطلب اليوم واحصل على تجربة لا تُنسى." : "Enjoy the finest Arabian dates with Milan Dates. Order today and get an unforgettable experience."}
            </p>
            <div className={`flex gap-3 justify-center ${isArabic ? 'flex-row-reverse' : ''}`}>
              <Link to="/shop">
                <Button size="lg" className="gap-2">
                  {isArabic ? "تسوق الآن" : "Shop Now"} <ArrowRight className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''}`} />
                </Button>
              </Link>
              <Link to="/collections/ramadan">
                <Button size="lg" variant="outline">
                  {isArabic ? " Ramadan Collection" : "Ramadan Collection"}
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