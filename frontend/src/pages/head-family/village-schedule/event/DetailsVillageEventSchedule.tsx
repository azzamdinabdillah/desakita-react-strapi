import TitlePage from "../../../../components/TitlePage";
import WrapperElement from "../../../../layouts/WrapperElement";
import Title from "../../../../components/Title";
import DetailsList from "../../../../components/DetailsList";
import CardItemGeneral from "../../../../components/CardItemGeneral";
import Button from "../../../../components/Button";

export default function DetailsVillageEventSchedule() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Detail Event Desa"
        subTitle={
          <div className="flex items-center gap-1 flex-wrap">
            Events Desa
            <span className="text-dark-green font-medium">
              / Detail Event Desa
            </span>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-4 items-start md:grid-cols-10">
        <WrapperElement customClass="md:col-span-5 lg:col-span-6">
          <Title subTitle="Detail Event" subTitleSizeVariant="small" />

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

        <WrapperElement customClass="md:col-span-5 lg:col-span-4">
          <Title subTitle="Detail Pembayaran" subTitleSizeVariant="small" />

          <div className="flex justify-between items-center gap-3 flex-wrap">
            <DetailsList
              titleColor="text-soft-red"
              icon="/icons/ticket-bg.svg"
              title="Rp499.000"
              value="Harga Event"
            />

            <div className="flex items-center gap-3 border border-bg-color py-2 px-3 lg:py-3 lg:px-4 rounded-2xl">
              <img
                src="/icons/minus-square.svg"
                alt=""
                className="w-5 lg:w-6"
              />
              <p className="text-lg text-black font-medium lg:text-[22px]">1</p>
              <img
                src="/icons/add-square-gray.svg"
                alt=""
                className="w-5 lg:w-6"
              />
            </div>
          </div>

          <hr />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <img src="/icons/receipt-2.svg" alt="" className="w-5 lg:w-6"/>
              <p className="text-14 text-secondary-text-color font-medium">
                PPN 12%
              </p>
            </div>

            <p className="text-18 font-semibold text-black">Rp119.760</p>
          </div>

          <hr />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <img src="/icons/profile-2user.svg" alt="" className="w-5 lg:w-6"/>
              <p className="text-14 text-secondary-text-color font-medium">
                Quantity
              </p>
            </div>

            <p className="text-18 font-semibold text-black">2x warga</p>
          </div>

          <hr />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <img src="/icons/money-plain.svg" alt="" className="w-5 lg:w-6"/>
              <p className="text-14 text-secondary-text-color font-medium">
                Harga Total
              </p>
            </div>

            <p className="text-18 font-semibold text-black">1.117.760</p>
          </div>

          <hr />

          <Button variant="green">Beli Tiket</Button>
        </WrapperElement>
      </div>
    </div>
  );
}
