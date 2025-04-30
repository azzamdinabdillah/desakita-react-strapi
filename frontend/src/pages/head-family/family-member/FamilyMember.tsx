import { Link } from "react-router";
import TitlePage from "../../../components/TitlePage";
import Button from "../../../components/Button";
import WrapperElement from "../../../layouts/WrapperElement";
import Title from "../../../components/Title";
import PeopleCard from "../../../components/PeopleCard";

export default function FamilyMember() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Anggota Keluarga"
        leftElement={
          <Link to={"/head-house/create-head-house"}>
            <Button variant="green">
              <img className="w-5 md:w-6" src="/icons/add-square.svg" alt="" />
              Add New
            </Button>
          </Link>
        }
      />

      <WrapperElement>
        <Title subTitle="Anggota Keluarga (1)" />

        <div className="flex-col-4-6">
          <div className="flex flex-wrap gap-4 md:justify-between md:items-center rounded-xl md:rounded-2xl border border-bg-color p-3 md:p-6">
            <div>
              <PeopleCard
                image="/images/user-2.png"
                name="Andi Alif Baro"
                job="Mekanik Kendaraan"
              />
            </div>

            <div className="flex gap-1 md:flex-col w-full md:w-max justify-between md:justify-center">
              <div className="flex gap-1 items-center">
                <img src="/icons/keyboard.svg" alt="" />
                <span className="text-14 font-medium text-secondary-text-color">
                  NIK
                </span>
              </div>
              <p className="text-16 text-black font-semibold">
                2005100592201005
              </p>
            </div>

            <div className="flex gap-1 md:flex-col w-full md:w-max justify-between md:justify-center">
              <div className="flex gap-1 items-center">
                <img src="/icons/timer-2.svg" alt="" className="w-[18px]" />
                <span className="text-14 font-medium text-secondary-text-color">
                  Umur
                </span>
              </div>
              <p className="text-16 text-black font-semibold">32 Tahun</p>
            </div>

            <Link
              to={"/head-family/family-member/manage-family-member"}
              className="w-full md:w-max"
            >
              <Button variant="black" customClass="w-full">
                Manage
              </Button>
            </Link>
          </div>
        </div>
      </WrapperElement>

      <WrapperElement>
        <Title subTitle="Istri (1)" />

        <div className="flex-col-4-6">
          <div className="flex flex-wrap gap-4 md:justify-between md:items-center rounded-xl md:rounded-2xl border border-bg-color p-3 md:p-6">
            <div>
              <PeopleCard
                image="/images/user-2.png"
                name="Rosita Luna R"
                job="Ibu Rumah Tangga"
              />
            </div>

            <div className="flex gap-1 md:flex-col w-full md:w-max justify-between md:justify-center">
              <div className="flex gap-1 items-center">
                <img src="/icons/keyboard.svg" alt="" />
                <span className="text-14 font-medium text-secondary-text-color">
                  NIK
                </span>
              </div>
              <p className="text-16 text-black font-semibold">
                2005100592201005
              </p>
            </div>

            <div className="flex gap-1 md:flex-col w-full md:w-max justify-between md:justify-center">
              <div className="flex gap-1 items-center">
                <img src="/icons/timer-2.svg" alt="" className="w-[18px]" />
                <span className="text-14 font-medium text-secondary-text-color">
                  Umur
                </span>
              </div>
              <p className="text-16 text-black font-semibold">32 Tahun</p>
            </div>

            <Link
              to={"/head-family/family-member/manage-family-member"}
              className="w-full md:w-max"
            >
              <Button variant="black" customClass="w-full">
                Manage
              </Button>
            </Link>
          </div>
        </div>
      </WrapperElement>

      <WrapperElement>
        <Title subTitle="Anak (1)" />

        <div className="flex-col-4-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-4 md:justify-between md:items-center rounded-xl md:rounded-2xl border border-bg-color p-3 md:p-6"
            >
              <div>
                <PeopleCard
                  image="/images/user-3.png"
                  name="Azam Din Abdillah"
                  job="Mahasiswa"
                />
              </div>

              <div className="flex gap-1 md:flex-col w-full md:w-max justify-between md:justify-center">
                <div className="flex gap-1 items-center">
                  <img src="/icons/keyboard.svg" alt="" />
                  <span className="text-14 font-medium text-secondary-text-color">
                    NIK
                  </span>
                </div>
                <p className="text-16 text-black font-semibold">
                  2005100592201005
                </p>
              </div>

              <div className="flex gap-1 md:flex-col w-full md:w-max justify-between md:justify-center">
                <div className="flex gap-1 items-center">
                  <img src="/icons/timer-2.svg" alt="" className="w-[18px]" />
                  <span className="text-14 font-medium text-secondary-text-color">
                    Umur
                  </span>
                </div>
                <p className="text-16 text-black font-semibold">32 Tahun</p>
              </div>

              <Link
                to={"/head-family/family-member/manage-family-member"}
                className="w-full md:w-max"
              >
                <Button variant="black" customClass="w-full">
                  Manage
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </WrapperElement>
    </div>
  );
}
