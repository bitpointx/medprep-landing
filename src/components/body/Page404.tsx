import React from "react";
import Img from "../images/error-404.png";
import styled from "styled-components";

const Img1 = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
  padding: 8rem 0;
`;

function Page404() {
  return (
    <>
      <Img1 src={Img} alt="images" />
    </>
  );
}

export default Page404;
