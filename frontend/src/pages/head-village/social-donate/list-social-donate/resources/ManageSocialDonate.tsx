import { useState } from "react";
import Button from "../../../../../components/Button";
import Modal from "../../../../../components/Modal";
import TitlePage from "../../../../../components/TitlePage";
import WrapperElement from "../../../../../layouts/WrapperElement";
import Title from "../../../../../components/Title";
import DashboardStatus from "../../../../../components/DashboardStatus";
import DetailsList from "../../../../../components/DetailsList";
import RecentActivity from "../../../../../components/RecentActivity";
import UserImage from "../../../../../components/UserImage";

export default function ManageSocialDonate() {
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
        header="Hapus Bantuan Sosial?"
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      />
      <TitlePage
        title="Manage Kepala Rumah"
        subTitle={
          <div className="flex items-center gap-1">
            Bantuan sosial
            <span className="text-dark-green font-medium">
              / Manage bantuan sosial
            </span>
          </div>
        }
        leftElement={
          <div className="flex gap-3">
            <Button onClick={() => setIsOpenModal(true)} variant="pink">
              Hapus Data
              <img className="w-5 lg:w-6" src="/icons/trash.svg" alt="" />
            </Button>
            <Button onClick={() => setIsOpenModal(true)} variant="black">
              Ubah Data
              <img className="w-5 lg:w-6" src="/icons/edit.svg" alt="" />
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 items-start">
        <WrapperElement customClass="md:col-span-1 lg:col-span-5">
          <Title subTitle="Informasi Bantuan Sosial" />

          <div className="flex justify-between items-center">
            <img
              src="/images/bansos-1.png"
              alt=""
              className="w-[100px] h-[80px] lg:w-[120px] lg:h-[100px] rounded-2xl object-cover"
            />
            <DashboardStatus title="Tersedia" type="softGreen" />
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-black font-semibold text-20 leading-6">
              Bantuan Untuk Rakyat Kurang Mampu
            </h2>
            <div className="gap-1 flex items-center">
              <img src="/icons/profile.svg" alt="" />
              <p className="font-medium text-14 text-secondary-text-color">
                PT Shaynakit Meningkatkan Bangsa
              </p>
            </div>
          </div>

          <hr />

          <DetailsList
            icon="/icons/money.svg"
            titleColor="text-dark-green"
            title="Rp120.000.000"
            value="Uang Tunai"
          />

          <hr />

          <DetailsList
            icon="/icons/profile-2user-blue-bg.svg"
            titleColor="text-blue"
            title="15.600 Warga"
            value="Total Pengajuan"
          />

          <hr />

          <div className="flex gap-3 flex-col">
            <h3 className="font-medium text-secondary-text-color text-14">
              Tentang Bantuan
            </h3>
            <p className="text-16 text-black font-medium leading-6 lg:leading-[32px]">
              Program Bantuan Sosial ini hadir untuk memberikan dukungan nyata
              bagi masyarakat yang membutuhkan. Kami berkomitmen membantu
              memenuhi kebutuhan dasar seperti pangan, kesehatan, dan
              pendidikan, demi meningkatkan kualitas hidup. Dengan semangat
              gotong royong, kami mengajak semua pihak untuk bersama-sama
              menciptakan perubahan positif.
            </p>
          </div>
        </WrapperElement>

        <WrapperElement customClass="md:col-span-1 lg:col-span-3">
          <Title subTitle="Penerima Bansos Terakhir" />

          {Array.from({ length: 3 }).map((_, index) => (
            <RecentActivity
              key={index}
              bottomLeft={
                <>
                  <img src="/icons/profile.svg" alt="" />
                  Diberikan Kepada:
                </>
              }
              bottomRight={
                <>
                  <p className="flex items-center gap-1 text-black">
                    Udin Louvre
                    <UserImage
                      customClass="hidden lg:inline"
                      widthHeight="w-[32px]"
                      image="/images/user-1.png"
                    />
                  </p>
                </>
              }
              date="Tue, 25 Dec 2024"
              title="Rp120.000.000"
              subTitle="Nominal Pengajuan"
              right={<DashboardStatus type={"Menunggu"} title={"Menunggu"} />}
            />
          ))}

          <Button variant="green">View All</Button>
        </WrapperElement>
      </div>
    </div>
  );
}
