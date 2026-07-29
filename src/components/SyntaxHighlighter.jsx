import { useState } from "react";

// Custom Dart tokenizer for clean syntax highlighting without heavy dependencies
function tokenizeDart(code) {
  const regex =
    /(\/\/.*)|('(?:\\'|[^'])*'|"(?:\\"|[^"])*")|(@\w+)|(\b(?:import|class|extends|void|return|const|super|final|var|true|false|null|override|import|const|package)\b)|(\b[A-Z]\w*\b)|(\b\d+(?:\.\d+)?\b)/g;

  const tokens = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(code)) !== null) {
    // Plain text before the token
    if (match.index > lastIndex) {
      tokens.push({
        text: code.substring(lastIndex, match.index),
        type: "plain",
      });
    }

    const [lexeme, comment, string, annotation, keyword, className, number] =
      match;

    if (comment) {
      tokens.push({ text: lexeme, type: "comment" });
    } else if (string) {
      tokens.push({ text: lexeme, type: "string" });
    } else if (annotation) {
      tokens.push({ text: lexeme, type: "annotation" });
    } else if (keyword) {
      tokens.push({ text: lexeme, type: "keyword" });
    } else if (className) {
      tokens.push({ text: lexeme, type: "class" });
    } else if (number) {
      tokens.push({ text: lexeme, type: "number" });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < code.length) {
    tokens.push({ text: code.substring(lastIndex), type: "plain" });
  }

  return tokens;
}

export default function SyntaxHighlighter({ code }) {
  const [copied, setCopied] = useState(false);

  const tokens = tokenizeDart(code);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="code-container">
      <div className="code-header">
        <span className="code-lang">Dart</span>
        <button
          onClick={handleCopy}
          className={`copy-btn ${copied ? "copied" : ""}`}
          aria-label="Copier le code"
        >
          {copied ? (
            <>
              <svg
                className="icon-copy"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Copié !</span>
            </>
          ) : (
            <>
              <svg
                className="icon-copy"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect
                  x="9"
                  y="9"
                  width="13"
                  height="13"
                  rx="2"
                  ry="2"
                ></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copier le code</span>
            </>
          )}
        </button>
      </div>
      <pre className="code-block">
        <code>
          {tokens.map((token, index) => {
            if (token.type === "plain") {
              return token.text;
            }
            return (
              <span
                key={index}
                className={`token ${token.type}`}
              >
                {token.text}
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
}
