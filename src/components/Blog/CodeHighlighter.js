import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // twilight , okaidia

export const CodeHighlighter = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={atomDark}
        language={match[1]}
        children={children[0]}
        {...props}
        showLineNumbers
        wrapLines={true}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};
