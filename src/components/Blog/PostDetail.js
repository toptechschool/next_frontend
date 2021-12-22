import React from "react";
import MDX from "@mdx-js/runtime";
import CodeBlock from "./CodeBlock";
import Link from "next/link";
import Image from "next/image";

export default function PostDetail({ post, slug }) {
  const components = {
    pre: (props) => <div {...props} />,
    code: CodeBlock,
    Image: (props) => (
      <Image
        {...props}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
      />
    ),
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
          href={`https://github.com/toptechschool/next_frontend/tree/dev/_posts/${slug}.mdx`}
        >
          <a target="_blank">Edit this page on Github</a>
        </Link>
      </div>
    </article>
  );
}
