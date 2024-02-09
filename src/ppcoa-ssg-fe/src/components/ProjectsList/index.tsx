'use server';

import RootWrapper from '@/components/RootWrapper';
import ProjectCard from '@/components/ProjectCard';
import { getHeadless } from '@/lib/getHeadless';

export default async function ProjectsList() {
  const umbracoContent = await getHeadless({ route: 'view' });

  return (
    <RootWrapper>
      <h2 className="sr-only">Project list</h2>
      <article className="pt-14 md:pt-44">
        <ul className="w-full flex flex-col items-center gap-16 lg:gap-20">
          {umbracoContent?.projectsList?.content.map((project: any) => (
            <li key={project.id}>
              <ProjectCard
                id={project.id}
                imageSrc={project.imageSrc.desktop}
                imageAlt={project.imageSrc.alt}
                imageWidth={550}
                imageHeight={550}
                projectName={project.title}
                category={project.category}
              />
            </li>
          ))}
        </ul>
      </article>
    </RootWrapper>
  );
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {

//   if (!params) {
//     return {
//       notFound: true
//     };
//   }

//   try {
//     const umbracoContent = await getHeadless();

//     if (umbracoContent.meta?.Status === 404) {
//       throw new Error('Error to fetch the Umbraco Content');
//     }

//     console.log('umbracoContent', umbracoContent);

//     return {
//       props: {
//         umbracoContent
//       },
//       revalidate: 60
//     };

//   } catch (error) {
//     console.error(error);
//     return {
//       notFound: true
//     }
//   }

// }
