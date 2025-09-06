import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importe os arquivos JSON diretamente
import ptTranslation from "../content/pt.json";
import enTranslation from "../content/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: ptTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


