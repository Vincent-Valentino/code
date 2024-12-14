import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'
import { cn } from '../../lib/utils'
import { Alert, Card, Badge } from './CustomMarkdownComponents'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
  content?: string;
  filePath?: string;
}

// Update component props typing
type HeadingProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & { node?: any };
type ParaProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> & { node?: any };
type ListProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
type TableProps = React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
type TableHeadProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
type TableCellProps = React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
type OrderedListProps = React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
type TableHeaderCellProps = React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
type BlockquoteProps = React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
type CodeProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  inline?: boolean;
};
type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const components = {
  // Text Hierarchy
  h1: ({ className, children, ...props }: HeadingProps) => (
    <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl my-4", className)} {...props}>
      {children}
    </h1>
  ),
  h2: ({ className, children, ...props }: HeadingProps) => (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-32 first:mt-0", className)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ className, children, ...props }: HeadingProps) => (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight mt-6 -mb-3", className)} {...props}>
      {children}
    </h3>
  ),
  h4: ({ className, children, ...props }: HeadingProps) => (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight my-3 ", className)} {...props}>
      {children}
    </h4>
  ),
  // Paragraphs
  p: ({ className, children, ...props }: ParaProps) => (
    <p className="leading-6 [&:not(:first-child)]:mt-6 text-base roboto-condensed mb-6" {...props}>
      {children}
    </p>
  ),
  // Lists
  ul: ({ className, children, ...props }: ListProps) => (
    <ul className={cn("mb-6 -mt-5 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
      {children}
    </ul>
  ),
  ol: ({ className, children, ...props }: OrderedListProps) => (
    <ol className={cn("mb-6 -mt-5 ml-6 list-decimal [&>li]:mt-2", className)} {...props}>
      {children}
    </ol>
  ),
  // Tables
  table: ({ className, children, ...props }: TableProps) => (
    <div className="my-6 w-full h-auto">
      <table className={cn("min-w-[400px] w-full border-collapse text-sm", className)} {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ className, children, ...props }: TableHeadProps) => (
    <thead className={cn("bg-slate-100 dark:bg-slate-800", className)} {...props}>
      {children}
    </thead>
  ),
  tr: ({ className, children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        "border-b border-slate-200 dark:border-slate-700",
        "transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  ),
  th: ({ className, children, ...props }: TableHeaderCellProps) => (
    <th
      className={cn(
        "h-10 px-4 text-left align-middle font-medium",
        "text-slate-700 dark:text-slate-200",
        "[&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ className, children, ...props }: TableCellProps) => (
    <td
      className={cn(
        "p-4 align-middle",
        "text-slate-700 dark:text-slate-300",
        "[&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    >
      {children}
    </td>
  ),
  // Let `react-markdown` handle `pre` and `code` structure.
  code: ({ inline, className, children, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : 'typescript'; // Default to typescript

    if (inline) {
      return (
        <code className="px-1.5 py-0.5 rounded-sm bg-slate-800 font-mono text-sm text-gray-200" {...props}>
          {children}
        </code>
      );
    }

    // For code blocks:
    return (
      <CodeBlock language={language}>
        {Array.isArray(children) ? children.join('') : (children ?? '').toString().replace(/\n$/, '')}
      </CodeBlock>
    );
  },
  // Blockquotes
  blockquote: ({ className, children, ...props }: BlockquoteProps) => (
    <blockquote className={cn("mt-6 border-l-2 border-primary pl-6 italic", className)} {...props}>
      {children}
    </blockquote>
  ),
  // Horizontal Rule
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className={cn("my-4 border-gray-200 dark:border-gray-800", className)} {...props} />
  ),
  // Details and Summary
  details: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <details {...props}>
      {children}
    </details>
  ),
  summary: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <summary className="cursor-pointer font-semibold" {...props}>
      {children}
    </summary>
  ),
  // Custom components handler via div
  div: ({ className, children, ...props }: DivProps) => {
    // Handle Alert
    if (className === 'alert') {
      const type = (props as any).type || 'info';
      return <Alert type={type as 'info' | 'warning' | 'error'}>{children}</Alert>;
    }

    // Handle Card
    if (className === 'card') {
      return <Card>{children}</Card>;
    }

    // Handle Badge
    if (className === 'badge') {
      return <Badge>{children}</Badge>;
    }

    // Default div rendering
    return <div className={className} {...props}>{children}</div>;
  }
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, filePath }) => {
  const [mdContent, setMdContent] = useState(content || '');

  useEffect(() => {
    if (filePath) {
      fetch(filePath)
        .then((response) => response.text())
        .then((text) => setMdContent(text))
        .catch((error) => {
          console.error('Error fetching markdown file:', error);
        });
    }
  }, [filePath]);

  return (
    <div className="flex flex-col relative rounded-3xl text-xs bg-stone-50 dark:text-stone-100 dark:bg-neutral-950 w-full md:mr-10 h-[calc(100vh-120px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent md:my-10 p-12">
      <div className="absolute w-[500px] h-[300px] top-0 left-2 -translate-x-1/2 bg-gradient-to-r dark:from-violet-400 dark:to-indigo-500 from-violet-200 to-indigo-200 opacity-30 blur-3xl rounded-full"></div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {mdContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
