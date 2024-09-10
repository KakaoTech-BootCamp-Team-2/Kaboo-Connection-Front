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
    border-radius: 20px;
`;

export const ChatRoomWrapper = styled.div`
    width: 100%;
    height: 80%;
    background: rgba(255, 255, 255, 0.5);
    overflow-y:scroll;
`;

export const BottomWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    border-radius: 20px;
    background-color:#f8f7e1;`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center ;
    width: 85%;
    height: 90%;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.8);
`;

export const Input = styled.input`
    width: 85%;
    height: 80%;
    border: none;
    outline: none;
    
    font-size: 20px;
`;

export const SendButton = styled.button`
    width: 55px;
    height: 55px;
    background-color: #f9e000;
    border-radius: 30px;
    border: none;
    margin: 5px;
    font-size: 20px;
    
    &:active{
        background-color: navajowhite;
    }
`
