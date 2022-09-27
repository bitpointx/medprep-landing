import React, { useEffect } from "react";
import img4 from "../images/Exam-list.png";
import GlobalStyle from "../style/GlobalStyles";
import LearnContainer from "../../screen/Home/Learn/LearnContainer";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import img2 from "../../components/images/help-circle.png";
import img3 from "../../components/images/clock.png";
// import img1 from "../../components/images/Top-Img2.png";
import moment from "moment";

import {
  Background,
  Wrapper,
  Main,
  Content,
  // Img,
  Title,
  Po,
  Time,
  QN,
  Img1,
  P1,
  MIN,
  Img2,
  P2,
  Sec,
  Img3,
  Date,
  Startdate,
  End,
  Underline,
  Border,
  Foot,
  Colon,
  RS,
  Button,
} from "../style/ExamCard";
import Navbar from "../../screen/Home/Navbar/Navbar";
import Footer from "./Footer";
import { adminService } from "../../http/admin-service";

function Exam() {
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      await adminService.setExamData(dispatch);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  });

  const examing = useSelector((state: any) => state.examlist.exams);
  // console.log("Exam is:-", examing);
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Background
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Img3 src={img4} />
        <p
          style={{
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "40px",
            color: "#FFFFFF",
            position: "absolute",
            top: "50%",
          }}
        >
          Exam Lists
        </p>
      </Background>
      <Wrapper>
        {examing.map((parameter: any) => {
          return (
            <div>
              <Main key={parameter.id}>
                {/* <Img src={img1} alt="images" /> */}
                <Content>
                  <Title>
                    <Po>{parameter.name}</Po>
                  </Title>
                  <Time>
                    <QN>
                      <Img1 src={img2} alt="images" />
                      <P1>{parameter.questions.length} Questions</P1>
                    </QN>
                    <MIN>
                      <Img2 src={img3} alt="images" />
                      <P2>{parameter.time} minutes</P2>
                    </MIN>
                    <Sec></Sec>
                  </Time>
                  <Date>
                    <Startdate style={{ display: "flex", gap: "10px" }}>
                      Start Date
                      <Colon>:</Colon>
                      {moment(parameter.startDate).format("l, LTS")}
                    </Startdate>
                    <End style={{ display: "flex", gap: "17px" }}>
                      End Date
                      <Colon>:</Colon>
                      {moment(parameter.endDate).format("l, LTS")}
                    </End>
                  </Date>
                  <Underline>
                    <Border></Border>
                  </Underline>
                  <Foot>
                    <RS>Rs {parameter.price || 200}</RS>
                    <form
                      action="https://esewa.com.np/epay/main"
                      method="POST"
                      style={{ padding: "0px" }}
                    >
                      <input
                        value="1"
                        name="tAmt"
                        type="hidden"
                      />
                      <input value="1" name="amt" type="hidden" />
                      <input value="0" name="txAmt" type="hidden" />
                      <input value="0" name="psc" type="hidden" />
                      <input value="0" name="pdc" type="hidden" />
                      <input
                        value={process.env.REACT_APP_MERCHANT_ID}
                        name="scd"
                        type="hidden"
                      />
                      <input
                        value={`${uuidv4()}_${parameter.id}`}
                        name="pid"
                        type="hidden"
                      />
                      <input
                        value={`${process.env.REACT_APP_FRONTEND_URL}/successpay`}
                        type="hidden"
                        name="su"
                      />
                      <input
                        value={`${process.env.REACT_APP_FRONTEND_URL}/exams`}
                        type="hidden"
                        name="fu"
                      />
                      <Button type="submit">Get Exam</Button>
                    </form>
                  </Foot>
                </Content>
              </Main>
            </div>
          );
        })}
      </Wrapper>
      <LearnContainer />
      <Footer />
    </>
  );
}

export default Exam;
