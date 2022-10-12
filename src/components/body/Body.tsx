import React from "react";
import { Link } from "react-router-dom";
import AppStore from "../images/app-store-apple-logo.png";
import GooglePlayStore from "../images/google-play-logo.png";
import mobile from "../images/mobile.png";
import {
  Img,
  H2,
  H3,
  Para,
  Img1,
  Img2,
  Main,
  Div1,
  Div2,
  A,
  Background,
} from "../style/Background";

const Body = () => {
  return (
    <>
      <Background>
        <Main>
          <H2>EMBARK Your Exam Preparation
          </H2>
          <H3> With The Med-Prep Team</H3>
          <Para>
            High-yield Qbank, first-rate study material, and the best of everything - just a click away.
            <br />
            QBank and the best of everything - just a click away.
          </Para>
          <Div1>

            <A>
              <a href="https://apps.apple.com/in/app/bitpointx-learning/id1608208163" target={"_blank"} rel="noreferrer">
                <Img1 src={AppStore} alt="app-store-logo" /></a>


              <a href="https://play.google.com/store/apps/details?id=au.com.bitpointx.classroomapp&hl=en&gl=US" target={"_blank"} rel="noreferrer">
                <Img2 src={GooglePlayStore} alt="app-store-logo" />
              </a>


            </A>

          </Div1>
        </Main>
        <Div2>
          <Img src={mobile} alt="mobile image" />
        </Div2>
      </Background>
    </>
  );
};

export default Body;
