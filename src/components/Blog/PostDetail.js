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
      <i>
        <h1>{post.title}</h1>
      </i>
      <hr />
      <MDX components={components}>{post.content}</MDX>
      <hr />
      <div className="d-flex justify-content-between">
        <Link href="/blog" passHref>
          Back to blog list
        </Link>

        <Link
          href={`https://github.com/toptechschool-frontend/_posts/${slug}`}
          passHref
        >
          Edit this page on Github
        </Link>
      </div>
    </article>
  );
}
