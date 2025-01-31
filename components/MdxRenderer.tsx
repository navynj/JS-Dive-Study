'use client';

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "@/styles/github-markdown.css";

const MdxRenderer = ({ mdxContents }: { mdxContents: { title: string; content: string }[] }) => {
  return (
    <div className="markdown w-full dark:text-white">
      {mdxContents.map((mdx, index) => (
        <div key={index} className="mb-10 sm:mb-20 p-6 bg-white dark:bg-gray-900 rounded-2xl">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              table: ({ children }) => (
                <div className="table-container">
                  <table>{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                  {children}
                </td>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-500 dark:border-gray-400 pl-4 italic text-gray-600 dark:text-gray-300">
                  {children}
                </blockquote>
              ),
              code: ({
                inline,
                className,
                children,
              }: {
                inline?: boolean;
                className?: string;
                children?: React.ReactNode;
              }) => {
                return inline ? (
                  <code className="bg-gray-100 dark:bg-gray-800 text-red-500 dark:text-red-400 px-2 py-1 rounded-md text-sm">
                    {children}
                  </code>
                ) : (
                  <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                    <code className={className}>{children}</code>
                  </pre>
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
