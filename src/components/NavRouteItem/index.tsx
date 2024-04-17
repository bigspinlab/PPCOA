import { IHeaderNavigationItems } from '@/lib/getHeadlessMaster';
import Link from 'next/link';

interface NavRouteItemProps extends IHeaderNavigationItems {
  onRouteClick: () => void;
  isActive: boolean;
}

export default function NavRouteItem({ onRouteClick, id, label, url = '/', isActive }: NavRouteItemProps) {
  if (!url) {
    return null;
  }

  return (
    <Link data-testid={id} className={isActive ? 'font-bold' : ''} href={url} onClick={onRouteClick}>
      {label}
    </Link>
  );
}
