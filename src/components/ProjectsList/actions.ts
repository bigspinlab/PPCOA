export async function getProjectsList({ page = 1 }: { page: number }) {
  const response = await fetch(`http://localhost:8000/widgets?_page=${page}`);
  const projects = await response.json();
  return projects;
}
