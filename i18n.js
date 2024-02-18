import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./src/locales/en/translation.json"; // English translations
import npTranslation from "./src/locales/np/translation.json"; // Nepali translations
import store from "./src/redux/store";

// Create a function to set the language based on Redux store
export const setLanguageFromStore = () => {
  const state = store.getState();
  const language = state.language.mode;
  i18n.changeLanguage(language);
};

i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: enTranslation,
    },
    NP: {
      translation: npTranslation,
    },
  },
  fallbackLng: "EN",
  lng: store.getState().language.mode,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
