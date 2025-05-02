import TitlePage from "../../../../components/TitlePage";
import Button from "../../../../components/Button";
import WrapperElement from "../../../../layouts/WrapperElement";
import DashboardStatus from "../../../../components/DashboardStatus";
import DetailsList from "../../../../components/DetailsList";
import Title from "../../../../components/Title";
import PeopleCard from "../../../../components/PeopleCard";
import { useState } from "react";
import Modal from "../../../../components/Modal";

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

export default function ManageFamilyMember() {
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
        header="Hapus Anggota Keluarga?"
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      />
      <TitlePage
        title="Manage Anggota Keluarga"
        subTitle={
          <div className="flex items-center gap-1 flex-wrap">
            Anggota Keluarga
            <span className="text-dark-green font-medium">
              / Manage Anggota Keluarga
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

      <div className="flex flex-col md:flex-row items-start gap-3.5">
        <div className="flex flex-col gap-3.5 w-full md:flex-grow">
          <WrapperElement>
            <Title subTitle="Kepala Rumah (You)" />

            <PeopleCard
              image="/images/user-2.png"
              name="Azam Din Abdillah"
              job="Programmer"
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
        </div>

        <div className="flex flex-col gap-3.5 lg:max-w-[438px] w-full">
          <WrapperElement>
            <Title subTitle="Aktivitas Terbaru" />

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

                <hr />

                <Button variant="green">Lihat Detail</Button>
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

                <hr />

                <Button variant="green">Lihat Detail</Button>
              </div>
            </div>
          </WrapperElement>
        </div>
      </div>
    </div>
  );
}
