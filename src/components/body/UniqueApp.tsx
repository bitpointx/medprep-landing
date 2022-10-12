import React, { useState } from "react";
import img1 from "../images/mobile.png";
import img2 from "../images/smartphone.png";
import img3 from "../images/Vector1.png";
import Dialog from "@mui/material/Dialog";
import Modal from "./Modal";

import {
  Wrapper,
  H1,
  Main,
  Div1,
  Div2,
  IMG1,
  IMG2,
  IMG3,
  SPAN,
  P,
  P1,
  P2,
  P3,
  Btn,
  Div3,
  Div4,
} from "../style/AwesomeApp";

function UniqueApp() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <H1>Awesome & Unique App Functionality</H1>
      <P>
        Learners will benefits from our data oriented learning process with
        driving instructions <br />
        to get the most of the flexibility and cost-effectivity.
      </P>
      <Main>
        <Div1>
          <IMG1 src={img1} alt="images" />
        </Div1>
        <Div2>
          <SPAN>
            QBank, Test Series, Notes &amp; More<br />
          </SPAN>

          <P1>
            Access the Med-Prep Nepal app on the device of your choice &amp; reap the benefits of top-notch content-
            be it IOS, Android or Laptop.
          </P1>
          {/* <Div3>
            <IMG2 src={img2} alt="images" />
            <P2>
              Smart Communication system helps you get response <br /> quick and
              convenient.
            </P2>
          </Div3>
          <Div4>
            <IMG3 src={img3} alt="images" />
            <P3>
              Access all the instructor's free slots around you, make <br />{" "}
              different bookings by your needs.
            </P3>
          </Div4> */}

          {/* Modal Starting here */}
          {localStorage.getItem("token") ? null : (
            <Btn type="button" onClick={handleClickOpen}>
              Enroll now
            </Btn>
          )}
          <Dialog
            open={open}
            // onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Modal handleClose={handleClose} />
          </Dialog>
        </Div2>
      </Main>
    </Wrapper>
  );
}

export default UniqueApp;
