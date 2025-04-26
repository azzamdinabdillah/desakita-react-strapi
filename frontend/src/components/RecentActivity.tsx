import { ReactNode } from "react";
import CardItemGeneral from "./CardItemGeneral";

export default function RecentActivity({
  date,
  mainTitle,
  title,
  subTitle,
  right,
  image,
  bottomLeft,
  bottomRight,
}: {
  date: string;
  mainTitle?: string;
  title: string;
  subTitle: string | ReactNode;
  right?: ReactNode;
  image?: string;
  bottomLeft?: string | ReactNode;
  bottomRight?: string | ReactNode;
}) {
  return (
    <div className="gap-4 lg:gap-4 flex-col flex rounded-2xl border border-bg-color p-3 lg:p-4">
      <div className="flex text-14 font-medium text-secondary-text-color justify-between items-center">
        <p>{date}</p>
        <img src="/icons/calendar-2.svg" alt="" />
      </div>

      <hr />

      {mainTitle && (
        <h2 className="text-18 font-semibold text-black">{mainTitle}</h2>
      )}

      <CardItemGeneral
        sizeVariant="small"
        image={image}
        title={title}
        subTitle={subTitle}
        right={right}
      />

      <hr />

      <div className="flex justify-between items-center flex-wrap gap-3">
        <p className="text-14 font-medium text-secondary-text-color flex gap-1 items-center">
          {bottomLeft}
        </p>
        <p className="text-16 font-medium text-soft-red">{bottomRight}</p>
      </div>
    </div>
  );
}
