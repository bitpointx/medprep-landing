import React from "react";
import styled from "styled-components";
import data from "../../../components/body/Data";
import Card from "./../../../components/Global/Card";

const CardMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 82px;
`;

const InformationCard = () => {
  return (
    <CardMainContainer>
      {data.map((card) => (
        <Card card={card} />
      ))}
    </CardMainContainer>
  );
};

export default InformationCard;
