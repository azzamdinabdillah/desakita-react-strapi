import Button from "../../../../../components/Button";
import TitlePage from "../../../../../components/TitlePage";
import WrapperElement from "../../../../../layouts/WrapperElement";
import Title from "../../../../../components/Title";
import DetailsList from "../../../../../components/DetailsList";
import UserImage from "../../../../../components/UserImage";
import CardItemGeneral from "../../../../../components/CardItemGeneral";

export default function ManageApplicantSocialDonate() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        leftElement={
          <Button variant="black">
            Edit Data
            <img src="/icons/edit.svg" alt="" />
          </Button>
        }
        title="Detail Event Desa"
        subTitle={
          <div className="flex items-center gap-1 flex-wrap">
            Events desa
            <span className="text-dark-green font-medium">
              / detail event desa
            </span>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 items-start">
        <WrapperElement customClass="lg:col-span-5 md:col-span-1">
          <Title subTitle="Informasi Event" />

          <CardItemGeneral
            imgSize="w-[70px] lg:w-[100px] h-[60px] lg:h-[80px]"
            image="/images/event.png"
            title="Belajar HTML Dasar Bersama"
            subTitleMaxWidth="max-w-[100%]"
            titleMaxWidth="max-w-[100%]"
            subTitle={
              <div className="gap-1 flex items-center w-full">
                <img
                  src="/icons/ticket.svg"
                  alt=""
                  className="w-3.5 lg:w-4.5"
                />
                <p className="text-secondary-text-color text-14 font-medium w-full flex-grow">
                  Registration: : <span className="text-dark-green">Open</span>
                </p>
              </div>
            }
          />

          <hr />

          <DetailsList
            titleColor="text-soft-red"
            icon="/icons/ticket-bg.svg"
            title="Rp499.000"
            value="Harga Event"
          />

          <hr />

          <DetailsList
            titleColor="text-blue"
            icon="/icons/profile-2user-blue-bg.svg"
            title="9.250 Warga"
            value="Total Partisipan"
          />

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

          <div className="flex gap-3 flex-col">
            <Title subTitle="Tentang Event" subTitleSizeVariant="small" />
            <p className="text-16 text-black font-medium leading-6 lg:leading-[32px]">
              Belajar Teknologi untuk Masa Depan!Kepala desa mengundang seluruh
              warga untuk mengikuti acara Belajar HTML Dasar Bersama. Dalam
              acara ini, kita akan: <br /> - Mengenal dasar-dasar HTML sebagai
              langkah awal membuat website.
              <br />
              - Belajar struktur sederhana halaman web. <br /> - Mencoba
              langsung membuat halaman web bersama Mulailah perjalanan Anda
              untuk memahami elemen-elemen penting HTML, praktik langsung, dan
              temukan bagaimana teknologi ini membuka peluang baru. Jangan lupa
              untuk terus berlatih agar semakin mahir!
            </p>
          </div>
        </WrapperElement>

        <WrapperElement customClass="lg:col-span-3 md:col-span-1">
          <Title subTitle="Latest Participants" />

          <div className="flex gap-3.5 flex-col">
            {Array.from({ length: 5 }).map((_, index) => (
              <>
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

                {index !== 4 && <hr />}
              </>
            ))}
          </div>
          <Button variant="green">Lihat Semua</Button>
        </WrapperElement>
      </div>
    </div>
  );
}
