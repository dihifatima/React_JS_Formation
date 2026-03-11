import './FormInput.css';

function FormInput({ label, id, required, error, success, children, hint }) {
  return (
    <div className={`field-wrap ${error ? 'has-error' : ''} ${success ? 'has-success' : ''}`}>
      <label htmlFor={id} className="field-label">
        {label} {required && <span className="req">*</span>}
      </label>
      {children}
      {error && <p className="field-msg error-msg">⊘ {error}</p>}
      {success && !error && <p className="field-msg success-msg">✔ {success}</p>}
      {hint && !error && !success && <p className="field-hint">{hint}</p>}
    </div>
  );
}

export default FormInput;
