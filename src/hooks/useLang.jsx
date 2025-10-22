import React, { useContext } from "react";
import { LangContext } from "../contexts/LangContext/LangContext";

const useLang = () => {
  const { lang, setLang } = useContext(LangContext);
  const isBangla = lang === "bn";
  return { isBangla, setLang, lang };
};

export default useLang;
