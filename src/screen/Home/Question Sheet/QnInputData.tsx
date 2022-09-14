import React from "react";
// import GlobalStyle from "../../../components/style/GlobalStyles";
import axios from "axios";
import "./QnInputData.css";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { changeAns } from "../../../Redux/examsPageSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

interface QNinputDataProps {
  index: number;
  selectedAnswer: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  questionId: string;
  textQuestion: string;
}

const QNinputData: React.FC<QNinputDataProps> = ({
  index,
  selectedAnswer,
  optionA,
  optionB,
  optionC,
  optionD,
  questionId,
  textQuestion,
}) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const token = searchParams.get("token");

  const updateAns = async (e: any) => {
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjdkOWE4M2IzMzkyMDAxNjZjOGVjZSIsImVtYWlsIjoibmVwYWxpa2FsYWthcmEzQGdtYWlsLmNvbSIsImV4YW0iOiI2MjIxYzEyNTkyMGM1ZTAwMTY3MWEwNTkiLCJpYXQiOjE2NjA0NTA5OTYsImV4cCI6MTY2ODIyNjk5Nn0.qOwJsIsUUrryBYOVG2JH9O9jRxj8HceF80QnOhFDbbE";
    try {
      // console.log(e.target.value);
      dispatch(changeAns({ index, selectedAnswer: e.target.value }));

      await axios.patch(
        `${process.env.REACT_APP_API_URL}/web/${localStorage.getItem(
          "result"
        )}`,
        {
          question: questionId,
          selectedAnswer: e.target.value,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      dispatch(changeAns({ index, selectedAnswer: "" }));

      console.log("Error is:-", error);
    }
  };

  return (
    <FormControl>
      <RadioGroup
        sx={{
          "& .MuiSvgIcon-root": {
            borderRadius: 0,
          },
          "& .MuiRadio-root": {
            padding: 0,
          },
        }}
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue={selectedAnswer === "" ? null : selectedAnswer}
        onChange={updateAns}
      >
        {/* <GlobalStyle /> */}
        {/* <form style={{ border: "1px solid red" }}> */}
        <div className="Question-Wrapper">
          <div className="Question-Main">
            <div className="Question-Container">
              <div className="Question-Top">
                <p className="Question-Top-Para">Question</p>
                <p className="Question-Top-Para">:&nbsp;&nbsp; {index + 1}</p>
              </div>
            </div>
            <div className="Question">
              <p className="Question-Para">{textQuestion}</p>
            </div>
            <div className="Container">
              <div className="OptionA">
                <div className="CircleA">
                  <p className="CircleA-Para">A</p>
                </div>
                <div className="Middle">
                  <p className="Middle-Para">{optionA}</p>
                </div>
                <div>
                  <FormControlLabel
                    sx={{ m: "auto" }}
                    value="A"
                    control={<Radio />}
                    label={""}
                  />
                </div>
              </div>
              <div className="OptionA">
                <div className="CircleA">
                  <p className="CircleA-Para">B</p>
                </div>
                <div className="Middle">
                  <p className="Middle-Para">{optionB}</p>
                </div>
                <div>
                  <FormControlLabel
                    sx={{ m: "auto" }}
                    value="B"
                    control={<Radio />}
                    label={""}
                  />
                </div>
              </div>
              <div className="OptionA">
                <div className="CircleA">
                  <p className="CircleA-Para">C</p>
                </div>
                <div className="Middle">
                  <p className="Middle-Para">{optionC}</p>
                </div>
                <div>
                  <FormControlLabel
                    sx={{ m: "auto" }}
                    value="C"
                    control={<Radio />}
                    label={""}
                  />
                </div>
              </div>
              <div className="OptionA">
                <div className="CircleA">
                  <p className="CircleA-Para">D</p>
                </div>
                <div className="Middle">
                  <p className="Middle-Para">{optionD}</p>
                </div>
                <div>
                  <FormControlLabel
                    sx={{ m: "auto" }}
                    value="D"
                    control={<Radio />}
                    label={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </form> */}
      </RadioGroup>
    </FormControl>
  );
};
export default QNinputData;
