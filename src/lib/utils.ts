import { ICarousel, IText, IImageText, ITeamList, IHeadlessContentPage } from '@/types/home';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// Define a union type for all possible widget types
type WidgetType = ICarousel | IText | IImageText | ITeamList;

// Utility function to filter widgets by alias
export const filterWidgetsByAlias = <T extends WidgetType>(data: IHeadlessContentPage, alias: string): T[] => {
  if (!data || !data.widgets || !Array.isArray(data.widgets)) {
    return [];
  }

  return data.widgets.filter(widget => widget.alias === alias) as T[];
};


export const capitalizeFirstLetter = (label: string): string => {
  return label.charAt(0).toUpperCase() + label.slice(1);
};