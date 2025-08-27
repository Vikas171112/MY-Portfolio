import Header from "@/components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function LayoutPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default LayoutPage;
