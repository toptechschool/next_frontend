import React from "react";
import { getAllCategories, getAllPosts } from "../../../api";
import withNavbarContainer from "../../../components/Navbar";
import Posts from "../../../components/Blog/Posts";
import SEO from "../../../components/Common/Others/SEO";

function Categories({ categoryName, posts }) {
  return (
    <div>
      <SEO title={`Posts on - ${categoryName}`} />
      <h3>Category - {categoryName}</h3>
      <Posts posts={posts} />
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
  const posts = getAllPosts([
    "title",
    "slug",
    "category",
    "cover_image",
    "excerpt",
    "date",
  ]).filter((post) => post.category.toLowerCase() === category_name);
  return {
    props: { categoryName: category_name, posts },
  };
}
export default withNavbarContainer(Categories);
