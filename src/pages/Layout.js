import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <section>
       <Header />
      <Outlet />
    </section>

  )
};

export default Layout;