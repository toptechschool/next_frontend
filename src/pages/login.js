import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "../styles/Login.module.css";
import { Formik } from "formik";
import { connect } from "react-redux";
import { login } from "../store/actions/auth";
import Router from "next/router";

function Login(props) {
  if (props.isAuthenticated) {
    Router.push("/");
  }
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values) => {
        props.login(values.email, values.password);
      }}
      validateOnChange={false}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Container className={styles.wrapper}>
          <Row className={styles.form}>
            <Col xs={12} md={10} lg={6} className="text-center">
              <Form noValidate onSubmit={handleSubmit}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-2"
                >
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback>{errors.email}</Form.Control.Feedback>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingPassword"
                  label="Password"
                  className="mb-2"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                </FloatingLabel>
                <Button
                  variant="primary"
                  size="lg"
                  className={styles.loginButton}
                  type="submit"
                >
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
