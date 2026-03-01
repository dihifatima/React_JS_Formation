export default function PollHeader({ titre, totalVotes, onReset }) {
  return (
    <div className="header">
      <h1 className="title">{titre}</h1>
      <div className="header-stats">
        <p className="subtitle">
          Total des votes : <b>{totalVotes}</b>
        </p>
        <button className="btn btn-secondary" onClick={onReset}>
          Réinitialiser les votes
        </button>
      </div>
    </div>
  );
}