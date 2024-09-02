import React from "react";
import Layout from "../../components/Common/Layout.jsx";
import RoundBox from "../../components/Common/RoundBox.jsx";
import MarkdownEditor from "../../components/PeopleDetailComponents/MarkdownEditor/MarkdownEditor.jsx";
import Line from "../../components/Common/Line/Line.jsx"
import {ColumnContainer, TeamTextStyle,RowContainer} from "./PeopleDetailPage.style.js"
import Text from "../../components/Common/Text.jsx"
import ImageCircle from "../../components/PeopleDetailComponents/CircleImage/CircleImage.jsx"
import {TalkButton} from "../../components/PeopleDetailComponents/TalkButton/TalkButton.jsx";
import {LogoutButton} from "../../components/PeopleDetailComponents/LogoutButton/LogoutButton.jsx";

export const PeopleDetailPage = () => {
    const myPage = true; // 임시

    return (
        <Layout>
            <br></br><br></br><br></br>
            <RoundBox width="70%" height="1000px" borderRadius="20px">
                <RowContainer>
                    <ImageCircle imageUrl="src/assets/dummyImages/peopleList3.png" />
                    <ColumnContainer>
                        <Text
                            value="카카오 부트캠프 1기 : AI"
                            fontFamily="KakaoRegular"
                            fontSize={15}
                            color="#715F00"
                            style= {TeamTextStyle}
                        />
                        <RowContainer>
                            <Text
                                value="celina.jung"
                                fontFamily="KakaoBold"
                                fontSize={35}
                                color="#000000"
                            />
                            <Text
                                value="정은채"
                                fontFamily="KakaoRegular"
                                fontSize={18}
                                color="#000000"
                            />
                        </RowContainer>
                    </ColumnContainer>
                    { myPage ? <LogoutButton/> : <TalkButton/>} {/*내 페이지 / 다른 사람 페이지 구분*/}
                </RowContainer>

                <Line width = "95%"/>
                <br/>

                <MarkdownEditor/>
            </RoundBox>
            <br></br><br></br><br></br>
        </Layout>
    );
};