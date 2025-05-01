import { ReactNode } from "react";

interface PeopleCardIF {
  image: string;
  name: string;
  job: string;
  right?: ReactNode;
  nik?: string;
  age?: number;
}

export default function PeopleCard({ image, name, job, right }: PeopleCardIF) {
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

export function PeopleCardComplete({
  image,
  name,
  job,
  nik,
  age,
  right,
}: PeopleCardIF) {
  return (
    <>
      <div className="flex flex-wrap gap-4 md:justify-between md:items-center rounded-xl md:rounded-2xl border border-bg-color p-3 md:p-6">
        <div>
          <PeopleCard image={image} name={name} job={job} />
        </div>

        <div className="flex gap-1 md:flex-col w-full md:w-max justify-between md:justify-center">
          <div className="flex gap-1 items-center">
            <img src="/icons/keyboard.svg" alt="" />
            <span className="text-14 font-medium text-secondary-text-color">
              NIK
            </span>
          </div>
          <p className="text-16 text-black font-semibold">{nik}</p>
        </div>

        <div className="flex gap-1 md:flex-col w-full md:w-max justify-between md:justify-center">
          <div className="flex gap-1 items-center">
            <img src="/icons/timer-2.svg" alt="" className="w-[18px]" />
            <span className="text-14 font-medium text-secondary-text-color">
              Umur
            </span>
          </div>
          <p className="text-16 text-black font-semibold">{age} Tahun</p>
        </div>

        {right && right}
      </div>
    </>
  );
}
