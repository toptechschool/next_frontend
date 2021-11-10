import React from "react";
import { Container, Spinner } from "react-bootstrap";
import styles from "./Spinner.module.css";

export default function LoadingSpinner() {
  return (
    <Container className={styles.container}>
      <Spinner animation="border" role="status" className={styles.spinner}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}
