'use client';

import CurriculumNav from '@/components/CurriculumNav';
import Profile from '@/components/Profile';
import { DataContext } from '@/provider/DataProvider';
import { MemberType } from '@/types/member';
import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';

export default function Home() {
  const data = useContext(DataContext);

  return (
    <div className="flex flex-col items-center gap-20">
      <header>
        <div className="text-center my-8">
          <p className="font-black text-xl">CICCC WAD M-0125</p>
          <h2 className="text-6xl tracking-tighter">JS Dive Study</h2>
        </div>
        <CurriculumNav />
      </header>
      <main className="w-full overflow-x-scroll">
        <table className="w-full mb-40">
          <thead className="border-b-2 border-primary">
            <tr className="[&_th]:py-2 [&_th]:font-extrabold align-bottom text-left">
              <th>Chapter</th>
              <th>Topic</th>
              <th>Task</th>
              {data?.members.map((member) => (
                <th key={member.name}>
                  <Link href={`/${member.name}`}>
                    <Profile {...member} />
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.curriculum?.map((chapters: any, chapterIndex: number) =>
              chapters?.map((section: any, sectionIndex: number) => {
                const exercises: any[] = [];
                if (Array.isArray(section.content)) {
                  section.content.forEach((section: any) => {
                    if (section.children) {
                      exercises.push(
                        ...section.children.filter((item: any) => item.link)
                      );
                    }
                  });
                }
                return (
                  <React.Fragment key={`chapter-${chapterIndex}-section-${sectionIndex}`}>
                    <tr
                      className={
                        !exercises.length && sectionIndex === chapters.length - 1
                          ? 'border-b border-gray-300'
                          : undefined
                      }
                    >
                      <td className="font-semibold text-lg">
                        {sectionIndex === 0 &&
                          chapters.length &&
                          '0' + (chapterIndex + 1)}
                      </td>
                      <td className="font-semibold flex gap-2 items-center py-2">
                        <span className="text-xl">{section.icon}</span>
                        <span>{section.title}</span>
                      </td>
                      <td className="py-2">
                        {section.content?.length && (
                          <Link
                            className="underline"
                            href={`https://github.com/navynj/JS-Dive-Study/tree/main/public/guideline/chap0${
                              chapterIndex + 1
                            }/${sectionIndex + 1}_${section?.title?.toLowerCase() || ''}`}
                            target="_blank"
                          >
                            Study Note
                          </Link>
                        )}
                      </td>
                    </tr>
                    {exercises?.map((exercise, exIndex) => (
                      <tr
                        key={`exercise-${chapterIndex}-${sectionIndex}-${exIndex}`}
                        className={
                          exIndex === exercises.length - 1
                            ? 'border-b border-gray-300'
                            : undefined
                        }
                      >
                        <td></td>
                        <td></td>
                        <td className="py-2">
                          <Link
                            className="underline"
                            href={exercise?.link?.path || ''}
                            target="_blank"
                          >
                            Exercise {String(exIndex + 1).padStart(2, '0')}
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
}
