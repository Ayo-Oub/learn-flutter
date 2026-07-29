
export default function WidgetCard({ widget, isLearned, onClick }) {
  const getCategoryClass = (category) => {
    switch (category) {
      case "Structure et disposition":
        return "cat-structure";
      case "Éléments de base":
        return "cat-basic";
      case "Design et style":
        return "cat-styling";
      default:
        return "cat-default";
    }
  };

  return (
    <div
      className={`widget-card ${isLearned ? "learned" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      <div className="card-top">
        <span className={`category-tag ${getCategoryClass(widget.category)}`}>
          {widget.category}
        </span>
        {isLearned ? (
          <span
            className="learned-badge"
            title="Apprentissage terminé"
          >
            <svg
              className="badge-icon"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Complété</span>
          </span>
        ) : (
          <span className="pending-badge">En cours</span>
        )}
      </div>

      <div className="card-middle">
        <h2 className="widget-title-en">{widget.name}</h2>
        <h3 className="widget-title-ar">{widget.arabicName}</h3>
        <p className="widget-desc-ar">{widget.shortDescription}</p>
      </div>

      <div className="card-bottom">
        <span className="action-link-ar">
          Commencer l'apprentissage
          <svg
            className="arrow-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M19 12H5m14 0l-7 7m7-7l-7-7"></path>
          </svg>
        </span>
      </div>
    </div>
  );
}
