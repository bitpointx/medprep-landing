import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../../Home/Profile";
// import Profile from "../Profile/Profile";
import {
  A0,
  A1,
  Head,
  Logo,
  Menubar,
  Img,
} from "../../../components/style/Menubar";
import CommonContainer from "../../../components/Global/Container";
import { Avatar, IconButton, Popover } from "@mui/material";
import { selectEmail } from "../../../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../../../components/images/medprep_logo.png";
import img2 from "../../../components/images/avatar.png";
import { adminService } from "../../../http/admin-service";

// const profileurl = `${process.env.REACT_APP_API_URL}/web/profile`;

const Navbar = () => {
  const dispatch = useDispatch();
  const profileData = async () => {
    // const token = localStorage.getItem("token");
    // const res = await axios.get(profileurl, {
    //   headers: { Authorization: `Bearer ${token}` },
    // });
    // dispatch(
    //   setActiveUser({
    //     name: res.data.data.name,
    //     email: res.data.data.email,
    //     id: res.data.data.id,
    //     token: res.data.data.token,
    //   })
    // );
    try {
      await adminService.setActiveUser(dispatch);
    } catch (error) {}
  };
  useEffect(() => {
    profileData();
  }, []);

  const email: any = useSelector(selectEmail);
  const [open, setopen] = useState(false);
  const ref = useRef(null);
  const handleClick = (event: any) => {
    event.preventDefault();
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };
  return (
    <>
      <CommonContainer
        padding="0px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        width="100%"
        top="0"
        height="90px"
        bgcolor="#FFFFFF"
        zIndex={1}
      >
        <CommonContainer padding="0px" width="20%" zIndex={1}>
          <Link to="/">
            <Img src={img1} />
          </Link>
        </CommonContainer>
        <CommonContainer
          padding="0px"
          width="70%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Link to="#" style={{ textDecoration: "none" }}>
            <A0>Medprep Mobile App</A0>
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <A1>Medprep Web Exam</A1>
          </Link>
          {email ? (
            <IconButton onClick={handleClick} ref={ref!}>
              <Avatar src={img2} />
            </IconButton>
          ) : null}
          <Popover
            open={open}
            anchorEl={ref.current}
            onClose={handleClose}
            container={ref.current}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Profile />
          </Popover>
        </CommonContainer>
      </CommonContainer>
    </>
  );
};

export default Navbar;
