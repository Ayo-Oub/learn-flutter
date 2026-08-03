import { useState } from "react";
import "./CodeBlock.css";

const DART_KEYWORDS = new Set([
  "class", "extends", "implements", "final", "const", "var", "void", "return",
  "import", "new", "static", "this", "if", "else", "for", "while", "null",
  "true", "false", "async", "await", "Widget", "State", "StatelessWidget",
  "StatefulWidget", "build", "required",
]);

// Un seul passage sur la chaîne : commentaire | chaîne | mot, dans cet ordre
// de priorité. Évite de ré-analyser du HTML déjà injecté (bug classique :
// remplacer en cascade fait matcher "class" à l'intérieur de class="tok-string").
const TOKEN_RE = /(\/\/.*$)|(['"`])(?:(?!\2).)*\2|([A-Za-z_]\w*)/gm;

const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Coloration syntaxique légère pour Dart, sans dépendance externe. */
function highlight(code) {
  let out = "";
  let lastIndex = 0;
  let match;

  TOKEN_RE.lastIndex = 0;
  while ((match = TOKEN_RE.exec(code)) !== null) {
    // texte brut avant le token courant
    out += escapeHtml(code.slice(lastIndex, match.index));
    const [full, comment, , word] = match;

    if (comment) {
      out += `<span class="tok-comment">${escapeHtml(full)}</span>`;
    } else if (word) {
      out += DART_KEYWORDS.has(word)
        ? `<span class="tok-keyword">${word}</span>`
        : escapeHtml(word);
    } else {
      // chaîne de caractères
      out += `<span class="tok-string">${escapeHtml(full)}</span>`;
    }
    lastIndex = TOKEN_RE.lastIndex;
  }
  out += escapeHtml(code.slice(lastIndex));
  return out;
}

/**
 * Bloc de code Dart avec coloration + bouton copier.
 * props: code (string), language (string, défaut "dart"), title (optionnel)
 */
export default function CodeBlock({ code, language = "dart", title }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard indisponible, on ignore silencieusement */
    }
  };

  return (
    <div className="code-block">
      <div className="code-block__bar">
        <span className="code-block__lang">{title || language}</span>
        <button className="code-block__copy" onClick={handleCopy} type="button">
          {copied ? "Copié ✓" : "Copier"}
        </button>
      </div>
      <pre className="code-block__pre">
        <code
          className={`code-block__code lang-${language}`}
          dangerouslySetInnerHTML={{ __html: highlight(code) }}
        />
      </pre>
    </div>
  );
}
