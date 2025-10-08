import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const OurStory = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="min-h-screen">
      <SEO 
        title={isArabic ? "قصتنا - تراث من التميز" : "Our Story - Heritage of Excellence"}
        description={isArabic ? "اكتشف رحلة ميلان للتمور من التقاليد العائلية إلى أن أصبحت اسمًا موثوقًا به في التمور العربية الفاخرة. ثلاثة أجيال من الخبرة في اختيار وصنع أجود التمور." : "Discover MilanDates' journey from a family tradition to becoming a trusted name in premium Arabian dates. Three generations of expertise in selecting and crafting the world's finest dates."}
        keywords={isArabic ? "حول ميلان للتمور، تاريخ شركة التمور، تراث التمور العربية، أعمال عائلية، تمور فاخرة" : "about MilanDates, date company history, Arabian dates heritage, family business, premium dates"}
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/src/assets/hero-dates.jpg')` 
          }}
          role="img"
          aria-label={isArabic ? "تمور عربية فاخرة تمثل تراث و تقليد ميلان للتمور" : "Premium Arabian dates representing MilanDates heritage and tradition"}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? "قصتنا" : "Our Story"}
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            {isArabic ? "رحلة من الشغف، التقاليد، وأجود التمور من قلب الجزيرة العربية" : "A journey of passion, tradition, and the finest dates from the heart of Arabia"}
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Beginning */}
          <div className="space-y-6">
            <h2 className={`text-3xl font-bold text-foreground ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "البداية" : "The Beginning"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isArabic ? "بدأت رحلتنا في عام 2015 بمهمة بسيطة: مشاركة جودة التمور العربية الاستثنائية وتراثها الغني مع العالم. ما بدأ كتقليد عائلي لاختيار أجود التمور أثناء رمضان قد نما ليصبح سعيًا شغوفًا نحو التميز." : "Our journey began in 2015 with a simple mission: to share the exceptional quality and rich heritage of Arabian dates with the world. What started as a family tradition of selecting the finest dates during Ramadan has grown into a passionate pursuit of excellence."}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isArabic ? "النمو في عائلة حيث كانت التمور أكثر من مجرد طعام - كانت رمزًا للضيافة والتقاليد والاحتفال - أدرك المؤسس الحاجة إلى الحفاظ ومشاركة هذه الكنزة الثقافية بلمسة عصرية." : "Growing up in a family where dates were more than just food – they were a symbol of hospitality, tradition, and celebration – our founder recognized the need to preserve and share this cultural treasure with a modern touch."}
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 gap-8 py-8">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className={`text-xl font-semibold mb-3 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? "شغف بالجودة" : "Passion for Quality"}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic ? "يتم اختيار كل تمر يدويًا من المزارع المتميزة، مما يضمن وصول أجود جودة إلى عملائنا." : "Every date is hand-selected from premium farms, ensuring only the finest quality reaches our customers."}
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className={`text-xl font-semibold mb-3 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? "تراث عائلي" : "Family Heritage"}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic ? "ثلاثة أجيال من الخبرة في اختيار وتحضير أجود التمور في العالم." : "Three generations of expertise in selecting and preparing the world's finest dates."}
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <h3 className={`text-xl font-semibold mb-3 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? "الابتكار" : "Innovation"}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic ? "دمج الأساليب التقليدية مع العروض العصرية لإنشاء تجارب هدايا فريدة." : "Combining traditional methods with modern presentation to create unique gift experiences."}
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className={`text-xl font-semibold mb-3 ${isArabic ? 'font-arabic' : ''}`}>
                  {isArabic ? "مهمتنا" : "Our Mission"}
                </h3>
                <p className="text-muted-foreground">
                  {isArabic ? "جعل التمور العربية الفاخرة في متناول الجميع مع الحفاظ على أهميتها الثقافية." : "To make premium Arabian dates accessible to everyone while preserving their cultural significance."}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Journey Timeline */}
          <div className="space-y-6">
            <h2 className={`text-3xl font-bold text-foreground ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "رحلتنا" : "Our Journey"}
            </h2>
            <div className="space-y-8">
              <div className={`flex gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-24 text-primary font-semibold">{isArabic ? "2015" : "2015"}</div>
                <div className="flex-grow">
                  <h4 className={`font-semibold mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? "البداية" : "The Beginning"}
                  </h4>
                  <p className="text-muted-foreground">
                    {isArabic ? "بدأنا مع مجموعة صغيرة من التمور الفاخرة، مع التركيز على الجودة أكثر من الكمية." : "Started with a small collection of premium dates, focusing on quality over quantity."}
                  </p>
                </div>
              </div>
              <div className={`flex gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-24 text-primary font-semibold">{isArabic ? "2017" : "2017"}</div>
                <div className="flex-grow">
                  <h4 className={`font-semibold mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? "التوسع" : "Expansion"}
                  </h4>
                  <p className="text-muted-foreground">
                    {isArabic ? "قدمنا التمور المغطاة بالشوكولاتة ووسّعنا خط منتجاتنا بإضافات مبتكرة." : "Introduced chocolate-covered dates and expanded our product line with innovative flavors."}
                  </p>
                </div>
              </div>
              <div className={`flex gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-24 text-primary font-semibold">{isArabic ? "2019" : "2019"}</div>
                <div className="flex-grow">
                  <h4 className={`font-semibold mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? "التقدير" : "Recognition"}
                  </h4>
                  <p className="text-muted-foreground">
                    {isArabic ? "حصلنا على جوائز للتميز في الجودة والعروض في معارض الطعام الدولية." : "Received awards for excellence in quality and presentation at international food exhibitions."}
                  </p>
                </div>
              </div>
              <div className={`flex gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-24 text-primary font-semibold">{isArabic ? "2021" : "2021"}</div>
                <div className="flex-grow">
                  <h4 className={`font-semibold mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? "التحول الرقمي" : "Digital Transformation"}
                  </h4>
                  <p className="text-muted-foreground">
                    {isArabic ? "أطلقنا منصتنا الإلكترونية للوصول إلى العملاء حول العالم مع خيارات التوصيل في نفس اليوم." : "Launched our online platform to reach customers worldwide with same-day delivery options."}
                  </p>
                </div>
              </div>
              <div className={`flex gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-24 text-primary font-semibold">{isArabic ? "اليوم" : "Today"}</div>
                <div className="flex-grow">
                  <h4 className={`font-semibold mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                    {isArabic ? "النمو القوي" : "Growing Strong"}
                  </h4>
                  <p className="text-muted-foreground">
                    {isArabic ? "نخدم آلاف العملاء الراضين مع مجموعة موسعة من التمور الفاخرة وصناديق الهدايا." : "Serving thousands of satisfied customers with an expanded range of premium dates and gift boxes."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Vision */}
          <div className="space-y-6">
            <h2 className={`text-3xl font-bold text-foreground ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "ننظر إلى المستقبل" : "Looking Forward"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isArabic ? "بينما نواصل النمو، يظل التزامنا دون تغيير: توفير أجود جودة التمور مع الالتزام بالتقاليد التي تجعلها مميزة. نحن نبتكر باستمرار، نستكشف نكهات وعروض جديدة، مع الحفاظ على الأصالة التي يثق بها عملاؤنا." : "As we continue to grow, our commitment remains unchanged: to provide the finest quality dates while honoring the traditions that make them special. We're constantly innovating, exploring new flavors and presentations, while maintaining the authenticity that our customers trust."}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isArabic ? "رؤيتنا هي أن نصبح السفير العالمي للتمور العربية الفاخرة، وتقديم المزيد من الناس لطعمها الاستثنائي وفوائدها الغذائية مع دعم الممارسات الزراعية المستدامة والمجتمعات المحلية." : "Our vision is to become the global ambassador for premium Arabian dates, introducing more people to their incredible taste and nutritional benefits while supporting sustainable farming practices and local communities."}
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center py-12 space-y-6">
            <h2 className={`text-3xl font-bold ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "استمتع بشغفنا" : "Experience Our Passion"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isArabic ? "انضم إلينا في الاحتفال بالتراث الغني للتمور العربية. اكتشف مجموعتنا وتذوق الفرق الذي تحدثه الشغف والتقاليد." : "Join us in celebrating the rich heritage of Arabian dates. Discover our collection and taste the difference that passion and tradition make."}
            </p>
            <div className={`flex gap-4 justify-center ${isArabic ? 'flex-row-reverse' : ''}`}>
              <Link to="/shop">
                <Button size="lg" className="gap-2">
                  {isArabic ? "استكشف المجموعة" : "Explore Collection"} <ArrowRight className={`h-4 w-4 ${isArabic ? 'rotate-180' : ''}`} />
                </Button>
              </Link>
              <Link to="/craftsmanship">
                <Button size="lg" variant="outline">
                  {isArabic ? "حرفة التصنيع لدينا" : "Our Craftsmanship"}
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