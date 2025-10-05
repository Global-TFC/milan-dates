// Define currency settings for different languages
const currencySettings = {
  en: {
    currency: 'INR',
    locale: 'en-IN',
    symbol: '₹'
  },
  ar: {
    currency: 'SAR',
    locale: 'ar-SA',
    symbol: 'SAR'
  }
};

// Get currency settings based on language
export const getCurrencySettings = (language: string) => {
  return currencySettings[language as keyof typeof currencySettings] || currencySettings.en;
};

// Format price with currency symbol and proper localization
export const formatPrice = (price: number, language: string) => {
  const settings = getCurrencySettings(language);
  
  try {
    // Format the number according to the locale
    const formattedNumber = new Intl.NumberFormat(settings.locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
    
    // For Arabic, we typically put the symbol after the number
    if (language === 'ar') {
      return `${formattedNumber} ${settings.symbol}`;
    }
    
    // For English, we keep the symbol before the number
    return `${settings.symbol}${formattedNumber}`;
  } catch (error) {
    // Fallback to simple formatting if Intl fails
    if (language === 'ar') {
      return `${price.toLocaleString('en-US')} ${settings.symbol}`;
    }
    return `${settings.symbol}${price.toLocaleString('en-US')}`;
  }
};

// Format price with decimal places
export const formatPriceWithDecimals = (price: number, language: string) => {
  const settings = getCurrencySettings(language);
  
  try {
    // Format the number according to the locale with 2 decimal places
    const formattedNumber = new Intl.NumberFormat(settings.locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
    
    // For Arabic, we typically put the symbol after the number
    if (language === 'ar') {
      return `${formattedNumber} ${settings.symbol}`;
    }
    
    // For English, we keep the symbol before the number
    return `${settings.symbol}${formattedNumber}`;
  } catch (error) {
    // Fallback to simple formatting if Intl fails
    if (language === 'ar') {
      return `${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${settings.symbol}`;
    }
    return `${settings.symbol}${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
};