import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './de/translation.json';
import en from './en/translation.json';

function createI18nInstance() {
  const resources = {
    de,
    en
  };

  const instance = i18n.createInstance();
  instance.use(initReactI18next).init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources,
  });

  return instance;
}

export default createI18nInstance;
