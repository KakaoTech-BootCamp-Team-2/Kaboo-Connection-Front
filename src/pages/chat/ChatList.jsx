import React from "react";
import * as styles from "./styled/ChatList.styled";
import profileimg from "../../assets/dummyImages/peoplelist2.png";

const ChatList = (props) => {
  const truncatedContent =
    props.content.length > 15
      ? `${props.content.slice(0, 12)}...`
      : props.content;


  return (
    <styles.TotalWrapper>
      <styles.ContentWrapper>
        <styles.ProfileWrapper>
          <styles.Profile src={profileimg}></styles.Profile>
        </styles.ProfileWrapper>
        <styles.NameContentWrapper>
          <styles.UserName>{props.name}</styles.UserName>
          <styles.TalkContent>{truncatedContent}</styles.TalkContent>
        </styles.NameContentWrapper>
      </styles.ContentWrapper>
      <styles.TimeAlramWrapper>
        <styles.Time>{props.time}</styles.Time>
      </styles.TimeAlramWrapper>
    </styles.TotalWrapper>
  );
};

export default ChatList;
