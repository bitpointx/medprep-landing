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
          <H2>Crack your tough exams.</H2>
          <H3>Within your mobile app.</H3>
          <Para>
            Engaging Videeos, top-notch study material, high yeild
            <br />
            QBank and the best of everything - just a click away.
          </Para>
          <Div1>
            <Link to="#">
              <A>
                <Img1 src={AppStore} alt="app-store-logo" />
                <Img2 src={GooglePlayStore} alt="app-store-logo" />
              </A>
            </Link>
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
