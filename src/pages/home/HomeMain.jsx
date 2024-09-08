import React from "react";
import * as main from "./HomeMain_styled";
import Header from "../../components/Header";

function HomeMain() {
  const test = async () => {
    const res = await instance.get("/api/auth/member/all");
    console.log(res);
  };
  React.useEffect(() => {
    test();
  }, []);
  return (
    <main.Container>
      <main.Main></main.Main>
    </main.Container>
  );
}

export default HomeMain;
