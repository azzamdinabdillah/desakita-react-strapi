import { Outlet } from "react-router";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useState } from "react";

export default function DashboardLayout() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <div>
      <Sidebar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />

      <div>
        <Header
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        <div className="p-4 lg:p-6 lg:w-[calc(100%-300px)] lg:ml-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
