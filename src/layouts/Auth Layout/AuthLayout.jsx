import { Outlet } from "react-router";
import Navbar from "../../components/common/Navbar/Navbar";

function AuthLayout() {
  return (
    <section className="w-5/6 mx-auto py-9">
      <section className="fixed inset-0 -z-10 bg-primary bg-cover bg-center"></section>
      <Navbar />
      <Outlet></Outlet>
    </section>
  );
}

export default AuthLayout;
