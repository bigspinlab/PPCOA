import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  projectName: string;
  category?: string;
}

export default function ProjectCard({
  id,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  projectName,
  category
}: ProjectCardProps) {
  return (
    <Link href={`/${category}/${id}`} className="flex flex-col gap-1.5">
      <Image className="shrink-0 aspect-square" alt={imageAlt} src={imageSrc} width={imageWidth} height={imageHeight} />
      <div className="flex flex-col">
        <h3 className="font-bold">{projectName}</h3>
        <p>{category}</p>
      </div>
    </Link>
  );
}
