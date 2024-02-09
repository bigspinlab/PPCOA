import RootWrapper from '@/components/RootWrapper';
import TeamCardList from '@/components/TeamCardList';

export default function Team() {
  return (
    <RootWrapper>
      <h2 className="sr-only">Team list</h2>
      <article className="pt-44">
        <TeamCardList />
      </article>
    </RootWrapper>
  );
}
