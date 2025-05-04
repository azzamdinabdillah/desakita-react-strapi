import Button from "../../../../../components/Button";
import TitlePage from "../../../../../components/TitlePage";
import WrapperElement from "../../../../../layouts/WrapperElement";
import Title from "../../../../../components/Title";
import DashboardStatus from "../../../../../components/DashboardStatus";
import DetailsList from "../../../../../components/DetailsList";
import UserImage from "../../../../../components/UserImage";
import { useState } from "react";

export default function ManageApplicantSocialDonate() {
  const [imageProfile, setImageProfile] = useState<File | null | undefined>(
    null
  );
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Penyetujuan Bansos"
        subTitle={
          <div className="flex items-center gap-1 flex-wrap">
            Pengajuan Bantuan sosial
            <span className="text-dark-green font-medium">
              / penyetujuan bansos
            </span>
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
            <DashboardStatus title="Menunggu" type="Menunggu" />
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
            icon="/icons/minus-square-bg.svg"
            titleColor="text-dark-green"
            title="Rp92.000.000"
            value="Sisa Bansos"
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
            <Title subTitle="Tentang Bantuan" subTitleSizeVariant="small" />
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
          <Title subTitle="Detail Pengajuan" />

          <hr />

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

          <hr />

          <DetailsList
            titleColor="text-black"
            icon="/icons/profile-2user-bg.svg"
            title="6 Anggota"
            value="Total Keluarga"
          />

          <hr />

          <DetailsList
            titleColor="text-black"
            icon="/icons/keyboard-bg.svg"
            title="30183910948390193"
            value="NIK"
          />

          <hr />

          <DetailsList
            titleColor="text-black"
            icon="/icons/calendar-2-bg-square.svg"
            title="Tue, 09 Jan 2025"
            value="Tanggal Pengajuan"
          />

          <hr />

          <DetailsList
            titleColor="text-black"
            icon="/icons/receive-square-2.svg"
            title="Rp5.120.000"
            value="Nominal Pengajuan"
          />

          <hr />

          <div className="flex gap-3 flex-col">
            <Title subTitle="Pesan Pengajuan" subTitleSizeVariant="small" />
            <p className="text-16 text-black font-medium leading-6 lg:leading-[32px]">
              “Saya akan menggunakan dana tersebut untuk kebutuhan membeli beras
              dan bahan pokok lainnya yang akan dikonsumsi oleh saya dan
              keluarga saya.”
            </p>
          </div>

          <hr />

          <div className="flex gap-4 lg:gap-6 flex-col">
            <Title
              subTitle="Rekening Kepala Rumah"
              subTitleSizeVariant="small"
            />
            <div className="gap-3 flex items-center">
              <div className="py-3 w-[120px] bg-blue/[0.05] rounded-2xl flex justify-center items-center">
                <img src="/icons/bca.svg" alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <Title
                  subTitle="Saputra Dwi Putra"
                  subTitleSizeVariant="small"
                />
                <div className="flex items-center gap-1.5 font-semibold text-dark-green text-18">
                  <img src="/icons/document-copy.svg" alt="" />
                  999 2222 0590
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="flex gap-4 lg:gap-6 flex-col">
            <Title
              subTitle="Bukti Pemberian Bansos"
              subTitleSizeVariant="small"
            />

            <div className="flex items-center justify-between w-full col-span-3">
              <img
                src={
                  imageProfile
                    ? URL.createObjectURL(imageProfile)
                    : "/images/placeholder-upload-thumbnail-bansos.png"
                }
                alt=""
                className="w-[100px] lg:w-[120px] h-[80px] lg:h-[100px] rounded-3xl object-cover"
              />
              <Button
                variant="black"
                onClick={() =>
                  (
                    document.querySelector(
                      "#upload-profile-image"
                    ) as HTMLInputElement
                  )?.click()
                }
              >
                <img src="/icons/send-square.svg" alt="" />
                Upload
              </Button>
              <input
                type="file"
                hidden
                id="upload-profile-image"
                onChange={(e) => setImageProfile(e.target.files?.[0])}
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-2 gap-3">
            <Button variant="grayTextRed" customClass="">
              Tolak
            </Button>

            <Button variant="green" customClass="w-full">
              Setuju
            </Button>
          </div>
        </WrapperElement>
      </div>
    </div>
  );
}
