import Button from "./Button";

export default function TitlePage({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl lg:text-2xl text-black font-semibold leading-normal">
        {title}
      </h1>

      <Button variant="black">
        Edit Data
        <img className="w-4 lg:w-6" src="/icons/edit.svg" alt="" />
      </Button>
    </div>
  );
}
