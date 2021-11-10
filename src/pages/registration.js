import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import styles from "../styles/Register.module.css";
import { Formik } from "formik";
import { connect } from "react-redux";
import { register } from "../store/actions/auth";
import Router from "next/router";

function Register(props) {
  if (props.isAuthenticated) {
    Router.push("/");
  }
  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Password did not match";
        }
        return errors;
      }}
      onSubmit={(values) => {
        props.register(values.email, values.password, 2);
      }}
      validateOnChange={false}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Container className={styles.wrapper}>
          <Row className={styles.form}>
            <Col xs={12} md={10} lg={6} className="text-center">
              <Form noValidate onSubmit={handleSubmit}>
                {props.errorMsg && (
                  <Alert variant="danger">{props.errorMsg}</Alert>
                )}
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
                <FloatingLabel
                  controlId="floatingConfirmPassword"
                  label="Confirm Password"
                  className="mb-2"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password Confirm"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={values.confirmPassword}
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Form.Control.Feedback>
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </FloatingLabel>
                <Button
                  variant="primary"
                  size="lg"
                  className={styles.registerButton}
                  type="submit"
                >
                  Register
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
export default connect(mapStateToProps, { register })(Register);
