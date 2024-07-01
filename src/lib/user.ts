import { headers } from 'next/headers';

export const getIPAddress = () => {
  const header = headers();
  const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];
  return ip;
};
