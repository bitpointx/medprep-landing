import React from "react";
import CommonContainer from "../../../components/Global/Container";
import InformationCard from "./InformationCard";
import InformationText from "./InformationText";

const index = () => {
  return (
    <>
      <CommonContainer padding="0px" width="100%" height="auto">
        <InformationText />
        <InformationCard />
      </CommonContainer>
    </>
  );
};

export default index;
