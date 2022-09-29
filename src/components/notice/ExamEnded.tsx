import React from "react";
import Img from "../images/timeup.jpg";
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

function ExamEnded() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Img1 src={Img} alt="images" />
      <h4>
        Exam has ended. If you were giving an exam then your exam has been
        submitted automatically.
      </h4>
      <h4>
        {" "}
        We have multiple exam available <Link to="/exams">here...</Link>
      </h4>
    </Box>
  );
}

export default ExamEnded;
