'use client';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname == '/participants/register' || '/event-organizer/register'
          ? 'hidden'
          : 'block'
      }`}
    >
      <div className="bg-blue-900 h-20">Header</div>;
    </div>
  );
};
