import MarkdownReader from './MarkdownReader';
import courseContentMarkdown from '../Language/Go/Go Basics/1-Introduction-To-Go.md'

const Example = ({ demoMode = true }: { demoMode?: boolean }) => {
  const demoMarkdown = `
## Basic Text Formatting
Regular text with **bold**, *italic*, and ***bold-italic*** formatting.

## Code Blocks

Simple code block:

\`\`\`js
const greeting = "Hello World!";
console.log(greeting);
\`\`\`

TypeScript example:

\`\`\`typescript
interface User {
  id: number;
  name: string;
}

function getUser(id: number): User {
  return {
    id,
    name: "John Doe"
  };
}
\`\`\`

## Custom Components

### Alerts
Different alert types:

<div class="alert" type="info">
  This is an information alert
</div>

<div class="alert" type="warning">
  This is a warning message
</div>

<div class="alert" type="error">
  This is an error alert
</div>

### Cards
<div class="card">
  #### Card Title
  This is a card component that can contain:
  - Markdown content
  - **Formatted text**
  - And more!
</div>

### Badges
<div class="badge">New</div> <div class="badge">Featured</div> <div class="badge">Popular</div>

## Expandable Content
<details>
<summary>📋 Basic Usage</summary>

1. Write your content
2. Format it properly
3. Preview the results

\`\`\`js
const example = "This works in details too!";
\`\`\`
</details>

<details>
<summary>⚙️ Advanced Settings</summary>

### Configuration
You can include any markdown here:

| Setting | Value |
|---------|-------|
| Theme   | Dark  |
| Mode    | Auto  |

</details>


## Tables
| Feature | Status | Notes |
|---------|--------|-------|
| Markdown | ✅ | Basic syntax supported |
| Components | ✅ | Custom elements ready |
| Code | ✅ | With highlighting |


## Lists
1. First Item
   * Nested item A
   * Nested item B
2. Second Item
   1. Sub-item 2.1
   2. Sub-item 2.2

## Blockquotes
> Important note:
> 
> This is a blockquote with
> multiple lines and *formatting*

---

## Images
![Example](https://via.placeholder.com/300x200)
`;

  return <MarkdownReader 
    content={demoMode ? demoMarkdown : undefined}
    filePath={!demoMode ? '/path/to/markdown.md' : undefined}
  />;
}

const CourseContent = () => {
  // Use provided content/filepath or fall back to default
  return <MarkdownReader 
    filePath={courseContentMarkdown}
  />;
}

export { Example, CourseContent };