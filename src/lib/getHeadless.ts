interface GetHeadlessProps {
  route: string;
}

export const getHeadless = async ({ route }: GetHeadlessProps) => {
  const url = `https://danielribamar-001-site1.itempurl.com/api/v1/pages/${route}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-content-culture': 'en-US'
    }
  });

  const umbracoContent = await response.json();
  return umbracoContent;
};
