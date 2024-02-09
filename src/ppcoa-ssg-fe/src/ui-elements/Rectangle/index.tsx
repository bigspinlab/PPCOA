import React from 'react';

interface RectangleProps {
  customStyles: string;
}

export default function Rectangle({ customStyles }: RectangleProps) {
  return (
    <div className={`h-10 ${customStyles}`}></div>
  );
}
