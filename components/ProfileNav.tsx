'use client';
import { DataContext } from '@/provider/DataProvider';
import Link from 'next/link';
import React, { useContext } from 'react';
import Profile from './Profile';
import { usePathname } from 'next/navigation';

const ProfileNav = () => {
  const pathname = usePathname();
  const data = useContext(DataContext);

  return (
    <ul className="flex gap-4 sm:flex-wrap">
      {data?.members?.map((member) => (
        <li key={member.name}>
          <Link
            href={`/${member.name}`}
            className={!pathname.includes(member.name) ? 'opacity-20' : ''}
          >
            <Profile {...member} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProfileNav;
