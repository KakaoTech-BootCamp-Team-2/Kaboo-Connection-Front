import React from "react";
import * as styles from "./styled/ChatRoom.styled";
import Layout from "../../components/Common/Layout";

function ChatRoom() {
  return (
    <styles.TotalWrapper>
      <styles.NameWrapper>
        <styles.Name></styles.Name>
      </styles.NameWrapper>
      <styles.ChatRoomWrapper></styles.ChatRoomWrapper>

      <styles.BottomWrapper>
        <styles.InputWrapper>
          <styles.Input></styles.Input>
        </styles.InputWrapper>
        <styles.SendButton></styles.SendButton>
      </styles.BottomWrapper>
    </styles.TotalWrapper>
  );
}
export default ChatRoom;
