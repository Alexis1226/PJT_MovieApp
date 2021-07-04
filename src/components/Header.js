import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div id="header">
      <h1>Movit Movit</h1>
      <ul className="nav">
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" exact>
            Movie
          </NavLink>
        </li>
        <li>
          <NavLink to="/tick" exact>
            Selection
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
