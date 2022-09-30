import React, { useEffect, useRef, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  Hidden,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { Paper } from "@mui/material";
import GlobalStyle from "../../../components/style/GlobalStyles";
import MenuIcon from "@mui/icons-material/Menu";
import "./ExamPage.css";
import axios from "axios";
import NormalQuestion from "../Question Sheet/NormalQuestion";
import Profile from "../Profile/Profile";
import moment from "moment";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { setExamPage } from "../../../Redux/examsPageSlice";
// import ExamNotStarted from "./ExamNotStarted";
// import ExamTimeOver from "./ExamTimeOver";
import { useNavigate, useSearchParams } from "react-router-dom";
// import { adminService } from "../../../http/admin-service";
import SuccessNotify from "../../../components/body/SuccessNotify";
import ExamEnded from "../../../components/notice/ExamEnded";
import { NotStarted } from "@mui/icons-material";
import ExamNotStarted from "../../../components/notice/ExamNotStarted";
import { ToastContainer, toast } from "react-toastify";

interface responseProps {
  data: any;
  startDate: number;
  endDate: number;
}

function Card({ title }: { title: string }) {
  return (
    <>
      <Stack
        width="500px"
        height="300px"
        margin="auto"
        mt={10}
        boxShadow={1}
        justifyContent="center"
        alignItems="center"
        borderRadius={2}
      >
        <Typography variant="h5">{title}</Typography>
      </Stack>
    </>
  );
}

const onlineExamUrl = `${process.env.REACT_APP_API_URL}/web/exam`;
const ExamPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [notiOpen, setnotifyOpen] = useState(false);
  const [responseTime, setResponseTime] = useState<responseProps>({
    data: "",
    startDate: 0,
    endDate: 0,
  });

  const [automaticExamEndNotice, setautomaticExamEndNotice] = useState(false);

  const [automaticEndExam, setautomaticEndExam] = useState(false);

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const onlineExamData = async () => {
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjdkOWE4M2IzMzkyMDAxNjZjOGVjZSIsImVtYWlsIjoibmVwYWxpa2FsYWthcmEzQGdtYWlsLmNvbSIsImV4YW0iOiI2MjIxYzEyNTkyMGM1ZTAwMTY3MWEwNTkiLCJpYXQiOjE2NjA0NTA5OTYsImV4cCI6MTY2ODIyNjk5Nn0.qOwJsIsUUrryBYOVG2JH9O9jRxj8HceF80QnOhFDbbE";
    try {
      const resp = await axios.get(onlineExamUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResponseTime((prev) => {
        return {
          ...prev,
          data: resp.data?.data,
          startDate: resp.data.data.startDate,
          endDate: resp.data.data.endDate,
        };
      });
      localStorage.setItem("result", resp.data.data.data.id);
      dispatch(
        setExamPage({
          question: resp.data.data.data.questionAns,
          exam: resp.data.data.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onlineExamData();

    const interval = setInterval(() => {
      onlineExamData();

      // if (
      //   responseTime.endDate > 0 &&
      //   responseTime.endDate <= new Date().getTime()
      // ) {
      //   // endExam();
      //   // console.log(responseTIme.endDate)
      //   console.log("ended auto");
      // }
    }, 20000);

    return () => clearInterval(interval);
    // if (responseTime.endDate) {
    //   if (currentTime > responseTime.end) {
    //     setautomaticEndExam(true);
    //   }
    // }
  }, []);

  const currentExam = useSelector((state: any) => state.examPage.exam);

  const questionlist = useSelector((state: any) => state.examPage.exampagelist);

  const [open, setopen] = useState(false);
  const [submitModel, setsubmitModel] = useState(false);
  // const navigate = useNavigate();

  const ref = useRef(null);
  const handleClick = (e: any) => {
    e.preventDefault();
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };

  // const examStart = responseTime.startDate;<E
  // const examEnd = responseTime.endDate;
  const currentTime = new Date().getTime();

  const renderer = ({ hours, minutes, seconds }: any) => {
    return (
      <span>
        {hours} : hrs {minutes} : mins {seconds} : sec
      </span>
    );
  };
  const handleCloseNotify = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setnotifyOpen(false);
  };

  const endExam = async () => {
    const resultId = localStorage.getItem("result");
    const token = searchParams.get("token");

    if (resultId) {
      await axios.patch(
        `${process.env.REACT_APP_API_URL!}/web/result/${resultId}`,
        {
          isCompleted: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setnotifyOpen(true);
      setsubmitModel(false);
      // await adminService.submitExam(resultId);
    } else {
      alert("No Result Id");
    }
  };

  // setTimeout(()=>{
  //   console.log('hi')
  // },2000)
  // const notify = () => toast("our exam has been submitted");

  // if (responseTime.endDate > Date.now()) {
  //   setTimeout(() => {
  //     endExam();
  //   }, Math.floor(responseTime.endDate - Date.now()));
  // }

  return (
    <>
      {responseTime.startDate === 0 || responseTime.endDate === 0 ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={responseTime.endDate === 0 && responseTime.startDate === 0}
          // onClick={handleClose}
        >
          <Typography>Checking system. Please wait</Typography>{" "}
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : responseTime.startDate > currentTime ? (
        <ExamNotStarted />
      ) : responseTime.endDate < currentTime ? (
        <ExamEnded />
      ) : currentExam.isCompleted ? (
        <ExamEnded />
      ) : (
        <>
          <div>
            {/* <SuccessNotify
          message="Successfully Updated"
          open={notiOpen}
          handleClose={handleCloseNotify}
        /> */}

            <GlobalStyle />
            <div className="TopBar">
              <p className="Left-TopBar-Para">
                Time Left &nbsp;:&nbsp;
                {responseTime.data && (
                  <Countdown
                    date={Date.now() + (responseTime.endDate - currentTime)}
                    // date={
                    //   Date.now() + (responseTime.endDate - responseTime.startDate)
                    // }
                    renderer={renderer}
                  />
                )}
              </p>

              <p className="Right-TopBar-Para">{currentExam.exam.name}</p>
              <div className="menu-icon">
                <IconButton
                  sx={{ padding: "0" }}
                  onClick={handleClick}
                  ref={ref!}
                >
                  <MenuIcon style={{ color: "white" }} />
                </IconButton>
              </div>
              <Popover
                open={open}
                anchorEl={ref.current}
                onClose={handleClose}
                container={ref.current}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Profile />
              </Popover>
            </div>
            <div className="Left-Container">
              <Grid container>
                <Grid xs={9}>
                  <div className="Left-Container-width">
                    <div className="Left-Container-Main">
                      <div className="Left-Container-Header">
                        <div className="Left-Container-Mark">
                          <p>Mark</p>
                          <p>:&nbsp; 100</p>
                        </div>
                        <div className="Left-Container-Question">
                          <p>Questions</p>
                          <p>:&nbsp; 30</p>
                        </div>
                      </div>
                      <div className="Left-Container-Timer">
                        <div className="Left-Container-StartTime">
                          <p>Start Time </p>
                          <p>
                            :&nbsp;{" "}
                            {moment(responseTime.startDate).format("LTS")}
                          </p>
                        </div>
                        <div className="Left-Container-EndTime">
                          <p>End Time</p>
                          <p>
                            :&nbsp; {moment(responseTime.endDate).format("LTS")}
                          </p>
                        </div>
                      </div>
                    </div>
                    {questionlist.map((abc: any, index: number) => {
                      return (
                        <>
                          <div className="ExamPageCard">
                            <div >
                              <NormalQuestion item={abc} index={index} />
                            </div>
                          </div>
                        </>
                      );
                    })}
                    {/* <div>
                  {currentExam.embeddedQuestionAns.map((each: any) => {
                    console.log(each);
                    return (
                      <>
                        <p>{each.question.textQuestion}</p>
                        {each.questionAns.map((element: any, index: any) => {
                          return (
                            <div className="ExamPageCard">
                              <NormalQuestion item={element} index={index} />
                            </div>
                          );
                        })}
                      </>
                    );
                  })}
                </div> */}
                  </div>
                </Grid>
                <Grid xs={3}>
                  <Hidden lgDown>
                    <div className="RefWrapper">
                      <div className="RefMain">
                        <div>
                          <p className="RefPara">Reference</p>
                        </div>
                        <Grid container>
                          {questionlist.map((select: any, index: number) => {
                            return (
                              <>
                                <Grid item xl={2} sx={{ padding: "8px 0" }}>
                                  <Paper
                                    sx={{
                                      width: "42px",
                                      height: "42px",
                                      color: `${
                                        select.selectedAnswer
                                          ? "#F1F7F6"
                                          : "#F1F7F6"
                                      }`,
                                      borderRadius: "50%",
                                      margin: "0 5px",
                                      background: `${
                                        select.selectedAnswer
                                          ? "#01B39A"
                                          : "#FC3D39"
                                      }`,
                                    }}
                                  >
                                    <p className="Number">{index + 1}</p>
                                  </Paper>
                                </Grid>
                              </>
                            );
                          })}
                        </Grid>
                        <Grid
                          container
                          spacing={0}
                          sx={{
                            height: "25px",
                            // border: "1px solid red",
                            margin: "36px 0",
                          }}
                        >
                          <Grid
                            item
                            xs={12}
                            lg={6}
                            xl={4}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "7px",
                              height: "25px",
                              // border: "1px solid black",
                            }}
                          >
                            <Paper
                              elevation={0}
                              sx={{
                                width: "12px",
                                height: "12px",
                                background: "#01B39A",
                                borderRadius: "2px",
                              }}
                            ></Paper>

                            <p className="Answered">Answered</p>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            lg={6}
                            xl={4}
                            sx={{
                              display: "flex",
                              gap: "7px",
                              height: "25px",
                              // border: "1px solid black",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Paper
                              elevation={0}
                              sx={{
                                width: "12px",
                                height: "12px",
                                background: "#FC3D39",
                                borderRadius: "2px",
                              }}
                            ></Paper>
                            <p className="Answered">Not Answered</p>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            lg={6}
                            xl={4}
                            sx={{
                              display: "flex",
                              gap: "7px",
                              width: "auto",
                              height: "25px",
                              // border: "1px solid black",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Paper
                              elevation={0}
                              sx={{
                                width: "12px",
                                height: "12px",
                                background: "#D9D9D9",
                                borderRadius: "2px",
                              }}
                            ></Paper>
                            <p className="Answered">Not Visited</p>
                          </Grid>
                        </Grid>
                        {/* <form> */}
                        <button
                          className="Submit"
                          onClick={() => setsubmitModel(true)}
                        >
                          Submit
                        </button>
                        {/* </form> */}
                      </div>
                    </div>
                  </Hidden>
                </Grid>
              </Grid>
            </div>
            <Dialog open={submitModel}>
              <DialogContent>
                <Typography variant="h6">Submit Exam ?</Typography>
                <Typography variant="subtitle2">
                  Once submitted, you cannot give exam again
                </Typography>
                <Box my={2}>
                  <Button
                    variant="outlined"
                    sx={{
                      mr: "5px",
                    }}
                    onClick={() => setsubmitModel(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      endExam();
                      toast("Your Exam has been submitted");
                      // navigate("/exams")
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>
          </div>
        </>
      )}

      {/* {automaticEndExam && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={responseTime.endDate === 0 && responseTime.startDate === 0}
        >
          <Typography>Submitting your exam</Typography>{" "}
          <CircularProgress color="inherit" />
        </Backdrop>
      )} */}
      {/* {automaticEndExam && (
        <Dialog open=>
          <DialogContent>
            Your exam time has ended.
            <Button onClick={endExam}>Submit Exam</Button>
          </DialogContent>
        </Dialog>
      )} */}
    </>
  );
};
export default ExamPage;
