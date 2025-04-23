export default function DetailsList({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string | number;
}) {
  return (
    <div className="flex gap-3 items-center">
      <img src={icon} alt="" />
      <div className="lg:gap-1 flex flex-col">
        <h5 className="text-black font-semibold text-base lg:text-[18px] leading-normal break-all">
          {value}
        </h5>
        <p className="text-secondary-text-color font-semibold text-16 leading-normal">
          {title}
        </p>
      </div>
    </div>
  );
}
