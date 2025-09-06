import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptTranslation from "@my-monorepo/content/pt.json";
import enTranslation from "@my-monorepo/content/en.json";

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


