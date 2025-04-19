import { ReactNode } from "react";

export default function Button({
  children,
  variant,
}: {
  children: ReactNode;
  variant: "black" | "white";
}) {
  const variantClasses: { [key: string]: string } = {
    black: "bg-black text-white",
  };
  return (
    <button
      className={`flex items-center gap-2.5 py-3 px-4 lg:py-4 lg:px-6 rounded-2xl text-xs lg:text-base font-medium leading-normal ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}
