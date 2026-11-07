import { NavLink } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import "./Header.css";
import logoImage from "../../assets/images/logo.png";

function Header({ isDarkMode, onToggleTheme }) {
  const themeLabel = isDarkMode ? "Ativar modo claro" : "Ativar modo escuro";

  return (
    <header className="header">
      <section className="headerBrand">
        <img
          src={logoImage}
          alt="Noronhaverso"
          className="headerLogo"
        />
      </section>

      <section className="headerMenu">
        <nav>
          <ul className="headerList">
            <li>
              <NavLink to="/about-this-project">Sobre o projeto</NavLink>
            </li>
            <li>
              <NavLink to="/geoturismo">Geoturismo virtual</NavLink>
            </li>
            <li>
              <NavLink to="/modelos-3d">Modelos 3D</NavLink>
            </li>
            <li>
              <NavLink to="/colaboradores">Colaboradores</NavLink>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="headerThemeToggle"
          onClick={onToggleTheme}
          aria-label={themeLabel}
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </section>
    </header>
  );
}

export default Header;
