import React from "react";
import { getAllPosts, getPostSlugs } from "../../../api";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

function BlogPage({ posts, numPages, currentPage }) {
  return (
    <div>
      {posts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={index}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticPaths() {
  const posts = getPostSlugs();

  const numPages = Math.ceil(posts.length / 6);
  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);
  const files = getPostSlugs();

  const posts = getAllPosts(["title", "slug"]);
  const numPages = Math.ceil(files.length / 6);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(pageIndex * 6, (pageIndex + 1) * 6);
  return { props: { posts: orderedPosts, numPages, currentPage: page } };
}

export default Navbar(BlogPage);
