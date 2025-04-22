import { Link } from "react-router";
import TitlePage from "../../components/TitlePage";
import Button from "../../components/Button";
import Inputs from "../../components/Inputs";

export default function HeadHouse() {
  return (
    <div className="flex flex-col gap-6">
      <TitlePage
        title="Kepala Rumah"
        leftElement={
          <Link to={"/village-profile/create-village-profile"}>
            <Button variant="green">
              <img className="w-5 lg:w-6" src="/icons/add-square.svg" alt="" />
              Add New
            </Button>
          </Link>
        }
      />

      <div>
        <div className="top flex flex-wrap justify-between items-center gap-3">
          <div className="md:max-w-[370px] w-full">
            <Inputs
              type="text"
              isIconLeft={true}
              icons="/icons/user-search.svg"
              placeholder="Cari nama Kepala Rumah atau NIK"
              customClass="bg-white"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-[10px]">
              <p className="text-16 font-medium text-black">Show</p>
              <div className="relative">
                <img
                  src="/icons/arrow-down.svg"
                  alt=""
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 lg:w-6"
                />
                <select
                  name=""
                  id=""
                  className="appearance-none rounded-2xl pr-10 lg:pr-14 bg-white p-3.5 lg:p-4 text-black font-medium text-16 w-full"
                >
                  <option value="">5 Entries</option>
                  <option value="">10 Entries</option>
                  <option value="">50 Entries</option>
                  <option value="">500 Entries</option>
                </select>
              </div>
            </div>

            <Button variant="white">
              <img src="/icons/filter.svg" alt="" />
              Filter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
