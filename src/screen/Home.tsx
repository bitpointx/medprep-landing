import React from "react";
import Body from "../components/body/Body";
import Footer from "../components/body/Footer";
import UniqueApp from "../components/body/UniqueApp";
import Information from "./Home/information";
import LearnContainer from "./Home/Learn/LearnContainer";
import Navbar from "./Home/Navbar/Navbar";
import Question from "./Home/Question/Question";

function Home() {
  return (
    <>
      <Navbar />
      <Body />
      <Information />
      <UniqueApp />
      <Question />
      <LearnContainer />
      <Footer />
    </>
  );
}
export default Home;
