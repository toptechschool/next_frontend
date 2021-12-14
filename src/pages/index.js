import React from "react";
import SEO from "../components/Common/Others/SEO";
import withNavbarContainer from "../components/Navbar";

function Home() {
  return (
    <>
      <SEO />
      <main>
        <div className="p-3 p-md-5 m-md-3 text-center">
          <div className="col-md-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Toptechschool</h1>
            <p className="lead fw-normal">
              Your one stop website for all technical resources about jobs,
              podcast, blogs, and recent technologies.
            </p>
            <p className="btn btn-outline-secondary">Coming soon</p>
          </div>
        </div>
      </main>
    </>
  );
}
export default withNavbarContainer(Home);
