import { IHeadlessContentPage, ISeo } from "@/types";
import { getProjectList } from ".";
import { Metadata } from "next";
import { websiteDomain } from "@/global/constants";

export const getCategoryMetadata = async ({ params }: { params: { lang: string, category: string; }}) => {
  const response = getProjectList<IHeadlessContentPage>({ lang: params.lang, category: params.category, pageNumber: 1, perPage: 1})

  const seoData: ISeo = (await response).seo;
  
  return {
    title: `PPCOA::${seoData?.title}`,
    description: seoData?.description,
    keywords: ['arquitectura', 'ppcoa', 'luanda', 'oficina', 'pedro pinto correia'],
    metadataBase: new URL('https://danielribamar-001-site1.itempurl.com/'),
    alternates: {
      canonical: `${websiteDomain}/${params.lang}/${params.category}`,
      languages: {
        'pt': `${websiteDomain}/pt/${params.category}`,
        'en': `${websiteDomain}/en/${params.category}`
      }
    },
    openGraph: {
      images: [seoData?.imageSrc?.url]
    }
  } as Metadata;
}