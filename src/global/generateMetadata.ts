import { Metadata, ResolvingMetadata } from 'next';

type IGenerateMetadata = {
  params: { category: string; projectId: string };
};

export async function generateMetadata({ params }: IGenerateMetadata, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = params.category;

  // fetch data
  const product = await fetch(`http://danielribamar-001-site1.itempurl.com/api/v1/pages/${id}`).then((res) =>
    res.json()
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  //console.log(product);
  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages]
    }
  };
}
