import TitlePage from "../../../../components/TitlePage";
import WrapperElement from "../../../../layouts/WrapperElement";
import Title from "../../../../components/Title";
import DashboardStatus from "../../../../components/DashboardStatus";
import DetailsList from "../../../../components/DetailsList";

export default function DetailsApplicantSocialDonate() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Detail Bansos"
        subTitle={
          <div className="flex items-center gap-1 flex-wrap">
            Detail Bantuan sosial
            <span className="text-dark-green font-medium">/ Detail bansos</span>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 items-start">
        <WrapperElement customClass="md:col-span-4 lg:col-span-5">
          <Title
            subTitle="Informasi Bantuan Sosial"
            subTitleSizeVariant="small"
          />

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
            titleColor="text-dark-green"
            icon="/icons/bag-2.svg"
            title="Beras 20 Ton"
            value="Bahan Pokok"
          />

          <hr />

          <DetailsList
            titleColor="text-dark-green"
            icon="/icons/send-square-2.svg"
            title="10 Ton"
            value="Bansos Tersisa"
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

        <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-3">
          <WrapperElement customClass="">
            <div className="top flex justify-between items-center">
              <Title subTitle="Status Pengajuan" subTitleSizeVariant="small" />
              <DashboardStatus title="Menunggu" type="Menunggu" />
            </div>

            <hr />

            <div className="flex gap-4 flex-col">
              <Title
                subTitle="Bukti Menerima Bansos"
                subTitleSizeVariant="small"
              />
              <div className="border border-dashed border-[#DDE5E1] h-[230px] flex justify-center items-center rounded-2xl">
                <p className="text-xs text-[#ACB9BB] font-medium leading-5 text-center">
                  Gambar akan muncul jika status <br />
                  pengajuan sudah berhasil 😉{" "}
                </p>
              </div>
            </div>
          </WrapperElement>

          <WrapperElement>
            <Title subTitle="Detail Pengajuan" subTitleSizeVariant="small" />

            <DetailsList
              titleColor="text-dark-green"
              icon="/icons/receive-square-2.svg"
              title="2 Ton"
              value="Nominal Pengajuan"
            />

            <hr />

            <DetailsList
              titleColor="text-black"
              icon="/icons/calendar-2-bg-square.svg"
              title="Tue, 09 Jan 2025"
              value="Tanggal Pengajuan"
            />

            <hr />

            <div className="flex gap-3 flex-col">
              <Title subTitle="Pesan Pengajuan:" subTitleSizeVariant="small" />
              <p className="text-16 text-black font-medium leading-6 lg:leading-[32px]">
                “Saya akan menggunakan dana tersebut untuk kebutuhan membeli
                beras dan bahan pokok lainnya yang akan dikonsumsi oleh saya dan
                keluarga saya.”
              </p>
            </div>
          </WrapperElement>
        </div>
      </div>
    </div>
  );
}
