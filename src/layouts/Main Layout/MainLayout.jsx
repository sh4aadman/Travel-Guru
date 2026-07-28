import { Outlet } from "react-router";
import Navbar from "../../components/common/Navbar/Navbar";

function MainLayout() {
  return (
    <section className="w-5/6 mx-auto py-9">
      <Navbar />
      <Outlet></Outlet>
    </section>
  );
}

export default MainLayout;
