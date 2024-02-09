

// import RootWrapper from '@/components/RootWrapper';
// import ProjectCard from '@/components/ProjectCard';
//import { useMediaQuery } from 'usehooks-ts';
import { Filter } from '@/components/Filter';
// import { GetStaticProps } from 'next';
// import { getHeadless } from '@/lib/getHeadless';
import ProjectsList from '@/components/ProjectsList';
import { Suspense } from 'react';

export default function Home() {
  // const umbracoContent = await getHeadless();
  // console.log('umbracoContent', umbracoContent);

  return (
    <>

      <Filter />
      <Suspense fallback={<div className="fixed top-16 bg-red-500 h-10">Loading...</div>}>
        <ProjectsList />      
      </Suspense>
 
    </>
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


