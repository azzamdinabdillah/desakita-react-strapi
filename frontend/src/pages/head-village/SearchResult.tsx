import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Title from "../../components/Title";
import { Link } from "react-router";
import Button from "../../components/Button";
import DetailsList from "../../components/DetailsList";
import CardItemGeneral from "../../components/CardItemGeneral";
import UserImage from "../../components/UserImage";
import DashboardStatus from "../../components/DashboardStatus";

export default function SearchResult() {
  return (
    <div>
      <Tabs className="flex flex-col gap-6 lg:gap-7.5">
        <div className="top flex flex-col gap-4 lg:gap-6">
          <Title title="Search Result: Malik" />
          <TabList className="flex gap-1 p-1 items-center bg-white rounded-xl overflow-x-auto">
            {[
              "Kepala Rumah",
              "List Bansos",
              "Pengajuan Bansos",
              "Pembangunan",
              "Event Desa",
            ].map((tab, index) => (
              <Tab
                key={index}
                selectedClassName="!bg-dark-green text-white"
                className="text-16 cursor-pointer hover:bg-dark-green hover:text-white transition-all w-max whitespace-nowrap lg:w-full border-none outline-none lg:min-w-[187px] flex justify-center items-center lg:flex-grow text-secondary-text-color font-medium px-5 py-3.5 lg:px-3 lg:py-3.5 bg-foreshadow rounded-xl"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </div>

        <div className="flex flex-col gap-4 lg:gap-[10px]">
          <h2 className="text-xl lg:text-2xl text-black font-semibold">
            Result based on your search (30)
          </h2>

          <TabPanel className="tabpanel">
            <div className="overflow-x-auto w-full">
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
          </TabPanel>

          <TabPanel className="tabpanel">
            <div className="overflow-x-auto w-full">
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
          </TabPanel>

          <TabPanel className="tabpanel">
            <div className="overflow-x-auto w-full">
              <table className="border-separate border-spacing-y-[14px] table-auto w-full">
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="bg-white w-full">
                    <td>
                      <div className="flex gap-4 lg:gap-6 flex-col w-full">
                        <div className="flex justify-between items-center">
                          <div className="flex text-14 font-medium text-secondary-text-color items-center gap-1">
                            <img src="/icons/calendar-2.svg" alt="" />
                            <p>Tue, 09 Jan 2025 </p>
                          </div>

                          <DashboardStatus title="Menunggu" type="Menunggu" />
                        </div>

                        <hr />
                        <div className="flex justify-between items-center flex-wrap gap-4">
                          <CardItemGeneral
                            imgSize="w-[70px] lg:w-[100px] h-[60px] lg:h-[80px]"
                            image="/images/bansos-1.png"
                            title="Peduli Sesama: Penyaluran Beras untuk Warga Desa"
                            subTitleMaxWidth="max-w-[100%]"
                            titleMaxWidth="max-w-[200px]"
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

                          <DetailsList
                            customClass="flex-row-reverse"
                            icon="/icons/money.svg"
                            title="Rp120.000.000"
                            value="Uang Tunai"
                          />
                        </div>

                        <hr />

                        <div className="flex items-center w-full gap-6 lg:gap-4 lg:grid grid-cols-3 whitespace-nowrap">
                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-black"
                              userImage={
                                <UserImage
                                  image="/images/user-1.png"
                                  widthHeight="w-[45px] lg:w-[54px]"
                                />
                              }
                              title="Feri Prio Utomo"
                              value={
                                <div className="gap-1 flex items-center">
                                  <img
                                    src="/icons/briefcase.svg"
                                    alt=""
                                    className="w-[14px] lg:w-[18px]"
                                  />
                                  <p className="text-secondary-text-color text-14 font-medium w-full flex-grow">
                                    Tukang Bangunan
                                  </p>
                                </div>
                              }
                            />
                          </div>

                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-dark-green"
                              icon="/icons/receive-square-2.svg"
                              title="Beras 20 Ton"
                              value="Nominal Pengajuan"
                            />
                          </div>

                          <div className="w-max lg:w-full flex-grow">
                            <div className="gap-3 flex justify-end">
                              <Button
                                variant="grayTextRed"
                                customClass="lg:w-[35%]"
                              >
                                Tolak
                              </Button>
                              <Link
                                className="lg:w-[35%]"
                                to={
                                  "/social-donate/applicant-social-donate/manage-applicant-social-donate"
                                }
                              >
                                <Button variant="green" customClass="w-full">
                                  Setuju
                                </Button>
                              </Link>
                            </div>
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
          </TabPanel>

          <TabPanel className="tabpanel">
            <div className="overflow-x-auto w-full">
              <table className="border-separate border-spacing-y-[14px] table-auto w-full">
                {Array.from({ length: 5 }).map((_, index) => (
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
                                  src="/icons/user-square.svg"
                                  alt=""
                                  className="w-3.5 lg:w-4.5"
                                />
                                <p className="text-secondary-text-color text-14 font-medium w-full flex-grow">
                                  Penanggung Jawab :{" "}
                                  <span className="text-dark-green">
                                    Uciha Asep
                                  </span>
                                </p>
                              </div>
                            }
                          />

                          <Link
                            to={
                              "/village-schedule/village-development-schedule/manage-village-development-schedule"
                            }
                          >
                            <Button variant="black">Manage</Button>
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
          </TabPanel>

          <TabPanel className="tabpanel">
            <div className="overflow-x-auto w-full">
              <table className="border-separate border-spacing-y-[14px] table-auto w-full">
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="bg-white w-full">
                    <td>
                      <div className="flex gap-4 lg:gap-6 flex-col w-full">
                        <div className="flex justify-between items-center flex-wrap gap-4">
                          <CardItemGeneral
                            imgSize="w-[70px] lg:w-[100px] h-[60px] lg:h-[80px]"
                            image="/images/event.png"
                            title="Belajar HTML Dasar Bersama"
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
                                  <span className="text-dark-green">Open</span>
                                </p>
                              </div>
                            }
                          />

                          <Link
                            to={
                              "/village-schedule/village-event-schedule/manage-village-event-schedule"
                            }
                          >
                            <Button variant="black">Manage</Button>
                          </Link>
                        </div>

                        <hr />

                        <div className="flex items-center w-full gap-6 lg:gap-4 lg:grid grid-cols-3 whitespace-nowrap">
                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-soft-red"
                              icon="/icons/ticket-bg.svg"
                              title="Rp499.000"
                              value="Harga Event"
                            />
                          </div>

                          <div className="w-max flex-grow">
                            <DetailsList
                              titleColor="text-blue"
                              icon="/icons/profile-2user-blue-bg.svg"
                              title="9.250 Warga"
                              value="Total Partisipan"
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
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}
