import { Outlet } from "react-router";
import Navbar from "../../components/common/Navbar/Navbar";
import { useState } from "react";

function MainLayout() {
  const [showSearch, setShowSearch] = useState(true);
  const [main, setMain] = useState(true);
  const [dateRange, setDateRange] = useState();

  return (
    <section className="w-5/6 mx-auto py-9">
      <Navbar showSearch={showSearch} main={main} />
      <Outlet
        context={{ setShowSearch, setMain, dateRange, setDateRange }}
      ></Outlet>
    </section>
  );
}

export default MainLayout;
