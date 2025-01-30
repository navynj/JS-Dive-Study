'use client';

import { DataContext } from '@/provider/DataProvider';
import { MemberType } from '@/types/member';
import React, { useContext } from 'react';

const Profile = ({
  name,
  icon,
  size,
  transparent,
  className,
}: Partial<MemberType> & {
  size?: 'md' | 'xl';
  transparent?: boolean;
  className?: string;
}) => {
  const data = useContext(DataContext);

  let width = 'w-12';
  let text = 'text-sm';
  let iconSize = 'text-2xl';

  switch (size) {
    case 'md':
      width = 'w-16';
      text = 'text-md';
      break;
    case 'xl':
      width = 'w-40';
      text = 'text-4xl';
      iconSize = 'text-9xl';
      break;
  }

  return (
    <div className={'flex flex-col items-center justify-center ' + (className || '')}>
      <div
        className={`${
          transparent ? '' : 'bg-gray-100'
        } rounded-full ${width} aspect-square flex justify-center items-center ${iconSize}`}
      >
        {icon || data?.members?.find((member) => member.name === name)?.icon}
      </div>
      <p className={`font-extrabold ${text} text-center`}>
        {name && name[0].toUpperCase() + name.slice(1, name.length)}
      </p>
    </div>
  );
};

export default Profile;
