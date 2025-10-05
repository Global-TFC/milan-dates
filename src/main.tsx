import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n/config";
// Initialize language direction
const lang = localStorage.getItem('i18nextLng') || 'en';
document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = lang;

createRoot(document.getElementById("root")!).render(<App />);
