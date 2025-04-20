import { ReactNode } from "react";

export default function Button({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "black" | "green" | "pink";
}) {
  const variantClasses: { [key: string]: string } = {
    black: "bg-black text-white",
    green: "bg-dark-green text-white",
    pink: "bg-[#FF5070] text-white",
  };
  return (
    <button
      className={`flex items-center gap-2.5 py-3 px-4 lg:py-4 lg:px-6 rounded-xl lg:rounded-2xl text-xs lg:text-base font-medium leading-normal ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}
