export default function Title({
  icon,
  title,
  subTitle,
}: {
  icon?: string;
  title?: string;
  subTitle: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="lg:gap-1.5 flex flex-col">
        {title && (
          <h2 className="text-2xl lg:text-3xl text-black font-semibold">
            {title}
          </h2>
        )}
        <h3 className="title-container-wrapper">{subTitle}</h3>
      </div>

      {icon && <img src={icon} alt="" className="w-11 lg:w-[56px]" />}
    </div>
  );
}
