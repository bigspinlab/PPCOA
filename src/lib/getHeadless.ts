
interface GetHeadlessProps {
  route: string;
}

export const getHeadless = async ({ route }: GetHeadlessProps) => {
  const url = `http://danielribamar-001-site1.itempurl.com/api/v1/pages/${route}`;
  const response = await fetch(url, {
    method: 'GET'
  });

  const umbracoContent = await response.json();
  return umbracoContent;
};
