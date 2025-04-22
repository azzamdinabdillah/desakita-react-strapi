import { ReactNode } from "react";
import Button from "../../components/Button";
import TitlePage from "../../components/TitlePage";
import DashboardStatus from "../../components/DashboardStatus";
import CitizenStatistic from "../../components/CitizenStatistic";

const stats = [
  {
    title: "Jumlah Penduduk",
    value: "243.000",
    icons: "/icons/stat-jumlah-penduduk.svg",
    trendUp: true,
    trendValue: "+12%",
  },
  {
    title: "Pembangunan",
    value: "42.000",
    icons: "/icons/stat-pembangunan.svg",
    trendUp: true,
    trendValue: "+12%",
  },
  {
    title: "Kepala Rumah",
    value: "9.250",
    icons: "/icons/stat-kepala-rumah.svg",
    trendUp: true,
    trendValue: "+12%",
  },
  {
    title: "Total Events",
    value: "12",
    icons: "/icons/stat-total-event.svg",
    trendUp: true,
    trendValue: "+12%",
  },
];

const lastBansos: {
  type: "money" | "goods" | "other";
  value: string;
  sender: string;
  status: "Diterima" | "Ditolak" | "Menunggu";
}[] = [
  {
    type: "money",
    value: "Rp362.500.000",
    sender: "Azam Din Abdillah",
    status: "Menunggu",
  },
  {
    type: "goods",
    value: "Beras 10kg",
    sender: "Azam Din Abdillah",
    status: "Diterima",
  },
  {
    type: "money",
    value: "Rp52.500.000",
    sender: "Azam Din Abdillah",
    status: "Ditolak",
  },
  {
    type: "money",
    value: "Rp52.500.000",
    sender: "Azam Din Abdillah",
    status: "Diterima",
  },
];

const applicants: {
  status: "Diterima" | "Ditolak" | "Menunggu";
  images: string;
  name: string;
  userImage: string;
  job: string;
}[] = [
  {
    images: "/images/applicant.png",
    name: "Azam Din Abdillah",
    userImage: "/images/user-applicant.png",
    job: "Melamar pembangunan Jalanan Utama Desa",
    status: "Menunggu",
  },
  {
    images: "/images/applicant-2.png",
    name: "Surti Jasmine",
    userImage: "/images/user-applicant.png",
    job: "Melamar pembangunan Balai Desa",
    status: "Diterima",
  },
  {
    images: "/images/applicant-3.png",
    name: "Masayoshi",
    userImage: "/images/user-applicant.png",
    job: "Melamar pembangunan Puskemas Desa",
    status: "Ditolak",
  },
];

const citizens: {
  color: string;
  ageRange: string;
  total: number;
  gender: string;
}[] = [
  {
    color: "#34613A",
    ageRange: "32-36",
    total: 114.21,
    gender: "Pria",
  },
  {
    color: "#8ebd55",
    ageRange: "26-31",
    total: 97.2,
    gender: "Wanita",
  },
  {
    color: "#FA7139",
    ageRange: "6-12",
    total: 24.3,
    gender: "Anak-anak",
  },
  {
    color: "#FBAD48",
    ageRange: "0-5",
    total: 7.29,
    gender: "Balita",
  },
];

function StatsDashboard({
  stat,
  bodyStat,
}: {
  stat: (typeof stats)[number];
  bodyStat?: ReactNode | null;
}) {
  return (
    <div className="gap-4 lg:gap-6 flex flex-col flex-grow bg-white rounded-3xl p-6">
      <div className="flex flex-col flex-grow gap-3">
        <div className="top flex justify-between items-center gap-3">
          <h5 className="text-16 font-medium text-secondary-text-color">
            {stat.title}
          </h5>
          <img src={stat.icons} alt="" />
        </div>
        <div className="gap-1.5 flex flex-col">
          <h2 className="text-2xl lg:text-[32px] font-semibold text-black">
            {stat.value}
          </h2>
          <p className="text-14 font-medium text-secondary-text-color flex gap-1 items-center">
            <span className="text-dark-green flex gap-1 items-center">
              <img
                src={
                  stat.trendUp ? "/icons/trend-up.svg" : "/icons/trend-down.svg"
                }
                alt=""
                className="inline"
              />
              {stat.trendValue}
            </span>
            dari bulan sebelumnya
          </p>
        </div>
      </div>
      {bodyStat ? <hr /> : ""}
      {bodyStat ? bodyStat : ""}
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="gap-3.5 flex flex-col">
      <TitlePage title="Desa Statistics" />

      <div className="flex flex-col gap-3.5 lg:flex-row items-start">
        <div className="gap-6 flex flex-col color-gradient-green p-6 lg:p-6 rounded-2xl lg:max-w-[380px] w-full">
          <img src="/icons/picture.svg" alt="" className="w-fit" />
          <div className="flex flex-col gap-3">
            <p className="text-xs lg:text-sm text-yellow font-medium">
              — Bantuan Sosial
            </p>
            <h1 className="text-lg lg:text-2xl text-white font-semibold">
              Dari Desa untuk Warga ❤️
            </h1>
            <p className="text-sm lg:text-base text-white leading-6 font-normal">
              Wujudkan kesejahteraan desa dengan bantuan sosial yang tepat
              sasaran.
            </p>
          </div>
          <Button variant="white" customClass="w-full justify-between">
            Bikin Bantuan Sosial
            <img src="/icons/add-square-2.svg" alt="" />
          </Button>
        </div>

        <div className="gap-3.5 flex flex-wrap w-full">
          {stats.map((stat, index) => (
            <StatsDashboard key={index} stat={stat} bodyStat={null} />
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-7 gap-3.5">
        <div className="lg:col-span-3">
          <StatsDashboard
            stat={{
              title: "Bantuan Sosial",
              icons: "/icons/stat-bansos.svg",
              value: "192",
              trendUp: true,
              trendValue: "+12%",
            }}
            bodyStat={
              <div className="gap-4 flex flex-col w-full">
                <h1 className="text-black text-20 font-semibold">
                  Bansos Terakhir
                </h1>

                <div className="gap-4 flex flex-col">
                  {lastBansos.map((bansos, index) => (
                    <>
                      <div
                        key={index}
                        className="flex gap-2 lg:gap-3 items-center"
                      >
                        <img
                          className="w-[50px] lg:w-[72px]"
                          src={
                            bansos.type === "money"
                              ? "/icons/stat-bansos-uang.svg"
                              : bansos.type === "goods"
                              ? "/icons/stat-bansos-barang.svg"
                              : ""
                          }
                          alt=""
                        />
                        <div className="flex flex-col gap-1 lg:gap-2 overflow-hidden flex-grow">
                          <h2 className="text-black text-20 font-semibold">
                            {bansos.value}
                          </h2>
                          <div className="flex items-center gap-[2px] text-xs lg:text-base text-secondary-text-color font-medium">
                            <img
                              src="/icons/profile.svg"
                              className="inline w-[15px] lg:w-[18px]"
                              alt=""
                            />
                            <span className="max-w-[150px] lg:max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
                              Diberikan oleh {bansos.sender}
                            </span>
                          </div>
                        </div>
                        <div className="width-fit">
                          <DashboardStatus
                            type={bansos.status}
                            title={bansos.status}
                          />
                        </div>
                      </div>

                      {index !== lastBansos.length - 1 && <hr />}
                    </>
                  ))}
                </div>
              </div>
            }
          />
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 bg-white rounded-3xl p-6 lg:col-span-4">
          <div className="flex flex-col gap-4">
            <div className="top flex justify-between gap-4 items-center">
              <img
                className="w-[45px] lg:w-[56px]"
                src="/icons/arrow-left.svg"
                alt=""
              />
              <h1 className="text-black text-20 font-semibold">
                December 2024
              </h1>
              <img
                className="w-[45px] lg:w-[56px]"
                src="/icons/arrow-right.svg"
                alt=""
              />
            </div>

            <div className="flex gap-4 flex-wrap">
              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className="gap-3 flex flex-col items-center flex-grow"
                >
                  <div className="rounded-full w-[46px] h-[46px] text-16 text-dark-green font-medium bg-foreshadow flex justify-center items-center">
                    28
                  </div>
                  <p className="text-14 font-medium text-secondary-text-color">
                    Sen
                  </p>
                </div>
              ))}
            </div>
          </div>

          <hr />
          <div className="flex flex-col gap-4">
            <div className="top flex justify-between gap-4 items-center">
              <img
                className="w-[20px] lg:w-[24px]"
                src="/icons/arrow-left-plain.svg"
                alt=""
              />
              <h1 className="text-secondary-text-color text-16 font-medium">
                Upcoming Events (2)
              </h1>
              <img
                className="w-[20px] lg:w-[24px]"
                src="/icons/arrow-right-plain.svg"
                alt=""
              />
            </div>

            <div className="relative">
              <img
                src="/images/event.png"
                alt=""
                className="h-[280px] lg:h-[365px] w-full object-cover rounded-2xl"
              />
              <div className="gap-1 lg:gap-1.5 flex flex-col absolute lg:bottom-4 bottom-3 left-1/2 -translate-x-1/2 border bg-white/[0.02] backdrop-blur-[26px] border-white/[0.02] w-[93%] p-3 lg:p-4 rounded-2xl">
                <h3 className="text-20 text-white font-semibold">
                  Belajar Coding Bersama
                </h3>
                <div className="flex items-center gap-1">
                  <img src="/icons/clock.svg" alt="" />
                  <span className="text-20 text-white font-semibold">
                    11:30 WIB
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="gap-3.5 flex flex-col flex-grow w-full">
          <div>
            <StatsDashboard
              stat={{
                title: "Total Applicants",
                icons: "/icons/stat-total-applicant.svg",
                value: "1.200",
                trendUp: true,
                trendValue: "+12%",
              }}
              bodyStat={
                <div className="gap-4 flex flex-col">
                  <h1 className="text-black text-20 font-semibold">
                    Applicant Terakhir
                  </h1>

                  <div className="gap-4 flex flex-col">
                    {applicants.map((appliccant, index) => (
                      <>
                        <div
                          key={index}
                          className="flex gap-2 lg:gap-3 items-center"
                        >
                          <img
                            className="w-[50px] lg:w-[72px] rounded-2xl"
                            src={appliccant.images}
                            alt=""
                          />
                          <div className="flex flex-col gap-1 lg:gap-2 overflow-hidden flex-grow">
                            <div className="flex items-center gap-1">
                              <div className="bg-foreshadow rounded-full w-6 lg:w-8 overflow-hidden">
                                <img
                                  src={appliccant.userImage}
                                  alt=""
                                  className="w-full h-full"
                                />
                              </div>
                              <h2 className="text-black text-[15px] lg:text-[18px] font-semibold whitespace-nowrap text-ellipsis overflow-hidden">
                                {appliccant.name}
                              </h2>
                            </div>
                            <div className="text-xs max-w-[150px] lg:max-w-full lg:text-base text-secondary-text-color font-medium whitespace-nowrap text-ellipsis overflow-hidden">
                              {appliccant.job}
                            </div>
                          </div>
                          <div className="width-fit">
                            <DashboardStatus
                              type={appliccant.status}
                              title={appliccant.status}
                            />
                          </div>
                        </div>

                        {index !== applicants.length - 1 && <hr />}
                      </>
                    ))}
                  </div>
                </div>
              }
            />
          </div>

          <div className="gap-6 flex justify-between flex-wrap color-gradient-green p-6 lg:p-6 rounded-2xl w-full">
            <div className="flex flex-col gap-1 lg:gap-3">
              <p className="text-xs lg:text-sm text-yellow font-medium">
                — Unduh Data Desa
              </p>
              <h1 className="text-lg lg:text-2xl text-white font-semibold">
                Data Desa Terkini
              </h1>
            </div>
            <div className="">
              <Button
                variant="white"
                customClass="w-full justify-between flex-1"
              >
                Download Laporan
                <img src="/icons/receive-square.svg" alt="" />
              </Button>
            </div>
          </div>
        </div>

        <div className="chart w-full lg:max-w-[360px]">
          <div className="gap-4 lg:gap-6 flex flex-col flex-grow bg-white rounded-3xl p-6">
            <div className="flex flex-col flex-grow gap-3">
              <div className="top flex justify-between items-center gap-3">
                <h5 className="text-16 font-medium text-secondary-text-color">
                  Statistics Penduduk
                </h5>
                <img src="/icons/stat-citizen.svg" alt="" />
              </div>
            </div>

            <hr />

            <CitizenStatistic />

            <div className="flex flex-col gap-3 lg:gap-4">
              {citizens.map((citizen, index) => (
                <>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-[2px] lg:gap-1">
                      <div className="flex gap-1 items-center">
                        <div
                          style={{
                            backgroundColor: `${citizen.color}`,
                          }}
                          className={`w-[12px] h-[12px] rounded-full`}
                        ></div>
                        <span className="text-black text-16 font-medium">
                          {citizen.gender}
                        </span>
                      </div>
                      <p className="text-14 text-secondary-text-color font-medium">
                        Rentang usia: {citizen.ageRange} tahun
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-16 text-black font-medium">
                      {citizen.total}
                      <img src="/icons/user.svg" alt="" className="w-[18px]" />
                    </div>
                  </div>

                  {index !== citizens.length - 1 && <hr />}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
