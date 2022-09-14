import React, { useState } from "react";
// import { left, right } from "./QuestionData";
// import {
//   Wrapper,
//   Top,
//   SPAB,
//   Para,
//   Left,
//   Right,
//   Typography1,
//   Typography2,
// } from "../style/Accordion";

// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// function Getting() {
//   const [expanded, setExpanded] = useState("");

//   const handleChange = (id: any) => (event: any, isExpanded: any) => {
//     setExpanded(isExpanded ? id : false);
//   };
//   return (
//     <>
//       <Top>
//         <SPAB>Getting Started</SPAB>
//         <Para>Your questions answered</Para>
//       </Top>
//       <Wrapper>
//         <Left>
//           {left.map((accordion) => {
//             const { id, question, answer } = accordion;
//             return (
//               <Accordion
//                 expanded={expanded === id}
//                 key={id}
//                 onChange={handleChange(id)}
//                 elevation={0}
//                 disableGutters
//                 sx={{
//                   "&:before": {
//                     display: "none",
//                   },
//                 }}
//               >
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon sx={{ color: "#01B29A" }} />}
//                   aria-controls="panel1bh-content"
//                   id="panel1bh-header"
//                 >
//                   <Typography1>{question}</Typography1>
//                   <Typography></Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Typography2>{answer}</Typography2>
//                 </AccordionDetails>
//               </Accordion>
//             );
//           })}
//         </Left>
//         <Right>
//           {right.map((accordion) => {
//             const { id, question, answer } = accordion;
//             return (
//               <Accordion
//                 expanded={expanded === id}
//                 key={id}
//                 onChange={handleChange(id)}
//                 elevation={0}
//                 disableGutters
//                 sx={{
//                   "&:before": {
//                     display: "none",
//                   },
//                 }}
//               >
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon sx={{ color: "#01B29A" }} />}
//                   aria-controls="panel1bh-content"
//                   id="panel1bh-header"
//                 >
//                   <Typography1>{question}</Typography1>
//                   <Typography></Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <Typography2>{answer}</Typography2>
//                 </AccordionDetails>
//               </Accordion>
//             );
//           })}
//         </Right>
//       </Wrapper>
//     </>
//   );
// }
// export default Getting;
