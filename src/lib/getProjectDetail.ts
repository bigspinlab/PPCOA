interface GetProjectDetailProps {
  projectName: string;
}

export const getProjectDetail = async ({ projectName }: GetProjectDetailProps) => {
  const url = `https://danielribamar-001-site1.itempurl.com/api/v1/projects?route=/projects/${projectName}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-content-culture': 'en-US'
    }
  });

  const umbracoContent = await response.json();
  return umbracoContent;
};
