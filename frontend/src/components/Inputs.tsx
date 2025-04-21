interface InputComponentIF {
  type: "text" | "number" | "email" | "password" | "file" | "textarea";
  placeholder: string;
  icons?: string;
  isIconLeft?: boolean;
  isIconRight?: boolean;
  customClass?: string;
  id?: string;
  rows?: number;
}

export default function Inputs({
  type,
  rows,
  id,
  placeholder,
  icons,
  isIconLeft,
  isIconRight,
  customClass,
}: InputComponentIF) {
  const inputClass = `${
    icons ? "pl-11 lg:pl-12" : ""
  } w-full text-black font-medium focus:border-1.5 focus:border-dark-green outline-none transition-all rounded-2xl border border-bg-color p-3 lg:p-4 text-sm lg:text-base placeholder:text-secondary-text-color placeholder:font-medium placeholder:text-sm lg:placeholder:text-base placeholder:leading-normal ${customClass}`;
  return (
    <div className="relative w-full">
      {isIconLeft && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 lg:w-6">
          <img src={icons} alt="icons" />
        </div>
      )}
      {type === "textarea" ? (
        <textarea
          rows={rows}
          id={id}
          className={inputClass}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className={inputClass}
          placeholder={placeholder}
        />
      )}
      {isIconRight && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 lg:w-6">
          <img src={icons} alt="icons" />
        </div>
      )}
    </div>
  );
}
