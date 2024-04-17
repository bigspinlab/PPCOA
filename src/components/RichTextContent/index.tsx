'use client';

import { getHeadless } from '@/api';
import { ROUTES } from '@/global/constants';
import { IHeadlessContentPage, IRichTextContent } from '@/types';
import { useQuery } from '@tanstack/react-query';
import parse from 'html-react-parser';

export default function RichTextContent({ params }: { params: { lang: string } }) {
  const { data: richTextData } = useQuery<IHeadlessContentPage>({
    queryKey: [ROUTES.privacyPolicy.queryKey],
    queryFn: () => getHeadless({ route: ROUTES.privacyPolicy.path, lang: params.lang })
  });
  const richText = richTextData?.widgets[0] as IRichTextContent;

  if (!richText) {
    return null;
  }

  return (
    <>
      <div className="w-full mb-24 font-bold sm:w-3/4">
        <h3 className="text-3xl">{richText?.content?.title}</h3>
      </div>
      {parse(`${richText?.content?.richText}`)}
    </>
  );
}
