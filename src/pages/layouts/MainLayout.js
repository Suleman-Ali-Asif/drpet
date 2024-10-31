import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import { HeaderRoutes } from "../../utils/routes/WebsiteRoutes";

const MainLayout = () => {
  let routes = HeaderRoutes;

  return (
    <div className="flex relative bg:bg-main-dark-bg">
      <div
        className="dark:bg-main-bg bg-main-bg 
                min-h-screen w-full flex-2"
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full z-50">
          <Navbar />
        </div>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>

        <>
          <Footer />
        </>
      </div>
    </div>
  );
};

export default MainLayout;
