export default {
  id: "theme-data",
  order: 14,
  category: "styling",
  duration: "15 min",
  title: "ThemeData",
  tagline: "Thème global de l'app",
  docsUrl: "https://api.flutter.dev/flutter/material/ThemeData-class.html",
  summary: "Centralise les couleurs, typographies et styles par défaut de toute l'application.",
  blocks: [
    {
      type: "text",
      content:
        "ThemeData se passe à la propriété theme de MaterialApp. Il permet de définir une seule fois les couleurs principales, la typographie ou le style des boutons, et que ces choix s'appliquent automatiquement à tous les widgets Material de l'application.",
    },
    { type: "heading", content: "Accéder au thème depuis un widget" },
    {
      type: "text",
      content:
        "Depuis n'importe quel widget, Theme.of(context) donne accès au ThemeData courant — pratique pour réutiliser la couleur primaire de l'app sans la redéfinir partout.",
    },
    {
      type: "code",
      title: "theme_data_example.dart",
      language: "dart",
      code:
        "MaterialApp(\n  theme: ThemeData(\n    colorSchemeSeed: Colors.indigo,\n    useMaterial3: true,\n  ),\n  home: const HomePage(),\n)\n",
    },
    { type: "heading", content: "Mode sombre avec darkTheme" },
    {
      type: "text",
      content:
        "MaterialApp accepte à la fois theme (mode clair) et darkTheme (mode sombre), et bascule automatiquement entre les deux selon les réglages système via la propriété themeMode (ThemeMode.system par défaut).",
    },
    {
      type: "code",
      title: "theme_data_dark_mode.dart",
      language: "dart",
      code:
        "MaterialApp(\n  theme: ThemeData(colorSchemeSeed: Colors.indigo, brightness: Brightness.light),\n  darkTheme: ThemeData(colorSchemeSeed: Colors.indigo, brightness: Brightness.dark),\n  themeMode: ThemeMode.system,\n  home: const HomePage(),\n)\n",
    },
    { type: "heading", content: "Personnaliser un composant précis" },
    {
      type: "text",
      content:
        "Au-delà des couleurs globales, ThemeData permet de styliser un type de composant pour toute l'application via des propriétés dédiées comme elevatedButtonTheme, appBarTheme ou inputDecorationTheme — évitant de répéter le même ButtonStyle sur chaque bouton.",
    },
    {
      type: "code",
      title: "theme_data_component_theme.dart",
      language: "dart",
      code:
        "ThemeData(\n  elevatedButtonTheme: ElevatedButtonThemeData(\n    style: ElevatedButton.styleFrom(\n      shape: RoundedRectangleBorder(\n        borderRadius: BorderRadius.circular(12),\n      ),\n    ),\n  ),\n)\n",
    },
  ],
};
