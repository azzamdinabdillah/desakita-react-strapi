import { ReactNode } from "react";

export default function TitlePage({
  title,
  subTitle,
  leftElement,
}: {
  title: string;
  subTitle?: ReactNode;
  leftElement?: ReactNode;
}) {
  return (
    <div className="flex justify-between items-center flex-wrap gap-3">
      <div className="gap-1 lg:gap-2 flex flex-col">
        {subTitle && (
          <div className="text-secondary-text-color font-normal text-sm lg:text-base">
            {subTitle}
          </div>
        )}
        <h1 className="text-xl lg:text-2xl text-black font-semibold">
          {title}
        </h1>
      </div>

      {leftElement}
    </div>
  );
}
