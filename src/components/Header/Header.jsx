import './Header.css';
import NoronhaversoCartoon from '../../assets/images/Noronhaverso_cartoon.png';
///import NoronhaversoRealist from '../../../Assets/Images/Noronhaverso_realist.png';


function Header() {
  return (
    <header className="header-box">
          <img src={NoronhaversoCartoon} alt="Noronhaverso cartoon" class="noronha1"/>
      <section className="headerNavegation">
      <nav className="nav-box">
        <ul className="list">
          <li>Sobre o projeto</li>
          <li>Sugestões</li>
          <li>Modelos 3d</li>
          <li>Colaboradores</li>
        </ul>
      </nav>
      </section>
    </header>
  );
}

export default Header;
