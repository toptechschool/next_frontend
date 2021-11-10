import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostList from "../../components/Blog/Posts";
import withNavbarContainer from "../../components/Navbar";
import { useGetPosts } from "../../store/hooks/useGetPosts";
import Pagination from "../../components/Common/Pagination";

function index() {
  const { posts, count, current } = useGetPosts();
  return (
    <Container fluid={true}>
      <Row>
        <Col sm={12} md={12}>
          <PostList data={posts} count={count} />
          <Pagination
            count={count}
            current={current === null ? 1 : parseInt(current)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default withNavbarContainer(index);
