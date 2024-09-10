import React, {useState} from "react";
import Layout from "../../components/Common/Layout";
import * as styles from "../join/styled/JoinPage.styled.js";
import Text from "@/components/Common/Text.jsx";
import {postMemberData} from '../../api/postMemberData.js'
import {ContentLineTitleWrapper} from "../join/styled/JoinPage.styled.js";

function JoinPage(){
    const [englishName, setEnglishName] = useState("");
    const [koreaName, setKoreaName] = useState("");
    const [classNum, setclassNum] = useState("");
    const [team, setTeam] = useState("");
    const [course, setCourse] = useState("");

    const handleTeamSelect = (selectedTeam)=>{

        setTeam(selectedTeam);
    }

    const handleSubmit  = async () =>{
        const IntClassNum = parseInt(classNum, 10);

        if(isNaN(IntClassNum)){
            alert("기수를 숫자로 입력하세요!");
            return;
        }

        const data = {
            englishName,
            koreaName,
            classNum:IntClassNum,
            course,
        };
        console.log(data);
        localStorage.setItem("koreaName", koreaName);


        try {
            const result = await postMemberData(data); // API 유틸리티 파일의 함수 호출
            console.log("회원정보 보내기 성공!:", result);
            alert("회원 정보가 성공적으로 전송되었습니다.");
        } catch (error) {
            alert("오류가 발생했습니다. 다시 시도해주세요.");
        }

    };

    return(

        <Layout>
            <styles.TotalWrapper>
                <styles.TitleWrapper>
                    <styles.Title>
                        회원가입: 세부 정보 입력
                    </styles.Title>
                </styles.TitleWrapper>
                <styles.InnerWrapper>
                    <styles.ContentWrapper>
                        <styles.ContentLineWrapper>
                            <ContentLineTitleWrapper>
                                <Text
                                    value={"영문이름"}
                                    fontFamily="KakaoBold"
                                    fontSize={25}
                                    color="#000"
                                ></Text>
                            </ContentLineTitleWrapper>

                            <styles.InputWrapper>
                                <styles.Input
                                    value={englishName}
                                    onChange={(e) => setEnglishName(e.target.value)}

                                ></styles.Input>
                            </styles.InputWrapper>
                        </styles.ContentLineWrapper>
                        <styles.ContentLineWrapper>
                            <styles.ContentLineTitleWrapper>
                                <Text
                                    value={"한글이름"}
                                    fontFamily="KakaoBold"
                                    fontSize={25}
                                    color="#000"
                                ></Text>
                            </styles.ContentLineTitleWrapper>
                            <styles.InputWrapper>
                                <styles.Input
                                    value={koreaName}
                                    onChange={(e) => setKoreaName(e.target.value)}
                                ></styles.Input>
                            </styles.InputWrapper>
                        </styles.ContentLineWrapper>
                        <styles.ContentLineWrapper>
                            <styles.ContentLineTitleWrapper>
                                <Text
                                    value={"기수"}
                                    fontFamily="KakaoBold"
                                    fontSize={25}
                                    color="#000"
                                ></Text>
                            </styles.ContentLineTitleWrapper>

                            <styles.InputWrapper>
                                <styles.Input
                                    value={classNum}
                                    onChange={(e) => setclassNum(e.target.value)}
                                ></styles.Input>
                            </styles.InputWrapper>
                        </styles.ContentLineWrapper>
                        <styles.ContentLineWrapper>
                            <styles.ContentLineTitleWrapper>
                                <Text
                                    value={"과정"}
                                    fontFamily="KakaoBold"
                                    fontSize={25}
                                    color="#000"
                                ></Text>
                            </styles.ContentLineTitleWrapper>

                            <styles.InputWrapper2>
                                <styles.TeamButton onClick={() => setCourse("FULLSTACK")}>
                                    <Text
                                        value={"풀스택"}
                                        fontFamily="KakaoBold"
                                        fontSize={15}
                                        color="#000"
                                    ></Text>
                                </styles.TeamButton>
                                <styles.TeamButton onClick={() => setCourse("AI")}>
                                    <Text
                                        value={"인공지능"}
                                        fontFamily="KakaoBold"
                                        fontSize={15}
                                        color="#000"
                                    ></Text>
                                </styles.TeamButton>
                                <styles.TeamButton onClick={() => setCourse("CLOUD")}>
                                    <Text
                                        value={"클라우드"}
                                        fontFamily="KakaoBold"
                                        fontSize={15}
                                        color="#000"
                                    ></Text>
                                </styles.TeamButton>
                            </styles.InputWrapper2>

                        </styles.ContentLineWrapper>
                        <styles.ContentLineWrapper>
                            <styles.ContentLineTitleWrapper>
                                <Text
                                    value={"팀"}
                                    fontFamily="KakaoBold"
                                    fontSize={25}
                                    color="#000"
                                ></Text>
                            </styles.ContentLineTitleWrapper>

                            <styles.InputWrapper>
                                <styles.Input
                                    value={team}
                                    onChange={(e) => setTeam(e.target.value)}

                                ></styles.Input>
                            </styles.InputWrapper>
                        </styles.ContentLineWrapper>

                    </styles.ContentWrapper>
                    <styles.ContentLineWrapper2>
                        <styles.TeamButton onClick={handleSubmit}>
                            <Text
                                value={"설정"}
                                fontFamily="KakaoBold"
                                fontSize={25}
                                color="#000"
                            ></Text>
                        </styles.TeamButton>
                    </styles.ContentLineWrapper2>
                </styles.InnerWrapper>
            </styles.TotalWrapper>
        </Layout>
    )
};

export default JoinPage;