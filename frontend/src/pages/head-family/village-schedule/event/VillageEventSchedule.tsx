import { Link } from "react-router";
import TitlePage from "../../../../components/TitlePage";
import Button from "../../../../components/Button";
import Inputs from "../../../../components/Inputs";
import CardItemGeneral from "../../../../components/CardItemGeneral";
import DetailsList from "../../../../components/DetailsList";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Pagination from "../../../../components/Pagination";

export default function VillageEventSchedule() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage title="Event Desa" />

      <Tabs className="flex flex-col gap-4 lg:gap-6">
        <TabList className="flex gap-1 p-1 items-center bg-foreshadow overflow-x-auto w-full">
          {["Semua Event", "Sudah Diikuti"].map((tab, index) => (
            <Tab
              key={index}
              selectedClassName="!bg-dark-green text-white"
              className="text-16 cursor-pointer hover:bg-dark-green hover:text-white transition-all w-max whitespace-nowrap md:w-full border-none outline-none flex justify-center items-center lg:flex-grow text-secondary-text-color font-medium px-5 py-3.5 lg:px-3 lg:py-3.5 bg-foreshadow rounded-full"
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <div className="w-full">
          <div className="top flex flex-wrap justify-between items-center gap-3">
            <div className="md:max-w-[370px] w-full">
              <Inputs
                type="text"
                isIconLeft={true}
                icons="/icons/calendar-search.svg"
                placeholder="Cari nama event desa"
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
          <div className="overflow-x-auto w-full">
            <TabPanel>
              <table className="border-separate border-spacing-y-[14px] table-auto w-full">
                <tbody>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <tr key={index} className="bg-white w-full">
                      <td>
                        <div className="flex gap-4 lg:gap-6 flex-col w-full">
                          <div className="flex justify-between items-center flex-wrap gap-4">
                            <CardItemGeneral
                              imgSize="w-[70px] lg:w-[100px] h-[60px] lg:h-[80px]"
                              image="/images/event-3.png"
                              title="Pembangunan Jalanan Utama"
                              subTitleMaxWidth="max-w-[100%]"
                              titleMaxWidth="max-w-[100%]"
                              subTitle={
                                <div className="gap-1 flex items-center w-full">
                                  <img
                                    src="/icons/ticket.svg"
                                    alt=""
                                    className="w-3.5 lg:w-4.5"
                                  />
                                  <p className="text-secondary-text-color text-14 font-medium w-full flex-grow">
                                    Registration: :{" "}
                                    <span className="text-dark-green">
                                      Open
                                    </span>
                                  </p>
                                </div>
                              }
                            />

                            <Link
                              to={
                                "/head-family/village-schedule/village-eventmony-schedule/details-village-event-schedule"
                              }
                            >
                              <Button variant="black">Lihat Detail</Button>
                            </Link>
                          </div>

                          <hr />

                          <div className="flex items-center w-full gap-6 lg:gap-4 lg:grid grid-cols-3 whitespace-nowrap">
                            <div className="w-max flex-grow">
                              <DetailsList
                                titleColor="text-soft-red"
                                icon="/icons/wallet-3.svg"
                                title="Rp499.000"
                                value="Dana Pembangunan"
                              />
                            </div>

                            <div className="w-max flex-grow">
                              <DetailsList
                                titleColor="text-blue"
                                icon="/icons/profile-2user-blue-bg.svg"
                                title="9.250 Warga"
                                value="Total Pelamar"
                              />
                            </div>

                            <div className="w-max flex-grow">
                              <DetailsList
                                titleColor="text-dark-green"
                                icon="/icons/calendar-2-bg-square.svg"
                                title="Mon, 24 Feb 2025"
                                value="Tanggal Pelaksanaan"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Pagination />
            </TabPanel>

            <TabPanel>
              <table className="border-separate border-spacing-y-[14px] table-auto w-full">
                <tbody>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <tr key={index} className="bg-white w-full">
                      <td>
                        <div className="flex gap-4 lg:gap-6 flex-col w-full">
                          <div className="flex justify-between items-center flex-wrap gap-4">
                            <CardItemGeneral
                              imgSize="w-[70px] lg:w-[100px] h-[60px] lg:h-[80px]"
                              image="/images/event-4.png"
                              title="Pembangunan Puskesmas Desa"
                              subTitleMaxWidth="max-w-[100%]"
                              titleMaxWidth="max-w-[100%]"
                              subTitle={
                                <div className="gap-1 flex items-center w-full">
                                  <img
                                    src="/icons/ticket.svg"
                                    alt=""
                                    className="w-3.5 lg:w-4.5"
                                  />
                                  <p className="text-secondary-text-color text-14 font-medium w-full flex-grow">
                                    Registration: :{" "}
                                    <span className="text-dark-green">
                                      Open
                                    </span>
                                  </p>
                                </div>
                              }
                            />

                            <Link
                              to={
                                "/head-family/village-schedule/village-eventmony-schedule/details-village-event-schedule"
                              }
                            >
                              <Button variant="black">Lihat Detail</Button>
                            </Link>
                          </div>

                          <hr />

                          <div className="flex items-center w-full gap-6 lg:gap-4 lg:grid grid-cols-3 whitespace-nowrap">
                            <div className="w-max flex-grow">
                              <DetailsList
                                titleColor="text-soft-red"
                                icon="/icons/wallet-3.svg"
                                title="Rp499.000"
                                value="Dana Pembangunan"
                              />
                            </div>

                            <div className="w-max flex-grow">
                              <DetailsList
                                titleColor="text-blue"
                                icon="/icons/profile-2user-blue-bg.svg"
                                title="9.250 Warga"
                                value="Total Pelamar"
                              />
                            </div>

                            <div className="w-max flex-grow">
                              <DetailsList
                                titleColor="text-dark-green"
                                icon="/icons/calendar-2-bg-square.svg"
                                title="Mon, 24 Feb 2025"
                                value="Tanggal Pelaksanaan"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination />
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
