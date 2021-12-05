import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

const CodeBlock = ({ children, className }) => {
  const language = className
    ? className.replace(/language-/, "")
    : "javascript";
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: "0.5em", overflow: "scroll" }}
        >
          {tokens.map((line, i) => (
            <div
              style={{ display: "table-row" }}
              key={i}
              {...getLineProps({ line, key: i })}
            >
              <div
                style={{
                  display: "table-cell",
                  textAlign: "right",
                  paddingRight: "1em",
                  userSelect: "none",
                  opacity: 0.5,
                }}
              >
                {i + 1}
              </div>
              <div style={{ display: "table-cell" }}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
