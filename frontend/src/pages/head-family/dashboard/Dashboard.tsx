import Button from "../../../components/Button";
import TitlePage from "../../../components/TitlePage";
import DashboardStatus from "../../../components/DashboardStatus";
import WrapperElement from "../../../layouts/WrapperElement";
import Title from "../../../components/Title";
import RecentActivity from "../../../components/RecentActivity";
import DetailsList from "../../../components/DetailsList";
import PeopleCard from "../../../components/PeopleCard";

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
