import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { CodeBlock } from './CodeBlock';
import { LinkPreview } from './LinkPreview';
import { cn } from '../../lib/utils';

interface MarkdownRendererProps {
  content: string;
}

// Update component props typing
type HeadingProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type ParaProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
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

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="flex flex-col relative rounded-3xl text-xs bg-stone-50 dark:text-white dark:bg-neutral-950 w-full md:mr-10 h-[calc(100vh-120px)] md:my-10 p-6 overflow-y-auto">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Text Hierarchy
          h1: ({ className, children, ...props }: HeadingProps) => (
            <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl my-4", className)} {...props}>
              {children}
            </h1>
          ),
          h2: ({ className, children, ...props }: HeadingProps) => (
            <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10 first:mt-0", className)} {...props}>
              {children}
            </h2>
          ),
          h3: ({ className, children, ...props }: HeadingProps) => (
            <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight my-4", className)} {...props}>
              {children}
            </h3>
          ),
          h4: ({ className, children, ...props }: HeadingProps) => (
            <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight my-3", className)} {...props}>
              {children}
            </h4>
          ),
          // Paragraphs and Lists
          p: ({ className, children, ...props }: ParaProps) => (
            <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props}>
              {children}
            </p>
          ),
          ul: ({ className, children, ...props }: ListProps) => (
            <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
              {children}
            </ul>
          ),
          ol: ({ className, children, ...props }: OrderedListProps) => (
            <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)} {...props}>
              {children}
            </ol>
          ),
          // Tables
          table: ({ className, children, ...props }: TableProps) => (
            <div className={cn("my-6 w-full overflow-y-auto")}>
              <table className={cn("w-full border-collapse border border-gray-200 dark:border-gray-700", className)} {...props}>
                {children}
              </table>
            </div>
          ),
          thead: ({ className, children, ...props }: TableHeadProps) => (
            <thead className={cn("bg-gray-50 dark:bg-gray-800", className)} {...props}>
              {children}
            </thead>
          ),
          th: ({ className, children, ...props }: TableHeaderCellProps) => (
            <th className={cn("border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-bold", className)} {...props}>
              {children}
            </th>
          ),
          td: ({ className, children, ...props }: TableCellProps) => (
            <td className={cn("border border-gray-200 dark:border-gray-700 px-4 py-2", className)} {...props}>
              {children}
            </td>
          ),
          // Images
          img: ({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
            <div className="my-6 rounded-lg overflow-hidden">
              <img
                src={src || ''}
                alt={alt || ''}
                className={cn("object-cover w-full h-auto", className)}
                {...props}
              />
            </div>
          ),
          // Code blocks
          code: ({ inline, className, children, ...props }: CodeProps) => (
            <CodeBlock inline={inline} className={className} {...props}>
              {String(children)}
            </CodeBlock>
          ),
          // Links with preview
          a: ({ href, className, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
            if (href?.startsWith('preview:')) {
              return (
                <LinkPreview url={href.replace('preview:', '')} {...props}>
                  {children}
                </LinkPreview>
              );
            }
            return (
              <a 
                href={href} 
                className={cn("font-medium text-primary underline underline-offset-4 hover:text-primary/80", className)}
                {...props}
              >
                {children}
              </a>
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
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
