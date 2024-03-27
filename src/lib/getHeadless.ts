interface GetHeadlessProps {
  route: string;
}

// Define a type parameter T for the response data
export const getHeadless = async <T>({ route }: GetHeadlessProps): Promise<T> => {
  const url = `https://danielribamar-001-site1.itempurl.com/api/v1/pages/${route}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-content-culture': 'en-US'
    }
  });

  const responseData: T = await response.json();
  return responseData;
};
