import React from "react";
import withNavbarContainer from "../components/Navbar";

function Home() {
  return (
    <main>
      <h1>Cover your page.</h1>
      <p>
        Cover is a one-page template for building simple and beautiful home
        pages. Download, edit the text, and add your own fullscreen background
        photo to make it your own.
      </p>
    </main>
  );
}
export default withNavbarContainer(Home);
