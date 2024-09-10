/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {css} from "@emotion/react";

export const TotalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`;

export const NameWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    background-color: #f8f7e1;
    align-items: center;
    justify-content: center;
`;

export const ChatRoomWrapper = styled.div`
    width: 100%;
    height: 80%;
    background-color: white;`;

export const BottomWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    background-color:#f8f7e1 `;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center ;
    width: 85%;
    height: 90%;
    border-radius: 40px;
    background-color: white;
`;

export const Input = styled.input`
    width: 85%;
    height: 80%;
    border: none;
    outline: none;
    
    font-size: 20px;
`;

export const SendButton = styled.button`
    width: 65px;
    height: 65px;
    background-color: yellow;
    border-radius: 30px;
    border: none;
    margin: 5px;
    
    &:active{
        background-color: navajowhite;
    }
`
