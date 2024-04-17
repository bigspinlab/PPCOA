import { IHeadlessContentPage, ISeo } from '@/types';
import { getHeadless } from '.';
import { Metadata } from 'next';
import { websiteDomain } from '@/global/constants';

export const getStaticMetadata = async ({ params, route }: { params: { lang: string }; route: string }) => {
  const response = getHeadless<IHeadlessContentPage>({ route, lang: params.lang });

  const seoData: ISeo = (await response).seo;

  return {
    title: `PPCOA::${seoData?.title}`,
    description: seoData?.description,
    keywords: ['arquitectura', 'ppcoa', 'luanda', 'oficina', 'pedro pinto correia'],
    metadataBase: new URL('https://danielribamar-001-site1.itempurl.com/'),
    alternates: {
      canonical: `${websiteDomain}/${params.lang}${route}`,
      languages: {
        pt: `${websiteDomain}/pt${route}`,
        en: `${websiteDomain}/en${route}`
      }
    },
    openGraph: {
      images: [seoData?.imageSrc?.url]
    }
  } as Metadata;
};
