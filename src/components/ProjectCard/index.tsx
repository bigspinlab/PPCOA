import { IProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  image,
  title,
  urlName = '/',
  category,
  id,
  showCategoryText
}: IProject & { showCategoryText: boolean }) {
  return (
    <Link href={`${urlName}?category=${category?.toLowerCase()}`} className="flex flex-col gap-1.5">
      <div className="relative aspect-square">
        <Image
          className="shrink-0 aspect-square object-cover min-w-72 min-h-72 data-[loaded=false]:animate-pulse data-[loaded=false]:bg-muted"
          alt={`project-${id}-${image.alt}`}
          src={image.url}
          fill
          sizes="(min-width: 48em) 50vw, 100vw"
          data-loaded="false"
          onLoad={(event) => {
            event.currentTarget.setAttribute('data-loaded', 'true');
          }}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold">{title}</h3>
        {showCategoryText ? <p className="text-gray-100 capitalize">{category}</p> : null}
      </div>
    </Link>
  );
}
