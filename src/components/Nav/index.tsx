import { useLockBodyScroll } from '@uidotdev/usehooks';
import NavRouteList from '../NavRouteList';

interface NavProps {
  onRouteClick: () => void;
  lang: string;
}

export default function Nav({ onRouteClick, lang }: NavProps) {
  useLockBodyScroll();

  return (
    <nav className="w-full flex justify-end">
      <NavRouteList lang={lang} onRouteClick={onRouteClick} />
    </nav>
  );
}
