import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";




const MainLayout = () => {

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);
  
  return (
    <div className="text-sm text-secondary">
      <div className="sticky top-0 z-50">
        {/* load navvar here */}
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-166px)]">
          <Outlet />
      </div>
      <div>
        {/* load footer footer */}
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
