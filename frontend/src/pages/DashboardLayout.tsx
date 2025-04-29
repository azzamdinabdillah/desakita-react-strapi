import { Outlet } from "react-router";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import { useState } from "react";
import SidebarHeadFamily from "../layouts/SidebarHeadFamily";

export default function DashboardLayout({
  role = "head-village",
}: {
  role?: "head-family" | "head-village";
}) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <div>
      {role === "head-village" ? (
        <Sidebar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
      ) : (
        <SidebarHeadFamily
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
      )}

      <div className="flex flex-col min-h-dvh">
        <Header
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        <div className="p-4 lg:p-6 lg:w-[calc(100%-300px)] lg:ml-auto flex-1 mt-22 lg:mt-28">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
