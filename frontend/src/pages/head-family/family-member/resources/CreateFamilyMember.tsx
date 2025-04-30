import { forwardRef, useState } from "react";
import Button from "../../../../components/Button";
import Inputs from "../../../../components/Inputs";
import Label from "../../../../components/Label";
import TitlePage from "../../../../components/TitlePage";
import WrapperElement from "../../../../layouts/WrapperElement";
import DatePicker from "react-datepicker";

export default function CreateFamilyMember() {
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
      placeholder="Masukan tanggal lahir"
      isIconLeft={true}
      icons="/icons/calendar-2-2.svg"
      type="text"
    />
  ));

  return (
    <div className="flex-wrapper">
      <TitlePage
        title="Tambah Anggota Keluarga Baru"
        subTitle={
          <p>
            Anggota Keluarga &nbsp;
            <span className="text-dark-green font-medium">
              /&nbsp; Tambah Anggota Keluarga
            </span>
          </p>
        }
      />

      <WrapperElement>
        <form className="flex-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-name">
              Foto Profile
            </Label>
            <div className="flex items-center justify-between w-full col-span-3">
              <img
                src={
                  imageProfile
                    ? URL.createObjectURL(imageProfile)
                    : "/icons/placeholder-upload-profile.svg"
                }
                alt=""
                className="w-[80px] md:w-[100px] h-[80px] md:h-[100px] rounded-full object-cover"
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
            <Label customClass="col-span-2" labelFor="village-total-citizen">
              Jenis Kelamin
            </Label>
            <div className="col-span-3">
              <div className="grid grid-cols-2 gap-3 md:gap-6 ">
                <label
                  htmlFor="gender-men"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="gender-men"
                      name="head-gender"
                      className="input-radio-choose-gender"
                    />
                    Pria
                  </div>
                  <img src="/icons/man.svg" alt="" className="w-5 md:w-6" />
                </label>
                <label
                  htmlFor="gender-woman"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="gender-woman"
                      name="head-gender"
                      className="input-radio-choose-gender"
                    />
                    Wanita
                  </div>
                  <img src="/icons/woman.svg" alt="" className="w-5 md:w-6" />
                </label>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-name">
              Nama
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-name"
                placeholder="Masukan nama lengkap"
                isIconLeft={true}
                icons="/icons/user-gray.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-nik">
              Nomor Induk Kependudukan
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-nik"
                placeholder="Ketik NIK"
                isIconLeft={true}
                icons="/icons/keyboard-2.svg"
                type="number"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-phone-number">
              Pekerjaan
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-phone-number"
                placeholder="Masukan nama pekerjaan"
                isIconLeft={true}
                icons="/icons/briefcase-2.svg"
                type="number"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-phone-number">
              Nomor Handphone
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-phone-number"
                placeholder="Masukan No. HP yang aktif"
                isIconLeft={true}
                icons="/icons/call.svg"
                type="number"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-date-birth">
              Tanggal Lahir
            </Label>
            <div className="col-span-3">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
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

                <div className="md:max-w-[180px] w-full p-3 md:p-4 flex justify-center items-center text-16 font-medium text-dark-green rounded-2xl border border-foreshadow bg-foreshadow">
                  Umur:{" "}
                  {new Date().getFullYear() -
                    (startDate?.getFullYear()
                      ? startDate?.getFullYear()
                      : new Date().getFullYear())}{" "}
                  tahun
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-total-citizen">
              Status
            </Label>
            <div className="col-span-3">
              <div className="grid grid-cols-1 gap-3 md:gap-6 md:grid-cols-2">
                <label
                  htmlFor="status-nonmerried"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="status-nonmerried"
                      name="head-status"
                      className="input-radio-choose-gender"
                    />
                    Belum Menikah
                  </div>
                  <img
                    src="/icons/nonmerried.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
                <label
                  htmlFor="status-merried"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="status-merried"
                      name="head-status"
                      className="input-radio-choose-gender"
                    />
                    Menikah
                  </div>
                  <img src="/icons/merried.svg" alt="" className="w-5 md:w-6" />
                </label>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-total-citizen">
              Kategori Keluarga
            </Label>
            <div className="col-span-3">
              <div className="grid grid-cols-1 gap-3 md:gap-6 md:grid-cols-3">
                <label
                  htmlFor="category-wife"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="category-wife"
                      name="category"
                      className="input-radio-choose-gender"
                    />
                    Istri
                  </div>
                </label>
                <label
                  htmlFor="category-child"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="category-child"
                      name="category"
                      className="input-radio-choose-gender"
                    />
                    Anak
                  </div>
                </label>
                <label
                  htmlFor="category-husband"
                  className="label-radio label-input-radio"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="category-husband"
                      name="category"
                      className="input-radio-choose-gender"
                    />
                    Suami
                  </div>
                </label>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-email">
              Email
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-email"
                placeholder="Masukan Email"
                isIconLeft={true}
                icons="/icons/sms.svg"
                type="email"
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
