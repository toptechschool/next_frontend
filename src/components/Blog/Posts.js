import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import Link from "next/link";
import Spinner from "../Common/Spinner";
import styles from "./Posts.module.css";
import { BiTime } from "react-icons/bi";

const PostListCard = ({ post }) => {
  const { title, tags, author, date_updated, read_time, slug } = post;

  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>
            <Link href={`/blog/detail/${encodeURIComponent(slug)}`}>
              <a className={styles.title}>{title}</a>
            </Link>{" "}
          </Card.Title>
          <Card.Subtitle className="d-flex justify-content-between">
            {`By ${author.name}`}
            <small>
              <BiTime />
              {read_time}
            </small>
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          {tags.map((tag, idx) => (
            <Badge bg={"secondary"} key={idx} className={styles.badge}>
              {tag}
            </Badge>
          ))}
        </Card.Footer>
      </Card>
    </Col>
  );
};
export default function PostList({ data }) {
  if (!data) {
    return <Spinner />;
  }
  return (
    <Row xs={1} md={2} lg={3} className="g-4 mb-4">
      {data.map((post, idx) => (
        <PostListCard key={idx} post={post} />
      ))}
    </Row>
  );
}
