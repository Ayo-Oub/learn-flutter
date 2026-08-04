import scaffold from "./scaffold";
import appbar from "./appbar";
import container from "./container";
import row from "./row";
import column from "./column";
import text from "./text";
import image from "./image";
import icon from "./icon";
import elevatedButton from "./elevated-button";
import textField from "./text-field";
import textStyle from "./text-style";
import boxDecoration from "./box-decoration";
import edgeInsets from "./edge-insets";
import themeData from "./theme-data";
import expanded from "./expanded";

/**
 * Export centralisé du catalogue de widgets.
 * Ajoute simplement une nouvelle fiche à ce tableau pour l'ajouter au site
 * (elle apparaîtra automatiquement dans la Home, la page Lessons filtrée par
 * catégorie, et le sommaire de la sidebar).
 */
export const lessons = [
  scaffold,
  appbar,
  container,
  row,
  column,
  text,
  image,
  icon,
  elevatedButton,
  textField,
  textStyle,
  boxDecoration,
  edgeInsets,
  themeData,
  expanded,
];
