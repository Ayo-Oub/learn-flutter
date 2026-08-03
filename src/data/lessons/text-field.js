export default {
  id: "text-field",
  order: 10,
  category: "basics",
  duration: "14 min",
  title: "TextField()",
  tagline: "Champ de saisie",
  docsUrl: "https://api.flutter.dev/flutter/material/TextField-class.html",
  summary: "Widget de saisie de texte, avec label, validation et contrôleur.",
  blocks: [
    {
      type: "text",
      content:
        "TextField permet à l'utilisateur de saisir du texte. On lui associe généralement un TextEditingController pour lire ou modifier sa valeur, et une InputDecoration pour afficher un label ou un texte d'aide.",
    },
    { type: "heading", content: "Lire la valeur saisie" },
    {
      type: "text",
      content:
        "Le TextEditingController expose une propriété text que l'on peut lire à tout moment, ou écouter via addListener pour réagir à chaque frappe.",
    },
    {
      type: "code",
      title: "text_field_example.dart",
      language: "dart",
      code:
        "final controller = TextEditingController();\n\nTextField(\n  controller: controller,\n  decoration: const InputDecoration(\n    labelText: 'Ton prénom',\n    border: OutlineInputBorder(),\n  ),\n)\n",
    },
    { type: "heading", content: "Valider une saisie" },
    {
      type: "text",
      content:
        "Dans un Form, la variante TextFormField accepte un validator qui retourne un message d'erreur ou null si la valeur est correcte. Form.validate() déclenche alors tous les validators d'un coup, pratique pour un formulaire complet.",
    },
    {
      type: "code",
      title: "text_field_validation.dart",
      language: "dart",
      code:
        "TextFormField(\n  decoration: const InputDecoration(labelText: 'Email'),\n  validator: (value) {\n    if (value == null || !value.contains('@')) {\n      return 'Adresse email invalide';\n    }\n    return null;\n  },\n)\n",
    },
    { type: "heading", content: "Masquer un mot de passe" },
    {
      type: "text",
      content:
        "obscureText: true masque les caractères saisis, typiquement pour un champ de mot de passe. On l'associe souvent à une icône en suffixIcon permettant de basculer temporairement l'affichage en clair.",
    },
    {
      type: "code",
      title: "text_field_password.dart",
      language: "dart",
      code:
        "TextField(\n  obscureText: true,\n  decoration: const InputDecoration(\n    labelText: 'Mot de passe',\n    suffixIcon: Icon(Icons.visibility_off),\n  ),\n)\n",
    },
  ],
};
