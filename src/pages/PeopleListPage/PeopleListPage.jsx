import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Common/Layout.jsx";
import MiniLayout from "../../components/Common/miniLayout.jsx";
import PeopleCard from "../../components/PeopleListComponents/PeopleCard/peopleCard.jsx";
import fetchMembersList from "../../services/fetchMembersList.js";
import dummyImages1 from "../../assets/dummyImages/peopleList.jpeg"

export const PeopleListPage = () => {
    const navigate = useNavigate();
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const displayMembers = async () => {
            setIsLoading(true);
            try {
                const membersData = await fetchMembersList();
                console.log('Fetched Members:', membersData.data);
                if (membersData && membersData.data && membersData.data.memberList) {
                    setMembers(membersData.data.memberList);
                } else {
                    console.error('Invalid data structure:', membersData);
                    setMembers([]);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch members:', error);
                setError(error);
                setIsLoading(false);
            }
        };

        //displayMembers();
    }, []);
    ;

    const handleCardClick = () => {
        navigate('/details');
    };

    // if (isLoading) return <div>로딩 중...</div>;
    // if (error) return <div>에러 발생: {error.message}</div>;

    return (
        <Layout>
            <MiniLayout text="카부인 전당" layerWidth="80%">
                <PeopleCard
                    image="src/assets/dummyImages/peopleList.jpeg" // 더미이미지
                    name="celina.jung (정은체)" // 임시 하드코딩
                    affiliation="카카오 부트캠프 1기 : AI"
                    onClick={handleCardClick}
                />
                <PeopleCard
                    image="src/assets/dummyImages/peopleList2.png" // 더미이미지
                    name="celina.jung (정은체)" // 임시 하드코딩
                    affiliation="카카오 부트캠프 1기 : AI"
                    onClick={handleCardClick}
                />
                <PeopleCard
                    image="src/assets/dummyImages/peopleList.jpeg" // 더미이미지
                    name="celina.jung (정은체)" // 임시 하드코딩
                    affiliation="카카오 부트캠프 1기 : AI"
                    onClick={handleCardClick}
                />
                <PeopleCard
                    image="src/assets/dummyImages/peopleList2.png" // 더미이미지
                    name="celina.jung (정은체)" // 임시 하드코딩
                    affiliation="카카오 부트캠프 1기 : AI"
                    onClick={handleCardClick}
                />
                <PeopleCard
                    image="src/assets/dummyImages/peopleList.jpeg" // 더미이미지
                    name="celina.jung (정은체)" // 임시 하드코딩
                    affiliation="카카오 부트캠프 1기 : AI"
                    onClick={handleCardClick}
                />
                <PeopleCard
                    image="src/assets/dummyImages/peopleList2.png" // 더미이미지
                    name="celina.jung (정은체)" // 임시 하드코딩
                    affiliation="카카오 부트캠프 1기 : AI"
                    onClick={handleCardClick}
                />
                <PeopleCard
                    image="src/assets/dummyImages/peopleList.jpeg" // 더미이미지
                    name="celina.jung (정은체)" // 임시 하드코딩
                    affiliation="카카오 부트캠프 1기 : AI"
                    onClick={handleCardClick}
                />
                <PeopleCard
                    image="src/assets/dummyImages/peopleList2.png" // 더미이미지
                    name="celina.jung (정은체)" // 임시 하드코딩
                    affiliation="카카오 부트캠프 1기 : AI"
                    onClick={handleCardClick}
                />
                <PeopleCard
                    image="src/assets/dummyImages/peopleList.jpeg" // 더미이미지
                    name="celina.jung (정은체)" // 임시 하드코딩
                    affiliation="카카오 부트캠프 1기 : AI"
                    onClick={handleCardClick}
                />
                <PeopleCard
                    image="src/assets/dummyImages/peopleList2.png" // 더미이미지
                    name="celina.jung (정은체)" // 임시 하드코딩
                    affiliation="카카오 부트캠프 1기 : AI"
                    onClick={handleCardClick}
                />
                <PeopleCard
                    image="src/assets/dummyImages/peopleList.jpeg" // 더미이미지
                    name="celina.jung (정은체)" // 임시 하드코딩
                    affiliation="카카오 부트캠프 1기 : AI"
                    onClick={handleCardClick}
                />
                <PeopleCard
                    image="src/assets/dummyImages/peopleList2.png" // 더미이미지
                    name="celina.jung (정은체)" // 임시 하드코딩
                    affiliation="카카오 부트캠프 1기 : AI"
                    onClick={handleCardClick}
                />
            </MiniLayout>
        </Layout>
    );
};
