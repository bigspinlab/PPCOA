import { Filter } from '@/components/Filter';
import React from 'react';

export default function CategoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Filter />
      {children}
    </>
  );
}
