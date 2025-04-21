import Button from "../../components/Button";
import TitlePage from "../../components/TitlePage";

export default function Dashboard() {
  const stats = [
    {
      title: "Jumlah Penduduk",
      value: "243.000",
      icons: "/icons/stat-jumlah-penduduk.svg",
      trendUp: true,
      trendValue: "+12%",
    },
    {
      title: "Pembangunan",
      value: "42.000",
      icons: "/icons/stat-pembangunan.svg",
      trendUp: true,
      trendValue: "+12%",
    },
    {
      title: "Kepala Rumah",
      value: "9.250",
      icons: "/icons/stat-kepala-rumah.svg",
      trendUp: true,
      trendValue: "+12%",
    },
    {
      title: "Total Events",
      value: "12",
      icons: "/icons/stat-total-event.svg",
      trendUp: true,
      trendValue: "+12%",
    },
  ];
  return (
    <div className="gap-3.5 flex flex-col">
      <TitlePage title="Desa Statistics" />

      <div className="flex flex-col gap-3.5 lg:flex-row items-start">
        <div className="gap-6 flex flex-col color-gradient-green p-6 lg:p-6 rounded-2xl lg:max-w-[380px] w-full">
          <img src="/icons/picture.svg" alt="" className="w-fit" />
          <div className="flex flex-col gap-3">
            <p className="text-xs lg:text-sm text-yellow font-medium">
              — Bantuan Sosial
            </p>
            <h1 className="text-lg lg:text-2xl text-white font-semibold">
              Dari Desa untuk Warga ❤️
            </h1>
            <p className="text-sm lg:text-base text-white leading-6 font-normal">
              Wujudkan kesejahteraan desa dengan bantuan sosial yang tepat
              sasaran.
            </p>
          </div>
          <Button variant="white" customClass="w-full justify-between">
            Bikin Bantuan Sosial
            <img src="/icons/add-square-2.svg" alt="" />
          </Button>
        </div>

        <div className="gap-3.5 flex flex-wrap w-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col  flex-grow gap-3 bg-white rounded-3xl p-6"
            >
              <div className="top flex justify-between items-center gap-3">
                <h5 className="text-16 font-medium text-secondary-text-color">{stat.title}</h5>
                <img src={stat.icons} alt="" />
              </div>
              <div className="gap-1.5 flex flex-col">
                <h2 className="text-2xl lg:text-[32px] font-semibold text-black">
                  {stat.value}
                </h2>
                <p className="text-14 font-medium text-secondary-text-color flex gap-1 items-center">
                  <span className="text-dark-green flex gap-1 items-center">
                    <img
                      src={
                        stat.trendUp
                          ? "/icons/trend-up.svg"
                          : "/icons/trend-down.svg"
                      }
                      alt=""
                      className="inline"
                    />
                    {stat.trendValue}
                  </span>
                  dari bulan sebelumnya
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
