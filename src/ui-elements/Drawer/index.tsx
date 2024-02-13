import React from 'react';

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (isOpen: boolean) => void;
}

export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  return (
    <main
      className={
        'fixed top-16 overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out lg:top-0 lg:right-0 lg:bg-transparent lg:bg-opacity-0' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all delay-500 opacity-0 translate-x-full  ')
      }
    >
      <section
        className={
          'w-screen right-0 absolute bg-white h-dvh shadow-xl delay-400 duration-500 ease-in-out transition-all transform lg:h-auto lg:min-h-21 lg:flex lg:items-center lg:w-9/12 lg:right-24 lg:shadow-none' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <article className="relative w-screen flex flex-col space-y-6 overflow-y-scroll h-dvh lg:h-auto">
          {isOpen ? children : null}
        </article>
      </section>
      <section
        className="w-screen h-dvh cursor-pointer lg:relative lg:top-21 lg:bg-gray-900 lg:bg-opacity-25"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
