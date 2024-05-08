'use client'
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname()
  
  return <div className={`${pathname === '/participants/register' || '/event-organizer/register' ? 'hidden' : 'bg-blue-900 h-20'}`}>Footer</div>;
};