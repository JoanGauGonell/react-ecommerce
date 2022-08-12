import Links from "../Link/Links";
import "./Nav.css"
import { Link, Outlet, useNavigate } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul className="navbar__ul">
              <li>
                <Link className="navbar__li" to={"/AboutUs"}>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link className="navbar__li" to={"/shops"}>
                  SHOP
                </Link>
              </li>
              <li>
                <Link className="navbar__li" to={"/contacts"}>
                  CONTACT
                </Link>
              </li>
              <li>
                <Link className="navbar__li" to={"/Partnership"}>
                  PARTNERSHIP
                </Link>
              </li>

      </ul>
    </nav>
      );

      
};

export default Nav;