import { useState } from "react";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import TitlePage from "../../../../components/TitlePage";
import WrapperElement from "../../../../layouts/WrapperElement";
import Title from "../../../../components/Title";
import DashboardStatus from "../../../../components/DashboardStatus";
import DetailsList from "../../../../components/DetailsList";
import Label from "../../../../components/Label";
import Inputs from "../../../../components/Inputs";

const banks = [
  {
    name: "Bank Central Asia",
    image: "/icons/bca.svg",
  },
  {
    name: "Bank Mandiri",
    image: "/icons/mandiri.svg",
  },
  {
    name: "Bank Negara Indonesia",
    image: "/icons/bni.svg",
  },
];

export default function DetailsSocialDonate() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [expandBank, setExpandBank] = useState(false);

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
              <img className="w-5 md:w-6" src="/icons/trash.svg" alt="" />
            </Button>
            <Button onClick={() => setIsOpenModal(true)} variant="black">
              Ubah Data
              <img className="w-5 md:w-6" src="/icons/edit.svg" alt="" />
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 items-start">
        <WrapperElement customClass="md:col-span-5 lg:col-span-6">
          <Title subTitle="Informasi Bantuan Sosial" />

          <div className="flex justify-between items-center">
            <img
              src="/images/bansos-1.png"
              alt=""
              className="w-[100px] h-[80px] md:w-[120px] md:h-[100px] rounded-2xl object-cover"
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

          <div className="w-max flex-grow">
            <DetailsList
              titleColor="text-soft-red"
              icon="/icons/send-square-2.svg"
              title="Rp110.000.000"
              value="Sisa Bansos"
            />
          </div>

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
            <p className="text-16 text-black font-medium leading-6 md:leading-[32px]">
              Program Bantuan Sosial ini hadir untuk memberikan dukungan nyata
              bagi masyarakat yang membutuhkan. Kami berkomitmen membantu
              memenuhi kebutuhan dasar seperti pangan, kesehatan, dan
              pendidikan, demi meningkatkan kualitas hidup. Dengan semangat
              gotong royong, kami mengajak semua pihak untuk bersama-sama
              menciptakan perubahan positif.
            </p>
          </div>
        </WrapperElement>

        <div className="md:col-span-5 lg:col-span-4 flex gap-3.5 flex-col">
          <WrapperElement customClass="">
            <Title
              subTitle="Detail Akun Bank"
              customClassSubTitle="!text-black"
            />

            <div className="flex flex-col gap-4">
              <Title
                subTitle="Kamu Pake Bank Apa?"
                subTitleSizeVariant="small"
              />

              <div
                className={`flex flex-col cursor-pointer gap-4 border border-bg-color p-3 rounded-2xl overflow-hidden transition-all ${
                  expandBank ? "max-h-96" : "max-h-13"
                }`}
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => setExpandBank(!expandBank)}
                >
                  <div className="flex gap-2 items-center">
                    <img src="/icons/bank.svg" alt="" />
                    <p className="text-16 font-medium text-secondary-text-color">
                      Pilih salah satu bank
                    </p>
                  </div>

                  <img
                    src="/icons/arrow-down-gray.svg"
                    alt=""
                    className={`transition-all ${
                      expandBank ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <hr />

                {banks.map((bank, index) => (
                  <>
                    <label
                      htmlFor={bank.name}
                      key={index}
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <div className="flex gap-2 items-center flex-wrap">
                        <div className="py-3 w-[70px] h-[40px] lg:w-[120px] lg:h-[60px] bg-blue/[0.05] rounded-2xl flex justify-center items-center">
                          <img
                            src={bank.image}
                            alt=""
                            className="w-[70%] lg:w-unset"
                          />
                        </div>
                        <p className="text-16 font-medium text-black">
                          {bank.name}
                        </p>
                      </div>

                      <input
                        className="input-radio-choose-gender h-[18px]"
                        type="radio"
                        id={bank.name}
                        name="select-bank"
                      />
                    </label>

                    {banks.length - 1 !== index && <hr />}
                  </>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Label
                customClass="!text-xs md:!text-sm !font-medium"
                labelFor="bank-account-number"
              >
                Nomor Rekening Bank
              </Label>
              <Inputs
                type="text"
                id="bank-account-number"
                isIconLeft={true}
                icons="/icons/card.svg"
                placeholder="Masukan Nomor Rekening"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label
                customClass="!text-xs md:!text-sm !font-medium"
                labelFor="name"
              >
                Nama Pemilik Rekening
              </Label>
              <Inputs
                type="text"
                id="name"
                isIconLeft={true}
                icons="/icons/user-square.svg"
                placeholder="Nama Lengkap"
              />
            </div>
          </WrapperElement>

          <WrapperElement>
            <Title
              subTitle="Ajukan Bantuan Sosial"
              customClassSubTitle="!text-black"
            />

            <div className="flex flex-col gap-3">
              <Label
                customClass="!text-xs md:!text-sm !font-medium"
                labelFor="nominal"
              >
                Nominal Pengajuan
              </Label>
              <Inputs
                type="number"
                id="nominal"
                isIconLeft={true}
                icons="/icons/receive-square-2-plain.svg"
                placeholder="Input amount"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label
                customClass="!text-xs md:!text-sm !font-medium"
                labelFor="description"
              >
                Deskripsi Bantuan Sosial
              </Label>
              <Inputs
                type="textarea"
                id="description"
                rows={5}
                placeholder="Jelaskan lebih detail tentang bantuan"
              />
            </div>

            <Button variant="black">Ajukan Bantuan</Button>
          </WrapperElement>
        </div>
      </div>
    </div>
  );
}
