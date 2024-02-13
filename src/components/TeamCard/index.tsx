import Image from 'next/image';

interface TeamCardProps {
  imageSrc: string;
  imageAlt: string;
  teamName: string;
  role: string;
  description: string;
  email: string;
  phoneNumber: string;
}

export default function TeamCard({
  imageSrc,
  imageAlt,
  teamName,
  role,
  description,
  email,
  phoneNumber
}: TeamCardProps) {
  return (
    <div className="flex flex-col gap-4 md:gap-8 xl:grid xl:grid-cols-2">
      <div className="relative aspect-square">
        <Image
          className="shrink-0 aspect-square object-contain"
          alt={imageAlt}
          src={imageSrc}
          fill
          sizes="(min-width: 64em) 33vw, (min-width: 48em) 50vw, 100vw"
        />
      </div>
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
