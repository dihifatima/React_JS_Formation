import { useMemo, useState } from "react";
import PollHeader from "./components/PollHeader";
import OptionList from "./components/OptionList";
import AddOptionForm from "./components/AddOptionForm";
import "./App.css";

const optionsInitiales = [
  { id: 1, label: "React", votes: 0 },
  { id: 2, label: "Vue", votes: 0 },
  { id: 3, label: "Next.js", votes: 0 },
];

export default function App() {
  const [options, setOptions] = useState(optionsInitiales);

  const totalVotes = useMemo(
    () => options.reduce((sum, opt) => sum + opt.votes, 0),
    [options]
  );

  function handleVote(id) {
    setOptions((prev) =>
      prev.map((opt) =>
        opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt
      )
    );
  }

  function handleRemove(id) {
    setOptions((prev) => prev.filter((opt) => opt.id !== id));
  }

  function handleAdd(label) {
    setOptions((prev) => [
      ...prev,
      { id: Date.now(), label: label.trim(), votes: 0 },
    ]);
  }

  function handleReset() {
    setOptions((prev) => prev.map((opt) => ({ ...opt, votes: 0 })));
  }

  return (
    <div className="page">
      <div className="card">
        <PollHeader
          titre="Mini Sondage : Votez pour votre tech préférée"
          totalVotes={totalVotes}
          onReset={handleReset}
        />

        <OptionList options={options} onVote={handleVote} onRemove={handleRemove} />

        <AddOptionForm onAdd={handleAdd} />
      </div>
    </div>
  );
}