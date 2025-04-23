import { Link } from "react-router";
import TitlePage from "../../../components/TitlePage";
import Button from "../../../components/Button";
import WrapperElement from "../../../layouts/WrapperElement";
import DashboardStatus from "../../../components/DashboardStatus";
import DetailsList from "../../../components/DetailsList";
import Title from "../../../components/Title";

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

export default function ManageHeadHouse() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Manage Kepala Rumah"
        subTitle={
          <div className="flex items-center gap-1">
            Kepala Rumah
            <span className="text-dark-green font-medium">
              / Manage Kepala Rumah
            </span>
          </div>
        }
        leftElement={
          <Link to={"/village-profile/create-village-profile"}>
            <Button variant="pink">
              Hapus Data
              <img className="w-5 lg:w-6" src="/icons/trash.svg" alt="" />
            </Button>
          </Link>
        }
      />

      <div className="grid lg:grid-cols-2 items-start gap-3.5">
        <div className="flex flex-col gap-3.5">
          <WrapperElement>
            <Title subTitle="Kepala Rumah" />

            <div className="flex gap-3 items-center w-full">
              <div className="bg-foreshadow rounded-full w-[50px] lg:w-[64px] overflow-hidden">
                <img
                  src="/images/user-2.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <div className="flex flex-col gap-1 lg:gap-[6px] flex-grow">
                <h3 className="text-base lg:text-[18px] font-semibold text-black">
                  Andi Alif Baro
                </h3>
                <div className="flex items-center gap-1">
                  <img
                    src="/icons/briefcase.svg"
                    alt=""
                    className="w-3.5 lg:w-[18px]"
                  />
                  <span className="text-14 font-medium text-secondary-text-color">
                    Mekanik Kendaraan
                  </span>
                </div>
              </div>

              <DashboardStatus title="Menikah" type="softGreen" />
            </div>

            <hr />

            {headDetail.map((data, index) => (
              <>
                <DetailsList
                  icon={data.icon}
                  title={data.value}
                  value={data.title}
                />

                {index !== headDetail.length - 1 && <hr />}
              </>
            ))}
          </WrapperElement>

          <WrapperElement>
            <Title
              subTitle="Kepala Rumah"
              title="3"
              icon="/icons/profile-bg.svg"
            />
          </WrapperElement>
        </div>
      </div>
    </div>
  );
}
