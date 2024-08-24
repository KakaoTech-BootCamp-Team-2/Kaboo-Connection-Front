import {TalkButtonStyle} from "./TalkButton.styled.js";
import Text from "../../Common/Text.jsx";
import React from "react";


export const TalkButton = () => {
    const talkButtonClick = () => {
        alert("채팅으로 넘어가기~~"); // 넘어가기 고치기
    };

    return (<TalkButtonStyle onClick={talkButtonClick}><Text
        value="친구 되기!"
        fontFamily="KakaoBold"
        fontSize={15}
        color="#715F00"
    /></TalkButtonStyle>);
}