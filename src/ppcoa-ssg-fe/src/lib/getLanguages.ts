export const getLanguages = async () => {
  const url = 'https://localhost:8000/master-page'
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      //'X-Api-Key': 
    }
  });
  const umbracoLanguages = await response.json();

  return umbracoLanguages.views.lpLanguages?.languages || [];
};
 