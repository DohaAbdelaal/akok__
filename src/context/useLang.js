// useLang.js
// This custom hook allows easy access to language context

import { useContext } from "react";
import { LangContext } from "./LanguageContext";

export default function useLang() {
  return useContext(LangContext);
}
