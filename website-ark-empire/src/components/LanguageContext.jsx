import React, { createContext, useState } from 'react';
import enUS from '../languages/en-US.json';
import frFR from '../languages/fr-FR.json';

export const LanguageContext = createContext();

const translations = {
  'en-US': enUS,
  'fr-FR': frFR
};

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('fr-FR');
  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
