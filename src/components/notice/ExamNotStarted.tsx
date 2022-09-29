import React from "react";
import Img from "../images/timenot.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Img1 = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 30%;
  margin: 5rem 0;
`;

function ExamNotStarted() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Img1 src={Img} alt="images" />
      <h4>
        Exam has not started yet. Checkout our other exams{" "}
        <Link to="/exams">here...</Link>
      </h4>
      {/* <p>Medprep Nepal</p> */}
    </Box>
  );
}

export default ExamNotStarted;
