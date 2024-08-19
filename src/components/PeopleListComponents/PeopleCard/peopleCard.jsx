/** @jsxImportSource @emotion/react */
import Text from "../../Common/Text.jsx";
import React from "react";
import {
  CardContainer,
  ProfileImage,
  Name,
  Affiliation,
} from "./peopleCard.styled.js";

const PeopleCard = ({ image, name, affiliation, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <ProfileImage src={image} alt={name} />
      <Text
        value={name}
        fontFamily="KakaoBold"
        fontSize={15}
        color="#000"
        style={Name}
      />
      <Text
        value={affiliation}
        fontFamily="KakaoRegular"
        fontSize={13}
        color="#715F00"
        style={Affiliation}
      />
    </CardContainer>
  );
};

export default PeopleCard;
