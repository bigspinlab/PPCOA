interface GetHeadlessProps {
  route: string;
  numberOfItems?: number;
  page?: number;
}

export const getHeadless = async ({ route, page, numberOfItems }: GetHeadlessProps) => {
  const url = `http://danielribamar-001-site1.itempurl.com/api/v1/pages/${route}?page=${page}&numberOfItems=${numberOfItems}`;
  const response = await fetch(url, {
    method: 'GET'
  });

  const umbracoContent = await response.json();
  return umbracoContent;
};
