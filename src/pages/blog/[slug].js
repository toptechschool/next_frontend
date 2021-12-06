import React from "react";
import { getAllPosts, getPostBySlug } from "../../api";
import withNavbarContainer from "../../components/Navbar";
import PostDetail from "../../components/Blog/PostDetail";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../../components/Blog/Sidebar";

function Post({ post }) {
  return (
    <Row>
      <Col xs={12} md={8}>
        <PostDetail post={post} />
      </Col>
      <Col xs={12} md={4}>
        <Sidebar author={post.author} />
      </Col>
    </Row>
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
