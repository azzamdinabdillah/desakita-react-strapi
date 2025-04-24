import { forwardRef, useEffect, useState } from "react";
import Button from "../../../components/Button";
import Inputs from "../../../components/Inputs";
import Label from "../../../components/Label";
import TitlePage from "../../../components/TitlePage";
import WrapperElement from "../../../layouts/WrapperElement";
import { produce } from "immer";
import DatePicker from "react-datepicker";

export default function CreateHeadHouse() {
  const [thumbnails, setThumbnails] = useState<File[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const CustomInputDate = forwardRef<
    HTMLInputElement,
    {
      value?: string;
      onClick?: () => void;
      className?: string;
    }
  >(({ value, onClick, className }, ref) => (
    <Inputs
      readonly={true}
      customClass={className || ""}
      value={value as string}
      onClick={onClick}
      ref={ref && undefined}
      id="head-name"
      placeholder="Masukan tanggal lahir"
      isIconLeft={true}
      icons="/icons/calendar-2-2.svg"
      type="text"
    />
  ));

  useEffect(() => {
    console.log(startDate?.getFullYear());
    console.log(new Date().getFullYear());

    console.log(
      new Date().getFullYear() -
        (startDate?.getFullYear()
          ? startDate?.getFullYear()
          : new Date().getFullYear())
    );
  }, [startDate]);

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
        title="Tambah Kepala Rumah Baru"
        subTitle={
          <p>
            Kepala Rumah
            <span className="text-dark-green font-medium">
              / Tambah Kepala Rumah
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
            <Label customClass="col-span-2" labelFor="head-name">
              Nama Kepala Rumah
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-name"
                placeholder="Masukan nama lengkap"
                isIconLeft={true}
                icons="/icons/user.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-nik">
              Nomor Induk Kependudukan
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-nik"
                placeholder="Ketik NIK"
                isIconLeft={true}
                icons="/icons/keyboard-2.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-phone-number">
              Nomor Handphone
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-phone-number"
                placeholder="Masukan No. HP yang aktif"
                isIconLeft={true}
                icons="/icons/call.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-job">
              Pekerjaan
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-job"
                placeholder="Masukan nama pekerjaan"
                isIconLeft={true}
                icons="/icons/briefcase-2.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-date-birth">
              Tanggal Lahir
            </Label>
            <div className="col-span-3">
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) =>
                  setStartDate(date ?? new Date())
                }
                placeholderText="Masukan tanggal lahir"
                customInput={<CustomInputDate className="add-date" />}
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
