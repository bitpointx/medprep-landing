import React, { useState } from "react";
import axios from "axios";
import { inputs, setOtp } from "./InputData";
import FormInput from "./FormInput";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SuccessNotify from "./SuccessNotify";
import ErorNotify from "./ErrorNotify";
import { useDispatch } from "react-redux";
import { setTokenGlobal } from "../../Redux/userSlice";

const firsturl = `${process.env.REACT_APP_API_URL}/web`;
const secondurl = `${process.env.REACT_APP_API_URL}/web/verifyotp`;

function Modal({ handleClose }: any) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues]: any = useState({
    name: "",
    email: "",
  });

  const [open, setOpen] = useState(false);
  const handleCloseNotify = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [error, setError] = useState(false);
  const handleCloseError = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };
  const [show, setShow]: any = useState({
    otp: "",
    email: "",
  });

  const [flag, setFlag] = useState(false);

  const apiCall = async (e: any) => {
    e.preventDefault();
    try {
      const { name, email } = values;
      const response = await axios.post(firsturl, {
        name,
        email,
      });
      console.log(response);
      setFlag(true); //  This is for Show Next Otp modal.
      setOpen(true); //  This is for Show Successfull Notify message.
    } catch (error) {
      // This is for Shown Error message for user.
    }
  };

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const verifyOtp = async (e: any) => {
    e.preventDefault();
    try {
      const { otp } = show;
      const respon = await axios.post(secondurl, {
        email: values.email,
        token: otp,
      });
      console.log(respon);
      dispatch(setTokenGlobal({ token: respon.data.accessToken }));
      // user login
      localStorage.setItem("token", respon.data.accessToken);
      localStorage.setItem("user", respon.data.data.id);

      navigate("/exams");
    } catch (error) {
      setError(true); //  This is for Show ERROR Notify message to user.
      // user Signout
    }
  };
  const Changehandler = (e: any) => {
    setShow({ ...show, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SuccessNotify
        message="Token sent to email"
        open={open}
        handleClose={handleCloseNotify}
      />
      {/* This is for Show Successfull Notify message. */}
      <form
        onSubmit={apiCall}
        noValidate
        style={{ display: !flag ? "block" : "none" }}
      >
        <Typography
          style={{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "650",
            fontSize: "18px",
            color: "#1472BA",
          }}
        >
          Buy Token
        </Typography>
        {inputs.map((suraj: any) => (
          <div key={suraj.id} className="main">
            <FormInput
              key={suraj.id}
              {...suraj}
              value={values[suraj.name]}
              onChange={handleChange}
            />
            <div
              style={{
                paddingTop: "11px",
                position: "absolute",
                top: 0,
                right: "19px",
              }}
            >
              <img className="IMG" src={suraj.img} alt="images" />
            </div>
          </div>
        ))}
        <div className="Line">
          <div className="Border"></div>
        </div>
        <div className="Btn">
          <button onClick={handleClose} className="Cancel-Btn">
            Cancel
          </button>
          <button
            className="Send-Btn"
            type="submit"
            // disabled={!values.name || !values.email ? true : false}
          >
            Send Token
          </button>
        </div>
      </form>
      <ErorNotify open={error} handleError={handleCloseError} />
      {/* This is for Show ERROR Notify message to user. */}
      <form
        onSubmit={verifyOtp}
        // noValidate
        style={{ display: flag ? "block" : "none" }}
      >
        <Typography
          style={{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "650",
            fontSize: "18px",
            color: "#1472BA",
          }}
        >
          Enter OTP
        </Typography>
        {setOtp.map((suraj: any) => (
          <div key={suraj.id} className="main">
            <FormInput
              key={suraj.id}
              {...suraj}
              value={show[suraj.name]}
              onChange={Changehandler}
            />
            <div
              style={{
                paddingTop: "11px",
                position: "absolute",
                top: 0,
                right: "19px",
              }}
            >
              <img className="IMG" src={suraj.img} alt="images" />
            </div>
          </div>
        ))}
        <div className="Line">
          <div className="Border"></div>
        </div>
        <div className="Btn">
          <button onClick={handleClose} className="Cancel-Btn">
            Cancel
          </button>
          <button type="submit" className="Send-Btn">
            Done
          </button>
        </div>
      </form>
    </>
  );
}

export default Modal;
