import { IHeadlessContentPage, ISeo } from '@/types';
import { getProjectDetail } from '.';
import { Metadata } from 'next';
import { websiteDomain } from '@/global/constants';

export const getProjectIdMetadata = async ({
  params
}: {
  params: { category: string; projectId: string; lang: string };
}) => {
  const response = getProjectDetail<IHeadlessContentPage>({ lang: params.lang, projectName: params.projectId });

  const seoData: ISeo = (await response).seo;

  return {
    title: `PPCOA::${seoData?.title}`,
    description: seoData?.description,
    keywords: ['arquitectura', 'ppcoa', 'luanda', 'oficina', 'pedro pinto correia'],
    metadataBase: new URL('https://danielribamar-001-site1.itempurl.com/'),
    alternates: {
      canonical: `${websiteDomain}/${params.lang}/${params.category}/${params.projectId}`,
      languages: {
        pt: `${websiteDomain}/pt/${params.category}/${params.projectId}`,
        en: `${websiteDomain}/en/${params.category}/${params.projectId}`
      }
    },
    openGraph: {
      images: [seoData?.imageSrc?.url]
    }
  } as Metadata;
};
