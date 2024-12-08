import MarkdownRenderer from './MarkdownReader';

const Example = () => {
  const markdown = `
  # Markdown Documentation Example
  
  ## Introduction
  Welcome to our **comprehensive** documentation. Here's what you'll learn:
  
  ### Table of Contents
  1. Basic Formatting
  2. Code Examples
  3. Tables & Lists
  4. Custom Components
  
  ## Basic Formatting
  You can write text in **bold**, *italic*, or ***both***!
  
  ### Links and References
  - Regular link: [GitHub](https://github.com)
  - Preview link: [Preview This](preview:https://example.com)
  
  ### Quotes and Notes
  > Important note: This is a blockquote
  > With multiple lines
  
  ## Code Examples
  
  Inline code: \`const x = 100;\`
  
  Code block with syntax highlighting:
  
  \`\`\`typescript
  interface User {
    id: string;
    name: string;
    email: string;
  }
  
  const getUser = async (id: string): Promise<User> => {
    const response = await fetch(\`/api/users/\${id}\`);
    return response.json();
  };
  \`\`\`
  
  ## Tables & Lists
  
  ### Feature Comparison
  | Feature | Free | Pro |
  |---------|------|-----|
  | Basic Access | ✅ | ✅ |
  | Advanced Tools | ❌ | ✅ |
  | Support | Limited | 24/7 |
  
  ### Task List
  - [x] Create documentation
  - [ ] Review content
  - [ ] Publish changes
  
  ### Nested Lists
  1. First Level
     * Sub-item A
     * Sub-item B
  2. Second Level
     1. Sub-item 2.1
     2. Sub-item 2.2
  
  ## Images
  ![React Logo](https://reactjs.org/logo-og.png)
  
  ---
  
  ## Custom Components
  Here's a folder structure:
  
  <folder>
  {
    "name": "project",
    "type": "folder",
    "children": [
      {
        "name": "src",
        "type": "folder",
        "children": [
          {
            "name": "components",
            "type": "folder",
            "children": [
              {
                "name": "App.tsx",
                "type": "file"
              }
            ]
          }
        ]
      }
    ]
  }
  </folder>
  
  ### Technology Stack
  <tech-stack>
    <FaReact title="React" />
    <FaNodeJs title="Node.js" />
  </tech-stack>
  
  ### API Example
  \`\`\`http
  GET /api/users
  Authorization: Bearer <token>
  \`\`\`
  
  \`\`\`json
  {
    "users": [
      {
        "id": "1",
        "name": "John Doe"
      }
    ]
  }
  \`\`\`
  
  ## Interactive Elements
  <details>
  <summary>Click to expand</summary>
  This content is hidden by default!
  </details>
  
  ## Math Equations
  When \`a ≠ 0\`, there are two solutions to \`ax² + bx + c = 0\`:
  
  \`\`\`math
  x = {-b ± √(b² - 4ac) \over 2a}
  \`\`\`
  `;

  return <MarkdownRenderer content={markdown} />;
}

export default Example