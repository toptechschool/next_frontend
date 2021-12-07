import React from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "./Navbar.module.css";
import Footer from "../Footer";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";

function index({ isAuthenticated, name, logout, children }) {
  const TAG = name
    ? name.split(" ").map((c) => c.charAt(0).toUpperCase().toUpperCase())
    : "**";
  return (
    <div className={styles.navbarContainer}>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="bg-purple">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>ToptechSchool</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link href="/blog" passHref>
                <Nav.Link>Blog</Nav.Link>
              </Link>
              {isAuthenticated && (
                <NavDropdown title={TAG} id="collasible-nav-dropdown">
                  <Link href="/profile" passHref>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </Link>
                  <Link href="/blog/create" passHref>
                    <NavDropdown.Item>Create Post</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className="text-dark" onClick={logout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {!isAuthenticated && (
                <Link href="/login" passHref>
                  <Nav.Link>Login</Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-4">{children}</Container>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  name: state.auth.name,
});
export default connect(mapStateToProps, { logout })(index);
