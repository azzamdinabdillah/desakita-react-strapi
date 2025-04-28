import { ReactNode } from "react";

export default function Title({
  icon,
  title,
  subTitle,
  subTitleSizeVariant = "medium",
  right,
  customClass,
}: {
  right?: ReactNode;
  icon?: string;
  title?: string;
  subTitle?: string;
  subTitleSizeVariant?: "small" | "medium" | "large";
  customClass?: string;
}) {
  const subTitleSizeClass: { [key: string]: string } = {
    small: "text-14",
    medium: "text-16",
    large: "text-xl lg:text-2xl",
  };

  return (
    <div className={`flex justify-between items-center ${customClass}`}>
      <div className="lg:gap-1.5 flex flex-col">
        {title && (
          <h2 className="text-2xl lg:text-3xl text-black font-semibold">
            {title}
          </h2>
        )}
        <h3
          className={`${subTitleSizeClass[subTitleSizeVariant]} font-medium text-secondary-text-color`}
        >
          {subTitle}
        </h3>
      </div>

      {icon ? <img src={icon} alt="" className="w-11 lg:w-[56px]" /> : right}
    </div>
  );
}
