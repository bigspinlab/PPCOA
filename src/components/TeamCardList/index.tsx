import TeamCard from '@/components/TeamCard';

export default function TeamCardList() {
  return (
    <ul className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-y-36 lg:gap-x-8">
      {Array.from({ length: 9 }).map((_, index) => (
        <li key={index}>
          <TeamCard
            imageSrc="https://via.placeholder.com/550"
            imageAlt="Pedro Pinto Correia"
            teamName="Pedro Pinto Correia"
            role="Fundador/Arquiteto"
            description="Pedro Oliveira Santos Pinto Correia é um arquitecto luso-angolano, nascido em Lisboa a 8 de março de 1981. Estudou na Faculdade de Arquitectura da Universidade Lusíada de Lisboa entre 1999 e 2004, efectuando posteriormente o seu Estágio Profissional em Madrid com o Arquitecto Andrés Jaque, entre 2004 e 2008. "
            email="pedro@pedropintocorreia.com"
            phoneNumber="+351 912 345 678"
          />
        </li>
      ))}
    </ul>
  );
}
