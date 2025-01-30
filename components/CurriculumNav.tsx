'use client';
import { DataContext } from '@/provider/DataProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';

const CurriculumNav = ({ hrefPrefix, size }: { hrefPrefix?: string; size?: 'sm' }) => {
  const pathname = usePathname();
  const data = useContext(DataContext);

  let chapterSize = 'text-[1.3rem]';
  let iconSize = 'text-2xl';
  let titleSize = 'text-md';
  let titlePadding = 'py-2';

  switch (size) {
    case 'sm':
      chapterSize = 'text-md';
      iconSize = 'text-lg';
      titleSize = 'text-sm';
      titlePadding = 'py-1';
      break;
  }

  return (
    <div className="flex gap-2">
      {data?.curriculum.map((chapter: any, i: number) => (
        <Link
          key={i}
          href={`${hrefPrefix ? hrefPrefix : ''}/chapter/${i + 1}`}
          className={`p-6 rounded-xl hover:shadow border border-white hover:border-gray-100 transition-all duration-400 ${
            pathname?.includes('/chapter/') && !pathname.includes((i + 1).toString())
              ? 'opacity-20'
              : ''
          }`}
        >
          <h5 className={`mb-4 ${chapterSize}`}>Chapter 0{i + 1}</h5>
          {chapter.map((part: any) => (
            <p
              className={`text-lg ${titlePadding} flex gap-2 items-center`}
              key={part.title}
            >
              <span className={iconSize}>{part.icon}</span>{' '}
              <span className={titleSize}>{part.title}</span>
            </p>
          ))}
        </Link>
      ))}
    </div>
  );
};

export default CurriculumNav;
