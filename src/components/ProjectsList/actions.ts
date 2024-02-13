import { getHeadless } from '@/lib/getHeadless';

export async function fetchProjectsList({ page = 1, category = 'all' }) {
  const { projects } = await getHeadless({ route: category, page });
  return projects;
}
