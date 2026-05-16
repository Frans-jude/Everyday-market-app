import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Jude's Everyday Market Logo"
        className="logo-image"
      />

      <div>
        <h1>Jude's Everyday Market</h1>
        <p>Fresh picks and daily essentials</p>
      </div>
    </header>
  );
}

export default Header;