import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import "../assets/stylesheets/header.css";

const NAV_ELEMENTS = [
  {
    id: "home",
    route: "/",
    label: "Home",
  },
  {
    id: "about",
    route: "/about",
    label: "About",
  },
  {
    id: "career",
    route: "/career",
    label: "Career",
  },
  {
    id: "contact",
    route: "/contact",
    label: "Contact",
  },
];

const Header = () => {
  return <div className="header-wrapper">
    <Link to="/" className="first-container">Tushar</Link>
    <div className="header-container">{NAV_ELEMENTS.map(({ id, route, label }) => {
      return (
        <NavLink to={route} key={id}>
          {label}
        </NavLink>
      );
    })}</div>
  </div>
};

export default Header;
