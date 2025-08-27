import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import AboutPage from "./pages/AboutPage";
import HomePAge from "./pages/HomePAge";
import NotAvailablePage from "./pages/NotAvailablePage";
import ProjectsListPage from "./pages/ProjectsListPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePAge />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsListPage />} />
      </Route>
      <Route path="/*" element={<NotAvailablePage />} />
    </Routes>
  );
}

export default AppRoutes;
