import Img1 from "../images/user.png";
import Img2 from "../images/email.png";
import Img3 from "../images/Otp.png";

export const inputs = [
  {
    id: 1,
    img: Img1,
    name: "name",
    type: "text",
    placeholder: "Enter Name",
    errorMessage: "username is required !!",
    pattern: "^[A-Za-z0-9s ]{4,28}$",
    required: true,
  },
  {
    id: 2,
    img: Img2,
    name: "email",
    type: "email",
    placeholder: "Enter Email",
    errorMessage: "invalid email address !!",
    required: true,
  },
];

export const setOtp = [
  {
    id: 3,
    img: Img3,
    name: "otp",
    type: "number",
    placeholder: "Enter OTP",
    errorMessage: "OTP is required !!",
    pattern: "(|^)\\d{6}",
    required: true,
  },
];
