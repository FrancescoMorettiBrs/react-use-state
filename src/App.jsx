import { useState } from "react";
import languages from "../languages.js";
import AppBtnLanguage from "./components/AppBtnLanguage.jsx";
import AppCardLanguage from "./components/AppCardLanguage.jsx";
const App = () => {
  const [languageSelected, setLanguageSelected] = useState(languages[0]);

  return (
    <>
      <div className="container">
        <h1>Learn Web Development</h1>
        <AppBtnLanguage 
        languages={languages}
        languageSelected={languageSelected}
        onClick={setLanguageSelected}
        />
        <AppCardLanguage languages={languageSelected} />
      </div>
    </>
  );
}

export default App;
