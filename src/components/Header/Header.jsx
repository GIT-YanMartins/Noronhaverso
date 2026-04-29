import './Header.css';
import { FiMoon, FiSun } from 'react-icons/fi';
import NoronhaversoCartoon from '../../assets/images/Noronhaverso_cartoon.png';
///import NoronhaversoRealist from '../../../Assets/Images/Noronhaverso_realist.png';


function Header({ isDarkMode, onToggleTheme }) {
  return (
    <header className="header-box">
      <img src={NoronhaversoCartoon} alt="Noronhaverso cartoon" className="noronha1" />
      <section className="headerNavegation">
        <nav className="nav-box">
          <ul className="list">
            <li>Sobre o projeto</li>
            <li>Sugestões</li>
            <li>Modelos 3d</li>
            <li>Colaboradores</li>
          </ul>
          <button
            type="button"
            className="theme-toggle-button"
            onClick={onToggleTheme}
            aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </section>
    </header>
  );
}

export default Header;
