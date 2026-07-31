import { Link, NavLink } from "react-router";
import logo from "../../../assets/icons/logo.png";
import blackLogo from "../../../assets/icons/logo-black.png";
import links from "../../../features/Links/Links";
import Searchbar from "../../ui/Search bar/Searchbar";

function Navbar({ showSearch, main }) {
  return (
    <nav className="flex items-center justify-between">
      <figure>
        <Link to={"/"}><img className="w-24 h-12" src={main === true ? logo : blackLogo} alt="travel-guru-logo" /></Link>
      </figure>
      {showSearch && <Searchbar />}
      <section className="flex items-center gap-14">
        <ul className={`font-secondary font-medium ${main === true ? "text-primary" : "text-accent"} flex items-center gap-14`}>
          {links}
        </ul>
        <NavLink to={"/auth/login"}>
          <button className={`px-7.5 py-3 font-secondary font-medium text-accent rounded-sm bg-secondary cursor-pointer ${main === true ? "hover:bg-primary hover:text-accent" : "hover:bg-accent hover:text-primary"}`}>
            Login
          </button>
        </NavLink>
      </section>
    </nav>
  );
}

export default Navbar;
