import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Button, Typography } from "@mui/material";

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
      <Typography>Exam Link Have been sent to your email</Typography>
      <Button onClick={createToken}>Resend</Button>
    </>
  );
};
export default SuccessScreen;
