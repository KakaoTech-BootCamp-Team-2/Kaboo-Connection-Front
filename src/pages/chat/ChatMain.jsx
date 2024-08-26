import React from "react";
import * as styles from "./styled/ChatMain.styled";
import ChatRoom from "./ChatRoom";
import ChatList from "./ChatList";
import Layout from "../../components/Common/Layout";

function ChatMain() {
  return (
    <styles.TotalWrapper>
      <styles.TitleWrapper>
        <styles.Title>첫 커넥션</styles.Title>
      </styles.TitleWrapper>
      <styles.ChatWrapper>
        <styles.LeftWrapper>
          <ChatList
            name="celina.jung"
            content="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세"
            time="오후 9시 30분"
            alramcount={3}
          />
          <ChatList
            name="celina.jung"
            content="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세"
            time="오후 9시 30분"
            alramcount={3}
          />
          <ChatList
            name="celina.jung"
            content="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세"
            time="오후 9시 30분"
            alramcount={3}
          />
        </styles.LeftWrapper>
        <styles.RightWrapper>
          <ChatRoom name="celina.jung" />
        </styles.RightWrapper>
      </styles.ChatWrapper>
    </styles.TotalWrapper>
  );
}

export default ChatMain;
