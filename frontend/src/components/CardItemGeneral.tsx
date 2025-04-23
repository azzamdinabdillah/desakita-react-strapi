import { ReactNode } from "react";

export default function CardItemGeneral({
  image,
  title,
  subTitle,
  right,
  subTitleLeft,
  titleLeft,
  sizeVariant,
}: {
  image: string;
  title: string | ReactNode;
  subTitle: string;
  right?: ReactNode;
  subTitleLeft?: string | ReactNode;
  titleLeft?: string | ReactNode;
  sizeVariant?: "small" | "medium" | "large";
}) {
  return (
    <div className="flex gap-2 lg:gap-3 items-center">
      <img
        className={`${
          sizeVariant === "small"
            ? "h-[40px] lg:h-[52px]"
            : "w-[50px] lg:w-[72px]"
        } rounded-2xl`}
        src={image}
        alt=""
      />
      <div
        className={`flex flex-col ${
          sizeVariant === "small" ? "gap-[2px] lg:gap-1" : "gap-1 lg:gap-2"
        } overflow-hidden flex-grow`}
      >
        <div
          className={`flex items-center ${
            sizeVariant === "small" ? "gap-[2px] lg:gap-1" : "gap-1 lg:gap-2"
          }`}
        >
          {titleLeft && titleLeft}
          <h2
            className={`text-black ${
              sizeVariant === "small" ? "text-18" : "text-20"
            } font-semibold whitespace-nowrap text-ellipsis overflow-hidden max-w-[200px] capitalize lg:max-w-full`}
          >
            {title}
          </h2>
        </div>
        <div
          className={`flex items-center gap-[2px] ${
            sizeVariant === "small" ? "text-14" : "text-16"
          } text-secondary-text-color font-medium`}
        >
          {subTitleLeft && subTitleLeft}
          <span className="max-w-[150px] lg:max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
            {subTitle}
          </span>
        </div>
      </div>
      <div className="width-fit">{right}</div>
    </div>
  );
}
