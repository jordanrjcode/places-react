import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <p className="nav__brand">Places</p>
      <div className="nav__search">
        <input type="text" placeholder="Buscar lugar" className="nav__input" />
        <img src="buscar.svg" className="search-icon" alt="Buscar icono" />
      </div>
    </nav>
  );
};

export default Navbar;
