import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import * as Stomp from "stompjs";
import * as styles from "./styled/ChatRoom.styled";
import Text from "../../components/Common/Text";
import ChatMessage from "./ChatMessage.jsx";
import { getChatMessages } from "../../api/ChatMessageCall.js";

const ChatRoom = (props) => {
    const { uuid, name } = props;
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const currentUsername = '홍창기'; // 현재 사용자 설정
    const roomId = uuid;
    const [stompClient, setStompClient] = useState(null); // STOMP 클라이언트 객체 저장

    // 채팅방 메시지 데이터 가져오기
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await getChatMessages(uuid, 0, 10);
                const dataList = response.data.data;
                const modifiedMessages = Array.isArray(dataList)
                    ? dataList.map((msg) => ({
                        ...msg,
                        isCurrentUser: msg.username === currentUsername,
                    }))
                    : [];
                modifiedMessages.sort((a, b) => new Date(a.sendAt) - new Date(b.sendAt));
                setMessages(modifiedMessages);
                console.log("채팅방 메시지 데이터:", modifiedMessages);
            } catch (error) {
                console.error("Failed to fetch chat messages", error);
            }
        };
        fetchMessages();
    }, [uuid]);

    // WebSocket 연결 및 메시지 구독
    useEffect(() => {
        const socket = new SockJS(`${import.meta.env.VITE_BASE_URL}chat/ws`);
        const stompClient = Stomp.over(socket);

        stompClient.connect({}, () => {
            console.log("STOMP WebSocket에 연결되었습니다!");

            // 구독 설정 (서버에서 채팅방 메시지를 수신)
            stompClient.subscribe(`/sub/chat/room/${uuid}`, (message) => {
                const chatMessage = JSON.parse(message.body);
                console.log("WebSocket 메시지 수신", chatMessage);

                // 수신된 메시지를 메시지 리스트에 추가
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        id: chatMessage.id,
                        username: chatMessage.username,
                        message: chatMessage.message,
                        time: new Date().toLocaleTimeString(),
                        isCurrentUser: chatMessage.username === currentUsername,
                    },
                ]);
            });
        });

        // STOMP 클라이언트 객체를 저장
        setStompClient(stompClient);

        // 연결 해제 시 클린업
        return () => {
            if (stompClient) {
                stompClient.disconnect();
                console.log("STOMP WebSocket 연결 해제 되었습니다!");
            }
        };
    }, [uuid]);

    // 메시지 전송
    const sendMessage = () => {
        if (message.trim() === "" || !stompClient || !uuid) {
            return;
        }

        const chatMessage = {
            chatRoomUUID: uuid,
            username: currentUsername, // 현재 접속한 사용자
            nickname: "UserNickName",
            message: message,
        };

        // 서버로 메시지 발행 (전송)
        stompClient.send("/pub/messages", {}, JSON.stringify(chatMessage));

        // 클라이언트에서 즉시 메시지 추가
        setMessages((prevMessages) => [
            ...prevMessages,
            {
                id: Date.now(),
                username: chatMessage.username,
                message: chatMessage.message,
                time: new Date().toLocaleTimeString(),
                isCurrentUser: true,
            },
        ]);

        console.log("전송된 메시지:", chatMessage);

        setMessage(""); // 입력창 초기화
    };

    return (
        <styles.TotalWrapper>
            <styles.NameWrapper>
                <Text
                    value={props.name}
                    fontFamily="KakaoBold"
                    fontSize={45}
                    color="#000"
                >
                    {name}
                </Text>
            </styles.NameWrapper>
            <styles.ChatRoomWrapper>
                {Array.isArray(messages) && messages.map((each, id) => (
                    <ChatMessage
                        key={id}
                        name={each.username}
                        message={each.message}
                        time={each.sendAt}
                        isCurrentUser={each.isCurrentUser}
                    />
                ))}
            </styles.ChatRoomWrapper>

            <styles.BottomWrapper>
                <styles.InputWrapper>
                    <styles.Input
                        placeholder={"메세지를 입력하세요..."}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    />
                </styles.InputWrapper>
                <styles.SendButton onClick={sendMessage}>{'>'}</styles.SendButton>
            </styles.BottomWrapper>
        </styles.TotalWrapper>
    );
};

export default ChatRoom;