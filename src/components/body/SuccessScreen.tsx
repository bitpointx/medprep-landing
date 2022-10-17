import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Button, Typography, Box, Stack } from "@mui/material";
import Img from "../images/successpay.jpg";
import styled from "styled-components";
import { toast } from "react-toastify";

const Img1 = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 30%;
  margin: 5rem 0;
`;

const SuccessScreen = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const createToken = async () => {
    //amount
    const amt = searchParams.get("amt");
    //payment refid
    const rid = searchParams.get("refId");
    //productid
    const pid = searchParams.get("oid");
    const exam = pid!.split("_")[1];
    try {
      // notify("Email sent succeessfully");
      await axios.post(
        `${process.env.REACT_APP_API_URL}/web/createtoken?scd=${process.env.REACT_APP_MERCHANT_ID}&amt=${amt}&rid=${rid}&pid=${pid}`,
        {
          user: user,
          exam: exam,
        }
      );
      //   notify("Email sent succeessfully");
    } catch (error) {
      toast("Failed to create exam for you. Please contact the admin");
      // alert("Hello");
      // localStorage.removeItem("user");
      //   notify("Failed To send email");
      // navigate("/exams");
    }
  };
  useEffect(() => {
    createToken();
  }, []);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Img1 src={Img} alt="images" />
        <h4>
          Payment is successful. A link for the exam was sent to your email.
        </h4>
        <h4>
          If you don't recive any mail please click{" "}
          <span
            // onClick={}
            onClick={createToken}
            style={{
              textDecoration: "underline",
              color: "red",
              cursor: "pointer",
            }}
          >
            here
          </span>{" "}
          to resend.
        </h4>
        {/* <p>Medprep Nepal</p> */}
      </Box>
      {/* <Stack
        width="100%"
        maxWidth="500px"
        minHeight="300px"
        direction="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop="100px"
        boxShadow={1}
        gap={3}
        borderRadius={2}
      >
        <Typography variant="h6">
          Exam Link Have been sent to your email
        </Typography>
        <Stack direction="row" columnGap={3}>
          <Button onClick={createToken} variant="outlined">
            Resend
          </Button>
          <Button variant="contained" onClick={() => navigate("/")}>
            Home
          </Button>
        </Stack>
      </Stack> */}
    </>
  );
};
export default SuccessScreen;
