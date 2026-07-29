export const flutterWidgets = [
  {
    id: 'scaffold',
    name: 'Scaffold',
    arabicName: 'Structure (Scaffold)',
    category: 'Structure et disposition',
        shortDescription:
          "Fournit la structure visuelle de base d'une application conforme aux principes Material Design.",
        explanation:
          "Scaffold est l'un des widgets les plus fondamentaux de Flutter. Il agit comme la 'plate-forme' sur laquelle repose l'écran d'une application. Il fournit des emplacements organisés pour placer les sections principales de la page, comme l'AppBar (barre d'application), le body (contenu principal), le FloatingActionButton (bouton flottant), le Drawer (tiroir latéral) et le BottomNavigationBar (barre de navigation inférieure). Sans Scaffold, il faudrait construire et organiser ces sections manuellement, ce qui est fastidieux et source d'erreurs.",
        properties: [
          {
            name: 'appBar',
            description:
              "Barre d'application en haut de l'écran. Affiche généralement le titre, le bouton de retour et des actions comme la recherche ou les paramètres.",
            example:
              "appBar: AppBar(\n  title: const Text('Mon premier app Flutter'),\n  backgroundColor: Colors.blue,\n)",
          },
          {
            name: 'body',
            description:
              "Contenu principal de l'écran. Placez ici d'autres widgets comme Column, ListView ou Center pour afficher le contenu.",
            example:
              "body: const Center(\n  child: Text('Bienvenue sur Flutter en Français !'),\n)",
          },
          {
            name: 'floatingActionButton',
            description:
              "Bouton d'action flottant circulaire, généralement placé en bas à droite pour une action principale et facilement accessible.",
            example:
              "floatingActionButton: FloatingActionButton(\n  onPressed: () {\n    print('Appuyé !');\n  },\n  child: const Icon(Icons.add),\n)",
          },
          {
            name: 'drawer',
            description:
              "Tiroir latéral (Drawer) qui glisse depuis le bord de l'écran et contient les liens de navigation.",
            example:
              "drawer: Drawer(\n  child: ListView(\n    children: const [DrawerHeader(child: Text('Menu'))],\n  ),\n)",
          },
          {
            name: 'bottomNavigationBar',
            description:
              "Barre de navigation inférieure contenant des icônes et des étiquettes pour naviguer entre les écrans principaux.",
            example:
              "bottomNavigationBar: BottomNavigationBar(\n  items: const [\n    BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Accueil'),\n    BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Paramètres'),\n  ],\n)",
          },
          {
            name: 'backgroundColor',
            description: "Couleur de fond de l'écran.",
            example: "backgroundColor: Colors.grey[200]",
          },
        ],
        codeExample: `import 'package:flutter/material.dart';

    void main() => runApp(const MyApp());

    class MyApp extends StatelessWidget {
      const MyApp({super.key});

      @override
      Widget build(BuildContext context) {
        return MaterialApp(
          home: Scaffold(
            appBar: AppBar(
              title: const Text('Mon premier app Flutter'),
              backgroundColor: Colors.blue,
            ),
            body: const Center(
              child: Text(
                'Bienvenue sur Flutter en Français !',
                style: TextStyle(fontSize: 20),
              ),
            ),
            floatingActionButton: FloatingActionButton(
              onPressed: () {},
              backgroundColor: Colors.blue,
              child: const Icon(Icons.add),
            ),
          ),
        );
      }
    }`,
        notes: [
          "Utilisez toujours Scaffold comme base pour un nouvel écran afin de bénéficier du positionnement et du thème par défaut.",
          "Scaffold gère automatiquement les zones sécurisées (SafeArea) et ajuste les marges lors de l'affichage du clavier pour éviter la superposition des champs.",
          "Vous pouvez modifier la couleur de fond via la propriété backgroundColor du Scaffold.",
        ],
        mistakes: [
          "Placer plusieurs Scaffold sur le même écran provoque des conflits pour l'AppBar et les Snackbars.",
          "Omettre totalement Scaffold sur un écran peut entraîner un rendu incorrect et des erreurs d'interface.",
        ],
        docLink: 'https://api.flutter.dev/flutter/material/Scaffold-class.html',
        additionalLinks: [
          { text: "Tutoriel vidéo : Débuter avec le Scaffold dans Flutter", url: "https://www.youtube.com/results?search_query=flutter+scaffold+fr" },
          { text: "Flutter Dev Guides : Guide complet sur la structure d'écran Scaffold", url: "https://docs.flutter.dev/ui/layout" }
        ],
      },

      {
        id: 'appbar',
        name: 'AppBar',
        arabicName: "Barre d'application (AppBar)",
        category: 'Structure et disposition',
        shortDescription: "Barre en haut de l'écran affichant le titre et les actions.",
        explanation:
          "AppBar est la barre d'outils située en haut de l'écran. Elle facilite la navigation et offre un emplacement clair pour le titre courant. Elle comporte généralement trois zones : 'leading' (icône de navigation), 'title' (titre ou logo) et 'actions' (icônes d'action).",
        properties: [
          {
            name: 'title',
            description:
              "Le titre principal de l'AppBar, généralement un widget Text, mais peut être une image ou un champ de recherche.",
            example: "title: const Text('Détails du produit')",
          },
          {
            name: 'leading',
            description:
              "Widget affiché au début de l'AppBar (à gauche en LTR). Utilisé pour le bouton de menu ou de retour.",
            example:
              "leading: IconButton(\n  icon: const Icon(Icons.arrow_back),\n  onPressed: () => Navigator.pop(context),\n)",
          },
          {
            name: 'actions',
            description:
              "Liste d'actions (icônes) affichées à la fin de l'AppBar pour des actions supplémentaires (recherche, partage...).",
            example:
              "actions: [\n  IconButton(icon: const Icon(Icons.search), onPressed: () {}),\n  IconButton(icon: const Icon(Icons.share), onPressed: () {}),\n]",
          },
          {
            name: 'centerTitle',
            description: "Booléen (true/false) pour centrer le titre dans l'AppBar.",
            example: "centerTitle: true",
          },
          {
            name: 'backgroundColor',
            description: "Couleur de fond de l'AppBar.",
            example: "backgroundColor: Colors.indigo",
          },
          {
            name: 'elevation',
            description: "Profondeur visuelle de l'AppBar (ombre). Mettre 0.0 rend l'AppBar plat.",
            example: "elevation: 4.0",
          },
        ],
        codeExample: `AppBar(
      title: const Text('Détails du produit'),
      centerTitle: true,
      backgroundColor: Colors.indigo,
      elevation: 4.0,
      leading: IconButton(
        icon: const Icon(Icons.arrow_back),
        onPressed: () {
          // Retour à l'écran précédent
        },
      ),
      actions: [
        IconButton(
          icon: const Icon(Icons.search),
          onPressed: () {},
        ),
        IconButton(
          icon: const Icon(Icons.more_vert),
          onPressed: () {},
        ),
      ],
     )`,
        notes: [
          "AppBar ajoute automatiquement un bouton de retour si le route stack le permet (modifiable via automaticallyImplyLeading).",
          "Utilisez elevation pour contrôler la profondeur visuelle de l'AppBar.",
          "La propriété title accepte n'importe quel widget (texte, image, champ de recherche...).",
        ],
        mistakes: [
          "Ajouter trop d'actions provoque un débordement visuel (Overflow).",
          "Ne pas placer l'AppBar dans un Scaffold entraîne un positionnement incorrect.",
        ],
        docLink: 'https://api.flutter.dev/flutter/material/AppBar-class.html',
      },

      {
        id: 'text',
        name: 'Text()',
        arabicName: 'Widget Texte (Text)',
        category: 'Éléments de base',
        shortDescription: 'Widget simple pour afficher une chaîne de caractères formatée.',
        explanation:
          "Text est le widget de base pour afficher du texte dans Flutter. Il prend en charge l'alignement, le comportement en cas de dépassement (overflow) et le nombre maximal de lignes (maxLines). Utilisez la propriété style pour personnaliser la police.",
        properties: [
          {
            name: 'data (premier argument)',
            description: "La chaîne de caractères (String) à afficher.",
            example: "Text('Bienvenue sur Flutter en Français !')",
          },
          {
            name: 'style',
            description: "Objet TextStyle pour définir l'apparence du texte (couleur, taille, graisse...).",
            example:
              "style: const TextStyle(\n  fontSize: 18.0,\n  color: Colors.blue,\n)",
          },
          {
            name: 'textAlign',
            description: "Contrôle l'alignement horizontal du texte (center, left, right...).",
            example: 'textAlign: TextAlign.center',
          },
          {
            name: 'textDirection',
            description: "Spécifie la direction d'écriture (LTR ou RTL).",
            example: 'textDirection: TextDirection.ltr',
          },
          {
            name: 'maxLines',
            description: 'Nombre maximum de lignes avant tronquage.',
            example: 'maxLines: 2',
          },
          {
            name: 'overflow',
            description: "Définit le comportement lorsque le texte dépasse (ex: TextOverflow.ellipsis).",
            example: 'overflow: TextOverflow.ellipsis',
          },
        ],
        codeExample: `Text(
      'Apprenez Flutter étape par étape avec une application interactive en français !',
      textAlign: TextAlign.center,
      textDirection: TextDirection.ltr,
      maxLines: 2,
      overflow: TextOverflow.ellipsis,
      style: TextStyle(
        fontSize: 18.0,
        color: Colors.grey[800],
      ),
    )`,
        notes: [
          "Pour les applications multilingues, utilisez textDirection pour gérer correctement le sens d'écriture (LTR/RTL).",
          "Utilisez TextOverflow.ellipsis pour ajouter des points de suspension lorsque le texte dépasse l'espace disponible.",
        ],
        mistakes: [
          "Mettre de longs textes dans un Row sans les envelopper (Expanded/Flexible) provoque des erreurs d'overflow.",
        ],
        docLink: 'https://api.flutter.dev/flutter/widgets/Text-class.html',
      },

      {
        id: 'textstyle',
        name: 'TextStyle()',
        arabicName: 'TextStyle (Formatage du texte)',
        category: 'Design et style',
        shortDescription: 'Objet pour définir la taille, la couleur et le style du texte.',
        explanation:
          "TextStyle n'est pas un widget, mais un objet passé à la propriété style du widget Text. Il permet de personnaliser la typographie (fontSize, fontWeight, color, decoration, etc.).",
        properties: [
          {
            name: 'fontSize',
            description: 'Taille de la police en points (double).',
            example: 'fontSize: 22.0',
          },
          {
            name: 'color',
            description: 'Couleur du texte (Colors).',
            example: 'color: Colors.deepPurple',
          },
          {
            name: 'fontWeight',
            description: "Épaisseur du texte (ex: FontWeight.bold).",
            example: 'fontWeight: FontWeight.bold',
          },
          {
            name: 'fontStyle',
            description: 'Style de la police (italic, normal).',
            example: 'fontStyle: FontStyle.italic',
          },
          {
            name: 'fontFamily',
            description: "Nom de la famille de police (ex: 'Cairo').",
            example: "fontFamily: 'Cairo'",
          },
          {
            name: 'letterSpacing',
            description: 'Espacement horizontal entre les caractères.',
            example: 'letterSpacing: 1.5',
          },
          {
            name: 'decoration',
            description: 'Décoration du texte (underline, lineThrough, etc.).',
            example: 'decoration: TextDecoration.underline',
          },
        ],
        codeExample: `Text(
      'Design unique et attrayant',
      style: TextStyle(
        fontSize: 24.0,
        fontWeight: FontWeight.bold,
        color: Colors.deepPurple,
        fontStyle: FontStyle.italic,
        letterSpacing: 1.5,
        wordSpacing: 2.0,
        decoration: TextDecoration.underline,
        decorationColor: Colors.deepPurple,
        decorationStyle: TextDecorationStyle.dashed,
      ),
    )`,
        notes: [
          'Privilégiez les thèmes globaux (Theme.of(context).textTheme) plutôt que des TextStyle répétés pour assurer la cohérence.',
          "TextStyle supporte l'utilisation de polices personnalisées via fontFamily (Google Fonts ou locales).",
        ],
        mistakes: [
          "Utiliser des tailles de police fixes et trop grandes sans tenir compte des paramètres d'accessibilité peut casser la mise en page."
        ],
        docLink: 'https://api.flutter.dev/flutter/painting/TextStyle-class.html',
      },

      {
        id: 'boxdecoration',
        name: 'BoxDecoration()',
        arabicName: 'BoxDecoration (Décoration de boîte)',
        category: 'Design et style',
        shortDescription: 'Permet de décorer un Container avec des bordures, des arrondis, des ombres, des couleurs ou des dégradés.',
        explanation:
          "BoxDecoration n'est pas un widget, mais un objet passé à la propriété decoration d'un widget Container (ou d'autres widgets de décoration). Il fournit une grande variété de façons de dessiner une boîte (box) : couleur de fond, image de fond, bordure (Border), angles arrondis (BorderRadius), ombres (BoxShadow) ou dégradés (Gradient).",
        properties: [
          { name: 'color', description: 'Couleur de fond de la boîte (Colors).', example: 'color: Colors.blue' },
          { name: 'border', description: 'Bordure à dessiner autour de la boîte (Border.all).', example: "border: Border.all(\n  color: Colors.indigo,\n  width: 2.0,\n)" },
          { name: 'borderRadius', description: 'Rayon de courbure des angles de la boîte (BorderRadius).', example: 'borderRadius: BorderRadius.circular(12.0)' },
          { name: 'boxShadow', description: "Liste d'ombres (BoxShadow) projetées par la boîte pour donner de la profondeur.", example: "boxShadow: [\n  BoxShadow(\n    color: Colors.black26,\n    blurRadius: 8.0,\n    offset: Offset(0, 4),\n  ),\n]" },
          { name: 'gradient', description: 'Dégradé de couleur (LinearGradient, RadialGradient) appliqué au fond.', example: "gradient: LinearGradient(\n  colors: [Colors.blue, Colors.purple],\n)" },
          { name: 'image', description: "Image de fond à afficher à l'intérieur de la boîte (DecorationImage).", example: "image: DecorationImage(\n  image: AssetImage('assets/background.png'),\n  fit: BoxFit.cover,\n)" },
        ],
        codeExample: `Container(
      width: 200.0,
      height: 200.0,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20.0),
        border: Border.all(
          color: Colors.indigo,
          width: 3.0,
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.indigo.withOpacity(0.2),
            spreadRadius: 4,
            blurRadius: 15,
            offset: const Offset(0, 8),
          ),
        ],
        gradient: const LinearGradient(
          colors: [Colors.indigo, Colors.purple],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: const Center(
        child: Text(
          'Décoration premium',
          style: TextStyle(
            color: Colors.white,
            fontSize: 16,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    )`,
        notes: [
          "Si la propriété decoration d'un Container est définie, la propriété color du Container doit être nulle. La couleur de fond doit alors être définie dans BoxDecoration.color.",
          "Les ombres (boxShadow) et les dégradés (gradient) ralentissent légèrement le rendu graphique : utilisez-les judicieusement sur des éléments récurrents.",
        ],
        mistakes: [
          "Définir à la fois la couleur de fond directement sur le Container ET un objet BoxDecoration provoquera un crash (erreur d'assertion).",
        ],
        docLink: 'https://api.flutter.dev/flutter/painting/BoxDecoration-class.html',
      },

      {
        id: 'container',
        name: 'Container()',
        arabicName: 'Container (Conteneur)',
        category: 'Structure et disposition',
        shortDescription: 'Widget polyvalent pour la mise en page, la décoration et les dimensions.',
        explanation:
          "Container est un widget très flexible utilisé pour encapsuler d'autres widgets et contrôler la taille, le padding, le margin et la décoration (bordures, arrondis, ombres, gradients).",
        properties: [
          { name: 'width', description: 'Largeur du container en pixels (double).', example: 'width: 200.0' },
          { name: 'height', description: 'Hauteur du container en pixels (double).', example: 'height: 150.0' },
          { name: 'padding', description: 'Espace intérieur entre la bordure et le contenu (child).', example: 'padding: const EdgeInsets.all(16.0)' },
          { name: 'margin', description: 'Espace extérieur séparant le container des widgets adjacents.', example: 'margin: const EdgeInsets.symmetric(horizontal: 12.0)' },
          { name: 'color', description: "Couleur de fond du container (évitez de l'utiliser avec 'decoration').", example: 'color: Colors.teal' },
          { name: 'decoration', description: "Décoration avancée (BoxDecoration) pour arrondis, ombres, gradients et bordures.", example: "decoration: BoxDecoration(\n  color: Colors.teal,\n  borderRadius: BorderRadius.circular(15.0),\n)" },
          { name: 'alignment', description: "Alignement du child à l'intérieur du container.", example: 'alignment: Alignment.center' },
          { name: 'child', description: "Le widget enfant contenu à l'intérieur du container.", example: "child: const Text('Contenu du container')" },
        ],
        codeExample: `Container(
      width: 250.0,
      height: 150.0,
      margin: const EdgeInsets.all(12.0),
      padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
      decoration: BoxDecoration(
        color: Colors.teal,
        borderRadius: BorderRadius.circular(15.0),
        boxShadow: [
          BoxShadow(
            color: Colors.black26,
            blurRadius: 10.0,
            offset: const Offset(0, 5),
          ),
        ],
        border: Border.all(
          color: Colors.tealAccent,
          width: 2.0,
        ),
      ),
      child: const Center(
        child: Text(
          'Contenu du container',
          style: TextStyle(color: Colors.white, fontSize: 18),
        ),
      ),
    )`,
        notes: [
          "Si vous avez uniquement besoin de padding, préférez le widget Padding plutôt que Container pour de meilleures performances.",
          "Pour un espacement fixe, utilisez SizedBox au lieu de Container lorsque possible.",
        ],
        mistakes: [
          "Passer la propriété color directement alors que decoration est utilisée provoque une erreur d'assertion. Placez la couleur dans decoration.color.",
        ],
        docLink: 'https://api.flutter.dev/flutter/widgets/Container-class.html',
        additionalLinks: [
          { text: "Tutoriel interactif : Comprendre le Padding, Margin et la décoration avec Container", url: "https://flutter.dev/docs/development/ui/widgets/layout" },
          { text: "Guide pratique : Éviter les pièges de dimensions dans un Container", url: "https://medium.com/flutter/flutter-layout-demystified" }
        ],
      },

      {
        id: 'column',
        name: 'Column()',
        arabicName: 'Colonne (Column)',
        category: 'Structure et disposition',
        shortDescription: "Arrange une liste de widgets verticalement (du haut vers le bas).",
        explanation:
          "Column est un widget de layout de base qui dispose ses enfants verticalement. Utilisez mainAxisAlignment et crossAxisAlignment pour contrôler la distribution et l'alignement. Column ne défile pas par défaut : si le contenu dépasse, utilisez ListView ou enveloppez dans SingleChildScrollView.",
        properties: [
          { name: 'children', description: "Liste d'enfants (List<Widget>) qui seront disposés verticalement.", example: "children: [\n  Text('Élément 1'),\n  Text('Élément 2'),\n  Text('Élément 3'),\n]" },
          { name: 'mainAxisAlignment', description: "Contrôle la distribution des enfants le long de l'axe principal (vertical). Valeurs : start, end, center, spaceBetween, spaceAround, spaceEvenly.", example: 'mainAxisAlignment: MainAxisAlignment.center' },
          { name: 'crossAxisAlignment', description: "Contrôle l'alignement des enfants sur l'axe transversal (horizontal). Valeurs : start, end, center, stretch.", example: 'crossAxisAlignment: CrossAxisAlignment.start' },
          { name: 'mainAxisSize', description: "Détermine la taille du Column sur l'axe principal (max ou min).", example: 'mainAxisSize: MainAxisSize.min' },
          { name: 'verticalDirection', description: "Contrôle le sens de dessin des enfants (down ou up).", example: 'verticalDirection: VerticalDirection.up' },
        ],
        codeExample: `import 'package:flutter/material.dart';

    class ProfileCard extends StatelessWidget {
      const ProfileCard({super.key});

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(title: const Text('Carte de profil')),
          body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const CircleAvatar(
                  radius: 50,
                  backgroundImage: NetworkImage(
                    'https://i.pravatar.cc/150',
                  ),
                ),
                const SizedBox(height: 16),
                const Text(
                  'Jean Dupont',
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 8),
                const Text(
                  'Développeur Flutter',
                  style: TextStyle(
                    fontSize: 16,
                    color: Colors.grey,
                  ),
                ),
                const SizedBox(height: 24),
                ElevatedButton(
                  onPressed: () {},
                  child: const Text('Contactez-moi'),
                ),
              ],
            ),
          ),
        );
      }
    }`,
        notes: [
          "Si le contenu dépasse la hauteur, utilisez ListView ou SingleChildScrollView pour éviter l'Overflow.",
          "Utilisez Expanded ou Flexible pour distribuer l'espace entre les enfants plutôt que des tailles fixes.",
          "Privilégiez SizedBox pour des espacements fixes légers plutôt que Container.",
        ],
        mistakes: [
          "Placer un widget avec hauteur infinie (ListView, Column) directement dans une Column sans Expanded provoque des erreurs de layout.",
          "Confondre mainAxisAlignment et crossAxisAlignment : le principal est l'axe vertical pour Column.",
        ],
        docLink: 'https://api.flutter.dev/flutter/widgets/Column-class.html',
      },

      {
        id: 'row',
        name: 'Row()',
        arabicName: 'Ligne (Row)',
        category: 'Structure et disposition',
        shortDescription: 'Arrange une liste de widgets horizontalement (de gauche à droite).',
        explanation:
          "Row est un widget de layout fondamental qui dispose ses enfants horizontalement. Tout comme Column, il utilise mainAxisAlignment (horizontal pour Row) et crossAxisAlignment (vertical pour Row) pour contrôler la distribution et l'alignement. Row ne défile pas horizontalement : si les enfants dépassent la largeur de l'écran, cela provoque un overflow (débordement). Utilisez SingleChildScrollView avec un axe horizontal ou Wrap pour gérer les dépassements.",
        properties: [
          { name: 'children', description: "Liste d'enfants (List<Widget>) qui seront disposés horizontalement.", example: "children: [\n  Icon(Icons.star),\n  Text('Favori'),\n]" },
          { name: 'mainAxisAlignment', description: "Contrôle la distribution des enfants le long de l'axe principal (horizontal). Valeurs : start, end, center, spaceBetween, spaceAround, spaceEvenly.", example: 'mainAxisAlignment: MainAxisAlignment.center' },
          { name: 'crossAxisAlignment', description: "Contrôle l'alignement des enfants sur l'axe transversal (vertical). Valeurs : start, end, center, stretch.", example: 'crossAxisAlignment: CrossAxisAlignment.start' },
          { name: 'mainAxisSize', description: "Détermine la taille du Row sur l'axe principal (max ou min).", example: 'mainAxisSize: MainAxisSize.min' },
          { name: 'textDirection', description: "Contrôle la direction de disposition horizontale des enfants (ltr ou rtl).", example: 'textDirection: TextDirection.ltr' },
        ],
        codeExample: `import 'package:flutter/material.dart';

    class RatingRow extends StatelessWidget {
      const RatingRow({super.key});

      @override
      Widget build(BuildContext context) {
        return Scaffold(
          appBar: AppBar(title: const Text('Exemple Row')),
          body: Center(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: const [
                Icon(Icons.star, color: Colors.amber, size: 30),
                Icon(Icons.star, color: Colors.amber, size: 30),
                Icon(Icons.star, color: Colors.amber, size: 30),
                SizedBox(width: 8),
                Text(
                  '3.0/5.0',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
              ],
            ),
          ),
        );
      }
    }`,
        notes: [
          "Pour répartir l'espace restant entre les enfants ou étendre un enfant, enveloppez-le dans un widget Expanded ou Flexible.",
          "Si le contenu horizontal risque de dépasser la largeur de l'écran, utilisez Wrap au lieu de Row pour que les éléments passent à la ligne suivante automatiquement.",
        ],
        mistakes: [
          "Placer un widget ayant une largeur infinie (comme un autre Row ou ListView horizontal) directement dans un Row sans Expanded ou Flexible provoque des erreurs de layout.",
          "Confondre mainAxisAlignment et crossAxisAlignment : pour Row, l'axe principal est l'axe horizontal.",
        ],
        docLink: 'https://api.flutter.dev/flutter/widgets/Row-class.html',
        additionalLinks: [
          { text: "Tutoriel interactif : Comprendre le Padding, Margin et la décoration avec Container", url: "https://flutter.dev/docs/development/ui/widgets/layout" },
          { text: "Guide pratique : Éviter les pièges de dimensions dans un Container", url: "https://medium.com/flutter/flutter-layout-demystified" }
        ],
      },
];
