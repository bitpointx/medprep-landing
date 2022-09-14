import React, { FC } from "react";
import CommonTextField from "../TextField";
import { CardDataType } from "../../body/Data";
import styled from "styled-components";

interface CardProps extends CardDataType {}

const Card = styled.div`
  height: 18rem;
  width: 23rem;
  background: #f1f7f6;
  border-radius: 10px;
  text-align: center;
`;
const Img = styled.img`
  margin-top: 2rem;
  width: 52px;
  height: 52px;

  @media (max-width: 540px) {
    width: 54px;
    height: 54px;
  }
`;

const index: FC<{ card: CardProps }> = ({ card }) => {
  const { img, heading, paragraph, footer } = card;
  return (
    <Card>
      <Img src={img} alt="images" />
      <CommonTextField
        size="small"
        padding="1rem 0px 0px 0px"
        textAlign="center"
      >
        {heading}
      </CommonTextField>
      <CommonTextField
        size="extraSmall"
        padding="0.5rem 0px 0px 0px"
        textAlign="center"
      >
        {paragraph}
      </CommonTextField>
      <CommonTextField textAlign="center">{footer}</CommonTextField>
    </Card>
  );
};

export default index;
