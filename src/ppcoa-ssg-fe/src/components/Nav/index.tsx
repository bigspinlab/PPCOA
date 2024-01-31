import { useLockBodyScroll } from '@uidotdev/usehooks';
import NavRouteList from '../NavRouteList';

interface NavProps {
  onRouteClick: () => void;
}

export default function Nav({ onRouteClick }: NavProps) {
  useLockBodyScroll();

  return (
    <nav className="w-full flex lg:justify-end">
      <NavRouteList onRouteClick={onRouteClick} />
    </nav>
  );
}
