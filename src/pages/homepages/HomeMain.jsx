import React from "react";
import * as main from "./HomeMain_styled";
import Header from "../../components/Header";

function HomeMain() {
  return (
    <main.Container>
      <main.Header>
        <Header />
      </main.Header>
      <main.Main></main.Main>
    </main.Container>
  );
}

export default HomeMain;
