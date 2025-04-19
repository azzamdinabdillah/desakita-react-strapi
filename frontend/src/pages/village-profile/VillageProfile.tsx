import TitlePage from "../../components/TitlePage";

export default function VillageProfile() {
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

  return (
    <div className="flex flex-col gap-6">
      <TitlePage title="Profil Desa" />

      <div className="grid grid-cols-1 lg:flex gap-3.5 lg:items-start">
        <div className="p-5 lg:p-6 bg-white rounded-2xl w-full gap-5 lg:gap-6 flex flex-col lg:flex-1">
          <div className="flex justify-between items-center">
            <h4 className="text-sm lg:text-base text-secondary-text-color font-medium leading-normal">
              Nama Desa
            </h4>

            <img src="/icons/nama-desa.svg" alt="" className="w-10 lg:w-12" />
          </div>

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
            <img
              src="/images/profile-1.png"
              alt=""
              className="rounded-xl lg:rounded-3xl h-[200px] lg:h-[300px] object-cover w-full"
            />
            <div className="grid grid-cols-3 gap-[14px]">
              <img
                src="/images/profile-2.png"
                alt=""
                className="rounded-xl lg:rounded-3xl h-[80px] lg:h-[120px] object-cover flex-grow w-full"
              />
              <img
                src="/images/profile-3.png"
                alt=""
                className="rounded-xl lg:rounded-3xl h-[80px] lg:h-[120px] object-cover flex-grow w-full"
              />
              <img
                src="/images/profile-4.png"
                alt=""
                className="rounded-xl lg:rounded-3xl h-[80px] lg:h-[120px] object-cover flex-grow w-full"
              />
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
        </div>

        <div className="p-5 lg:p-6 bg-white rounded-2xl w-full gap-3 flex flex-col lg:w-[398px]">
          <h4 className="text-sm lg:text-base text-secondary-text-color font-medium leading-normal">
            Nama Desa
          </h4>

          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <div className="image bg-[#F1FAE6] rounded-full overflow-hidden lg:hidden">
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
        </div>
      </div>
    </div>
  );
}
