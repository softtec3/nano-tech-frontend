import React, { useState } from "react";
import { LangContext } from "./LangContext";

const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState("bn");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContextProvider;
