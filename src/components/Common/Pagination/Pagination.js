import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import styles from "./Pagination.module.css";

export default function Pagination({ count, current }) {
  const itemPerPage = 9;
  const totalPages = Math.ceil(count / itemPerPage);
  const items = [];

  for (let i = 1; i <= totalPages; i++) {
    items.push(
      <Link
        href={{
          pathname: "/blog", //TODO: make /blog dynamic so that it can be used in any pagination
          query: { page: i },
        }}
        className={styles.link}
        key={i}
      >
        <Button
          className={styles.button}
          key={i}
          variant={current === i ? "primary" : "outline-primary"}
        >
          {i}
        </Button>
      </Link>
    );
  }
  return <div className={styles.container}>{items}</div>;
}
