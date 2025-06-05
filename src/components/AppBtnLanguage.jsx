const AppBtnLanguage = ({ languages, languageSelected, onClick }) => {
  return (
    <div>
      {languages.map((language, index) => (
      <button key={index} onClick={() => onClick(language)} className={language.title === languageSelected.title ? "active-btn" : "btn"}>
        {language.title}
      </button>
      ))}
    </div>
  );
};

export default AppBtnLanguage;
