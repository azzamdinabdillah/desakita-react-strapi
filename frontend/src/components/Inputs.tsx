interface InputComponentIF {
  type: "text" | "number" | "email" | "password" | "file";
  placeholder: string;
  icons?: string;
  isIconLeft?: boolean;
  isIconRight?: boolean;
  customClass?: string;
}

export default function Inputs({
  type,
  placeholder,
  icons,
  isIconLeft,
  isIconRight,
  customClass,
}: InputComponentIF) {
  return (
    <div className="relative w-full">
      {isIconLeft && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 lg:w-6">
          <img src={icons} alt="icons" />
        </div>
      )}
      <input
        type={type}
        className={`${
          icons ? "pl-12 lg:pl-14" : ""
        } w-full focus:border-1.5 focus:border-dark-green outline-none transition-all rounded-2xl border border-bg-color p-3 lg:p-4 placeholder:text-secondary-text-color placeholder:font-medium placeholder:text-sm lg:placeholder:text-base placeholder:leading-normal ${customClass}`}
        placeholder={placeholder}
      />
      {isIconRight && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 lg:w-6">
          <img src={icons} alt="icons" />
        </div>
      )}
    </div>
  );
}
