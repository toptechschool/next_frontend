import React from "react";
import { getAllCategories, getAllPosts } from "../../../api";
import withNavbarContainer from "../../../components/Navbar";
import Link from "next/link";

function Categories({ categoryName, posts }) {
  return (
    <div>
      <h1>Category - {categoryName}</h1>
      <div>
        {posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={index}>
            <h4>{post.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const categories = getAllCategories();
  let paths = [];
  for (let i = 0; i < categories.length; i++) {
    paths.push({
      params: { category_name: categories[i] },
    });
  }

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { category_name } }) {
  const posts = getAllPosts(["slug", "title", "category"]).filter(
    (post) => post.category.toLowerCase() === category_name
  );
  return {
    props: { categoryName: category_name, posts },
  };
}
export default withNavbarContainer(Categories);
