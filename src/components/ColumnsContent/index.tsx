'use client';

import { useGetHeadlessContent } from '@/hooks/useGetHeadlessContent';
import { IContactColumnsItems } from '@/types/home';
import parse from 'html-react-parser';

export default function ColumnsContent() {
  const { data: columnsContent } = useGetHeadlessContent({ route: 'contact', queryKey: 'contactContent' });

  if (!columnsContent) {
    return null;
  }

  return (
    <>
      <div className="w-full mb-24 font-bold sm:w-3/4">
        <h3 className="text-3xl">{columnsContent.widgets[0].content.headline}</h3>
      </div>
      <div className="w-full mb-24 ">
        <ul className="w-full grid grid-cols-1 gap-y-28 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {columnsContent.widgets[0].content.columns.items.map((column: IContactColumnsItems) => (
            <li key={column.id}>
              <h2>{column.title}</h2>
              <div>{parse(`${column.text}`)}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
