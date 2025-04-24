import { Link } from "react-router";
import TitlePage from "../../components/TitlePage";
import Button from "../../components/Button";
import Inputs from "../../components/Inputs";

export default function HeadHouse() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Kepala Rumah"
        leftElement={
          <Link to={"/head-house/create-head-house"}>
            <Button variant="green">
              <img className="w-5 lg:w-6" src="/icons/add-square.svg" alt="" />
              Add New
            </Button>
          </Link>
        }
      />

      <div className="flex flex-col">
        <div className="top flex flex-wrap justify-between items-center gap-3">
          <div className="md:max-w-[370px] w-full">
            <Inputs
              type="text"
              isIconLeft={true}
              icons="/icons/user-search.svg"
              placeholder="Cari nama Kepala Rumah atau NIK"
              customClass="bg-white"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-[10px]">
              <p className="text-16 font-medium text-black">Show</p>
              <div className="relative">
                <img
                  src="/icons/arrow-down.svg"
                  alt=""
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 lg:w-6"
                />
                <select
                  name=""
                  id=""
                  className="appearance-none rounded-2xl pr-10 lg:pr-14 bg-white p-3.5 lg:p-4 text-black font-medium text-16 w-full"
                >
                  <option value="">5 Entries</option>
                  <option value="">10 Entries</option>
                  <option value="">50 Entries</option>
                  <option value="">500 Entries</option>
                </select>
              </div>
            </div>

            <Button variant="white">
              <img src="/icons/filter.svg" alt="" />
              Filter
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto w-full mt-1">
          <table className="border-separate border-spacing-y-[14px] table-auto w-full">
            {Array.from({ length: 5 }, (_, index) => (
              <tr key={index} className="bg-white w-full">
                <td className="">
                  <div className="flex gap-3 items-center w-full">
                    <div className="bg-foreshadow rounded-full w-[50px] lg:w-[64px] overflow-hidden">
                      <img
                        src="/images/user.png"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col gap-1 lg:gap-[8px]">
                      <h3 className="text-base lg:text-[18px] font-semibold text-black">
                        Andi Alif Baro
                      </h3>
                      <div className="flex items-center gap-1">
                        <img
                          src="/icons/briefcase.svg"
                          alt=""
                          className="w-3.5 lg:w-[18px]"
                        />
                        <span className="text-14 font-medium text-secondary-text-color">
                          Mekanik Kendaraan
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="flex gap-1 flex-col w-full">
                    <div className="flex gap-1 items-center">
                      <img src="/icons/keyboard.svg" alt="" />
                      <span className="text-14 font-medium text-secondary-text-color">
                        NIK
                      </span>
                    </div>
                    <p className="text-16 text-black font-semibold">
                      2005100592201005
                    </p>
                  </div>
                </td>

                <td>
                  <div className="rounded-full inline-flex w-auto gap-1 items-center py-2 px-3 pr-8.5 lg:py-3.5 lg:px-4 bg-[#005CAA]/[0.09]">
                    <img src="/icons/profile-2user-blue.svg" alt="" />
                    <span className="text-16 text-[#005CAA] font-medium">
                      99 Anggota Keluarga
                    </span>
                  </div>
                </td>

                <td>
                  <Link to={"/head-house/manage-head-house"}>
                    <Button variant="black">Manage</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>

        <div className="flex gap-3 text-16 font-semibold text-dark-green items-center mt-3 lg:mt-6 justify-center lg:justify-end">
          <img
            src="/icons/pagination-right.svg"
            alt=""
            className="rotate-180"
          />
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="w-[44px] hover:bg-soft-green hover:text-white transition-all cursor-pointer h-[44px] rounded-full bg-foreshadow flex items-center justify-center"
            >
              {index + 1}
            </div>
          ))}
          <img src="/icons/pagination-right.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
