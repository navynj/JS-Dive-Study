import { redirect } from 'next/navigation';
import React from 'react';

const RedirectChapter = () => {
  return redirect('/chapter/1');
};

export default RedirectChapter;
