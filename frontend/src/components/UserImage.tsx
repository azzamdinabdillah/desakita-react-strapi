export default function UserImage({
  image,
  widthHeight,
  customClass,
}: {
  image: string;
  widthHeight: string;
  customClass?: string;
}) {
  return (
    <div
      className={`bg-foreshadow rounded-full ${widthHeight} overflow-hidden ${customClass}`}
    >
      <img src={image} alt="" className="w-full h-full" />
    </div>
  );
}
