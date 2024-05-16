'use server';
import { cookies } from 'next/headers';

export const setCookie = (accessToken) => {
  cookies().set('acctkn', accessToken);
};

export const getCookie = async () => {
  return await cookies().get('acctkn');
};

export const deleteCookieToken = async () => {
  return await cookies().delete('acctkn');
};
