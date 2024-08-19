import React from "react";
import Layout from "../components/Common/Layout";
import MiniLayout from "../components/Common/MiniLayout";
import PeopleCard from "../components//PeopleListComponents/peopleCard";

export const PeopleListPage = () => {
  const handleCardClick = () => {
    alert("상세페이지 ㄱㄱ"); // 상세페이지 고치기
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
