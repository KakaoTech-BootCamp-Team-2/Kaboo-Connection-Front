import React from "react";
import {useState, useEffect} from 'react';
import * as styles from "./styled/ChatMain.styled";
import ChatRoom from "./ChatRoom";
import ChatList from "./ChatList";
import {getChatList} from "../../api/ChatListCall.js";
import dummyChatList from "./dummyChatData/dummyChatList";


function ChatMain() {
  const [chatList, setChatList] = useState([])
  const [selectedChatRoom, setSelectedChatRoom] = useState(null);


  const getUsername = () => {
    const usernameFromLocalStorage = localStorage.getItem('username');
    return usernameFromLocalStorage || "kakao_3691500201";
  };

  const nowUser = getUsername();

  useEffect(() => {
    console.log(nowUser,'현재 사용자')
    const fetchChatList = async () => {
      try {
        const response = await getChatList(nowUser);
        setChatList(response.data.data);
        console.log('채팅방리스트 불러오기 성공', response.data.data);
      } catch (error) {
        console.error("채팅방리스트 불러오기 실패", error);
      }
    };

    fetchChatList();
  }, []);
  /////////////////////////////////////////////////////
  const handleChatClick = (chatRoom) => {
    setSelectedChatRoom(chatRoom);
  }


  return (
    <styles.TotalWrapper>
      <styles.TitleWrapper>
        <styles.Title>첫 커넥션</styles.Title>
      </styles.TitleWrapper>
      <styles.ChatWrapper>
        <styles.LeftWrapper>
          {Array.isArray(chatList)&&chatList.map((eachChat, id) => (
              <styles.ChatListButton
                  key={eachChat.chatRoomUUID}
                  onClick={(e)=>{
                    handleChatClick(eachChat)
                  }}>
                <ChatList
                    uuid={eachChat.chatRoomUUID}
                    name={eachChat.chatRoomName}
                    content={"카부카부"}
                    time={"2020.08.09"}
                    alramcount={3}></ChatList>
              </styles.ChatListButton>

          ))}
        </styles.LeftWrapper>
        <styles.RightWrapper>
          {selectedChatRoom?(
              <ChatRoom
              name={selectedChatRoom.chatRoomName}
              uuid={selectedChatRoom.chatRoomUUID}/>
          ):(
              <div></div>
          )}
        </styles.RightWrapper>
      </styles.ChatWrapper>
    </styles.TotalWrapper>
  );
}

export default ChatMain;
