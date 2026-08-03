import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import LessonLayout from "../components/layout/LessonLayout";

import Home from "../pages/Home";
import Lessons from "../pages/Lessons";
import LessonDetail from "../pages/LessonDetail";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

/**
 * Arborescence des routes de l'application.
 * - MainLayout (navbar + footer) pour les pages "vitrine"
 * - LessonLayout (navbar + sommaire latéral) pour la lecture d'une leçon
 */
export default function AppRouter() {
  return (
    <BrowserRouter basename="/learn-flutter">
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/lessons"
            element={<Lessons />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>

        <Route element={<LessonLayout />}>
          <Route
            path="/lessons/:lessonId"
            element={<LessonDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
