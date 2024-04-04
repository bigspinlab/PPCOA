import { FILTER_ICON } from '@/types/home';

export interface IHeaderBrandlogo {
  id: number | string;
  alias: string;
  content: {
    url: string;
    alt: string;
  };
}

export interface IHeaderNavigationItems {
  id: number | string;
  label: string;
  url: string;
}

export interface IHeaderNavigationCategories {
  id: number | string;
  label: string;
  themeColor?: string;
  url: string;
  type?: FILTER_ICON;
}

export interface IHeaderNavigation {
  id: number | string;
  alias: string;
  content: {
    items: IHeaderNavigationItems[];
    categories: IHeaderNavigationCategories[];
  };
}

export interface IFooterImage {
  url: string;
  alt: string;
}

export interface IFooterGridColumns {
  id: number | string;
  text: string;
}

export interface IFooterLanguagesContent {
  id: number | string;
  name: string;
  value: string;
  code: string;
}

export interface IFooterLanguages {
  id: number | string;
  alias: string;
  content: {
    items: IFooterLanguagesContent[];
  };
}

export interface IHeadlessMaster {
  id: number | string;
  alias: string;
  content: {
    brandLogo: IHeaderBrandlogo;
    navigation: IHeaderNavigation;
    image: IFooterImage;
    gridColumns: IFooterGridColumns[];
    languages: IFooterLanguages;
  };
}
[];

export const getHeadlessMaster = async () => {
  const url = `https://danielribamar-001-site1.itempurl.com/api/v1/content/master`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-content-culture': 'pt'
    }
  });

  const umbracoContent = await response.json();
  return umbracoContent.widget as IHeadlessMaster[];
};
