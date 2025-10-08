import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Sparkles, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { formatPrice } from "@/lib/currency";
import { ramadanCollection as defaultRamadanCollection } from "@/data/products";

interface RamadanCollectionProps {
  products?: Product[];
}

const RamadanCollection = ({ products }: RamadanCollectionProps) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const currentLanguage = i18n.language;

  // Get the appropriate prices based on language
  const currentPrice = isArabic ? 900 : 19999;
  const currentOriginalPrice = isArabic ? 1200 : 24999;

  // Use passed products or default collection
  const ramadanProducts = products
    ? products.filter(
        (p) => p.category === "Gift Hampers" || p.badge === "Limited Edition"
      )
    : defaultRamadanCollection;

  return (
    <section className="py-16 bg-gradient-festive text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6" />
            <span className="text-lg font-semibold">
              {t("sections.ramadan.limitedOffer")}
            </span>
            <Sparkles className="h-6 w-6" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
            {t("sections.ramadan.title")}
          </h2>

          <p className="max-w-2xl mx-auto text-white/90">
            {t("sections.ramadan.description")}
          </p>
        </div>

        {/* Featured Hamper */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-12 shadow-luxury">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gift className="h-5 w-5" />
                <span className="font-medium">
                  {t("sections.ramadan.hamper.exclusive")}
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-playfair font-bold mb-4">
                {t("sections.ramadan.hamper.title")}
              </h3>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-accent-gold">✓</span>
                  <span>{t("sections.ramadan.hamper.items.dates")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent-gold">✓</span>
                  <span>{t("sections.ramadan.hamper.items.chocolate")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent-gold">✓</span>
                  <span>{t("sections.ramadan.hamper.items.dryFruits")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent-gold">✓</span>
                  <span>{t("sections.ramadan.hamper.items.mithai")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-accent-gold">✓</span>
                  <span>
                    {t("sections.ramadan.hamper.items.dateSelection")}
                  </span>
                </li>
              </ul>

              <div className="flex items-baseline space-x-3 mb-6">
                <span className="text-3xl font-bold">
                  {formatPrice(currentPrice, currentLanguage)}
                </span>
                <span
                  className={`text-xl ${
                    isArabic
                      ? "line-through opacity-75 mr-2"
                      : "line-through opacity-75 ml-2"
                  }`}
                >
                  {formatPrice(currentOriginalPrice, currentLanguage)}
                </span>
                <span className="bg-white/20 px-2 py-1 rounded text-sm">
                  {t("sections.ramadan.hamper.save")}
                </span>
              </div>

              <Button
                size="lg"
                className="bg-white text-luxury-brown hover:bg-white/90"
                asChild
              >
                <Link to="/collections/ramadan">
                  {t("sections.ramadan.hamper.shopNow")}
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={ramadanProducts[0]?.image}
                alt="Ramadan Hamper"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-accent-gold text-luxury-dark px-3 py-1 rounded-full font-semibold text-sm">
                {t("sections.ramadan.hamper.limitedStock")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RamadanCollection;
