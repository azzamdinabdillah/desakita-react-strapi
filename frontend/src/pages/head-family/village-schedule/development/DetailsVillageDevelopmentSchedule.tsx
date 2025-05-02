import { useState } from "react";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import TitlePage from "../../../../components/TitlePage";
import WrapperElement from "../../../../layouts/WrapperElement";
import Title from "../../../../components/Title";
import DashboardStatus from "../../../../components/DashboardStatus";
import DetailsList from "../../../../components/DetailsList";
import PeopleCard, {
  PeopleCardComplete,
} from "../../../../components/PeopleCard";

export default function DetailsVillageDevelopmentSchedule() {
  const [openModalChooseApplicant, setOpenModalChooseApplicant] =
    useState(false);
  const [applicant, setApplicant] = useState<{
    name: string;
    job: string;
    image: string;
  } | null>(null);

  function handleSetApplicant({
    name,
    job,
    image,
  }: {
    name: string;
    job: string;
    image: string;
  }) {
    setApplicant({
      name: name,
      job: job,
      image: image,
    });

    setOpenModalChooseApplicant(false);
  }

  return (
    <div className="flex flex-col gap-6">
      <Modal
        subHeader="Pilih salah satu anggota keluarga"
        maxWidth="lg:max-w-[760px] w-full"
        body={
          <>
            <div className="flex gap-4 flex-col">
              <div className="flex flex-col gap-3">
                <Title subTitle="Suami (You)" />

                <label
                  className="label-radio input-radio-active-border rounded-2xl overflow-hidden"
                  onClick={() =>
                    handleSetApplicant({
                      name: "Azam Din Abdillah",
                      job: "Mahasiswa",
                      image: "/images/user-3.png",
                    })
                  }
                  htmlFor="select-husband"
                >
                  <PeopleCardComplete
                    image="/images/user-3.png"
                    name="Azam Din Abdillah"
                    job="Mahasiswa"
                    nik="2005100592201005"
                    age={42}
                    right={
                      <input
                        type="radio"
                        name="select-applicant"
                        className="input-radio-choose-gender w-[30px] h-[30px]"
                        id="select-husband"
                      />
                    }
                  />
                </label>
              </div>

              <div className="flex flex-col gap-3">
                <Title subTitle="Istri (1)" />

                <label
                  className="label-radio input-radio-active-border rounded-2xl overflow-hidden"
                  onClick={() =>
                    handleSetApplicant({
                      name: "Azam Din Abdillah",
                      job: "Mahasiswa",
                      image: "/images/user-3.png",
                    })
                  }
                  htmlFor="select-wife"
                >
                  <PeopleCardComplete
                    image="/images/user-3.png"
                    name="Azam Din Abdillah"
                    job="Mahasiswa"
                    nik="2005100592201005"
                    age={42}
                    right={
                      <input
                        type="radio"
                        name="select-applicant"
                        className="input-radio-choose-gender w-[30px] h-[30px]"
                        id="select-wife"
                      />
                    }
                  />
                </label>
              </div>

              <div className="flex flex-col gap-3">
                <Title subTitle="Anak (3)" />

                {Array.from({ length: 3 }, (_, index) => (
                  <label
                    className="label-radio input-radio-active-border rounded-2xl overflow-hidden"
                    onClick={() =>
                      handleSetApplicant({
                        name: "Azam Din Abdillah",
                        job: "Mahasiswa",
                        image: "/images/user-3.png",
                      })
                    }
                    htmlFor={`select-${index}`}
                  >
                    <PeopleCardComplete
                      image="/images/user-3.png"
                      name="Azam Din Abdillah"
                      job="Mahasiswa"
                      nik="2005100592201005"
                      age={42}
                      right={
                        <input
                          type="radio"
                          name="select-applicant"
                          className="input-radio-choose-gender w-[30px] h-[30px]"
                          id={`select-${index}`}
                        />
                      }
                    />
                  </label>
                ))}
              </div>
            </div>
          </>
        }
        header="Pilih Pelamar Applicant"
        isOpen={openModalChooseApplicant}
        setIsOpen={setOpenModalChooseApplicant}
      />
      <TitlePage
        title="Detail Pembangunan Desa"
        subTitle={
          <div className="flex items-center gap-1 flex-wrap">
            Pembangunan Desa
            <span className="text-dark-green font-medium">
              / detail Pembangunan desa
            </span>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-4 items-start md:grid-cols-10">
        <WrapperElement customClass="md:col-span-5 lg:col-span-6">
          <Title
            subTitle="Informasi Bantuan Sosial"
            subTitleSizeVariant="small"
          />

          <div className="flex justify-between items-center">
            <img
              src="/images/event-3.png"
              alt=""
              className="w-[100px] h-[80px] lg:w-[120px] lg:h-[100px] rounded-2xl object-cover"
            />
            <DashboardStatus title="Tersedia" type="green" />
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-black font-semibold text-20 leading-6">
              Pembangunan Jalanan Utama
            </h2>
            <div className="gap-1 flex items-center">
              <p className="font-medium text-14 text-secondary-text-color">
                Penanggung jawab : <span>Uzumaki Asep</span>
              </p>
            </div>
          </div>

          <hr />

          <div className="flex justify-between items-center flex-wrap gap-4">
            <DetailsList
              titleColor="text-soft-red"
              icon="/icons/wallet-3.svg"
              title="Rp499.000"
              value="Dana Pembangunan"
            />

            <DashboardStatus title="Tersedia" type="green" />
          </div>

          <hr />

          <DetailsList
            titleColor="text-dark-green"
            icon="/icons/calendar-2-bg-square.svg"
            title="Mon, 24 Feb 2025"
            value="Tanggal Pelaksanaan"
          />

          <hr />

          <DetailsList
            titleColor="text-aksen"
            icon="/icons/clock-bg.svg"
            title="12:30 WIB"
            value="Jam Pelaksanaan"
          />

          <hr />

          <DetailsList
            titleColor="text-blue"
            icon="/icons/profile-2user-blue-bg.svg"
            title="9.250 Warga"
            value="Total Partisipasi"
          />

          <hr />

          <div className="flex gap-3 flex-col">
            <h3 className="font-medium text-secondary-text-color text-14">
              Tentang Pembangunan
            </h3>
            <p className="text-16 text-black font-medium leading-6 lg:leading-[32px]">
              Pembangunan Jalan Utama adalah langkah strategis untuk
              meningkatkan aksesibilitas dan mobilitas masyarakat. Proyek ini
              bertujuan untuk memperbaiki konektivitas antarwilayah, mendukung
              kegiatan ekonomi lokal, serta menciptakan infrastruktur yang lebih
              aman dan nyaman bagi pengguna jalan.
            </p>
          </div>
        </WrapperElement>

        <WrapperElement customClass="md:col-span-5 lg:col-span-4">
          <Title subTitle="Detail Pengajuan" subTitleSizeVariant="small" />
          <DetailsList
            titleColor="text-dark-green"
            icon="/icons/timer-bg-green.svg"
            title="192 Hari"
            value="Waktu Diperlukan"
          />
          <hr />
          <DetailsList
            titleColor="text-dark-green"
            icon="/icons/calendar-tick-bg.svg"
            title="Wed, 3 Sep 2025"
            value="Perkiraan Selesai"
          />
          <hr />
          <DetailsList
            titleColor="text-dark-green"
            icon="/icons/dollar-square-bg.svg"
            title="Pembayaran diatur di balai desa."
            value="Bayaran Kerja"
          />
          <hr />

          {applicant === null ? (
            <DetailsList
              titleColor="text-dark-green"
              icon="/icons/placeholder-upload-profile-circle.svg"
              title="Pelamar Applicant"
              value="Pilih Anggota Keluarga"
              right={
                <img
                  onClick={() => setOpenModalChooseApplicant(true)}
                  src="/icons/arrow-square-right.svg"
                  alt=""
                />
              }
            />
          ) : (
            <PeopleCard
              image={applicant.image}
              name={applicant.name}
              job={applicant.job}
              right={
                <img
                  onClick={() => setOpenModalChooseApplicant(true)}
                  src="/icons/arrow-square-right.svg"
                  alt=""
                />
              }
            />
          )}
          <hr />
          <Button variant="green">Setuju & Ajukan Sekarang</Button>
        </WrapperElement>
      </div>
    </div>
  );
}
