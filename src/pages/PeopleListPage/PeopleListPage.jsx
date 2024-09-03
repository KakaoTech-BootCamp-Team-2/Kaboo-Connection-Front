import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Common/Layout.jsx";
import MiniLayout from "../../components/Common/miniLayout.jsx";
import PeopleCard from "../../components/PeopleListComponents/PeopleCard/peopleCard.jsx";
import fetchMembers from "../../services/memberList.js";

export const PeopleListPage = () => {
    const navigate = useNavigate();
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const displayMembers = async () => {
            setIsLoading(true);
            try {
                // fetchMembers 함수를 호출하여 멤버 데이터를 가져옵니다.
                const membersData = await fetchMembers();
                console.log('Fetched Members:', membersData.data); // 데이터 구조를 확인하기 위해 콘솔에 출력
                if (membersData && membersData.data && membersData.data.memberList) {
                    setMembers(membersData.data.memberList);
                } else {
                    console.error('Invalid data structure:', membersData);
                    setMembers([]); // 데이터 구조가 올바르지 않을 경우 빈 배열 설정
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch members:', error);
                setError(error);
                setIsLoading(false);
            }
        };

        displayMembers();
    }, []);
; // 의존성 배열을 비워 컴포넌트 마운트 시 한 번만 호출되도록 설정

    const handleCardClick = () => {
        navigate('/details');
    };

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>에러 발생: {error.message}</div>;

    return (
        <Layout>
            <MiniLayout text="카부인 전당" layerWidth="80%">
                {members.map((member, index) => (
                    <PeopleCard
                        key={index}
                        image={`src/assets/dummyImages/peopleList${index % 2 + 1}.png`} // 임시 이미지, 인덱스에 따라 번갈아가며 적용
                        name={`${member.englishName} (${member.koreaName})`}
                        affiliation={`카카오 부트캠프 1기 : ${member.course}`}
                        onClick={handleCardClick}
                    />
                ))}
            </MiniLayout>
        </Layout>
    );
};
