import React from "react";
import * as styles from "./styled/ChatRoom.styled";
import Text from "../../components/Common/Text";

const ChatRoom = (props) => {
  return (
    <styles.TotalWrapper>
      <styles.NameWrapper>
        <Text
          value={props.name}
          fontFamily="KakaoBold"
          fontSize={45}
          color="#000"
        ></Text>
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
};
export default ChatRoom;
