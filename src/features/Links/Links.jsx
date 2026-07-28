import { NavLink } from "react-router";

const links = (
  <>
    <li>
      <NavLink to={"/news"}>News</NavLink>
    </li>
    <li>
      <NavLink to={"/destination"}>Destination</NavLink>
    </li>
    <li>
      <NavLink to={"/blog"}>Blog</NavLink>
    </li>
    <li>
      <NavLink to={"/contact"}>Contact</NavLink>
    </li>
  </>
);

export default links;
