import './LanguageCheckboxes.css';

const LANGUAGES = ['JavaScript', 'Python', 'React', 'PHP', 'Autre'];

function LanguageCheckboxes({ selected, onChange }) {
  const toggle = (lang) => {
    if (selected.includes(lang)) {
      onChange(selected.filter(l => l !== lang));
    } else {
      onChange([...selected, lang]);
    }
  };

  return (
    <div className="lang-checkboxes">
      {LANGUAGES.map(lang => (
        <label key={lang} className={`lang-option ${selected.includes(lang) ? 'checked' : ''}`}>
          <input
            type="checkbox"
            checked={selected.includes(lang)}
            onChange={() => toggle(lang)}
          />
          <span className="checkmark" />
          {lang}
        </label>
      ))}
    </div>
  );
}

export default LanguageCheckboxes;
