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
        To enhance your preparation with the Finest Faculty
      </CommonTextField>
    </CommonContainer>
  );
};

export default InformationText;
