import { ReactNode } from "react";

export default function Button({
  children,
  variant,
  customClass,
}: {
  children: ReactNode;
  variant: "black" | "green" | "pink" | "white";
  customClass?: string;
}) {
  const variantClasses: { [key: string]: string } = {
    black: "bg-black text-white",
    green: "bg-dark-green text-white",
    pink: "bg-[#FF5070] text-white",
    white: "bg-white text-dark-green font-medium",
  };
  return (
    <button
      className={`flex cursor-pointer hover:opacity-80 items-center gap-2.5 py-3 px-4 lg:py-4 lg:px-6 rounded-xl lg:rounded-2xl text-sm lg:text-base font-medium leading-normal ${variantClasses[variant]} ${customClass}`}
    >
      {children}
    </button>
  );
}
