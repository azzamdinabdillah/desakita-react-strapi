import { ReactNode } from "react";
import Button from "../../../components/Button";
import TitlePage from "../../../components/TitlePage";
import DashboardStatus from "../../../components/DashboardStatus";
import CitizenStatistic from "../../../components/CitizenStatistic";
import CardItemGeneral from "../../../components/CardItemGeneral";
import WrapperElement from "../../../layouts/WrapperElement";
import Title from "../../../components/Title";
import RecentActivity from "../../../components/RecentActivity";
import DetailsList from "../../../components/DetailsList";
import PeopleCard from "../../../components/PeopleCard";

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

function EmptyData({ images, message }: { images: string; message: string }) {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-center h-[200px] lg:h-[384px] justify-center">
      <img src={images} className="w-[40px] lg:w-[52px]" alt="" />
      <p className="text-16 text-secondary-text-color font-medium text-center">
        {message}
      </p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="gap-3.5 flex flex-col">
      <TitlePage title="Rumah Tangga Stats" />
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
        <div className="flex flex-col gap-3.5 md:col-span-3">
          <div className="gap-6 flex flex-col color-gradient-green p-6 lg:p-6 rounded-2xl w-full">
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
            <Button variant="white" customClass="w-full !justify-between">
              Ajukan Bantuan Sosial
              <img src="/icons/add-square-2.svg" alt="" />
            </Button>
          </div>

          <WrapperElement>
            <Title
              subTitle="Event Diikuti"
              title="222 "
              icon="/icons/calendar-2-bg.svg"
            />

            <hr />

            <div className="flex flex-col gap-3 lg:gap-4">
              <Title subTitle="Event Terbaru" />

              {Array.from({ length: 2 }).map((_, index) => (
                <RecentActivity
                  key={index}
                  bottomLeft="Harga Event:"
                  bottomRight="Rp49.000"
                  image="/images/event-2.png"
                  date="Wed, 1 Jan 2025"
                  title="Belajar HTML Dasar Bersama"
                  subTitle={
                    <div className="gap-1 flex items-center">
                      <img
                        src="/icons/profile-2user-red.svg"
                        alt=""
                        className="w-3.5 lg:w-4.5"
                      />
                      <p className="text-[#FA7139] text-14 font-medium">
                        <span className="font-semibold">9210</span> total
                        partisipasi
                      </p>
                    </div>
                  }
                />
              ))}
            </div>
          </WrapperElement>

          <WrapperElement>
            <Title
              subTitle="Pembangunan"
              title="5 Applicants"
              icon="/icons/calendar-2-bg.svg"
            />

            <hr />

            <div className="flex flex-col gap-3 lg:gap-4">
              <Title subTitle="Event Terbaru" />

              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="gap-4 flex-col flex rounded-2xl border border-bg-color p-3 lg:p-4"
                >
                  <div className="top flex justify-between items-center">
                    <img
                      src="/images/image.png"
                      alt="image applicant"
                      className="w-[80px] h-[60px] object-cover rounded-2xl"
                    />
                    <DashboardStatus title="Menunggu" type="Menunggu" />
                  </div>
                  <div>
                    <h2 className="text-16 font-semibold text-black">
                      Pembangunan Jalanan Utama
                    </h2>
                    <p className="text-16 font-medium text-secondary-text-color">
                      Penanggung jawab:{" "}
                      <span className="font-semibold text-dark-green">
                        Uzumaki Asep
                      </span>
                    </p>
                  </div>

                  <hr />

                  <DetailsList
                    titleColor="text-dark-green"
                    icon="/icons/calendar-2-bg.svg"
                    title="3 Jan 2025"
                    value="Tanggal Pelaksanaan"
                  />

                  <hr />

                  <DetailsList
                    titleColor="text-dark-green"
                    icon="/icons/calendar-2-bg.svg"
                    title="24 Hari"
                    value="Waktu Pelaksanaan"
                  />
                </div>
              ))}
            </div>
          </WrapperElement>
        </div>

        <div className="flex flex-col gap-3.5 md:col-span-4">
          <WrapperElement>
            <Title
              subTitle="Anggota Keluarga"
              title="3"
              icon="/icons/profile-bg.svg"
            />

            <hr />

            <div className="gap-5 lg:gap-6 flex flex-col">
              <div className="gap-3.5 flex flex-col">
                <Title subTitle="Istri (1)" />

                <div className="border border-bg-color rounded-2xl flex flex-col gap-4 lg:gap-6 p-3 lg:p-4">
                  <PeopleCard
                    image="/images/user-2.png"
                    name="Andi Alif Baro"
                    job="Mekanik Kendaraan"
                    right={
                      <p className="text-16 font-medium text-black">32 th</p>
                    }
                  />

                  <hr />

                  <div className="flex justify-between items-center flex-wrap gap-1">
                    <div className="flex gap-1 items-center">
                      <img src="/icons/keyboard.svg" alt="" />
                      <p className="text-14 font-medium text-secondary-text-color">
                        Nomor Induk Kependudukan :
                      </p>
                    </div>
                    <p className="text-16 text-black font-medium">
                      27192018210818291
                    </p>
                  </div>
                </div>

                {/* <RecentActivity
                  bottomLeft="Harga Event:"
                  bottomRight={
                    <p className="text-16 text-black font-medium">
                      27192018210818291
                    </p>
                  }
                  image="/images/user-2.png"
                  date="Wed, 1 Jan 2025"
                  right={
                    <p className="text-16 font-medium text-black">32 th</p>
                  }
                  title="Belajar HTML Dasar Bersama"
                  subTitle={
                    <div className="gap-1 flex items-center">
                      <img
                        src="/icons/briefcase.svg"
                        alt=""
                        className="w-3.5 lg:w-4.5"
                      />
                      <p className="text-secondary-text-color text-14 font-medium">
                        Mekanik Kendaraan
                      </p>
                    </div>
                  }
                /> */}
              </div>

              <div className="gap-3.5 flex flex-col">
                <Title subTitle="Anak (2)" />

                {Array.from({ length: 2 }).map((_, index) => (
                  <div
                    key={index}
                    className="border border-bg-color rounded-2xl flex flex-col gap-4 lg:gap-6 p-3 lg:p-4"
                  >
                    <PeopleCard
                      image="/images/user-3.png"
                      name="Karin Icshan"
                      job="Mahasiswi"
                      right={
                        <p className="text-16 font-medium text-black">24 th</p>
                      }
                    />

                    <hr />

                    <div className="flex justify-between items-center flex-wrap gap-1">
                      <div className="flex gap-1 items-center">
                        <img src="/icons/keyboard.svg" alt="" />
                        <p className="text-14 font-medium text-secondary-text-color">
                          Nomor Induk Kependudukan :
                        </p>
                      </div>
                      <p className="text-16 text-black font-medium">
                        27192018210818291
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="green">Lihat Semua</Button>
            </div>
          </WrapperElement>

          <WrapperElement>
            <Title
              subTitle="Bantuan Sosial"
              title="12 Pengajuan"
              icon="/icons/note-bg.svg"
            />

            <hr />

            <div className="flex flex-col gap-3 lg:gap-4">
              <Title subTitle="Bansos Terbaru" />

              {Array.from({ length: 2 }).map((_, index) => (
                <RecentActivity
                  key={index}
                  bottomLeft="Nominal Pengajuan:"
                  bottomRight="Rp2.500.000"
                  image="/icons/money.svg"
                  date="Tue, 25 Dec 2024"
                  mainTitle="Bantuan Untuk Rakyat Kurang Mampu"
                  title="Rp120.000.000"
                  subTitle="Nominal Pengajuan"
                  right={
                    <DashboardStatus type={"Menunggu"} title={"Menunggu"} />
                  }
                />
              ))}
            </div>
          </WrapperElement>

          <div className="gap-6 flex flex-col color-gradient-green p-6 lg:p-6 rounded-2xl w-full">
            <div className="flex gap-4 items-center">
              <img src="/icons/statistik-bg.svg" alt="" className="w-fit" />
              <div className="flex flex-col gap-1">
                <p className="text-xs lg:text-sm text-yellow font-medium">
                  — Unduh Rumah Tangga Stat
                </p>
                <h1 className="text-lg lg:text-2xl text-white font-semibold">
                  Statistik Rumah Tangga
                </h1>
              </div>
            </div>
            <Button variant="white" customClass="w-full !justify-between">
              Download Laporan
              <img src="/icons/receive-square.svg" alt="" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
