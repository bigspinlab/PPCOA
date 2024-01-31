import Image from 'next/image';

interface TeamCardProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  teamName: string;
  role: string;
  description: string;
  email: string;
  phoneNumber: string;
}

export default function TeamCard({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  teamName,
  role,
  description,
  email,
  phoneNumber
}: TeamCardProps) {
  return (
    <div className="flex flex-col gap-4 md:gap-8 xl:flex-row xl:items-start">
      <Image className="shrink-0 aspect-square" alt={imageAlt} src={imageSrc} width={imageWidth} height={imageHeight} />
      <div className="flex flex-col gap-2">
        <h2>{teamName}</h2>
        <p>{role}</p>
        <p>{description}</p>
        <a href={`mailto:${email}`}>{email}</a>
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
}
