import { IProjectList } from '@/types/home';

interface GetProjectListProps {
  perPage: number;
  pageNumber: number;
  category: string;
}

export const getProjectList = async ({ pageNumber, perPage, category = 'todos' }: GetProjectListProps) => {
  const url = `https://danielribamar-001-site1.itempurl.com/api/v1/categories/${category}?page=${pageNumber}&perPage=${perPage}`;
  const response = await fetch(url, {
    method: 'GET'
  });

  const umbracoContent = await response.json();
  return umbracoContent.widgets as IProjectList[];
};
