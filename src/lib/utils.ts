/* eslint-disable no-unused-vars */
import { ICarousel, IRichTextContent, IImageText, ITeamList, IHeadlessContentPage } from '@/types/home';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define a union type for all possible widget types
type WidgetType = ICarousel | IRichTextContent | IImageText | ITeamList;

// Utility function to filter widgets by alias
export const filterWidgetsByAlias = <T extends WidgetType>(data: IHeadlessContentPage, alias: string): T[] => {
  if (!data || !data.widgets || !Array.isArray(data.widgets)) {
    return [];
  }

  return data.widgets.filter((widget) => widget.alias === alias) as T[];
};

export const capitalizeFirstLetter = (label: string): string => {
  return label.charAt(0).toUpperCase() + label.slice(1);
};

export enum BACKGROUND_COLOR {
  RED = 'bg-red-100',
  BLUE = 'bg-blue-100',
  GRAY = 'bg-gray-100',
  YELLOW = 'bg-yellow-100'
}

// Helper function to map color to Tailwind CSS class name
export const mapColorToClassName = (color: string): BACKGROUND_COLOR => {
  const bgColor = {
    ['#fa4647']: BACKGROUND_COLOR.RED,
    ['#006aad']: BACKGROUND_COLOR.BLUE,
    ['#6c757d']: BACKGROUND_COLOR.GRAY,
    ['#fabd5c']: BACKGROUND_COLOR.YELLOW
  };

  return bgColor[color as keyof typeof bgColor];
};

export function removeBaseUrl(fullUrl: string) {
  const baseUrl = 'https://danielribamar-001-site1.itempurl.com/';
  // Check if the fullUrl starts with the base URL
  if (fullUrl && fullUrl.startsWith(baseUrl)) {
    // Remove the base URL from the full URL
    return fullUrl.slice(baseUrl.length);
  }
  // Return the full URL if it doesn't start with the base URL
  return fullUrl;
}
