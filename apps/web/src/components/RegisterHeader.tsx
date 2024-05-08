'use client';
import { usePathname } from 'next/navigation';
import { IoTicket } from 'react-icons/io5';
import Link from 'next/link';

export const RegisterHeader = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className={`${
        pathname == '/participants/register' || '/event-organizer/register'
          ? 'block'
          : 'hidden'
      }`}
    >
      <div className="navbar bg-blue-900 block">
        <div className="flex justify-center items-center w-full">
          <Link className="btn btn-ghost text-2xl text-white" href="/">
            <IoTicket size={30} /> GetTicket.Id
          </Link>
        </div>
      </div>
    </div>
  );
};
