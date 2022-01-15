import Logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Логотип" className="logo header__logo" />
    </header>
  )
}

export default Header;
