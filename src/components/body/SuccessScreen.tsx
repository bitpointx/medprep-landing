import React from "react";
import {
  Wrapper,
  Main,
  Para1,
  Content,
  Para2,
  Button,
} from "../style/SuccessfulStyle";
import SuccessImg from "../images/successful-img.png";
import { Link } from "react-router-dom";

const SuccessScreen = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <img src={SuccessImg} alt="SuccessImg" />
        </Main>
        <Content>
          <Para1>Your Payment is Successfull.</Para1>
          <Para2>
            Thankyou for your payment.Exam link has been sent to your email.
          </Para2>
          <Link to="/exam">
            <Button>Go Back</Button>
          </Link>
        </Content>
      </Wrapper>
    </>
  );
};
export default SuccessScreen;
