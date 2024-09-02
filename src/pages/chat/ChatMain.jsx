import React from "react";
import {useState, useEffect} from 'react';
import * as styles from "./styled/ChatMain.styled";
import ChatRoom from "./ChatRoom";
import ChatList from "./ChatList";
import {getChatList} from "../../api/ChatListCall.jsx";

function ChatMain() {
  const [chatList, setChatList] = useState([])
  const [selectedChatRoom, setSelectedChatRoom] = useState(null);
  const nowUser = 'pjh2';

  const sampleList = [
    {chatRoomName:'홍창기', chatRoomContent:"홍창기 안타 안타 날려 홍창기 홍창기 안타 날려 버려라", chatRoomUUID:1},
    {chatRoomName:'문보경', chatRoomContent:"동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세",chatRoomUUID:2},
    {chatRoomName:'박동원', chatRoomContent:"시원하게 날려버려 무적엘지 박동원 무적엘지의 승리를 위해 날려버려라", chatRoomUUID:3},
  ]

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const response = await getChatList(nowUser); // 사용자 이름을 동적으로 설정 가능
        setChatList(response.data);
        console.log('채팅방리스트', response);
      } catch (error) {
        console.error("Failed to fetch chat list", error);
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
                    content={eachChat.chatRoomName}
                    time={"pm 10:30"}
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
