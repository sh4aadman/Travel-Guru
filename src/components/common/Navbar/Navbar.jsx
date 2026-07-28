import { NavLink } from "react-router";
import logo from "../../../assets/icons/logo.png";
import links from "../../../features/Links/Links";
import Searchbar from "../../ui/Search bar/Searchbar";

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <figure>
        <img className="" src={logo} alt="travel-guru-logo" />
      </figure>
      <Searchbar />
      <ul className="flex items-center">{links}</ul>
      <NavLink to={"/auth/login"}>
        <button>Login</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
