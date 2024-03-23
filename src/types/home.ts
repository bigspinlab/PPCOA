export interface IProject {
  id: string;
  title: string;
  category?: string;
  urlName: string;
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
  carouselItemType: string;
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

export interface IText {
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

export interface ISeo {
  title: string;
  description: string;
  imageSrc: {
    url: string;
    alt: string;
  };
}
