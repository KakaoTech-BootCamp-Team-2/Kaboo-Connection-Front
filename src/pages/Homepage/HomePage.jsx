import React from "react";
import Layout from "../../components/Common/Layout";
import ChatMain from "../../pages/chat/ChatMain";
import { instance } from "../../api/instance";
function HomePage() {
  return (
    <Layout children={ChatMain}>
      <h1>햄스터</h1>
      <h1>햄스터</h1>
      <h1>햄스터</h1>
      <h1>햄스터22</h1>
    </Layout>
  );
}

export default HomePage;
