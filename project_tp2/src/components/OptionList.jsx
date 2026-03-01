export default function OptionList({ options, onVote, onRemove }) {
  return (
    <ul className="list">
      {options.map((opt) => (
        <li key={opt.id} className="row">
          <div className="left">
            <span className="label">{opt.label}</span>
          </div>

          <span className="vote-count">{opt.votes}</span>

          <div className="actions">
            <button className="btn btn-vote" onClick={() => onVote(opt.id)}>
              Voter
            </button>
            <button className="btn btn-danger" onClick={() => onRemove(opt.id)}>
              Supprimer
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}