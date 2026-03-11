import './SelectedLanguages.css';

function SelectedLanguages({ selected, onRemove }) {
  if (selected.length === 0) return null;

  return (
    <div className="selected-langs">
      <p className="selected-langs-title">Langages sélectionnés :</p>
      <div className="tags-list">
        {selected.map(lang => (
          <span key={lang} className="tag">
            {lang}
            <button
              type="button"
              className="tag-remove"
              onClick={() => onRemove(lang)}
              aria-label={`Retirer ${lang}`}
            >
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SelectedLanguages;
