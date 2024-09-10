import React from 'react';
import * as chat from './styled/ChatMessage.styled.js';
import profileimg from '../../assets/images/peoplelogo.png';

function ChatMessage({ name, message, time, isCurrentUser }) {
    return (
        <div>
            {isCurrentUser ? (
                <chat.lineTotalWrapper2>
                    <chat.innerWrapper>
                        <chat.userName2>{name}</chat.userName2>
                        <chat.TextWrapper>
                            <chat.Text>{message}</chat.Text>
                        </chat.TextWrapper>
                        <chat.TimeWrapper>{time}</chat.TimeWrapper>
                    </chat.innerWrapper>
                </chat.lineTotalWrapper2>
            ) : (
                <chat.lineTotalWrapper>
                    <chat.profileWrapper>
                        <chat.profileImg src={profileimg} alt="Profile" />
                    </chat.profileWrapper>
                    <chat.innerWrapper>
                        <chat.userName>{name}</chat.userName>
                        <chat.TextWrapper2>
                            <chat.Text>{message}</chat.Text>
                        </chat.TextWrapper2>
                        <chat.TimeWrapper>{time}</chat.TimeWrapper>
                    </chat.innerWrapper>
                </chat.lineTotalWrapper>
            )}
        </div>
    );
}

export default ChatMessage;
