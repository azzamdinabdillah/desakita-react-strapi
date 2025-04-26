import { Link } from "react-router";
import TitlePage from "../../../components/TitlePage";
import Button from "../../../components/Button";
import Inputs from "../../../components/Inputs";
import CardItemGeneral from "../../../components/CardItemGeneral";
import DetailsList from "../../../components/DetailsList";

export default function ListSocialDonate() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="List Bantuan Sosial"
        leftElement={
          <Link to={"/social-donate/list-social-donate/create-social-donate"}>
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
              icons="/icons/receipt-search.svg"
              placeholder="Cari nama bantuan social"
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
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index} className="bg-white w-full">
                <td>
                  <div className="flex gap-4 lg:gap-6 flex-col w-full">
                    <div className="flex justify-between items-center flex-wrap gap-4">
                      <CardItemGeneral
                        imgSize="w-[70px] lg:w-[100px] h-[60px] lg:h-[80px]"
                        image="/images/bansos-1.png"
                        title="Bantuan Untuk Rakyat Kurang Mampu"
                        subTitleMaxWidth="max-w-[100%]"
                        titleMaxWidth="max-w-[100%]"
                        subTitle={
                          <div className="gap-1 flex items-center w-full">
                            <img
                              src="/icons/profile-sm.svg"
                              alt=""
                              className="w-3.5 lg:w-4.5"
                            />
                            <p className="text-secondary-text-color text-14 font-medium w-full flex-grow">
                              PT Shaynakit Meningkatkan Bangsa
                            </p>
                          </div>
                        }
                      />

                      <Link
                        to={
                          "/social-donate/list-social-donate/manage-social-donate"
                        }
                      >
                        <Button variant="black">Manage</Button>
                      </Link>
                    </div>

                    <hr />

                    <div className="flex items-center w-full gap-6 lg:gap-4 lg:grid grid-cols-3 whitespace-nowrap">
                      <div className="w-max flex-grow">
                        <DetailsList
                          titleColor="text-dark-green"
                          icon="/icons/money.svg"
                          title="Rp120.000.000"
                          value="Uang Tunai"
                        />
                      </div>

                      <div className="w-max flex-grow">
                        <DetailsList
                          titleColor="text-blue"
                          icon="/icons/profile-2user-blue-bg.svg"
                          title="15.600 Warga"
                          value="Total Pengajuan"
                        />
                      </div>

                      <div className="w-max flex-grow">
                        <DetailsList
                          titleColor="text-soft-red"
                          icon="/icons/minus-square-bg.svg"
                          title="Tidak Tersedia"
                          value="Status Bansos"
                        />
                      </div>
                    </div>
                  </div>
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
