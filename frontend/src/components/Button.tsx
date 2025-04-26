import { ReactNode } from "react";

export default function Button({
  children,
  variant,
  customClass,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  variant:
    | "black"
    | "green"
    | "pink"
    | "white"
    | "borderTextBlack"
    | "grayTextRed";
  customClass?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  const variantClasses: { [key: string]: string } = {
    black: "bg-black text-white",
    green: "bg-dark-green text-white",
    pink: "bg-[#FF5070] text-white",
    white: "bg-white text-dark-green font-medium",
    borderTextBlack: "bg-white border border-bg-color text-black font-medium",
    grayTextRed: "bg-[#ff5070]/[0.09] text-soft-red font-medium",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex cursor-pointer justify-center hover:opacity-80 items-center gap-2.5 py-3 px-4 lg:py-4 lg:px-6 rounded-xl lg:rounded-2xl text-sm lg:text-base font-medium leading-normal ${variantClasses[variant]} ${customClass}`}
    >
      {children}
    </button>
  );
}
