import { ITeamMember } from '@/types/home';
import Image from 'next/image';

export default function TeamCard({ contact, description, id, imageSrc, name, role }: ITeamMember) {
  return (
    <div className="flex flex-col gap-4 md:gap-8 xl:grid xl:grid-cols-2">
      <div className="relative aspect-square">
        <Image
          className="shrink-0 aspect-square object-contain data-[loaded=false]:animate-pulse data-[loaded=false]:bg-muted"
          alt={`team-${id}-${imageSrc.alt}`}
          src={imageSrc.url}
          fill
          sizes="(min-width: 64em) 33vw, (min-width: 48em) 50vw, 100vw"
          data-loaded="false"
          onLoad={(event) => {
            event.currentTarget.setAttribute('data-loaded', 'true');
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2>{name}</h2>
        <p>{role}</p>
        <p>{description}</p>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <p>{contact.phone}</p>
      </div>
    </div>
  );
}
