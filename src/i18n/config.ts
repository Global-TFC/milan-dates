import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          common: {
            brandName: 'Milan Dates',
            addToCart: 'Add to Cart',
            viewCart: 'View Cart',
            quantity: 'Quantity',
            price: 'Price',
            total: 'Total',
            checkout: 'Checkout',
            remove: 'Remove',
            share: 'Share',
            wishlist: 'Wishlist',
            size: 'Size',
            viewAllProducts: 'View All Products',
          },
          sections: {
            bestSellers: {
              title: 'Best Sellers',
              subtitle: 'Customer Favorites',
              description: 'These premium products are loved by our customers for their exceptional quality and taste'
            },
            featured: {
              title: 'Featured Products',
              description: 'Handpicked selections of our finest gourmet dates'
            },
            ramadan: {
              limitedOffer: 'Limited Time Offer',
              title: 'Ramadan Celebration Collection',
              description: 'Make this Ramadan extra special with our exclusive dates collection. Each gift is thoughtfully curated with premium ingredients and presented in elegant packaging.',
              hamper: {
                title: 'Royal Ramadan Gift Box',
                exclusive: 'Exclusive Hamper',
                items: {
                  dates: 'Premium Medjool Dates (500g)',
                },
                limitedStock: 'Limited Stock',
                shopNow: 'Shop Now',
                save: 'Save 23%'
              }
            },
            video: {
              title: 'The Art of Creating Perfect Gift Boxes',
              description: 'Watch our master craftsmen carefully select and arrange each premium date into our signature gift boxes. Every MilanDates creation is a work of art, designed to deliver moments of pure luxury.',
              features: {
                selection: {
                  title: 'Handpicked Selection',
                  description: 'Each date is individually inspected for perfect ripeness and quality'
                },
                craftsmanship: {
                  title: 'Artisanal Craftsmanship',
                  description: 'Traditional techniques passed down through generations'
                },
                presentation: {
                  title: 'Elegant Presentation',
                  description: 'Luxurious packaging that makes every gift unforgettable'
                }
              },
              watchProcess: 'Watch the Process',
              behindScenes: 'Behind the Scenes'
            },
            map: {
              title: 'Visit Us',
              address: 'Rashidi station, G8FQ+RFC, Al Thamad 43831, Saudi Arabia'
            }
          },
          nav: {
            home: 'Home',
            shop: 'Shop',
            ourStory: 'Our Story',
            craftsmanship: 'Craftsmanship',
            contactUs: 'Contact Us',
            menu: {
              allProducts: 'All Products',
              dates: 'Dates',
            },
          },
          cart: {
            title: 'Shopping Cart',
            empty: 'Your cart is empty',
            continue: 'Continue Shopping',
          },
          // promo: {
          //   ramadan: {
          //     title: '✨ Ramadan Special: Get 20% off on all gift hampers | Free shipping above ₹2,999'
          //   }
          // },
          product: {
            outOfStock: 'Out of Stock',
            inStock: 'In Stock',
            description: 'Description',
          },
          footer: {
            companyInfo: 'Company Info',
            quickLinks: 'Quick Links',
            customerService: 'Customer Service',
            contactUs: 'Contact Us',
            address: 'Rashidi station, G8FQ+RFC, Al Thamad 43831, Saudi Arabia',
            phone: '+91 98765 43210',
            email: 'milandates97@gmail.com',
            rights: 'All rights reserved',
            subscribe: 'Subscribe to our newsletter',
            emailPlaceholder: 'Enter your email',
            submit: 'Submit',
            links: {
              about: 'About Us',
              shop: 'Shop All',
              ramadan: 'Ramadan Collection',
              corporate: 'Corporate Gifts',
              shipping: 'Shipping & Delivery',
              returns: 'Returns & Exchange',
              terms: 'Terms & Conditions',
              privacy: 'Privacy Policy'
            }
          },
          hero: {
            slide1: 'Luxurious hampers for the family',
            slide2: 'Dubai chocolate dipped dates',
            slide3: 'Hand-stuffed premium dates'
          }
        },
      },
      ar: {
        translation: {
          common: {
            brandName: 'ميلان للتمور',
            addToCart: 'أضف إلى السلة',
            viewCart: 'عرض السلة',
            quantity: 'الكمية',
            price: 'السعر',
            total: 'المجموع',
            checkout: 'الدفع',
            remove: 'إزالة',
            share: 'مشاركة',
            wishlist: 'المفضلة',
            size: 'الحجم',
            viewAllProducts: 'عرض جميع المنتجات',
          },
          sections: {
            bestSellers: {
              title: 'الأكثر مبيعاً',
              subtitle: 'المفضلة لدى العملاء',
              description: 'هذه المنتجات المميزة محبوبة من قبل عملائنا لجودتها ومذاقها الاستثنائي'
            },
            featured: {
              title: 'منتجات مميزة',
              description: 'مجموعة مختارة من أجود التمور'
            },
            ramadan: {
              limitedOffer: 'عرض لفترة محدودة',
              title: 'تشكيلة رمضان',
              description: 'اجعل رمضان هذا العام أكثر تميزاً مع تشكيلتنا الحصرية من التمور. كل هدية تم تنسيقها بعناية مع مكونات فاخرة وتقدم في عبوات أنيقة.',
              hamper: {
                title: 'صندوق هدايا رمضان الملكي',
                exclusive: 'سلة حصرية',
                items: {
                  dates: 'تمور مجدول فاخرة (500 جرام)',
                },
                limitedStock: 'كمية محدودة',
                shopNow: 'تسوق الآن',
                save: 'وفر 23%'
              }
            },
            video: {
              title: 'فن صنع صناديق الهدايا المثالية',
              description: 'شاهد حرفيينا المهرة وهم يختارون ويجهزون كل تمر فاخر بعناية في صناديق الهدايا المميزة لدينا. كل منتج من منتجات ميلان للتمور هو تحفة فنية، مصممة لتقديم لحظات من الفخامة纯粹.',
              features: {
                selection: {
                  title: 'اختيار يدوي',
                  description: 'يتم فحص كل تمر بشكل فردي للحصول على درجة النضج وجودة مثالية'
                },
                craftsmanship: {
                  title: 'حرفية تقليدية',
                  description: 'تقنيات تقليدية تنتقل عبر الأجيال'
                },
                presentation: {
                  title: 'عرض أنيق',
                  description: 'تغليف فاخر يجعل كل هدية لا تُنسى'
                }
              },
              watchProcess: 'شاهد العملية',
              behindScenes: 'خلف الكواليس'
            },
            map: {
              title: 'زورونا',
              address: 'محطة الراشدي، G8FQ+RFC، الثماد 43831، المملكة العربية السعودية'
            }
          },
          nav: {
            home: 'الرئيسية',
            shop: 'المتجر',
            ourStory: 'قصتنا',
            craftsmanship: 'الحرفية',
            contactUs: 'اتصل بنا',
            menu: {
              allProducts: 'جميع المنتجات',
              dates: 'تمور',
            },
          },
          cart: {
            title: 'سلة التسوق',
            empty: 'سلة التسوق فارغة',
            continue: 'متابعة التسوق',
          },
          // promo: {
          //   ramadan: {
          //     title: '✨ عرض رمضان: خصم 20% على جميع سلال الهدايا | شحن مجاني للطلبات فوق 2,999 روبية'
          //   }
          // },
          product: {
            outOfStock: 'نفذت الكمية',
            inStock: 'متوفر',
            description: 'الوصف',
          },
          footer: {
            companyInfo: 'معلومات الشركة',
            quickLinks: 'روابط سريعة',
            customerService: 'خدمة العملاء',
            contactUs: 'اتصل بنا',
            address: 'محطة الراشدي، G8FQ+RFC، الثماد 43831، المملكة العربية السعودية',
            phone: '+91 98765 43210',
            email: 'milandates97@gmail.com',
            rights: 'جميع الحقوق محفوظة',
            subscribe: 'اشترك في نشرتنا الإخبارية',
            emailPlaceholder: 'أدخل بريدك الإلكتروني',
            submit: 'إرسال',
            links: {
              about: 'من نحن',
              shop: 'تسوق الكل',
              ramadan: 'تشكيلة رمضان',
              corporate: 'هدايا الشركات',
              shipping: 'الشحن والتوصيل',
              returns: 'الإرجاع والاستبدال',
              terms: 'الشروط والأحكام',
              privacy: 'سياسة الخصوصية'
            }
          },
          hero: {
            slide1: 'سلال هدايا فاخرة للعائلة',
            slide2: 'تمور دبي مغطاة بالشوكولاتة',
            slide3: 'تمور فاخرة محشوة يدوياً'
          }
        },
      },
    },
  });

export default i18n;