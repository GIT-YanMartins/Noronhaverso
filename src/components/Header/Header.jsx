import { NavLink } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import "./Header.css";
import noronhaversoCartoon from "../../assets/images/Noronhaverso_cartoon.png";

function Header({ isDarkMode, onToggleTheme }) {
  const themeLabel = isDarkMode ? "Ativar modo claro" : "Ativar modo escuro";

  return (
    <header className="header">
      <section className="header_brand">
        <img
          src={noronhaversoCartoon}
          alt="Noronhaverso cartoon"
          className="header_logo"
        />
      </section>

      <section className="header_menu">
        <nav>
          <ul className="header_list">
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
          className="header_theme_toggle"
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
