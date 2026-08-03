import { LanguageProvider } from "./context/LanguageContext";
import { ProgressProvider } from "./context/ProgressContext";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <LanguageProvider>
      <ProgressProvider>
        <AppRouter />
      </ProgressProvider>
    </LanguageProvider>
  );
}
