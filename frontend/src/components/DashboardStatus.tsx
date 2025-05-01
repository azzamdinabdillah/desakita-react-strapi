export default function DashboardStatus({
  title,
  type,
}: {
  title: string;
  type: "Diterima" | "Ditolak" | "Menunggu" | "softGreen" | "aksen" | "green";
}) {
  const variantClasses: { [key: string]: string } = {
    Menunggu: "bg-[#FBAD4A] text-white",
    Diterima: "bg-[#34613A] text-white",
    green: "bg-[#34613A] text-white",
    // Ditolak: "bg-[#FA7139] text-white",
    Ditolak: "bg-[#FF5070] text-white",
    softGreen: "bg-[#8EBD55] text-white",
    aksen: "bg-aksen text-white",
  };
  return (
    <div
      className={`status uppercase lg:min-w-[100px] text-center width-fit px-3 py-2 lg:p-3 rounded-full text-[10px] lg:text-xs font-semibold text-white ${variantClasses[type]}`}
    >
      {title}
    </div>
  );
}
