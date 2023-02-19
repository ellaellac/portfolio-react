import "./Header.scss";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header id="header" className="header">
      <h2 className="header__name">Ella Choy</h2>
      <Nav />
    </header>
  );
};
export default Header;
