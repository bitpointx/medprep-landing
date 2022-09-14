import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { left, right } from "../../../components/body/QuestionData";
import {
  Left,
  Right,
  SPAB,
  // Top,
  Para,
  Typography1,
  Wrapper,
  Typography2,
} from "../../../components/style/Accordion";
import CommonContainer from "../../../components/Global/Container";
import CommonTextField from "../../../components/Global/TextField";

const Question = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (id: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? id : false);
  };
  return (
    <div>
      <CommonContainer padding="0px" margin="80px 0px 0px 0px">
        <CommonTextField size="large" textAlign="center" color="#11181f">
          Getting Started
        </CommonTextField>
        <CommonTextField size="extraSmall" textAlign="center">
          Your questions answered
        </CommonTextField>
      </CommonContainer>
      <CommonContainer
        padding="0px"
        margin="60px 0px 0px 0px"
        display="grid"
        gridTemplateColumns="34% 34%"
        justifyContent="center"
        gridColumnGap="85px"
      >
        <CommonContainer
          padding="0px"
          display="flex"
          flexDirection="column"
          gap="15px"
        >
          {left.map((accordion) => {
            const { id, question, answer } = accordion;
            return (
              <Accordion
                expanded={expanded === id}
                key={id}
                onChange={handleChange(id)}
                elevation={0}
                disableGutters
                sx={{
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#01B29A" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <CommonTextField size="small">{question}</CommonTextField>
                </AccordionSummary>
                <AccordionDetails>
                  <CommonTextField
                    size="tiny"
                    textAlign="justify"
                    color="#11181f"
                  >
                    {answer}
                  </CommonTextField>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </CommonContainer>
        <CommonContainer
          padding="0px"
          display="flex"
          flexDirection="column"
          gap="15px"
        >
          {right.map((accordion) => {
            const { id, question, answer } = accordion;
            return (
              <Accordion
                expanded={expanded === id}
                key={id}
                onChange={handleChange(id)}
                elevation={0}
                disableGutters
                sx={{
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#01B29A" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <CommonTextField size="small" color="#11181f">
                    {question}
                  </CommonTextField>
                  <Typography></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <CommonTextField size="tiny" textAlign="justify">
                    {answer}
                  </CommonTextField>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </CommonContainer>
      </CommonContainer>
    </div>
  );
};

export default Question;
