import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import Link from "next/link";
import Spinner from "../Common/Spinner";
import styles from "./Posts.module.css";

const PostListCard = ({ post }) => {
  const { title, tags, author, date_updated, read_time, slug } = post;

  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>
            <Link
              className={styles.title}
              href={`/blog/detail/${encodeURIComponent(slug)}`}
            >
              {title}
            </Link>{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{`By ${author.name}`}</Card.Subtitle>
          <Card.Text className={styles.detail}>
            <small>Last Updated: {date_updated}</small> <br />
            <small>Read Time: {read_time}</small>
          </Card.Text>
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
