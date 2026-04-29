import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
