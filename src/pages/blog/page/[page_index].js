import React from "react";
import { getAllPosts, getPostSlugs } from "../../../api";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import Categories from "../../../components/Blog/Categories";

function BlogPage({ posts, numPages, currentPage, categories }) {
  return (
    <div>
      <Categories categories={categories} />
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

  const posts = getAllPosts(["title", "slug", "category"]);
  const numPages = Math.ceil(files.length / 6);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(pageIndex * 6, (pageIndex + 1) * 6);

  const categories = posts.map((post) => post.category);
  const newCategories = [...new Set(categories)];

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: newCategories,
    },
  };
}

export default Navbar(BlogPage);
