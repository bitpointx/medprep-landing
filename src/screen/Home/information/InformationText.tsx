import React from "react";
import CommonContainer from "../../../components/Global/Container";
import CommonTextField from "../../../components/Global/TextField";

const InformationText = () => {
  return (
    <CommonContainer padding="20px">
      <CommonTextField textAlign="center" size="large">
        Why Choose Med Prep Nepal?
      </CommonTextField>
      <CommonTextField padding="8px 0px 70px 0px" textAlign="center">
        To boost your preparation with the best. Enrich your knowledge with
        highly <br /> informative, engaging content crafted by the Dream Team.
        Access the best quality <br />
        content and turn any place into a classroom whenever you want.
      </CommonTextField>
    </CommonContainer>
  );
};

export default InformationText;
