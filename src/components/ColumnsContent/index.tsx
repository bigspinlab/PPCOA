'use client';

import { getHeadless } from '@/api';
import { ROUTES } from '@/global/constants';
import { IContactColumnsItems, IContactPage, IHeadlessContentPage } from '@/types';
import { useQuery } from '@tanstack/react-query';
import parse from 'html-react-parser';

export default function ColumnsContent({ params }: { params: { lang: string } }) {
  const { data: columnsContentData } = useQuery<IHeadlessContentPage>({
    queryKey: [ROUTES.contact.queryKey],
    queryFn: () => getHeadless({ route: ROUTES.contact.path, lang: params.lang })
  });
  const columnsContent = columnsContentData?.widgets[0] as IContactPage;

  if (!columnsContentData) {
    return null;
  }

  return (
    <>
      <div className="w-full mb-24 font-bold sm:w-3/4">
        <h3 className="text-3xl">{columnsContent?.content?.headline}</h3>
      </div>
      <div className="w-full mb-24 ">
        <ul className="w-full grid grid-cols-1 gap-y-28 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {columnsContent?.content?.columns?.items?.map((column: IContactColumnsItems) => (
            <li key={column?.id}>
              <h2>{column?.title}</h2>
              <div>{parse(`${column?.text}`)}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
