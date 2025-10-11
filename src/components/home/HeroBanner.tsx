import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import * as React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import { products } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

// Use specific products for slide text (Ramadan Celebration Hamper, Premium Chocolate Dates, Stuffed Dates Collection)
const slideProducts = [
  products.find((p) => p.id === "3"),
  products.find((p) => p.id === "1"),
  products.find((p) => p.id === "4"),
];

const slides = [
  { src: hero1, product: slideProducts[0], descKey: "hero.slide1" },
  { src: hero2, product: slideProducts[1], descKey: "hero.slide2" },
  { src: hero3, product: slideProducts[2], descKey: "hero.slide3" },
];

const truncate = (s?: string, n = 70) =>
  s ? (s.length > n ? s.slice(0, n - 3) + "..." : s) : "";

const HeroBanner = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // Autoplay: advance every 4s
  React.useEffect(() => {
    if (!api) return;

    const id = setInterval(() => {
      try {
        if (isArabic) {
          api?.scrollPrev();
        } else {
          api?.scrollNext();
        }
      } catch (e) {
        // ignore
      }
    }, 4000);

    return () => clearInterval(id);
  }, [api, isArabic]);

  return (
    <section className="relative h-[48vh] lg:h-[70vh] overflow-hidden">
      <Carousel
        className="h-full"
        opts={{ loop: true, direction: isArabic ? "rtl" : "ltr" }}
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, idx) => (
            <CarouselItem key={idx} className="h-full">
              <div className="relative h-full min-h-[58vh] lg:min-h-[80vh]">
                <img
                  src={slide.src}
                  alt={slide.product?.name ?? "Hero image"}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

                <div className="absolute inset-0 px-8">
                  <div
                    className={`absolute bottom-6 ${
                      isArabic ? "left-6" : "right-6"
                    }`}
                  >
                    <Link to={"/shop"}>
                      <Button className="px-3 py-2 text-sm bg-transparent border border-white text-white hover:bg-white/10">
                        {t(slide.descKey)}{" "}
                        <ArrowRight
                          className={`ml-2 h-4 w-4 ${
                            isArabic ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious aria-label="Previous slide" />
        <CarouselNext aria-label="Next slide" />
      </Carousel>
    </section>
  );
};

export default HeroBanner;
