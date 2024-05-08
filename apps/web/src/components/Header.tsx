
'use client';
import { usePathname } from 'next/navigation';
import SearchInput from "./Search";
import { FaCalendarPlus } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";

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
      <div className="navbar bg-blue-900">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">
            <IoTicket size={20} /> GetTicket.Id
          </a>
        </div>
        <div className="flex-none">
          <SearchInput />
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <a>
                <FaCalendarPlus /> Buat Event
              </a>
            </li>
            <li>
              <a>
                <FaRegCompass /> Cari Event
              </a>
            </li>
            <li>
              <button className="bg-slate-900 border border-white hover:bg-slate-500">
                Daftar
              </button>
            </li>
            <li>
              <button className="bg-blue-400 ml-3 hover:bg-blue-700">
                Masuk
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
