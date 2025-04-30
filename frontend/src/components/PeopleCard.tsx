import { ReactNode } from "react";

export default function PeopleCard({
  image,
  name,
  job,
  right,
}: {
  image: string;
  name: string;
  job: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex gap-3 items-center w-full">
      <div className="bg-foreshadow rounded-full w-[50px] lg:w-[64px] overflow-hidden">
        <img src={image} alt="" className="w-full h-full" />
      </div>

      <div className="flex flex-col gap-1 lg:gap-[6px] flex-grow">
        <h3 className="text-base lg:text-[18px] font-semibold text-black whitespace-nowrap text-ellipsis overflow-hidden max-w-[120px] sm:max-w-full">
          {name}
        </h3>
        <div className="flex items-center gap-1">
          <img
            src="/icons/briefcase.svg"
            alt=""
            className="w-3.5 lg:w-[18px]"
          />
          <span className="text-14 font-medium text-secondary-text-color">
            {job}
          </span>
        </div>
      </div>

      <div>{right}</div>
    </div>
  );
}
