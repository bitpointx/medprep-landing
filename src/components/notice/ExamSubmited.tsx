import React, { useState } from "react";
import Img from "../images/examend.jpg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import { adminService } from "../../http/admin-service";
import { toast } from "react-toastify";

const Img1 = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 30%;
  margin: 5rem 0;
`;

function ExamSubmitted() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const getPdf = async () => {
    setLoading(true);
    const resultId = localStorage.getItem("result");
    if (resultId) {
      try {
        await adminService.getResultPdf(resultId);
        setLoading(false);
        toast("Exam pdf sent to your email");
        navigate("/exams");
      } catch (error) {
        setLoading(false);
        toast("No Result Found. Try Refreshing");
      }
    }
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Img1 src={Img} alt="images" />
      <h4>
        Your exam has been submitted. You can now download your result pdf by
        clicking{" "}
        <span
          onClick={getPdf}
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            color: "red",
          }}
        >
          here
        </span>
        .
      </h4>
      <h4>
        {" "}
        We have multiple exam available <Link to="/exams">here...</Link>
      </h4>
      <Dialog open={loading}>
        <DialogContent sx={{ display: "flex", alignItems: "center" }}>
          Compiling your result. Please wait... <CircularProgress />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default ExamSubmitted;
