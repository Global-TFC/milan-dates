import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="min-h-screen">
      <SEO 
        title={isArabic ? "سياسة الخصوصية - ميلان للتمور" : "Privacy Policy - Milan Dates"}
        description={isArabic ? "احمِ خصوصيتك مع ميلان للتمور. تعرف على كيفية جمعنا واستخدامنا وحماية معلوماتك الشخصية عند استخدام موقعنا وطلب التمور عبر واتساب." : "Protect your privacy with Milan Dates. Learn how we collect, use, and protect your personal information when using our website and ordering dates via WhatsApp."}
        keywords={isArabic ? "سياسة الخصوصية، ميلان للتمور، حماية البيانات، خصوصية العملاء، واتساب، بيانات شخصية" : "privacy policy, Milan Dates, data protection, customer privacy, WhatsApp, personal data"}
      />
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/src/assets/hero-dates.jpg')` 
          }}
          role="img"
          aria-label={isArabic ? "سياسة الخصوصية - ميلان للتمور" : "Privacy Policy - Milan Dates"}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
          </h1>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "في ميلان للتمور، نقدر خصوصيتك ونلتزم بحماية معلوماتك الشخصية. توضح هذه السياسة كيف نجمع ونستخدم ونشارك ونحمي معلوماتك عند زيارتك لموقع milandates.com وطلب التمور (بما في ذلك المنتجات المستوردة من السعودية و المصدرة إلى آسيا، خاصة الهند) من خلال موقعنا باستخدام واتساب." : "At Milan Dates, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your information when you visit milandates.com and place orders for dates (including products sourced from Saudi Arabia and exported to Asia, especially India) through our website using WhatsApp."}
            </p>

            <h2 className={`text-2xl font-bold mt-8 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "المعلومات التي نجمعها" : "Information Collected"}
            </h2>
            
            <h3 className={`text-xl font-semibold mt-4 mb-2 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "التفاصيل الشخصية:" : "Personal Details:"}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "الاسم، رقم الهاتف، عنوان الشحن، عنوان البريد الإلكتروني، وتفاصيل الطلب." : "Name, phone number, shipping address, email address, and order details."}
            </p>
            
            <h3 className={`text-xl font-semibold mt-4 mb-2 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "معلومات الطلب:" : "Order Information:"}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "خيارات المنتجات، الكمية، تفضيل الدفع، وتفاصيل الشحن." : "Product choices, quantity, payment preference, and shipment details."}
            </p>
            
            <h3 className={`text-xl font-semibold mt-4 mb-2 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "بيانات الاتصال:" : "Communication Data:"}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "الرسائل والسجلات المتبادلة عبر واتساب وموقعنا." : "Messages and records exchanged via WhatsApp and our website."}
            </p>

            <h2 className={`text-2xl font-bold mt-8 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "كيف نستخدم معلوماتك" : "How We Use Your Information"}
            </h2>
            <ul className={`list-disc pl-6 space-y-2 mt-4 ${isArabic ? 'pr-6 pl-0' : ''}`}>
              <li className="text-muted-foreground">
                {isArabic ? "معالجة الطلبات وإتمام التسليمات." : "Processing orders and fulfilling deliveries."}
              </li>
              <li className="text-muted-foreground">
                {isArabic ? "التواصل حول حالة الطلب والتحديثات عبر واتساب." : "Communicating order status and updates via WhatsApp."}
              </li>
              <li className="text-muted-foreground">
                {isArabic ? "توفير خدمة العملاء والرد على الاستفسارات." : "Providing customer service and responding to inquiries."}
              </li>
              <li className="text-muted-foreground">
                {isArabic ? "تحسين خدماتنا، موقعنا، ومجموعة منتجاتنا." : "Improving our services, website, and product range."}
              </li>
              <li className="text-muted-foreground">
                {isArabic ? "الامتثال للالتزامات القانونية المتعلقة بالتصدير والمبيعات، بما في ذلك تلك المعمول بها في السعودية والهند ودول آسيوية أخرى." : "Complying with legal obligations related to export and sales, including those applicable in Saudi Arabia, India, and other Asian countries."}
              </li>
            </ul>

            <h2 className={`text-2xl font-bold mt-8 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "كيفية عمل الطلبات" : "How Orders Work"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "يتم تقديم الطلبات على موقع milandates.com من خلال واتساب باستخدام روابط أو رسائل معبأة مسبقًا. عندما تبدأ الطلب، يتم إرسال تفاصيل طلبك ومعلومات الاتصال إلى حساب واتساب الخاص بنا للمعالجة. يقوم واتساب بمعالجة هذه البيانات وفقًا لسياسته الخاصة بالخصوصية، والتي يمكنك قراءتها هنا:" : "Orders on milandates.com are placed through WhatsApp using pre-filled links or messages. When you initiate an order, your order details and contact information are submitted to our WhatsApp account for processing. WhatsApp processes this data according to its own privacy policy, which you can read here:"}
              <a href="https://www.whatsapp.com/legal/privacy-policy" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                {isArabic ? "سياسة خصوصية واتساب" : "WhatsApp Privacy Policy"}
              </a>.
            </p>

            <h2 className={`text-2xl font-bold mt-8 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "مشاركة البيانات والإفصاح عنها" : "Data Sharing & Disclosure"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "نحن لا نبيع أو نؤجر أو نشارك تفاصيلك الشخصية مع أطراف ثالثة غير مرتبطة بنا." : "We do not sell, rent, or share your personal details with unrelated third parties."}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              {isArabic ? "نشارك المعلومات الضرورية فقط مع الشركاء اللوجستيين ومعالجي الدفع والسلطات لأتمام التسليم والامتثال." : "We share necessary information only with logistics partners, payment processors, and authorities for order delivery and compliance."}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              {isArabic ? "يمكن الإفصاح عن البيانات للامتثال للطلبات القانونية أو لحماية حقوقنا أو ممتلكاتنا أو عملائنا." : "Data may be disclosed to comply with legal requests or to protect our rights, property, or customers."}
            </p>

            <h2 className={`text-2xl font-bold mt-8 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "معلومات التصدير والشحن" : "Export & Shipping Information"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "بالنسبة للمستخدمين الذين يطلبون من خارج الهند، قد تتم مشاركة بيانات الشحن والشخصية مع الشركاء المعتمدين في السعودية ووجهات تصدير آسيوية أخرى فقط لأتمام الطلب." : "For users ordering from outside India, your shipping and personal data may be shared with authorized partners in Saudi Arabia and other Asian export destinations solely for order fulfillment."}
            </p>

            <h2 className={`text-2xl font-bold mt-8 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "ملفات تعريف الارتباط وتحليلات الموقع" : "Cookies & Website Analytics"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "نستخدم ملفات تعريف الارتباط وأدوات تحليلات الموقع لتحسين تجربة التصفح الخاصة بك. يمكنك تعطيل ملفات تعريف الارتباط في إعدادات متصفحك، ولكن قد يؤثر ذلك على وظائف الموقع." : "We use cookies and website analytics tools to improve your browsing experience. You can disable cookies in your browser settings, but this may affect website functionality."}
            </p>

            <h2 className={`text-2xl font-bold mt-8 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "الأمان" : "Security"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "نتبع أفضل ممارسات الأمان لحماية معلوماتك، بما في ذلك تشفير SSL لمعاملات الموقع وتخزين آمن لسجلات الطلبات. الاتصالات مع واتساب تخضع لتشفير واتساب من طرف إلى طرف." : "We employ best-practice security measures to safeguard your information, including SSL encryption for website transactions and secure storage of order records. Communications with WhatsApp are subject to WhatsApp's end-to-end encryption."}
            </p>

            <h2 className={`text-2xl font-bold mt-8 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "حقوق المستخدم" : "User Rights"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "يمكنك طلب الوصول إلى بياناتك الشخصية أو حذفها." : "You may request access to or deletion of your personal data."}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              {isArabic ? "يمكنك تحديث المعلومات أو سحب الموافقة في أي وقت عن طريق الاتصال بنا." : "You can update information or withdraw consent at any time by contacting us."}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              {isArabic ? "لطلبات الخصوصية، اتصل بـ:" : "For privacy requests, contact:"}
              <a href="mailto:privacy@milandates.com" className="text-primary hover:underline ml-1">
                privacy@milandates.com
              </a>
            </p>

            <h2 className={`text-2xl font-bold mt-8 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "القاصرون" : "Minors"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "موقعنا غير مخصص للأطفال دون سن 18 عامًا. لا نجمع بيانات من القاصرين عن علم." : "Our website is not intended for children under 18. We do not knowingly collect data from minors."}
            </p>

            <h2 className={`text-2xl font-bold mt-8 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "التغييرات في هذه السياسة" : "Changes to this Policy"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "قد نقوم بتحديث سياسة الخصوصية هذه بشكل دوري. سيتم نشر التغييرات على هذه الصفحة مع تاريخ السريان المحدث." : "We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date."}
            </p>

            <h2 className={`text-2xl font-bold mt-8 mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? "اتصل بنا" : "Contact Us"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isArabic ? "للاستفسارات أو الطلبات المتعلقة بالخصوصية، يرجى الاتصال بنا على:" : "For privacy concerns, questions, or requests, please contact us at:"}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              <a href="mailto:milandates97@gmail.com" className="text-primary hover:underline">
                milandates97@gmail.com
              </a>
            </p>
          </div>

          <div className="text-center py-8">
            <Link to="/" className="text-primary hover:underline">
              {isArabic ? "العودة إلى الصفحة الرئيسية" : "Back to Home"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;