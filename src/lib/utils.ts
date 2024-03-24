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
  GREEN = 'bg-green-100',
  YELLOW = 'bg-yellow-100'
}

// Helper function to map color to Tailwind CSS class name
export const mapColorToClassName = (color: string): BACKGROUND_COLOR => {
  switch (color) {
    case '#fabd5c':
      return BACKGROUND_COLOR.YELLOW;
    case '#fa4647':
      return BACKGROUND_COLOR.RED;
    case '#006aad':
      return BACKGROUND_COLOR.BLUE;
    case '#6c757d':
      return BACKGROUND_COLOR.GREEN;
    default:
      return BACKGROUND_COLOR.YELLOW; // Return yellow for unknown colors
  }
};
