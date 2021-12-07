import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card } from "react-bootstrap";

export default function Posts({ posts }) {
  return (
    <Row className="mt-3">
      {posts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={index}>
          <Col xs={12} md={6} lg={4} key={post.slug} className="mb-3">
            <Card>
              <Image src={post.cover_image} height={250} width={700} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.excerpt}</Card.Text>
              </Card.Body>
              <Card.Footer
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p className="text-muted m-0">{post.date}</p>
                <p className="text-muted m-0">{post.category}</p>
              </Card.Footer>
            </Card>
          </Col>
        </Link>
      ))}
    </Row>
  );
}
