import TitlePage from "../../../../components/TitlePage";
import Button from "../../../../components/Button";
import WrapperElement from "../../../../layouts/WrapperElement";
import DashboardStatus from "../../../../components/DashboardStatus";
import DetailsList from "../../../../components/DetailsList";
import Title from "../../../../components/Title";
import PeopleCard from "../../../../components/PeopleCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import Modal from "../../../../components/Modal";
import RecentActivity from "../../../../components/RecentActivity";

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

export default function ManageHeadHouse() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <Modal
        confirmButtonElement={
          <Button variant="pink" customClass="flex-grow">
            <img src="/icons/trash.svg" alt="" />
            Iya Hapus
          </Button>
        }
        message="Tindakan ini permanen dan tidak bisa dibatalkan!"
        header="Hapus Kepala Keluarga?"
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      />
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
          <Button onClick={() => setIsOpenModal(true)} variant="pink">
            Hapus Data
            <img className="w-5 lg:w-6" src="/icons/trash.svg" alt="" />
          </Button>
        }
      />

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-5 items-start gap-3.5">
        <div className="flex flex-col gap-3.5 lg:flex-grow md:col-span-1 lg:col-span-3 w-full">
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
                  key={index}
                  icon={data.icon}
                  title={data.title}
                  value={data.value}
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

        <div className="flex flex-col gap-3.5 md:col-span-1 lg:col-span-2 w-full">
          <WrapperElement>
            <Title subTitle="Aktivitas Terbaru" />

            <Tabs className="">
              <TabList className="flex flex-wrap gap-3 items-center">
                {["Bansos", "Events", "Applicants"].map((tab, index) => (
                  <Tab
                    key={index}
                    selectedClassName="bg-black text-white"
                    className="text-16 lg:flex-grow cursor-pointer hover:bg-black hover:text-white transition-all text-secondary-text-color font-medium py-2.5 px-5 flex justify-center items-center lg:py-2.5 lg:px-4.5 rounded-full border border-bg-color"
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
              <TabPanel className="gap-4 flex flex-col lg:gap-6">
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
                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="gap-4 flex-col flex rounded-2xl border border-bg-color p-3 lg:p-4">
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

                  <div className="gap-4 flex-col flex rounded-2xl border border-bg-color p-3 lg:p-4">
                    <div className="top flex justify-between items-center">
                      <img
                        src="/images/image.png"
                        alt="image applicant"
                        className="w-[80px] h-[60px] object-cover rounded-2xl"
                      />
                      <DashboardStatus title="Ditolak" type="Ditolak" />
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
                </div>
              </TabPanel>
            </Tabs>
          </WrapperElement>
        </div>
      </div>
    </div>
  );
}
