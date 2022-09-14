import React from "react";
import CommonContainer from "../../../components/Global/Container";
import CommonTextField from "../../../components/Global/TextField";
import QrImage from "../../../components/images/QR.png";
import {
  // Div,
  H2,
  P,
  // Main,
  Img,
  Div2,
  Input1,
  Button,
} from "../../../components/style/QRcode";

const LearnContainer = () => {
  return (
    <div>
      <CommonContainer
        padding="0px"
        margin="80px 0px 0px 0px"
        bgcolor="#1472ba"
      >
        <CommonContainer padding="0px" bgcolor="#1472ba">
          <CommonTextField
            size="large"
            color="#EDEDED"
            padding="3rem 0rem 0rem 0rem"
            textAlign="center"
          >
            Why Wait More? Start your Learning Journey
          </CommonTextField>
          <CommonTextField size="extraSmall" color="#F1F7F6" textAlign="center">
            Get the free Med Prep Nepal app Nepal on your phone
          </CommonTextField>
        </CommonContainer>
        <CommonContainer
          padding="0px"
          bgcolor="#1472ba"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          <div>
            <Img src={QrImage} alt="QR-Image" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "1.5rem",
            }}
          >
            <Input1 type="text" placeholder="Enter your phone number" />
            <Button type="button" value="JOIN" />
          </div>
        </CommonContainer>
      </CommonContainer>
    </div>
  );
};

export default LearnContainer;
