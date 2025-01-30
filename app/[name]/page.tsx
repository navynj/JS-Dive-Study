import React from 'react';

const PersonalPage = async ({
    params,
  }: {
    params: Promise<{ name: string }>
  }) => {
const name = (await params).name;
  return <div></div>;
};

export default PersonalPage;
