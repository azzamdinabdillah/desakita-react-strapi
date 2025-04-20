import { ReactNode } from "react";

export default function Label({
  children,
  labelFor,
  customClass
}: {
  children: ReactNode;
  labelFor: string;
  customClass?: string;
}) {
  return (
    <label
      htmlFor={labelFor}
      className={`text-secondary-text-color font-semibold text-sm lg:text-base leading-normal ${customClass}`}
    >
      {children}
    </label>
  );
}
