import React from "react";
import MDX from "@mdx-js/runtime";
import CodeBlock from "./CodeBlock";
import Link from "next/link";

export default function PostDetail({ post, slug }) {
  const components = {
    pre: (props) => <div {...props} />,
    code: CodeBlock,
  };
  return (
    <article>
      {" "}
      <h1>{post.title}</h1>
      <MDX components={components}>{post.content}</MDX>
      <hr />
      <Link href={`https://github.com/toptechschool-frontend/_posts/${slug}`}>
        Edit this page on Github
      </Link>
    </article>
  );
}
