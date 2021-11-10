import React from "react";
import withNavbarContainer from "../components/Navbar";

function Home() {
  return (
    <div>
      <main>Main Page</main>
    </div>
  );
}
export default withNavbarContainer(Home);
