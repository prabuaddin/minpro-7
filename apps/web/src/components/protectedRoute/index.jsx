'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const stateUser = useSelector((state) => state.user);

  const protectLoginPage = [
    '/event-organizer/login',
    '/event-organizer/register',
    '/participants/login',
    '/participants/register',
  ];

  const protectNotLoginPage = [
    '/event-organizer/profile',
    '/event-organizer/my-events',
    '/participants/profile',
    '/buatevent',
  ];

  if (stateUser.username && protectLoginPage.includes(pathname)) {
    router.push('/');
  } else if (!stateUser.username && protectNotLoginPage.includes(pathname)) {
    router.push('/');
  } else if (stateUser.roleId == 1 && pathname == '/event-organizer/profile') {
    router.push('/participants/profile');
  } else if (stateUser.roleId == 2 && pathname == '/participants/profile') {
    router.push('/event-organizer/profile');
  } else if (
    (stateUser.roleId == 1 && pathname == '/buatevent') ||
    (stateUser.roleId == 1 && pathname == '/event-organizer/my-events')
  ) {
    router.push('/participants/profile');
  }

  return <>{children}</>;
};

export default ProtectedRoute;
