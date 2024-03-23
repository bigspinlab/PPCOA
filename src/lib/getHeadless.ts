interface GetHeadlessProps {
  route: string;
  perPage?: number;
  pageNumber?: number;
  category: string;
}

export const getHeadless = async ({ route, pageNumber, perPage, category }: GetHeadlessProps) => {
  const url = `http://danielribamar-001-site1.itempurl.com/api/v1/pages/${route}?page=${pageNumber}&perPage=${perPage}&category=${category}`;
  const response = await fetch(url, {
    method: 'GET'
  });

  const umbracoContent = await response.json();
  return umbracoContent;
};
