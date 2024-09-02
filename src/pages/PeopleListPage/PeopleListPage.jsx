import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Common/Layout.jsx";
import MiniLayout from "../../components/Common/miniLayout.jsx";
import PeopleCard from "../../components/PeopleListComponents/PeopleCard/peopleCard.jsx";

export const PeopleListPage = () => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate('/details');
  };

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
