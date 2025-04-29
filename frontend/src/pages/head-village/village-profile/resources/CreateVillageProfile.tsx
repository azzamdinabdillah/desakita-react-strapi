import { useState } from "react";
import Button from "../../../../components/Button";
import Inputs from "../../../../components/Inputs";
import Label from "../../../../components/Label";
import TitlePage from "../../../../components/TitlePage";
import WrapperElement from "../../../../layouts/WrapperElement";
import { produce } from "immer";

export default function CreateVillageProfile() {
  const [thumbnails, setThumbnails] = useState<File[]>([]);

  function handleThumbnail(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    console.log(file);

    if (file) {
      setThumbnails(
        produce((draft) => {
          draft?.push(file);
        })
      );
    }
  }

  return (
    <div className="flex-wrapper">
      <TitlePage
        title="Create Profil Desa"
        subTitle={
          <p>
            Profile Desa{" "}
            <span className="text-dark-green font-medium">
              / Create Profile Desa
            </span>
          </p>
        }
      />

      <WrapperElement>
        <form className="flex-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-name">
              Thumbnail Profile Desa
            </Label>
            <div className="col-span-3 flex-wrapper">
              <div
                className={`images ${
                  thumbnails?.length <= 0 ? "hidden" : "flex-wrapper"
                }`}
              >
                {thumbnails?.map((img, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <img
                      src={URL.createObjectURL(img)}
                      alt=""
                      className="w-[120px] h-[100px] rounded-2xl object-cover"
                    />
                    <img
                      src="/icons/delete-image.svg"
                      alt=""
                      className="w-10 lg:w-14 cursor-pointer hover:scale-110 transition-all"
                      onClick={() => {
                        setThumbnails(
                          produce((draft) => {
                            draft?.splice(index, 1);
                          })
                        );
                      }}
                    />
                  </div>
                ))}
              </div>
              <label
                htmlFor="thumbnail-input"
                className="px-4 lg:px-6 py-3 lg:py-4 rounded-2xl bg-foreshadow flex items-center gap-3 w-full justify-center cursor-pointer"
              >
                <p className="text-dark-green text-center font-semibold text-sm lg:text-base cursor-pointer">
                  Tambah Gambar Desa
                </p>
                <input
                  onChange={handleThumbnail}
                  type="file"
                  id="thumbnail-input"
                  hidden
                />
                <img src="/icons/add-circle.svg" alt="" />
              </label>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-name">
              Nama Desa
            </Label>
            <div className="col-span-3">
              <Inputs
                id="village-name"
                placeholder="Ketik nama desa"
                isIconLeft={true}
                icons="/icons/building-4.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-location">
              Lokasi Desa
            </Label>
            <div className="col-span-3">
              <Inputs
                id="village-location"
                placeholder="Ketik alamat desa"
                type="textarea"
                rows={4}
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-leader">
              Nama Kepala Desa
            </Label>
            <div className="col-span-3">
              <Inputs
                id="village-leader"
                placeholder="Pilih Kepala Desa"
                isIconLeft={true}
                icons="/icons/user-square.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-between items-center">
            <Label
              customClass="col-span-2"
              labelFor="village-agriculture-width"
            >
              Luas Pertanian Desa
            </Label>
            <div className="col-span-3">
              <Inputs
                id="village-agriculture-width"
                placeholder="Masukan total luas pertanian"
                isIconLeft={true}
                icons="/icons/tree.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-area-width">
              Luas Area Desa
            </Label>
            <div className="col-span-3">
              <Inputs
                id="village-area-width"
                placeholder="Masukan total luas area"
                isIconLeft={true}
                icons="/icons/grid-5.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-total-citizen">
              Jumlah Penduduk Desa
            </Label>
            <div className="col-span-3">
              <Inputs
                id="village-total-citizen"
                placeholder="Masukan total penduduk desa"
                isIconLeft={true}
                icons="/icons/profile-2user.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-description">
              Deskripsi Tentang Desa
            </Label>
            <div className="col-span-3">
              <Inputs
                rows={6}
                id="village-description"
                placeholder="Jelaskan lebih detail tentang desa terkait"
                type="textarea"
              />
            </div>
          </div>

          <hr />

          <div className="flex justify-end gap-3">
            <Button variant="pink">Batal, Tidak jadi</Button>
            <Button variant="green">Create Now</Button>
          </div>
        </form>
      </WrapperElement>
    </div>
  );
}
