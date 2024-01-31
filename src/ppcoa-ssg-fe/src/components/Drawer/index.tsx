import React from "react";
import { createPortal } from "react-dom";

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (isOpen: boolean) => void;
}

export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {

  return createPortal(
    <main
      className={
        " fixed top-16 overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen right-0 absolute bg-white h-dvh shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen pb-10 flex flex-col space-y-6 overflow-y-scroll h-dvh">
          {isOpen ? children : null}
        </article>
      </section>
      <section
        className=" w-screen h-dvh cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  , document.body);
}
