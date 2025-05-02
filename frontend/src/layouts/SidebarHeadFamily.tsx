import { produce } from "immer";
import { Dispatch, SetStateAction, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";

interface SidebarIF {
  isOpenSidebar: boolean;
  setIsOpenSidebar: Dispatch<SetStateAction<boolean>>;
}
export default function SidebarHeadFamily({
  isOpenSidebar,
  setIsOpenSidebar,
}: SidebarIF) {
  const navigate = useNavigate();
  const location = useLocation();

  const [menus, setMenus] = useState([
    {
      menu: "Dashboard",
      link: "/head-family",
      icon: "/icons/menu-dashboard.svg",
    },
    {
      menu: "Anggota Keluarga",
      link: "/head-family/family-member",
      icon: "/icons/menu-kepala-rumah.svg",
    },
    {
      menu: "Bantuan Sosial",
      icon: "/icons/menu-bansos.svg",
      isExpanded: true,
      subMenu: [
        {
          menu: "List Bansos",
          link: "/head-family/social-donate/list-social-donate",
        },
        {
          menu: "Pengajuan Bansos",
          link: "/head-family/social-donate/applicant-social-donate",
        },
      ],
    },
    {
      menu: "Jadwal Desa",
      icon: "/icons/menu-jadwal.svg",
      isExpanded: true,
      subMenu: [
        {
          menu: "Pembangunan",
          link: "/head-family/village-schedule/village-development-schedule",
        },
        {
          menu: "Event Desa",
          link: "/head-family/village-schedule/village-event-schedule",
        },
      ],
    },
    {
      menu: "Head Village Role Page",
      link: "/",
      icon: "/icons/menu-profile.svg",
    },
  ]);

  function toggleExpanded(menuString: string) {
    setMenus(
      produce((draft) => {
        const isExpand = draft.find((menu) => menu.menu === menuString);

        if (isExpand) {
          isExpand.isExpanded = !isExpand.isExpanded;
        }
      })
    );
  }

  return (
    <div
      className={`${
        isOpenSidebar
          ? "translate-x-0 lg:translate-0"
          : "translate-x-full lg:translate-0"
      } bg-black/15 transition-all fixed z-20 h-dvh w-[100vw] lg:w-[300px]`}
    >
      <div className=" bg-white z-10 p-6 lg:py-[30px] h-full ml-auto w-[100vw] lg:w-[300px] gap-6 flex flex-col">
        <div className="top">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/icons/logo.svg" alt="" />
              <h1 className="text-2xl font-bold leading-normal text-black">
                DesaKita.
              </h1>
            </div>
            <img
              onClick={() => setIsOpenSidebar(!isOpenSidebar)}
              src="/icons/menu.svg"
              alt=""
              className="w-11 rounded-2xl border border-bg-color p-1.5"
            />
          </div>
        </div>

        <div className="main-menu flex flex-col gap-2">
          <h2 className="text-sm font-medium leading-normal text-secondary-text-color">
            Main Menu
          </h2>

          {menus.map((menu, index) => {
            return (
              <div
                onClick={() => {
                  if (!menu.subMenu) {
                    navigate(menu.link || "/");
                    setIsOpenSidebar(false);
                  }
                }}
                key={index}
                className={`menu group hover:bg-foreshadow rounded-2xl cursor-pointer transition-all text-base text-secondary-text-color font-normal leading-normal ${
                  location.pathname.split("/")[2] !== undefined
                    ? `/head-family/${location.pathname.split("/")[2]}` ===
                      menu.link
                      ? "bg-foreshadow"
                      : ""
                    : `/${location.pathname.split("/")[1]}` === menu.link
                    ? "bg-foreshadow"
                    : ""
                }`}
              >
                <div
                  onClick={() => toggleExpanded(menu.menu)}
                  className={`flex justify-between items-center p-4 ${
                    menu.subMenu && menu.isExpanded ? "pb-2" : ""
                  }`}
                >
                  <div className="gap-2 flex items-center">
                    <img src={menu.icon} alt="" />
                    <h3
                      className={`${
                        location.pathname.split("/")[2] !== undefined
                          ? `/head-family/${
                              location.pathname.split("/")[2]
                            }` === menu.link
                            ? "text-dark-green font-medium"
                            : ""
                          : `/${location.pathname.split("/")[1]}` === menu.link
                          ? "text-dark-green font-medium"
                          : ""
                      } group-hover:text-dark-green group-hover:font-medium`}
                    >
                      {menu.menu}
                    </h3>
                  </div>
                  {menu.subMenu && (
                    <img
                      src="/icons/dropdown-menu-sidebar.svg"
                      alt=""
                      className={`transition-all ${
                        menu.isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {menu.subMenu && (
                  <div
                    className={`${
                      menu.isExpanded ? "max-h-96 mt-4" : "max-h-0"
                    } sub-menu overflow-hidden transition-all ml-7 relative before:absolute before:top-0 before:left-0 before:w-0.5 before:h-[70%] before:bg-[#F2F9F6]`}
                  >
                    {menu.subMenu.map((subMenu, index) => (
                      <NavLink
                        to={subMenu.link || ""}
                        onClick={() => setIsOpenSidebar(false)}
                        className={({ isActive }) =>
                          isActive ? "inline-block w-full" : ""
                        }
                        key={index}
                      >
                        {({ isActive }) => (
                          <div className="relative">
                            <img
                              src="/icons/line-sub-menu.svg"
                              className="absolute left-0 top-1"
                              alt=""
                            />
                            <p
                              className={`${
                                isActive
                                  ? "bg-foreshadow font-medium text-dark-green"
                                  : "bg-transparent font-normal text-secondary-text-color"
                              } py-4 ml-8 pl-4 rounded-2xl`}
                            >
                              {subMenu.menu}
                            </p>
                          </div>
                        )}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
