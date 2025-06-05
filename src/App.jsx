import { useState } from "react";
import languages from "../languages.js";
const App = () => {
  const [languageSelected, setLanguageSelected] = useState(languages[0]);

  return (
    <>
      <div className="container">
        <h1>Learn Web Development</h1>
        {languages.map((language, index) => (
          <button key={index} onClick={() => setLanguageSelected(language)} className={language.title === languageSelected.title ? "active-btn" : "btn"}>
            {language.title}
          </button>
        ))}
        <div className="paragraph">
          <h3>{languageSelected.title}</h3>
          <p>{languageSelected.description}</p>
        </div>
      </div>
    </>
  );
}

export default App;
