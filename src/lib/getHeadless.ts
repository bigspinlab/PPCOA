interface GetHeadlessProps {
  route: string;
  page?: number;
}

export const getHeadless = async ({ route, page }: GetHeadlessProps) => {
  //const masterPageParam = isMasterPage ? 'handle=master$' : '';
  //const mountedMarketCode = `https://localhost:8000/${languageCode}/${marketKey}/`;
  //const url = `https://api.${environmentMap[env]}.bigspinlab.com/cx-cslight-headless-contentdelivery/handler?${masterPageParam}url=${mountedMarketCode}`;

  const url = `http://localhost:8000/${route}?page=${page}`;
  const response = await fetch(url, {
    method: 'GET'
    // headers: {
    //   'Content-Type': 'application/json',
    //   'X-Api-Key': enterspeedApiKey
    // }
  });

  // if (isMasterPage) {
  //   const umbracoMasterPage = await response.json();
  //   return umbracoMasterPage;
  // }

  const umbracoContent = await response.json();
  return umbracoContent;
};
