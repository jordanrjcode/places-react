import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <p>Places</p>
      <div className="nav__search">
        <input type="text" placeholder="Buscar lugar" />
        <img src13="buscar.svg" className="search-icon" alt="Buscar icono" />
      </div>
      <div className="nav__icons"></div>
    </nav>
  );
};

export default Navbar;
