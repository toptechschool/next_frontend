import React from "react";
import NavbarContainer from "./Navbar";

export default function withNavbarContainer(WrappedComponent) {
  return class Wrapper extends React.Component {
    render() {
      return (
        <NavbarContainer>
          <WrappedComponent {...this.props} />
        </NavbarContainer>
      );
    }
  };
}
