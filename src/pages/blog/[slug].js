import React from "react";
import { getAllPosts, getPostBySlug } from "../../api";
import withNavbarContainer from "../../components/Navbar";
import MDX from "@mdx-js/runtime";
import CodeBlock from "../../components/Blog/CodeBlock";

function Post({ post: { title, content } }) {
  const components = {
    pre: (props) => <div {...props} />,
    code: CodeBlock,
  };
  return (
    <div>
      <h1>{title}</h1>
      <MDX components={components}>{content}</MDX>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);
  return { props: { post } };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  const paths = posts.map((post) => ({ params: { ...post } }));

  return {
    paths,
    fallback: false,
  };
}

export default withNavbarContainer(Post);
