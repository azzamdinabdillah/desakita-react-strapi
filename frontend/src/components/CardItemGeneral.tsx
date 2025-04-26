import { ReactNode } from "react";

export default function CardItemGeneral({
  image,
  title,
  subTitle,
  right,
  subTitleLeft,
  titleLeft,
  sizeVariant,
  imgSize,
  subTitleMaxWidth = "max-w-[150px]",
  titleMaxWidth = "max-w-[200px]",
}: {
  image?: string;
  title: string | ReactNode;
  subTitle: string | ReactNode;
  right?: ReactNode;
  subTitleLeft?: string | ReactNode;
  titleLeft?: string | ReactNode;
  sizeVariant?: "small" | "medium" | "large";
  imgSize?: string;
  subTitleMaxWidth?: string;
  titleMaxWidth?: string;
}) {
  return (
    <div className="flex gap-2 lg:gap-3 items-center">
      {image && (
        <img
          className={`${
            sizeVariant === "small"
              ? "h-[40px] lg:h-[52px]"
              : "w-[50px] lg:w-[72px]"
          } rounded-2xl object-cover ${imgSize}`}
          src={image}
          alt=""
        />
      )}
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
            } font-semibold whitespace-nowrap text-ellipsis overflow-hidden ${titleMaxWidth} capitalize lg:max-w-full`}
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
          <div
            className={`${subTitleMaxWidth} lg:max-w-full whitespace-nowrap overflow-hidden text-ellipsis`}
          >
            {subTitle}
          </div>
        </div>
      </div>
      <div className="width-fit">{right}</div>
    </div>
  );
}
