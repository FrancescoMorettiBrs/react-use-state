const AppCardLanguage = ({ languages }) => {
  return (
    <div className="paragraph">
      <h3>{languages.title}</h3>
      <p>{languages.description}</p>
    </div>
  );
};

export default AppCardLanguage;