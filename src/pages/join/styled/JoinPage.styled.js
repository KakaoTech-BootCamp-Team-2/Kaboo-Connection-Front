/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {css} from "@emotion/react";

export const TotalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 60vh;
    align-items: center;
    justify-content: center;
`;
export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 10%;
    align-items: flex-start;
    justify-content: center;
;`;

export const Title = styled.h2`

`;

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90%;
    align-items: center;
    justify-content: center;
    
    border-bottom: 2px solid black;
    border-top: 2px solid black;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 90%;
    align-items: center;
    justify-content: center;
`;

export const ContentLineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 15%;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
`;
export const ContentLineTitleWrapper = styled.div`
width: 100px;
`;
export const ContentLineWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 10%;
    align-items: center;
    justify-content: center;
    margin: 5px;
    background-color: beige;
`;
export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center ;
    width: 70%;
    height: 50%;
    
`;

export const Input = styled.input`
    width: 80%;
    height: 95%;
    border: 1.5px solid black;
    outline: none;

    font-size: 20px;
`;

export const TeamButton = styled.button`
width: 25%;
    height: 100%;
    border-radius: 15px;
    background-color:#FFF7AE;
    border: 2px solid black;
    margin: 5px;
`
