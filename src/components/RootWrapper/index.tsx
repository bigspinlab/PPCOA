import React from 'react';

interface RootWrapperProps {
  children: React.ReactNode;
  customClassName?: string;
}

export default function RootWrapper({ children, customClassName = '' }: RootWrapperProps) {
  return <section className={`px-4 md:px-16 xl:px-32 max-w-screen-2xl mx-auto ${customClassName}`}>{children}</section>;
}
