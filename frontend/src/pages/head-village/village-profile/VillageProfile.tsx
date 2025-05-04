import { useState } from "react";
import TitlePage from "../../../components/TitlePage";
import Button from "../../../components/Button";
import WrapperElement from "../../../layouts/WrapperElement";
import { Link } from "react-router";
import Title from "../../../components/Title";

export default function VillageProfile() {
  const [isOpenModalImage, setIsOpenModalImage] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<number>(0);

  const images = [
    "/images/profile-1.png",
    "/images/profile-2.png",
    "/images/profile-3.png",
  ];

  const VillageDetail = [
    {
      title: "Jumlah Penduduk",
      value: 243.0,
      icon: "/icons/jumlah-penduduk.svg",
    },
    {
      title: "Luas Pertanian",
      value: "25.200m2",
      icon: "/icons/luas-pertanian.svg",
    },
    {
      title: "Luas Area",
      value: "25.200m2",
      icon: "/icons/luas-area.svg",
    },
    {
      title: "Luas Area",
      value: "9.222.500m2",
      icon: "/icons/luas-area.svg",
    },
    {
      title: "Desa Dibangun",
      value: "Mon, 24 Feb 2012",
      icon: "/icons/desa-dibangun.svg",
    },
  ];

  function toggleChangeMainImage(imageIndex: number) {
    return setActiveImage(imageIndex);
  }

  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Profil Desa"
        leftElement={
          <Link to={"/village-profile/create-village-profile"}>
            <Button variant="black">
              Edit Data
              <img className="w-4 lg:w-6" src="/icons/edit.svg" alt="" />
            </Button>
          </Link>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-8 gap-4 items-start">
        <WrapperElement customClass="md:col-span-5">
          <Title subTitle="Nama Desa" icon="/icons/nama-desa.svg" />

          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl lg:text-[32px] text-black font-semibold">
              Desa Angga Countryside
            </h2>
            <div className="flex items-center gap-[1px]">
              <img src="/icons/location.svg" alt="" className="w-4 lg:w-6" />
              <h5 className="text-xs text-secondary-text-color lg:text-sm font-medium leading-none">
                Jakarta, Indoneia
              </h5>
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            <div
              className={`modal fixed top-0 left-0 right-0 bottom-0 bg-black/80 flex justify-center items-center z-20 flex-col p-4 gap-7 lg:gap-[30px] ${
                isOpenModalImage ? "flex" : "hidden"
              }`}
            >
              <img
                src={images[activeImage]}
                alt=""
                className="rounded-xl lg:rounded-3xl h-[200px] object-cover w-full lg:max-w-[800px] lg:h-[492px]"
              />

              <button
                onClick={() => setIsOpenModalImage(false)}
                className="flex cursor-pointer gap-2 border border-white/50 rounded-full py-2 px-4 lg:py-3 lg:px-4 text-sm lg:text-base font-semibold leading-normal items-center text-white"
              >
                <img src="/icons/close-circle.svg" alt="" />
                Tutup
              </button>

              <div className="images flex gap-2 lg:gap-4 grid-cols-3 overflow-auto">
                {images.map((image, index) => (
                  <>
                    <div
                      onClick={() => {
                        toggleChangeMainImage(index);
                      }}
                      className="relative cursor-pointer rounded-xl lg:rounded-3xl overflow-hidden w-full"
                    >
                      <img
                        src={image}
                        alt=""
                        className={`${
                          index === activeImage ? "blur-xs" : ""
                        } h-[80px] cursor-pointer hover:scale-110 transition-all lg:h-[120px] lg:max-w-[140px] object-cover flex-grow w-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:bg-opacity-40`}
                      />
                      {index === activeImage && (
                        <img
                          src="/icons/eye.svg"
                          alt=""
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                      )}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <img
              src={images[activeImage]}
              alt=""
              className="rounded-xl lg:rounded-3xl h-[200px] lg:h-[300px] object-cover w-full"
            />
            <div className="grid grid-cols-3 gap-[14px]">
              {images.map((image, index) => (
                <>
                  <div
                    onClick={() => {
                      if (index === images.length - 1) {
                        setIsOpenModalImage(true);
                      } else {
                        toggleChangeMainImage(index);
                      }
                    }}
                    className="relative cursor-pointer rounded-xl lg:rounded-3xl overflow-hidden"
                  >
                    {index === images.length - 1 && (
                      <div className="bg-black/80 text-lg lg:text-[20px] font-bold leading-normal text-white text-center absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center">
                        2+ <br /> Photo
                      </div>
                    )}
                    <img
                      src={image}
                      alt=""
                      className={`${
                        index === activeImage ? "blur-xs" : ""
                      } h-[80px] cursor-pointer hover:scale-110 transition-all lg:h-[120px] object-cover flex-grow w-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:bg-opacity-40`}
                    />
                    {index === activeImage && (
                      <img
                        src="/icons/eye.svg"
                        alt=""
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    )}
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:gap-3">
            <h6 className="text-secondary-text-color font-medium text-sm leading-normal">
              Tentang Desa
            </h6>
            <p className="text-black font-medium text-sm lg:text-base leading-[170%] lg:leading-[200%]">
              Desa Angga Countryside terletak di kaki gunung 🏔️ dengan udara
              sejuk dan pemandangan sawah yang hijau 🌿. Warganya ramah dan
              masih menjaga tradisi gotong-royong. Penghasilan utama desa ini
              adalah padi 🍚, kopi ☕, dan kerajinan anyaman bambu 🎋. Desa ini
              juga memiliki wisata alam seperti air terjun kecil 💧 dan jalur
              tracking.
            </p>
          </div>

          <div className="flex flex-col gap-2 lg:gap-3 text-secondary-text-color font-medium text-sm leading-normal">
            <h6 className="">Peta Desa</h6>

            <iframe
              className="w-full h-[250px] lg:h-[364px] rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.01646576995807!2d111.99583918125231!3d-7.8674761620678755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1745069628147!5m2!1sid!2sid"
              loading="lazy"
            ></iframe>

            <p className="mt-1">
              Jl. Mawar No. 45, RT 02/RW 03, Kelurahan Sukajaya, Kecamatan
              Sukarame, Kota Jakarta, Jawa Barat, 40286
            </p>
          </div>
        </WrapperElement>

        <WrapperElement customClass="md:col-span-3">
          <Title subTitle="Detail Desa" />

          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <div className="image bg-[#F1FAE6] rounded-full overflow-hidden">
                <img src="/images/user.png" alt="" />
              </div>
              <div className="lg:gap-1 flex flex-col">
                <h5 className="text-dark-green font-semibold text-base lg:text-[18px] leading-normal overflow-ellipsis">
                  Bimore Wecaksono
                </h5>
                <p className="text-secondary-text-color font-semibold text-sm lg:text-sm leading-normal">
                  Kepala Desa
                </p>
              </div>
            </div>

            <hr />

            {VillageDetail.map((data, index) => (
              <>
                <div className="flex gap-3 items-center">
                  <img src={data.icon} alt="" />
                  <div className="lg:gap-1 flex flex-col">
                    <h5 className="text-dark-green font-semibold text-base lg:text-[18px] leading-normal overflow-ellipsis">
                      {data.value}
                    </h5>
                    <p className="text-secondary-text-color font-semibold text-sm lg:text-sm leading-normal">
                      {data.title}
                    </p>
                  </div>
                </div>

                {index !== VillageDetail.length - 1 && <hr />}
              </>
            ))}
          </div>
        </WrapperElement>
      </div>
    </div>
  );
}

export function VillageProfileEmpty() {
  return (
    <div className="h-full">
      <TitlePage
        title="Profil Desa"
        leftElement={
          <Link to={"/village-profile/create-village-profile"}>
            <Button variant="green">
              Create Profile
              <img className="w-4 lg:w-6" src="/icons/add-square.svg" alt="" />
            </Button>
          </Link>
        }
      />
      <div className="h-full gap-6 flex flex-col items-center mt-20 lg:mt-40">
        <img src="/icons/user-remove.svg" alt="" />
        <p className="text-secondary-text-color font-semibold text-base lg:text-lg leading-6 text-center">
          Ops, Saat ini kamu belum membuat profile desa
        </p>
      </div>
    </div>
  );
}
