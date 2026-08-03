export default {
  id: "elevated-button",
  order: 9,
  category: "basics",
  duration: "12 min",
  title: "ElevatedButton()",
  tagline: "Bouton surélevé",
  docsUrl: "https://api.flutter.dev/flutter/material/ElevatedButton-class.html",
  summary:
    "Bouton Material avec une légère élévation, utilisé pour l'action principale d'un écran.",
  blocks: [
    {
      type: "text",
      content:
        "ElevatedButton est le bouton \"plein\" de Material Design, généralement réservé à l'action la plus importante d'un écran. Il prend un callback onPressed et un widget child (souvent un Text ou une Row icône + texte).",
    },
    { type: "heading", content: "Désactiver un bouton" },
    {
      type: "text",
      content:
        "Passer null à onPressed désactive automatiquement le bouton et l'affiche grisé — pratique pour empêcher une double soumission de formulaire.",
    },
    {
      type: "code",
      title: "elevated_button_example.dart",
      language: "dart",
      code:
        "ElevatedButton(\n  onPressed: () {\n    // action à déclencher\n  },\n  child: const Text('Valider'),\n)\n",
    },
    { type: "heading", content: "Personnaliser l'apparence avec ButtonStyle" },
    {
      type: "text",
      content:
        "La propriété style attend un ButtonStyle, généré facilement via ElevatedButton.styleFrom(...). On y contrôle la couleur de fond, la couleur du texte, la forme (coins arrondis) ou l'élévation.",
    },
    {
      type: "code",
      title: "elevated_button_style.dart",
      language: "dart",
      code:
        "ElevatedButton(\n  style: ElevatedButton.styleFrom(\n    backgroundColor: Colors.indigo,\n    foregroundColor: Colors.white,\n    shape: RoundedRectangleBorder(\n      borderRadius: BorderRadius.circular(12),\n    ),\n  ),\n  onPressed: () {},\n  child: const Text('Continuer'),\n)\n",
    },
    { type: "heading", content: "Bouton avec icône" },
    {
      type: "text",
      content:
        "ElevatedButton.icon combine une icône et un texte dans le bon agencement et le bon espacement, sans avoir à construire une Row manuellement.",
    },
    {
      type: "code",
      title: "elevated_button_icon.dart",
      language: "dart",
      code:
        "ElevatedButton.icon(\n  onPressed: () {},\n  icon: const Icon(Icons.download),\n  label: const Text('Télécharger'),\n)\n",
    },
  ],
};
