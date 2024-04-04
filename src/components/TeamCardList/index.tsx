'use client';

import { getHeadless } from '@/api';
import TeamCard from '@/components/TeamCard';
import { ROUTES } from '@/global/constants';
import { IHeadlessContentPage, ITeamList, ITeamMember } from '@/types';
import { useQuery } from '@tanstack/react-query';

export default function TeamCardList({ params }: { params: { lang: string } }) {
  const { data: teamListData } = useQuery<IHeadlessContentPage>({ queryKey: [ROUTES.team.queryKey], queryFn: () => getHeadless({ route: ROUTES.team.path, lang: params.lang }) });
  const teamList = teamListData?.widgets[0] as ITeamList;

  if (!teamListData) {
    return null;
  }

  return (
    <ul className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-y-36 lg:gap-x-8">
      {teamList.content.map((team: ITeamMember) => (
        <li key={team.id}>
          <TeamCard {...team} />
        </li>
      ))}
    </ul>
  );
}
