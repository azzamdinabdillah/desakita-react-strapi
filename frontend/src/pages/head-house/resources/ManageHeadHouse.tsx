import { Link } from "react-router";
import TitlePage from "../../../components/TitlePage";
import Button from "../../../components/Button";
import WrapperElement from "../../../layouts/WrapperElement";
import DashboardStatus from "../../../components/DashboardStatus";
import DetailsList from "../../../components/DetailsList";
import Title from "../../../components/Title";
import PeopleCard from "../../../components/PeopleCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { ReactNode } from "react";
import CardItemGeneral from "../../../components/CardItemGeneral";

const headDetail = [
  {
    title: "20051005922001005",
    value: "Nomor Induk Kependudukan",
    icon: "/icons/detail-list-nik.svg",
  },
  {
    title: "42 Tahun",
    value: "Umur Kepala Rumah",
    icon: "/icons/detail-list-umur.svg",
  },
  {
    title: "Pria",
    value: "Jenis Kelamin",
    icon: "/icons/detail-list-gender.svg",
  },
  {
    title: "fransutomo@desadigital.com",
    value: "Email Address",
    icon: "/icons/detail-list-email.svg",
  },
  {
    title: "083212349000",
    value: "Nomor Hp",
    icon: "/icons/detail-list-nomorhp.svg",
  },
];

function RecentActivity({
  date,
  mainTitle,
  title,
  subTitle,
  right,
  image,
  bottomLeft,
  bottomRight,
}: {
  date: string;
  mainTitle?: string;
  title: string;
  subTitle: string | ReactNode;
  right?: ReactNode;
  image: string;
  bottomLeft?: string;
  bottomRight?: string;
}) {
  return (
    <div className="gap-3 lg:gap-4 flex-col flex rounded-2xl border border-bg-color p-3 lg:p-4">
      <div className="flex text-14 font-medium text-secondary-text-color justify-between items-center">
        <p>{date}</p>
        <img src="/icons/calendar-2.svg" alt="" />
      </div>

      <hr />

      <h2 className="text-18 font-semibold text-black">{mainTitle}</h2>

      <CardItemGeneral
        sizeVariant="small"
        image={image}
        title={title}
        subTitle={subTitle}
        right={right}
      />

      <hr />

      <div className="flex justify-between items-center">
        <p className="text-14 font-medium text-secondary-text-color">
          {bottomLeft}
        </p>
        <p className="text-16 font-medium text-soft-red">{bottomRight}</p>
      </div>
    </div>
  );
}

export default function ManageHeadHouse() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Manage Kepala Rumah"
        subTitle={
          <div className="flex items-center gap-1">
            Kepala Rumah
            <span className="text-dark-green font-medium">
              / Manage Kepala Rumah
            </span>
          </div>
        }
        leftElement={
          <Link to={"/village-profile/create-village-profile"}>
            <Button variant="pink">
              Hapus Data
              <img className="w-5 lg:w-6" src="/icons/trash.svg" alt="" />
            </Button>
          </Link>
        }
      />

      <div className="flex flex-col lg:flex-row items-start gap-3.5">
        <div className="flex flex-col gap-3.5 lg:flex-grow">
          <WrapperElement>
            <Title subTitle="Kepala Rumah" />

            <PeopleCard
              image="/images/user-2.png"
              name="Andi Alif Baro"
              job="Mekanik Kendaraan"
              right={<DashboardStatus title="Menikah" type="softGreen" />}
            />

            <hr />

            {headDetail.map((data, index) => (
              <>
                <DetailsList
                  icon={data.icon}
                  title={data.value}
                  value={data.title}
                />

                {index !== headDetail.length - 1 && <hr />}
              </>
            ))}
          </WrapperElement>

          <WrapperElement>
            <Title
              subTitle="Kepala Rumah"
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
            </div>
          </WrapperElement>
        </div>

        <div className="flex flex-col gap-3.5 lg:max-w-[438px] w-full">
          <WrapperElement>
            <Title subTitle="Aktivitas Terbaru" />

            <Tabs className="">
              <TabList className="flex flex-wrap gap-3 items-center">
                {["Bansos", "Events", "Applicants"].map((tab, index) => (
                  <Tab
                    key={index}
                    selectedClassName="bg-black text-white"
                    className="text-16 lg:flex-grow text-secondary-text-color font-medium py-2.5 px-5 flex justify-center items-center lg:py-2.5 lg:px-4.5 rounded-full border border-bg-color"
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>

              <TabPanel className="gap-4 flex flex-col lg:gap-6 mt-4 lg:mt-6">
                <RecentActivity
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
                <RecentActivity
                  bottomLeft="Nominal Pengajuan:"
                  bottomRight="Beras 2kg"
                  image="/icons/bag-2.svg"
                  date="Tue, 31 Dec 2024"
                  mainTitle="Bantuan Pangan Sehari-hari"
                  title="Beras 200 Ton"
                  subTitle="Bahan Pokok"
                  right={
                    <DashboardStatus type={"Diterima"} title={"Diterima"} />
                  }
                />
                <RecentActivity
                  bottomLeft="Nominal Pengajuan:"
                  bottomRight="Susu 200ml"
                  image="/icons/bag-2.svg"
                  date="Tue, 12 Dec 2024"
                  mainTitle="Bantuan Untuk anak kurang gizi"
                  title="Susu 200 Liter"
                  subTitle="Bahan Pokok"
                  right={<DashboardStatus type={"Ditolak"} title={"Ditolak"} />}
                />
              </TabPanel>
              <TabPanel className="gap-4 flex flex-col lg:gap-6 mt-4 lg:mt-6">
                <RecentActivity
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
                <RecentActivity
                  bottomLeft="Harga Event:"
                  bottomRight="Rp49.000"
                  image="/images/event-2.png"
                  date="Fri, 3 Jan 2025"
                  title="Dari Desa ke dunia digital: workshop"
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
                <RecentActivity
                  bottomLeft="Harga Event:"
                  bottomRight="Rp49.000"
                  image="/images/event-2.png"
                  date="Sun, 21 Dec 2024"
                  title="Mengenal AI: Menjelajah dunia Kecerdasan"
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
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
            </Tabs>
          </WrapperElement>
        </div>
      </div>
    </div>
  );
}
