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
  const urlWithoutLanguageCode = url.replace(/\/(pt|en)/, '');

  return (
    <Link
      data-testid={id}
      className={isActive ? 'font-bold' : ''}
      href={`${urlWithoutLanguageCode}`}
      onClick={onRouteClick}
    >
      {label}
    </Link>
  );
}
