import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectEmail,
  selectName,
  setActiveUser,
} from "../../../Redux/userSlice";
import img1 from "../../../components/images/avatar.png";
import img2 from "../../../components/images/History1.png";
import img3 from "../../../components/images/SignOut.png";
import img4 from "../../../components/images/GoTo.png";
import CommonContainer from "../../../components/Global/Container";
import CommonTextField from "../../../components/Global/TextField";
import styled from "styled-components";

const Img0 = styled.img`
  width: 35px;
  height: 35px;
`;
const Img1 = styled.img`
  width: 18px;
  height: 17px;
`;
const Img4 = styled.img`
  width: 18px;
  height: 18px;
`;
const Img2 = styled.img`
  width: 16px;
  height: 16px;
`;

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name: any = useSelector(selectName);
  const email: any = useSelector(selectEmail);

  const handleSignOut = () => {
    dispatch(
      setActiveUser({
        name: "",
        email: "",
      })
    );
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <CommonContainer
        padding="0px"
        width="auto"
        height="154px"
        bgcolor="#ffffff"
        border="0.3px solid #ffffff"
        borderRadius="8px"
      >
        <CommonContainer
          padding="0px"
          width="249px"
          height="53px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          margin="5px 0px 0px 0px"
          gap="6px"
        >
          <CommonContainer
            padding="0px"
            display="flex"
            alignItems="center"
            width="40px"
            height="40px"
          >
            <Img0 src={img1} alt="Profile-img" />
          </CommonContainer>
          <CommonContainer
            padding="0px"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="184px"
            height="40px"
          >
            <CommonTextField size="tiny" color="#3d3838">
              {name}
            </CommonTextField>
            <CommonTextField size="tiny" color="#3d3838">
              {email}
            </CommonTextField>
          </CommonContainer>
        </CommonContainer>
        <CommonContainer padding="0px" display="flex" justifyContent="center">
          <div
            style={{ borderBottom: "0.5px solid #ecf0f1", width: "220px" }}
          ></div>
        </CommonContainer>
        <CommonContainer
          padding="0px"
          width="230px"
          height="84px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          margin="9px auto"
        >
          <CommonContainer
            padding="0px "
            width="200px"
            height="41px"
            display="flex"
            margin="auto"
            alignItems="center"
            gap="12px"
            bgcolor="#ffffff"
            borderRadius="4px"
          >
            {localStorage.getItem("token") ? (
              <Link to="/exams">
                <button
                  style={{
                    fontFamily: "Rubik",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "17px",
                    color: "#3d3838",
                    border: "none",
                    backgroundColor: "white",
                    cursor: "pointer",
                  }}
                >
                  <CommonContainer padding="0px" display="flex" gap="12px">
                    <Img4 src={img4} alt="histroy-img" />
                    GoTo Exam
                  </CommonContainer>
                </button>
              </Link>
            ) : null}
          </CommonContainer>
          {/* <CommonContainer
            padding="0px"
            width="200px"
            height="41px"
            display="flex"
            margin="auto"
            alignItems="center"
            gap="12px"
            bgcolor="#ffffff"
            borderRadius="4px"
          >
            <button
              style={{
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#3d3838",
                border: "none",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              <CommonContainer padding="0px" display="flex" gap="12px">
                <Img1 src={img2} alt="histroy-img" />
                Exam History
              </CommonContainer>
            </button>
          </CommonContainer> */}
          <CommonContainer
            padding="0px"
            width="200px"
            height="41px"
            display="flex"
            margin="auto"
            alignItems="center"
            gap="12px"
            bgcolor="#ffffff"
            borderRadius="4px"
          >
            <button
              onClick={handleSignOut}
              style={{
                fontFamily: "Rubik",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "17px",
                color: "#3d3838",
                border: "none",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              <CommonContainer padding="0px" display="flex" gap="12px">
                <Img2 src={img3} alt="SignOut-img" />
                Sign Out
              </CommonContainer>
            </button>
          </CommonContainer>
        </CommonContainer>
      </CommonContainer>
    </div>
  );
};

export default Profile;
