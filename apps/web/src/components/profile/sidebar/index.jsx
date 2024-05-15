'use client';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { IoIosStats } from 'react-icons/io';
import Link from 'next/link';

export default function SideBar() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const stateUser = useSelector((state) => state.user);

  useEffect(() => {
    if (stateUser?.username) {
      setUsername(stateUser.username);
      setEmail(stateUser.email);
      setRole(stateUser.roleId);
    }
  }, [stateUser]);

  useEffect(() => {
    if (stateUser?.username) {
      setUsername(stateUser.username);
      setEmail(stateUser.email);
      setRole(stateUser.roleId);
    }
  }, []);
  return (
    <div className="sm:hidden md:block">
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r-2">
        <div className="flex flex-col items-center mt-6 -mx-2">
          <RxAvatar className="object-cover w-24 h-24 mx-2 rounded-full text-black" />

          <h4 className="mx-2 mt-2 font-medium text-black">{username}</h4>

          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            {email}
          </p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <a
              className="flex items-center px-4 py-2 text-black bg-white rounded-lg hover:text-gray-500 "
              href={`${role == 1 ? '/participants/profile' : '/event-organizer/profile'}`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="mx-4 font-medium">Dashboard</span>
            </a>
            <a
              className={`${role == 2 ? 'flex items-center px-4 py-2 text-black bg-white rounded-lg hover:text-gray-500 ' : 'hidden'}`}
              href="/event-organizer/my-events"
            >
              <IoIosStats className="text-xl text-blue-900" />

              <span className="mx-4 font-medium"> My Events </span>
            </a>
          </nav>
        </div>
      </aside>
    </div>
  );
}
