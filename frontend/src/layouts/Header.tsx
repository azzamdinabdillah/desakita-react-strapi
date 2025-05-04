import Inputs from "../components/Inputs";
import SearchNormalSvg from "../../public/search-normal.svg";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router";

interface HeaderIF {
  isOpenSidebar: boolean;
  setIsOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ isOpenSidebar, setIsOpenSidebar }: HeaderIF) {
  return (
    <div className="bg-white fixed z-20 w-full right-0 p-4 lg:p-6 flex items-center gap-4 lg:w-[calc(100%-300px)] lg:ml-auto">
      <div className="flex-grow">
        <Inputs
          customClass="rounded-full"
          isIconLeft={true}
          icons={SearchNormalSvg}
          type="text"
          placeholder="Cari nama penduduk, pengajuan, events, dll"
        />
      </div>
      <img
        src="/icons/notification.svg"
        alt=""
        className="w-14 lg:w-15 rounded-2xl border border-bg-color p-1.5 lg:p-4 hidden lg:block"
      />
      <img
        src="/icons/setting-2.svg"
        alt=""
        className="w-14 lg:w-15 rounded-2xl border border-bg-color p-1.5 lg:p-4 hidden lg:block"
      />
      <div className="hidden lg:flex gap-4 items-center">
        <Link
          to={"/login"}
          className="image bg-[#F1FAE6] rounded-full overflow-hidden w-[56px] h-[56px]"
        >
          <img src="/images/user.png" alt="" className="w-full h-full" />
        </Link>
        <div className="gap-[6px] flex flex-col w-[120px]">
          <h5 className="w-full text-base text-black font-semibold leading-normal">
            Bimore W
          </h5>

          <h6 className="w-full whitespace-nowrap text-sm font-medium leading-normal text-secondary-text-color">
            Kepala Desa
          </h6>
        </div>
        <img src="/icons/logout.svg" alt="" />
      </div>
      <div>
        <Link to={"/login"}>
          <div className="image bg-[#F1FAE6] rounded-full overflow-hidden lg:hidden">
            <img src="/images/user.png" alt="" />
          </div>
        </Link>
      </div>
      <img
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
        src="/icons/menu.svg"
        alt=""
        className="w-14 lg:w-16 rounded-2xl border border-bg-color p-1.5 lg:p-2.5 lg:hidden"
      />
    </div>
  );
}
