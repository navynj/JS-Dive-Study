'use client';

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown 지원
import rehypeRaw from "rehype-raw"; // HTML 태그 렌더링 지원
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // 코드 하이라이트 스타일

import "@/styles/markdown.css"; // GitHub 스타일을 적용할 CSS 파일 추가

const MdxRenderer = ({ mdxContents }: { mdxContents: { title: string; content: string }[] }) => {
  return (
    <div className="markdown-body">
      {mdxContents.map((mdx, index) => (
        <div key={index}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children }) => <h1 className="md-heading-1">{children}</h1>,
              h2: ({ children }) => <h2 className="md-heading-2">{children}</h2>,
              h3: ({ children }) => <h3 className="md-heading-3">{children}</h3>,
              h4: ({ children }) => <h4 className="md-heading-4">{children}</h4>,
              h5: ({ children }) => <h5 className="md-heading-5">{children}</h5>,
              h6: ({ children }) => <h6 className="md-heading-6">{children}</h6>,
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {mdx.content}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default MdxRenderer;
