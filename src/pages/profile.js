import React from "react";
import { connect } from "react-redux";
import * as yup from "yup";
import { Form, Button, Image } from "react-bootstrap";
import { Formik } from "formik";
import withNavbarContainer from "../components/Navbar";
import { updateProfile } from "../store/actions/auth";
import styles from "../styles/Profile.module.css";

function profile(props) {
  const { user, name, bio, profile_pic } = props.user;
  const schema = yup.object().shape({
    name: yup.string(),
    bio: yup.string(),
    profile_pic: yup.mixed(),
  });
  if (user === undefined) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <Image src={profile_pic} roundedCircle className={styles.avatar} />
      <Formik
        validationSchema={schema}
        onSubmit={(e) => props.updateProfile(e)}
        initialValues={{
          name: name ? name : "",
          bio: bio ? bio : "",
          profile_pic: "",
          email: user.email,
        }}
      >
        {({ handleSubmit, handleChange, values, setFieldValue }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control value={values.email} disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={values.name || ""}
                type="text"
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                value={values.bio || ""}
                type="text"
                name="bio"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="position-relative mb-3">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                type="file"
                name="profile_pic"
                onChange={(e) => {
                  setFieldValue("profile_pic", e.target.files[0]);
                }}
                accept="image/*"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth,
});
export default connect(mapStateToProps, { updateProfile })(
  withNavbarContainer(profile)
);
