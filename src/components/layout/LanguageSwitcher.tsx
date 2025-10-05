import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    // Update HTML dir attribute for RTL support
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <Button
      variant="ghost"
      className="px-2 font-medium"
      onClick={toggleLanguage}
    >
      {i18n.language === 'ar' ? 'English' : 'العربية'}
    </Button>
  );
}