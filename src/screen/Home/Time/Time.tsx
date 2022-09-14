import React from "react";
import {
  ImgWrapper,
  Container,
  Para,
} from "../../../components/style/GlobalStyles";

function EndTime(props: { title: string }) {
  return (
    <ImgWrapper>
      <Container>
        <Para>{props.title}</Para>
      </Container>
    </ImgWrapper>
  );
}

export default EndTime;
