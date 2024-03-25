'use client';

import TeamCard from '@/components/TeamCard';
import { useGetHeadlessContent } from '@/hooks/useGetHeadlessContent';
import { ITeamMember } from '@/types/home';

export default function TeamCardList() {
  const { data: teamList } = useGetHeadlessContent({ route: 'team', queryKey: 'teamList' });

  if (!teamList) {
    return null;
  }

  return (
    <ul className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-y-36 lg:gap-x-8">
      {teamList.widgets[0].content.map((team: ITeamMember) => (
        <li key={team.id}>
          <TeamCard
            {...team}
          />
        </li>
      ))}
    </ul>
  );
}
