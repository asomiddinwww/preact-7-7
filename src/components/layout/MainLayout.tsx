import Footer from "../footer";
import Header from "../header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
        <div className="pt-10 pb-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
