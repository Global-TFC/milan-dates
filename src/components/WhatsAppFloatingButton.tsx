import { MessageCircle } from 'lucide-react';

const WhatsAppFloatingButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with your business WhatsApp number (without + or spaces)
    const whatsappNumber = '916235777836'; // WhatsApp number for Regal Gifts Boutique
    const message = 'Hello! I would like to inquire about your products.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="lg:block hidden fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#22c55e] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
    </button>
  );
};

export default WhatsAppFloatingButton;