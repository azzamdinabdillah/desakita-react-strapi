import { ReactNode } from "react";
import Button from "./Button";

export default function Modal({
  isOpen,
  setIsOpen,
  message,
  confirm,
  header,
  confirmButtonElement,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  message: string;
  confirm?: () => void;
  header: string;
  confirmButtonElement: ReactNode | string;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/70 flex items-center justify-center transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="rounded-2xl overflow-hidden lg:max-w-[335px] m-4">
        <div className="top bg-black flex justify-between items-center p-4">
          <h1 className="text-16 text-white font-medium">{header}</h1>
          <img
            className="cursor-pointer hover:scale-110 transition-all"
            src="/icons/close-modal.svg"
            alt=""
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="p-4 bg-white flex flex-col gap-3">
          <p className="text-sm font-medium text-secondary-text-color leading-6">
            {message}
          </p>

          <hr />

          <div className="flex gap-3">
            <Button variant="borderTextBlack" onClick={() => setIsOpen(false)}>
              Batal
            </Button>
            {confirmButtonElement}
          </div>
        </div>
      </div>
    </div>
  );
}
