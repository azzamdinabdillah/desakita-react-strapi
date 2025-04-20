import { ReactNode } from "react";

export default function WrapperElement({
  children,
  customClass,
}: {
  children: ReactNode;
  customClass?: string;
}) {
  return (
    <div
      className={`p-5 lg:p-6 bg-white rounded-2xl w-full gap-5 lg:gap-6 flex flex-col ${customClass}`}
    >
      {children}
    </div>
  );
}
