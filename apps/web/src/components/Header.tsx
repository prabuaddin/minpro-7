'use client';
import { usePathname } from 'next/navigation';
import { IoHome } from "react-icons/io5";
import { FaCalendarPlus } from 'react-icons/fa';
import { FaRegCompass } from 'react-icons/fa6';
import { IoTicket } from 'react-icons/io5';
import Link from 'next/link';

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className="navbar bg-blue-900">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link href='/'>
            <li>
              <p><IoHome/>Beranda</p>
            </li>
            </Link>
            <Link href='/buatevent'>
            <li>
              <p><FaCalendarPlus/>Buat Event</p>
            </li>
            </Link>
            <Link href='/carievent'>
            <li>
              <p><FaRegCompass/>Cari Event</p>
            </li>
            </Link>
            
          </ul>
        </div>
        <Link href={'/'}>
          <h1 className='flex text-xl font-bold items-center text-white gap-1'>
            <IoTicket />
            GetTicket.Id
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <Link href='/'>
          <li>
            <p><IoHome/>Beranda</p>
          </li>
          </Link>
          <Link href='/buatevent'>
          <li>
            <p><FaCalendarPlus/>Buat Event</p>
          </li>
          </Link>
          <Link href='/carievent'>
          <li>
            <p><FaRegCompass/>Cari Event</p>
          </li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <button className='btn bg-black mr-3 text-white hidden lg:block'>Daftar</button>
        <button className='btn bg-blue-400'>Masuk</button>
      </div>
    </div>
  );
};
