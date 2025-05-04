import { forwardRef, useState } from "react";
import Label from "../../../../../components/Label";
import TitlePage from "../../../../../components/TitlePage";
import WrapperElement from "../../../../../layouts/WrapperElement";
import Button from "../../../../../components/Button";
import Inputs from "../../../../../components/Inputs";
import DatePicker from "react-datepicker";

export default function CreateVillageDevelopmentSchedule() {
  const [imageProfile, setImageProfile] = useState<File | null | undefined>(
    null
  );
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
      id="head-date-birth"
      placeholder="Pilih tanggal pembangunan"
      isIconLeft={true}
      isIconRight={true}
      iconsRight="/icons/arrow-right-plain-2.svg"
      icons="/icons/calendar-2-2.svg"
      type="text"
    />
  ));

  return (
    <div className="flex-wrapper">
      <TitlePage
        title="Tambah Pembangunan Desa"
        subTitle={
          <p>
            Pembangunan Desa &nbsp;
            <span className="text-dark-green font-medium">
              /&nbsp; Tambah Pembangunan Desa
            </span>
          </p>
        }
      />

      <WrapperElement>
        <form className="flex-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-name">
              Total Dana Pembangunan
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-name"
                placeholder="Ketik dana yang dibutuhkan"
                isIconLeft={true}
                icons="/icons/wallet-3-plain.svg"
                type="number"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-name">
              Thumbnail Event Terkait
            </Label>
            <div className="flex items-center justify-between w-full col-span-3">
              <img
                src={
                  imageProfile
                    ? URL.createObjectURL(imageProfile)
                    : "/images/placeholder-upload-thumbnail-bansos.png"
                }
                alt=""
                className="w-[100px] md:w-[120px] h-[80px] md:h-[100px] rounded-3xl object-cover"
              />
              <Button
                variant="black"
                onClick={() =>
                  (
                    document.querySelector(
                      "#upload-profile-image"
                    ) as HTMLInputElement
                  )?.click()
                }
              >
                <img src="/icons/send-square.svg" alt="" />
                Upload
              </Button>
              <input
                type="file"
                hidden
                id="upload-profile-image"
                onChange={(e) => setImageProfile(e.target.files?.[0])}
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-name">
              Nama Projek Pembangunan
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-name"
                placeholder="Ketik nama project pembangunan"
                isIconLeft={true}
                icons="/icons/edit-plain.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-name">
              Penanggung Jawab
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-name"
                placeholder="Ketik penanggung jawab"
                isIconLeft={true}
                icons="/icons/profile-circle.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-total-citizen">
              Pilih Opsi Kategori
            </Label>
            <div className="col-span-3">
              <div className="flex flex-wrap gap-3 md:gap-6 ">
                <label
                  htmlFor="main-material"
                  className="label-radio label-input-radio md:flex-[40%]"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="main-material"
                      name="head-gender"
                      className="input-radio-choose-gender"
                    />
                    On Going
                  </div>
                  <img
                    src="/icons/tick-circle.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
                <label
                  htmlFor="money"
                  className="label-radio label-input-radio md:flex-[40%]"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="money"
                      name="head-gender"
                      className="input-radio-choose-gender"
                    />
                    Completed
                  </div>
                  <img
                    src="/icons/close-circle-3.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-date-birth">
              Tanggal Pembangunan
            </Label>
            <div className="col-span-3">
              <DatePicker
                className="w-full flex-grow"
                selected={startDate}
                maxDate={new Date()}
                showYearDropdown
                scrollableYearDropdown
                showMonthDropdown
                yearDropdownItemNumber={100}
                onChange={(date: Date | null) =>
                  setStartDate(date ?? new Date())
                }
                placeholderText="Masukan tanggal lahir"
                customInput={<CustomInputDate className="w-full" />}
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-pw">
              Hari yang dibutuhkan
            </Label>
            <div className="col-span-3">
              <Inputs
                right={
                  <p className="text-secondary-text-color font-medium text-16">
                    Hari
                  </p>
                }
                id="head-pw"
                placeholder="Ketik hari yang dibutuhkan"
                isIconLeft={true}
                icons="/icons/timer.svg"
                type="number"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-location">
              Deskripsi Pembangunan
            </Label>
            <div className="col-span-3">
              <Inputs
                id="village-location"
                placeholder="Jelaskan lebih detail tentang pembangunan"
                type="textarea"
                rows={5}
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
