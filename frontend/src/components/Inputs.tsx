import { ReactNode } from "react";

interface InputComponentIF {
  type: "text" | "number" | "email" | "password" | "file" | "textarea" | "date";
  placeholder: string;
  icons?: string;
  iconsRight?: string;
  isIconLeft?: boolean;
  isIconRight?: boolean;
  right?: string | ReactNode;
  customClass?: string;
  id?: string;
  rows?: number;
  value?: string;
  onClick?: (
    event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  ref?: React.ForwardedRef<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  readonly?: boolean;
}

export default function Inputs({
  type,
  rows,
  id,
  placeholder,
  icons,
  iconsRight,
  isIconLeft,
  isIconRight,
  customClass,
  value,
  onClick,
  ref,
  onChange,
  readonly,
  right,
}: InputComponentIF) {
  const inputClass = `${
    icons ? "pl-11 lg:pl-12" : ""
  } w-full text-black appearance-none font-medium focus:border-1.5 focus:border-dark-green outline-none transition-all rounded-2xl border border-bg-color p-3 lg:p-4 text-sm lg:text-base placeholder:text-secondary-text-color placeholder:font-medium placeholder:text-sm lg:placeholder:text-base placeholder:leading-normal ${customClass}`;

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
          readOnly={readonly}
          onClick={onClick as React.MouseEventHandler<HTMLTextAreaElement>}
          value={value}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={inputClass}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={id}
          readOnly={readonly}
          onClick={onClick as React.MouseEventHandler<HTMLInputElement>}
          value={value}
          ref={ref as React.Ref<HTMLInputElement>}
          type={type}
          className={inputClass}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          placeholder={placeholder}
        />
      )}
      {isIconRight ? (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 lg:w-6">
          <img src={iconsRight} alt="icons" />
        </div>
      ) : (
        right && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            {right}
          </div>
        )
      )}
    </div>
  );
}
