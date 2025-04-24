export default function DetailsList({
  icon,
  title,
  value,
  colorVariant = "blackSecondary",
}: {
  icon: string;
  title: string;
  value: string | number;
  colorVariant?: "greenSecondary" | "blackSecondary";
}) {
  return (
    <div className="flex gap-3 items-center">
      <img src={icon} alt="" />
      <div className="lg:gap-1 flex flex-col">
        <h5
          className={`${
            colorVariant === "greenSecondary" ? "text-dark-green" : "text-black"
          } font-semibold text-base lg:text-[18px] leading-normal break-all`}
        >
          {title}
        </h5>
        <p
          className={`${
            colorVariant === "greenSecondary"
              ? "text-secondary-text-color"
              : "text-secondary-text-color"
          } font-semibold text-16 leading-normal`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
