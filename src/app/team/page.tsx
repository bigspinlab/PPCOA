import RootWrapper from '@/components/RootWrapper';
import TeamCardList from '@/components/TeamCardList';
import Rectangle from '@/ui-elements/Rectangle';

export default function Team() {
  return (
    <RootWrapper>
      <h2 className="sr-only">Team list</h2>
      <article className="pt-44">
        <Rectangle customStyles="bg-red-100 w-2/4 mb-9 sm:w-64 md:mb-20 lg:mb-28" />
        <TeamCardList />
        <Rectangle customStyles="bg-red-100 w-2/4 mt-9 ml-auto sm:w-64 sm:mr-9 md:mt-20 md:mr-28 lg:mt-28 lg:mr-72" />
      </article>
    </RootWrapper>
  );
}
