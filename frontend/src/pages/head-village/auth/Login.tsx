import { Link } from "react-router";
import Button from "../../../components/Button";
import Inputs from "../../../components/Inputs";
import Label from "../../../components/Label";

export default function Login() {
  return (
    <div className="grid lg:grid-cols-2 p-3 lg:p-3 h-dvh lg:h-full place-items-center">
      <div className="p-4 py-4 lg:p-8 h-fit max-w-[430px] lg:max-w-[486px] w-full bg-white gap-6 lg:gap-8 flex flex-col items-center rounded-3xl">
        <img
          className="max-w-[150px] lg:max-w-[197px]"
          src="/images/login-logo.png"
          alt=""
        />

        <div className="flex flex-col gap-1 lg:gap-2 items-center justify-center w-full">
          <h1 className="text-black text-center text-lg lg:text-2xl font-semibold capitalize">
            Halo🙌🏻, Selamat datang!
          </h1>
          <p className="text-secondary-text-color text-center font-semibold text-sm lg:text-base leading-normal">
            Silahkan masuk untuk melanjutkan
          </p>
        </div>

        <div className="flex gap-2 lg:gap-6 w-full">
          <label
            htmlFor="village-leader"
            className="label-radio flex-grow justify-between cursor-pointer p-3 py-2.5 lg:p-5 gap-2 flex border items-center border-bg-color rounded-2xl text-secondary-text-color text-sm lg:text-base font-normal leading-normal"
          >
            Kepala Desa
            <img src="/icons/crown.svg" alt="" className="w-5 lg:w-6 " />
            <input
              type="radio"
              id="village-leader"
              name="village-role"
              className="input-radio-choose-role-login"
              hidden
            />
          </label>
          <label
            htmlFor="home-leader"
            className="label-radio flex-grow justify-between cursor-pointer p-3 py-2.5 lg:p-5 gap-2 flex border items-center border-bg-color rounded-2xl text-secondary-text-color text-sm lg:text-base font-normal leading-normal"
          >
            Kepala Rumah
            <img
              src="/icons/profile-circle.svg"
              alt=""
              className="w-5 lg:w-6"
            />
            <input
              type="radio"
              id="home-leader"
              name="village-role"
              className="input-radio-choose-role-login"
              hidden
            />
          </label>
        </div>

        <div className="flex gap-5 lg:gap-6 flex-col w-full">
          <div className="flex flex-col gap-2 lg:gap-4">
            <Label labelFor="email">Email Address</Label>
            <Inputs
              id="email"
              placeholder="Ketik nama desa"
              isIconLeft={true}
              icons="/icons/user.svg"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <Label labelFor="password">Password</Label>
            <Inputs
              id="password"
              placeholder="Ketik nama desa"
              isIconLeft={true}
              icons="/icons/key.svg"
              type="password"
            />
          </div>
        </div>

        <div className="w-full">
          <Link to="/">
            <Button variant="green" customClass="w-full justify-center">
              Masuk
            </Button>
          </Link>
        </div>
      </div>
      <div className="gap-9 flex-col hidden lg:flex rounded-3xl login-right px-[40px] py-[60px]">
        <div className="gap-3 flex flex-col">
          <p className="text-[#DEFF6E] text-sm font-medium capitalize">
            — Best Dashboard in the world
          </p>
          <h1 className="text-white text-[32px] font-bold capitalize">
            The simple way to manage <br /> your citizens
            <img
              src="/images/login-people.png"
              alt=""
              className="inline ml-2 w-[100px]"
            />
          </h1>
        </div>
        <img
          src="/images/login-right-preview-dashboard.png"
          alt=""
          className="object-contain"
        />
        <div className="gap-4 flex flex-col">
          <p className="text-[#DEFF6E] text-sm font-medium capitalize">
            — Best Dashboard in the world
          </p>
          <div className="gap-6 flex items-center">
            <img src="/icons/login-logo-1.svg" alt="" />
            <img src="/icons/login-logo-2.svg" alt="" />
            <img src="/icons/login-logo-3.svg" alt="" />
            <img src="/icons/login-logo-4.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
