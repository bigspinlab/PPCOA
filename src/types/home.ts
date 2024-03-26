/* eslint-disable no-unused-vars */
import { CAROUSEL_ITEM_TYPE } from '@/ui-elements/CarouselItem';

export interface IProject {
  id?: string;
  title: string;
  category?: string;
  urlName?: string;
  urlNameAlias: string;
  image: {
    url: string;
    alt: string;
  };
}

export interface IProjectList {
  id: string;
  title: string;
  categoryList: string;
  categoryTheme: string;
  alias: string;
  content: IProject[];
  settings: {
    current_page: number;
    next_page: number;
    per_page: number;
    total_pages: number;
  };
}

export interface ICarouselItem {
  id: string;
  alias: string;
  carouselItemType: CAROUSEL_ITEM_TYPE;
  categoryTheme: string;
  content: {
    text: string;
    imageSrc: {
      url: string;
      alt: string;
    };
  };
  settings: {
    paddingRight: string;
    paddingLeft: string;
  };
}

export interface ICarousel {
  id: string;
  alias: string;
  categoryList: string;
  categoryThemeColor: string;
  content: ICarouselItem[];
}

export interface IRichTextContent {
  id: string;
  alias: string;
  content: {
    title: string;
    richText: string;
  };
}

export interface IImageText {
  id: string;
  alias: string;
  content: {
    title: string;
    firstParagraph: string;
    secondParagraph: string;
    image: {
      url: string;
      alt: string;
    };
    logo: {
      url: string;
      alt: string;
    };
  };
}

export interface ITeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc: {
    url: string;
    alt: string;
  };
  description: string;
  contact: {
    email: string;
    phone: string;
  };
}

export interface ITeamList {
  id: string;
  alias: string;
  content: ITeamMember[];
}

export enum FORM_TYPE_FIELDS {
  checkbox = 'checkbox',
  select = 'select',
  textArea = 'textarea',
  email = 'email'
}

export interface IFormOptions {
  id: string;
  value: string;
  label: string;
}

export interface IFormFields {
  id: string;
  label: string;
  placeholder: string;
  type: FORM_TYPE_FIELDS;
  required: boolean;
  options?: IFormOptions[];
  link?: string;
}

export interface IFormContact {
  form: {
    id: string;
    alias: string;
    title: string;
    fields: IFormFields[];
  };
}
export interface ISeo {
  title: string;
  description: string;
  imageSrc: {
    url: string;
    alt: string;
  };
}

export interface IHeadlessContentPage {
  widgets: (ICarousel | IRichTextContent | IImageText | ITeamList)[];
  seo: ISeo;
}

export enum FILTER_ICON {
  all = 'FilterIconAll',
  architecture = 'FilterIconArchitecture',
  contest = 'FilterIconContest',
  interior = 'FilterIconInterior',
  urban = 'FilterIconUrban'
}

export interface IContactColumnsItems {
  id: string;
  title: string;
  text: string;
}

export interface IContactColumns {
  id: string;
  alias: string;
  items: IContactColumnsItems[];
}
