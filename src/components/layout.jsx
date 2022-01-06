import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { container } from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>NFT preview card component</title>
        <meta
          name="description"
          content="This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with."
        />
      </Helmet>
      <main className={container}>{children}</main>
    </Fragment>
  );
};
export default Layout;
