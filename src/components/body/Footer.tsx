import React from "react";
import Info from "./info";
import logo from "../images/Medprep-white-logo.png";
import {
  Div1,
  Div0,
  Div2,
  Main,
  SUR,
  H2,
  P,
  Img,
  Para,
  DIV,
  Div3,
} from "../style/Foot";

function Footer() {
  return (
    <SUR>
      <Main>
        <Div1>
          {Info.map((datas) => (
            <Div0 key={datas.id}>
              <H2>{datas.heading}</H2>
              <P>{datas.paragraph}</P>
              <P>{datas.main}</P>
              <P>{datas.sub}</P>
            </Div0>
          ))}
        </Div1>
      </Main>
      <DIV>
        <div></div>
        <div></div>
        <Div3></Div3>
        <Div2>
          <Img src={logo} style={{ float: "right" }} />
          <Para style={{ float: "right" }}>
            &copy; 2021 Med Prep. All rights reserved
          </Para>
        </Div2>
        <div></div>
      </DIV>
    </SUR>
  );
}

export default Footer;
