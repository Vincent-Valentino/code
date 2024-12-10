import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  language?: string;
  children: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language = 'typescript', children }) => {
  // Ensure the content is properly stringified
  const content = typeof children === 'string' ? children : String(children);
  
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      className="rounded-md"
      showLineNumbers
    >
      {content}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
