import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutThisProject from "./components/about this project/Main/Main";

import Models3d from "./components/modelos 3d/Main/Main";
import Collaborators from "./components/colaboradores/Main/Main";
import Geoturismo from "./components/geoturismo/Main/Main";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  return (
    <section className={`app ${isDarkMode ? "theme_dark" : "theme_light"}`}>
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Navigate to="/modelos-3d" replace />} />
        <Route path="/modelos-3d" element={<Models3d />} />
        <Route path="/about-this-project" element={<AboutThisProject />} />

        <Route path="/geoturismo" element={<Geoturismo />} />
        <Route path="/colaboradores" element={<Collaborators />} />
        <Route
          path="/home"
          element={<Navigate to="/about-this-project" replace />}
        />
        <Route path="*" element={<Navigate to="/modelos-3d" replace />} />
      </Routes>

      <Footer />
    </section>
  );
}

export default App;
