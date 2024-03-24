'use client'

import { useGetHeadlessContent } from '@/hooks/useGetHeadlessContent';
import parse from 'html-react-parser';

export default function RichTextContent() {
  const { data: richText } = useGetHeadlessContent({ route: 'privacy-policy', queryKey: 'privacyPolicyContent' });
 
  if (!richText) {
    return null;
  }

  return (
    <>
      <div className="w-full mb-24 font-bold sm:w-3/4">
        <h3 className="text-3xl">{richText.widgets[0].content.title}</h3>
      </div>
      {parse(`${richText.widgets[0].content.richText}`)}
    </>
  );
}