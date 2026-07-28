import { NavLink } from "react-router";
import logo from "../../../assets/icons/logo.png";
import links from "../../../features/Links/Links";
import Searchbar from "../../ui/Search bar/Searchbar";

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <figure>
        <img className="w-24 h-12" src={logo} alt="travel-guru-logo" />
      </figure>
      <Searchbar />
      <section className="flex items-center gap-14">
        <ul className="font-secondary font-medium text-primary flex items-center gap-14">
          {links}
        </ul>
        <NavLink to={"/auth/login"}>
          <button className="px-7.5 py-3 font-secondary font-medium text-accent rounded-sm bg-secondary">
            Login
          </button>
        </NavLink>
      </section>
    </nav>
  );
}

export default Navbar;
