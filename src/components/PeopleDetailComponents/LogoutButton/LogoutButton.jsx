import {LogoutButtonStyle} from "./LogoutButton.styled.jsx";
import Text from "../../Common/Text.jsx";
import React from "react";


export const LogoutButton = () => {
    const talkButtonClick = () => {
        alert("로그아웃하기~~"); // 로그아웃 고치기
    };

    return (<LogoutButtonStyle onClick={talkButtonClick}><Text
        value="로그아웃"
        fontFamily="KakaoBold"
        fontSize={15}
        color="#715F00"
    /></LogoutButtonStyle>);
}