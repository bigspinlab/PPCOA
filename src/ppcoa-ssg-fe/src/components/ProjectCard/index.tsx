import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  imageSrc: string;
  imageAlt: string;
  projectName: string;
  category?: string;
}

export default function ProjectCard({ id, imageSrc, imageAlt, projectName, category }: ProjectCardProps) {
  return (
    <Link href={`/${category}/${id}`} className="flex flex-col gap-1.5">
      <div className="relative aspect-square">
        <Image
          className="shrink-0 aspect-square object-contain min-w-72 min-h-72"
          alt={imageAlt}
          src={imageSrc}
          fill
          sizes="(min-width: 48em) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold">{projectName}</h3>
        <p>{category}</p>
      </div>
    </Link>
  );
}
