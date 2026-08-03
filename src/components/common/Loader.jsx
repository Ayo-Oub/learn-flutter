import "./Loader.css";

/**
 * Loader "widget tree" : trois blocs qui se construisent en cascade,
 * clin d'oeil au build() de Flutter plutôt qu'un spinner générique.
 */
export default function Loader({ label = "Chargement…" }) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <div className="loader__tree">
        <span className="loader__node loader__node--1" />
        <span className="loader__node loader__node--2" />
        <span className="loader__node loader__node--3" />
      </div>
      <p className="loader__label">{label}</p>
    </div>
  );
}
