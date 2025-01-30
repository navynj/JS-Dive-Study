import React from 'react'
import ChapterContent from './_content/ChapterContent';

const ChapterPage = async ({
  params,
}: {
  params: Promise<{ idx: string }>
}) => {
  const idx = (await params).idx;
  return <ChapterContent idx={+idx} />
}

export default ChapterPage