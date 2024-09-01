/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {css} from "@emotion/react";

export const ColumnContainer = styled.div`
    display: flex;    
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin : 0 0 0 5px;
`;

export const RowContainer = styled.div`
    display: flex;    
    flex-direction: Row;
    align-items: flex-end; 
    width: 90%;
    margin : 0 0 20px 0;
    gap : 10px;
`;

export const TeamTextStyle = css`
    margin: 0 0 6px 2px // 아니 이것 뭐예요~? 왜 적용이 안 되지?? 엇 갑자기되네~
`;