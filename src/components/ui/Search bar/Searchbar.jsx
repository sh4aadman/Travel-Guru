import { CiSearch } from "react-icons/ci";

function Searchbar() {
  return (
    <label className="px-3.5 py-2.5 w-sm border border-primary rounded-sm flex items-center gap-3">
      <CiSearch className="text-2xl" />
      <input
        className="w-full placeholder:font-secondary placeholder:font-medium placeholder:text-primary"
        type="search"
        placeholder="Search your destination"
      />
    </label>
  );
}

export default Searchbar;
