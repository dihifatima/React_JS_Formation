import { useState } from "react";

export default function AddOptionForm({ onAdd }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim() === "") return;
    onAdd(value);
    setValue("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ajouter une option (ex: TypeScript)"
      />
      <button className="btn" type="submit">
        Ajouter
      </button>
    </form>
  );
}