import { Link } from "react-router-dom";

const Navbar = ({ show, setShow }) => {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="nav__brand">
          <span className="text__red">{"< "}</span>Simon Villaverde
          <span className="text__red">{" / >"}</span>
        </Link>

        <button className="nav__toggler " onClick={() => setShow(!show)}>
          <div className="nav__toggler-line__one"></div>
          <div className="nav__toggler-line__two"></div>
          <div className="nav__toggler-line__three"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
