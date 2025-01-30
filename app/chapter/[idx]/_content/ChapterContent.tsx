'use client';
import Profile from '@/components/Profile';
import { DataContext } from '@/provider/DataProvider';
import Link from 'next/link';
import React, { useContext } from 'react';

const ChapterContent = ({ idx }: { idx: number }) => {
  const data = useContext(DataContext);
  return (
    <div>
      <h3 className="block text-center text-2xl mt-8 mb-6">Chapter 0{idx}</h3>
      <div className="flex gap-16 justify-center">
        {data?.curriculum &&
          data.curriculum[idx - 1]?.map((part: PartContentProps) => (
            <PartContent key={part.title} {...part} />
          ))}
      </div>
      <ul className="flex justify-center gap-4 mt-10 mb-40">
        {data?.members?.map((member) => (
          <Link key={member.name} href={`/${member.name}/chapter/${idx}`}>
            <Profile {...member} size="md" />
          </Link>
        ))}
      </ul>
    </div>
  );
};

interface PartContentProps {
  icon: string;
  title: string;
  content?: any[];
}

const PartContent = ({ icon, title, content }: PartContentProps) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 mb-6">
        <span className="text-8xl">{icon}</span>
        <h5 className="text-4xl">{title}</h5>
      </div>
      <div>
        {content?.map((section) => (
          <ul key={section.title} className="mb-6">
            <li className="font-extrabold text-lg">• {section?.content}</li>
            <ul className="ml-6">
              {section?.children?.map((item: any) =>
                item.link ? (
                  <Link
                    className="mt-2 block shrink-0 border border-gray-200 rounded-lg px-4 py-2"
                    key={item.link.title}
                    href={item.link.path || ''}
                  >
                    <p className="text-xs">{item.link.subtitle}</p>
                    <p className="text-sm">{item.link.title}</p>
                  </Link>
                ) : (
                  <li key={item.content}>• {item.content}</li>
                )
              )}
            </ul>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ChapterContent;
