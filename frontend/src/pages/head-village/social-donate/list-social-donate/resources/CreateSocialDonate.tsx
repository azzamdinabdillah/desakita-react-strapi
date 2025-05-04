import { useState } from "react";
import Label from "../../../../../components/Label";
import TitlePage from "../../../../../components/TitlePage";
import WrapperElement from "../../../../../layouts/WrapperElement";
import Button from "../../../../../components/Button";
import Inputs from "../../../../../components/Inputs";

export default function CreateSocialDonate() {
  const [imageProfile, setImageProfile] = useState<File | null | undefined>(
    null
  );
  return (
    <div className="flex-wrapper">
      <TitlePage
        title="Tambah Bantuan Sosial"
        subTitle={
          <p>
            Bantuan Sosial &nbsp;
            <span className="text-dark-green font-medium">
              /&nbsp; tambah bantuan sosial
            </span>
          </p>
        }
      />

      <WrapperElement>
        <form className="flex-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-name">
              Thumbnail Bantuan Sosial
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
              Nama Bantuan Sosial
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-name"
                placeholder="Tentukan nama bantuan sosial"
                isIconLeft={true}
                icons="/icons/edit-plain.svg"
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
                    Bahan Pokok
                  </div>
                  <img
                    src="/icons/bag-2-plain.svg"
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
                    Uang Tunai
                  </div>
                  <img
                    src="/icons/money-plain.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
                <label
                  htmlFor="gas"
                  className="label-radio label-input-radio md:flex-[40%]"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="gas"
                      name="head-gender"
                      className="input-radio-choose-gender"
                    />
                    BBM Subsidi
                  </div>
                  <img
                    src="/icons/gas-station.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
                <label
                  htmlFor="health"
                  className="label-radio label-input-radio md:flex-[40%]"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="health"
                      name="head-gender"
                      className="input-radio-choose-gender"
                    />
                    Kesehatan
                  </div>
                  <img src="/icons/health.svg" alt="" className="w-5 md:w-6" />
                </label>
              </div>
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-email">
              Nominal Bantuan
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-email"
                placeholder="Ketik nominal bantuan"
                isIconLeft={true}
                icons="/icons/dollar-square.svg"
                type="number"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="head-pw">
              Nama Pemberi Bantuan
            </Label>
            <div className="col-span-3">
              <Inputs
                id="head-pw"
                placeholder="Ketik nama orang atau organisasi"
                isIconLeft={true}
                icons="/icons/user-square.svg"
                type="text"
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="village-location">
              Deskripsi Bantuan Sosial
            </Label>
            <div className="col-span-3">
              <Inputs
                id="village-location"
                placeholder="Jelaskan lebih detail tentang bantuan"
                type="textarea"
                rows={5}
              />
            </div>
          </div>

          <hr />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:justify-between items-center">
            <Label customClass="col-span-2" labelFor="choose-is-available">
              Pilih Opsi Kategori
            </Label>
            <div className="col-span-3">
              <div className="flex flex-wrap gap-3 md:gap-6 ">
                <label
                  htmlFor="available"
                  className="label-radio label-input-radio md:flex-1"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="available"
                      name="is-available"
                      className="input-radio-choose-gender"
                    />
                    Tersedia
                  </div>
                  <img
                    src="/icons/tick-circle.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
                <label
                  htmlFor="not-available"
                  className="label-radio label-input-radio md:flex-1"
                >
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      id="not-available"
                      name="is-available"
                      className="input-radio-choose-gender"
                    />
                    Tidak Tersedia
                  </div>
                  <img
                    src="/icons/close-circle-2.svg"
                    alt=""
                    className="w-5 md:w-6"
                  />
                </label>
              </div>
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
