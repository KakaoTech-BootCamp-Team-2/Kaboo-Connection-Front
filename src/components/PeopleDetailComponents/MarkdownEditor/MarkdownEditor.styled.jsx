/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import ReactMarkdown from 'react-markdown';

export const MarkDownBox = styled.div`
    width: 85%;
    height: 75%;
    position: relative;
`;

export const StyledMarkdown = styled(ReactMarkdown)`
    font-family: KakaoRegular;
    font-size: 17px;
    line-height: 1.6;
`;

export const MarkDownButton = styled.button`
    width: 190px;
    padding: 15px;
    border-radius: 20px;
    border: 4px solid #d3cba1;
    background-color: transparent;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    cursor: pointer;

    position: absolute;  // 절대 위치 설정!!
    right: 0;            
    bottom: 0;           

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
    }
`;
