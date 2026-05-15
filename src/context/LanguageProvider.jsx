// LangProvider.jsx
// This file is responsible for providing language state to the app

import { useState } from "react";
import { LangContext } from "./LanguageContext";
import ar from "../locales/ar";
import en from "../locales/en";

// Object containing all available languages
const languages = { ar, en };

export default function LangProvider({ children }) {
  const [lang, setLang] = useState("ar"); // default language

  const value = {
    lang,      // current language
    setLang,   // function to change language
    t: languages[lang], // translations object
  };

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
}
