import { useState } from 'react';
import FormInput from './FormInput';
import LanguageCheckboxes from './LanguageCheckboxes';
import SelectedLanguages from './SelectedLanguages';
import './RegistrationForm.css';

const CITIES = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Toulouse', 'Nantes', 'Lille', 'Strasbourg'];

const initialForm = {
  nom: '',
  email: '',
  dateNaissance: '',
  telephone: '',
  sexe: '',
  ville: '',
  adresse: '',
  motDePasse: '',
  confirmation: '',
  langages: [],
};

function validate(form) {
  const errors = {};

  // Nom
  if (!form.nom.trim()) {
    errors.nom = 'Le nom est obligatoire.';
  } else if (form.nom !== form.nom.toUpperCase()) {
    errors.nom = 'Le nom doit être en MAJUSCULES.';
  }

  // Email
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email.trim()) {
    errors.email = "L'email est obligatoire.";
  } else if (!emailReg.test(form.email)) {
    errors.email = 'Email invalide.';
  }

  // Date de naissance
  if (!form.dateNaissance) {
    errors.dateNaissance = 'La date de naissance est obligatoire.';
  } else {
    const date = new Date(form.dateNaissance);
    const min = new Date('1900-01-01');
    if (date < min) {
      errors.dateNaissance = 'Date invalide (min: 01/01/1900).';
    }
  }

  // Téléphone
  const telReg = /^(\+?\d[\d\s\-]{6,14}\d)$/;
  if (!form.telephone.trim()) {
    errors.telephone = 'Le téléphone est obligatoire.';
  } else if (!telReg.test(form.telephone.trim())) {
    errors.telephone = 'Format de téléphone invalide.';
  }

  // Sexe
  if (!form.sexe) {
    errors.sexe = 'Veuillez sélectionner un sexe.';
  }

  // Ville
  if (!form.ville) {
    errors.ville = 'La ville est obligatoire.';
  }

  // Mot de passe
  if (!form.motDePasse) {
    errors.motDePasse = 'Le mot de passe est obligatoire.';
  } else if (form.motDePasse.length < 8) {
    errors.motDePasse = 'Min 8 caractères requis.';
  }

  // Confirmation
  if (!form.confirmation) {
    errors.confirmation = 'Veuillez confirmer le mot de passe.';
  } else if (form.confirmation !== form.motDePasse) {
    errors.confirmation = 'Les mots de passe ne correspondent pas.';
  }

  return errors;
}

function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    // Validation temps réel si champ déjà touché
    if (touched[name]) {
      const newErrors = validate(updated);
      setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const newErrors = validate(form);
    setErrors(prev => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleLangages = (newLangs) => {
    setForm(prev => ({ ...prev, langages: newLangs }));
  };

  const removeLangage = (lang) => {
    setForm(prev => ({ ...prev, langages: prev.langages.filter(l => l !== lang) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.keys(initialForm).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);
    const newErrors = validate(form);
    setErrors(newErrors);
    setSubmitted(true);
    if (Object.keys(newErrors).length === 0) {
      // Succès
    }
  };

  const allErrors = validate(form);
  const isFormValid = Object.keys(allErrors).length === 0;

  return (
    <div className="form-card">
      <div className="form-header">
        <div className="form-header-accent" />
        <h1 className="form-title">Formulaire d'Inscription</h1>
      </div>

      <form onSubmit={handleSubmit} noValidate className="form-body">
        <div className="form-grid">

          {/* NOM */}
          <FormInput
            label="Nom complet"
            id="nom"
            required
            error={touched.nom ? errors.nom : undefined}
          >
            <input
              type="text"
              id="nom"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Ex : JEAN DUPONT"
              autoComplete="off"
            />
          </FormInput>

          {/* EMAIL */}
          <FormInput
            label="Email"
            id="email"
            required
            error={touched.email ? errors.email : undefined}
          >
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Ex : jean@email.com"
            />
          </FormInput>

          {/* DATE DE NAISSANCE */}
          <FormInput
            label="Date de naissance"
            id="dateNaissance"
            required
            error={touched.dateNaissance ? errors.dateNaissance : undefined}
          >
            <input
              type="date"
              id="dateNaissance"
              name="dateNaissance"
              value={form.dateNaissance}
              onChange={handleChange}
              onBlur={handleBlur}
              min="1900-01-01"
              max={new Date().toISOString().split('T')[0]}
            />
          </FormInput>

          {/* TÉLÉPHONE */}
          <FormInput
            label="Téléphone"
            id="telephone"
            required
            error={touched.telephone ? errors.telephone : undefined}
            success={touched.telephone && !errors.telephone && form.telephone ? 'Téléphone valide' : undefined}
          >
            <input
              type="text"
              id="telephone"
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+33 6 12 34 56 78"
            />
          </FormInput>

          {/* SEXE - pleine largeur */}
          <div className="full-width">
            <FormInput
              label="Sexe"
              id="sexe"
              required
              error={touched.sexe ? errors.sexe : undefined}
            >
              <div className="radio-group">
                {['Homme', 'Femme', 'Autre'].map(opt => (
                  <label key={opt} className={`radio-option ${form.sexe === opt ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="sexe"
                      value={opt}
                      checked={form.sexe === opt}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="radio-dot" />
                    {opt}
                  </label>
                ))}
              </div>
            </FormInput>
          </div>

          {/* VILLE */}
          <FormInput
            label="Ville"
            id="ville"
            required
            error={touched.ville ? errors.ville : undefined}
          >
            <select
              id="ville"
              name="ville"
              value={form.ville}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">-- Sélectionnez une ville --</option>
              {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </FormInput>

          {/* ADRESSE - pleine largeur */}
          <div className="full-width">
            <FormInput label="Adresse" id="adresse">
              <textarea
                id="adresse"
                name="adresse"
                value={form.adresse}
                onChange={handleChange}
                placeholder="Ex : 123 Rue de Paris..."
                rows={3}
              />
            </FormInput>
          </div>

          {/* MOT DE PASSE */}
          <FormInput
            label="Mot de passe"
            id="motDePasse"
            required
            error={touched.motDePasse ? errors.motDePasse : undefined}
            hint={`${form.motDePasse.length}/8 caractères`}
          >
            <div className="password-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                id="motDePasse"
                name="motDePasse"
                value={form.motDePasse}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Min 8 caractères"
              />
              <button
                type="button"
                className="toggle-pass"
                onClick={() => setShowPassword(p => !p)}
                aria-label="Afficher/masquer le mot de passe"
              >
                {showPassword ? '🙈' : '👁'}
              </button>
            </div>
          </FormInput>

          {/* CONFIRMATION MOT DE PASSE */}
          <FormInput
            label="Confirmer le mot de passe"
            id="confirmation"
            required
            error={touched.confirmation && form.confirmation && form.confirmation !== form.motDePasse
              ? 'Mots de passe différents.'
              : touched.confirmation && !form.confirmation ? 'Champ obligatoire.' : undefined}
            success={
              form.confirmation && form.confirmation === form.motDePasse && form.motDePasse.length >= 8
                ? 'Mots de passe identiques'
                : undefined
            }
          >
            <input
              type="password"
              id="confirmation"
              name="confirmation"
              value={form.confirmation}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Répétez le mot de passe"
            />
          </FormInput>

          {/* LANGAGES - pleine largeur */}
          <div className="full-width lang-section">
            <div className="field-label-row">
              <span className="field-label-text">Langages préférés <span className="req">*</span></span>
            </div>
            <LanguageCheckboxes
              selected={form.langages}
              onChange={handleLangages}
            />
            <SelectedLanguages
              selected={form.langages}
              onRemove={removeLangage}
            />
          </div>

        </div>

        {/* MESSAGES GLOBAUX */}
        {submitted && (
          <div className={`global-msg ${isFormValid ? 'global-success' : 'global-error'}`}>
            {isFormValid
              ? '✔ Tous les champs sont valides !'
              : '⊘ Veuillez corriger les erreurs indiquées.'}
          </div>
        )}

        {/* BOUTON SUBMIT */}
        <button
          type="submit"
          className="submit-btn"
          disabled={submitted && !isFormValid}
        >
          S'inscrire
          <span className="btn-arrow">→</span>
        </button>

      </form>
    </div>
  );
}

export default RegistrationForm;
