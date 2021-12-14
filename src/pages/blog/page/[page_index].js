import React from "react";
import { getAllPosts, getPostSlugs } from "../../../api";
import Navbar from "../../../components/Navbar";
import Categories from "../../../components/Blog/Categories";
import Posts from "../../../components/Blog/Posts";
import { Pagination } from "react-bootstrap";
import Link from "next/link";
import SEO from "../../../components/Common/Others/SEO";

function BlogPage({ posts, numPages, currentPage, categories }) {
  let items = [];
  for (let number = 1; number <= numPages; number++) {
    items.push(
      <Link passHref href={`/blog/page/${number}`} key={number}>
        <Pagination.Item active={number === currentPage} key={number}>
          <span>{number}</span>
        </Pagination.Item>
      </Link>
    );
  }

  return (
    <React.Fragment>
      <SEO title="Blog" />
      <Categories categories={categories} />
      <Posts posts={posts} />
      <div className="d-flex mt-3">
        <div className="mx-auto">
          <Pagination>{items}</Pagination>
        </div>
      </div>
    </React.Fragment>
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

  const posts = getAllPosts([
    "title",
    "slug",
    "category",
    "cover_image",
    "excerpt",
    "date",
  ]);
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
