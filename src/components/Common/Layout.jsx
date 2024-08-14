import React from "react";
import Background from "./Background";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutContainer, MainContent } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <>
      <Background />
      <LayoutContainer>
        <Header />
        <MainContent>{children}</MainContent>
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default Layout;
