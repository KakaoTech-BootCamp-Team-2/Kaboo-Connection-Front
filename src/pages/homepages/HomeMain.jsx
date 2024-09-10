import React from "react";
import Layout from "../../components/Common/Layout";
import { instance } from "../../api/instance";

function HomeMain() {
  React.useEffect(() => {
    const test = async () => {
      const res = await instance.get("api/auth/member/all");
      console.log(res);
    };
    test();
  }, []);
  return (
    <Layout>
      <h1>햄스터</h1>
      <h1>햄스터</h1>
      <h1>햄스터</h1>
      <h1>햄스터ss</h1>
    </Layout>
  );
}

export default HomeMain;
