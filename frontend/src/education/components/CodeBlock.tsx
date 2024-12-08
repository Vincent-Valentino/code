// src/components/CodeBlock.tsx
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  className?: string
  children: string | string[]
  inline?: boolean
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ inline, className, children }) => {
  const code = Array.isArray(children) ? children.join('') : children
  
  if (inline) {
    return <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">{code}</code>;
  }

  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : 'text'

  // Extended language support map
  const languageMap: { [key: string]: string } = {
    js: 'javascript',
    ts: 'typescript',
    jsx: 'jsx',
    tsx: 'tsx',
    py: 'python',
    rb: 'ruby',
    rs: 'rust',
    go: 'go',
    java: 'java',
    kt: 'kotlin',
    swift: 'swift',
    cpp: 'cpp',
    c: 'c',
    cs: 'csharp',
    php: 'php',
    html: 'html',
    css: 'css',
    scss: 'scss',
    sql: 'sql',
    sh: 'bash',
    yaml: 'yaml',
    json: 'json',
    md: 'markdown',
    // Framework specific
    vue: 'vue',
    svelte: 'svelte',
    angular: 'typescript',
    dart: 'dart',
    flutter: 'dart',
    react: 'jsx',
    nextjs: 'typescript',
  }

  return (
    <div className="relative group">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-600"
        >
          Copy
        </button>
      </div>
      <SyntaxHighlighter
        language={languageMap[language] || language}
        style={oneDark}
        className="rounded-lg !bg-gray-900"
        customStyle={{
          padding: '1rem',
          fontSize: '0.9rem',
          lineHeight: '1.5',
        }}
        showLineNumbers
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}
