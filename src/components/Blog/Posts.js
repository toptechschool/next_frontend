import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card } from "react-bootstrap";
import * as styles from "./Posts.module.css";

export default function Posts({ posts }) {
  return (
    <Row className="mt-3">
      {posts.map((post, index) => (
        <Col xs={12} md={6} lg={4} key={post.slug} className={styles.article}>
          <Link href={`/blog/${post.slug}`} key={index} passHref>
            <Card>
              <Image
                src={post.cover_image}
                height={250}
                width={700}
                alt="Banner Image"
              />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text bsPrefix="small">{post.excerpt}</Card.Text>
                <div className="d-flex justify-content-between text-muted">
                  <small className="m-0">{post.date}</small>
                  <small className="m-0">{post.category}</small>
                </div>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
