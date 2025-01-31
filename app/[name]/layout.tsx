import CurriculumNav from '@/components/CurriculumNav';
import Profile from '@/components/Profile';
import ProfileNav from '@/components/ProfileNav';
import Link from 'next/link';
import React from 'react';

const PersonalPageLayout = async ({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ name: string }>;
}>) => {
  const name = (await params).name;
  return <div>
    <div className='flex flex-col items-center gap-4 pt-4 mb-10'>
    <ProfileNav />
    <Link href={`/${name}`}>
      <Profile className='mt-4' name={name} transparent={true} size='xl' />
    </Link>
    <CurriculumNav hrefPrefix={`/${name}`} size='sm' />
    </div>
    {children}
  </div>;
};

export default PersonalPageLayout;
