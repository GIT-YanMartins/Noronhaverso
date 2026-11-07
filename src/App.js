import { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutThisProject from "./components/aboutProject/Main/Main";
import Models3d from "./components/models3d/Main/Main";
import Collaborators from "./components/collaborators/Main/Main";
import Geotourism from "./components/geotourism/Main/Main";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  const isGeotourism = location.pathname.startsWith("/geoturismo");

  return (
    <section
      className={`app ${isDarkMode ? "themeDark" : "themeLight"} ${
        isGeotourism ? "appGeotourism" : ""
      }`}
    >
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Navigate to="/modelos-3d" replace />} />
        <Route path="/modelos-3d" element={<Models3d />} />
        <Route path="/about-this-project" element={<AboutThisProject />} />
        <Route path="/geoturismo" element={<Geotourism />} />
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
