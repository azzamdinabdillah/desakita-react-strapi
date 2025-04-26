import { ReactNode } from "react";

export default function DetailsList({
  icon,
  title,
  value,
  titleColor,
  userImage,
  customClass,
}: {
  icon?: string;
  title: string;
  value: string | number | ReactNode;
  titleColor?: string;
  userImage?: ReactNode;
  customClass?: string;
}) {
  return (
    <div className={`flex gap-3 items-center ${customClass}`}>
      {icon && <img src={icon} alt="" />}
      {userImage && userImage}
      <div className="flex flex-col">
        <h5
          className={`font-semibold text-black text-base lg:text-[18px] leading-normal break-all ${titleColor}`}
        >
          {title}
        </h5>
        <p
          className={`text-secondary-text-color font-semibold text-16 leading-normal ${
            customClass === "flex-row-reverse" ? "text-end" : ""
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
