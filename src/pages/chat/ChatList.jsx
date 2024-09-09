import React from "react";
import * as styles from "./styled/ChatList.styled";
import smile from "../../assets/images/smiles.png";

const ChatList = (props) => {
  const truncatedContent =
    props.content.length > 20
      ? `${props.content.slice(0, 15)}...`
      : props.content;
    console.log(props);

  return (
    <styles.TotalWrapper>
      <styles.ContentWrapper>
        <styles.ProfileWrapper>
          <styles.Profile src={smile}></styles.Profile>
        </styles.ProfileWrapper>
        <styles.NameContentWrapper>
          <styles.UserName>{props.name}</styles.UserName>
          <styles.TalkContent>{truncatedContent}</styles.TalkContent>
        </styles.NameContentWrapper>
      </styles.ContentWrapper>
      <styles.TimeAlramWrapper>
        <styles.Time>{props.time}</styles.Time>
        <styles.AlramWrapper>
          <styles.Alram>{props.alramcount}</styles.Alram>
        </styles.AlramWrapper>
      </styles.TimeAlramWrapper>
    </styles.TotalWrapper>
  );
};

export default ChatList;
