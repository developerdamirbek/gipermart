import React from "react";
import { Dialog } from "@headlessui/react";

export const Modal = ({ isOpen, close, children }) => {
  return (
    <Dialog open={isOpen} onClose={close}>
      <div className="fixed  bg-[#00000084] z-50 inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-[500px] rounded-lg bg-white px-[30px] py-[50px]">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
