import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../index";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
