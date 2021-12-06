import React from "react";
import MDX from "@mdx-js/runtime";
import CodeBlock from "./CodeBlock";

export default function PostDetail({ post }) {
  const components = {
    pre: (props) => <div {...props} />,
    code: CodeBlock,
  };
  return (
    <article>
      {" "}
      <h1>{post.title}</h1>
      <MDX components={components}>{post.content}</MDX>
    </article>
  );
}
