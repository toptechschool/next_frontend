import React from "react";
import { Row, Card, Col, Image } from "react-bootstrap";
import Spinner from "../Common/Spinner";
import ReactMarkdown from "react-markdown";
import { CodeHighlighter } from "./CodeHighlighter";

const PostDetailCard = ({ post }) => {
  return (
    <Card>
      <Card.Header>{post.title}</Card.Header>
      <Card.Body>
        <ReactMarkdown components={CodeHighlighter} children={post.content} />
      </Card.Body>
    </Card>
  );
};

const UserCard = ({ author }) => {
  return (
    <Card bg="light" className="mb-2">
      <Card.Body>
        <div className="text-center">
          <Image src={author.avatar} roundedCircle style={{ width: "150px" }} />
          <Card.Title>{author.name}</Card.Title>
        </div>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default function PostDetail({ data }) {
  if (JSON.stringify(data) === "{}") {
    return <Spinner />;
  }
  return (
    <Row>
      <Col sm={12} md={8}>
        <PostDetailCard post={data} />
      </Col>
      <Col sm={12} md={{ span: 3, offset: 1 }}>
        <UserCard author={data.author} />
      </Col>
    </Row>
  );
}
