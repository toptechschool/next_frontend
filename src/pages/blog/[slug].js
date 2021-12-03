import React from "react";
import { getAllPosts, getPostBySlug } from "../../api";
import withNavbarContainer from "../../components/Navbar";

function Post({ post }) {
  return <div>{post.title}</div>;
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ["title", "author"]);
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
