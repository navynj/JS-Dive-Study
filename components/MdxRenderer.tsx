"use client";

import { useEffect, useState } from "react";
import { getHighlighter } from "shiki";

const MdxRenderer = ({ code }: { code: string }) => {
  return null;
  // const [highlightedCode, setHighlightedCode] = useState("");

  // useEffect(() => {
  //   async function highlight() {
  //     const highlighter = await getHighlighter({ theme: "github-dark" });
  //     setHighlightedCode(highlighter.codeToHtml(code, { lang: "javascript" }));
  //   }
  //   highlight();
  // }, [code]);

  // return <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
};

export default MdxRenderer;
