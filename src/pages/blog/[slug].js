import React from "react";
import { getAllCategories, getAllPosts, getPostBySlug } from "../../api";
import withNavbarContainer from "../../components/Navbar";
import PostDetail from "../../components/Blog/PostDetail";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../components/Blog/Sidebar";
import { useRouter } from "next/router";
import SEO from "../../components/Common/Others/SEO";

function Post({ post, categories }) {
  const slug = useRouter().query.slug;
  return (
    <>
      <SEO title={post.title} url={slug} description={post.excerpt} />
      <Row>
        <Col xs={12} md={8}>
          <PostDetail post={post} slug={slug} />
        </Col>
        <Col xs={12} md={4}>
          <Sidebar author={post.author} categories={categories} />
        </Col>
      </Row>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "author",
    "content",
    "category",
    "excerpt",
  ]);

  const categories = getAllCategories();
  const newCategories = [...new Set(categories)];

  return { props: { post, categories: newCategories } };
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
