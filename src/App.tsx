import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, Outlet, useLocation } from "react-router-dom";
import Exam from "./components/body/Exam";
import Page404 from "./components/body/Page404";
import SuccessScreen from "./components/body/SuccessScreen";
// import { Layout } from "./components/layout";
import { selectToken } from "./Redux/userSlice";
import Home from "./screen/Home";
import ExamPage from "./screen/Home/Exam Page/ExamPage";

const ProtectedRoute = ({ token, loading }: any) => {
  // console.log("token", token);
  if (!loading) {
    if (!token) {
      return <Navigate to={"/"} replace />;
    } else {
      return <Outlet />;
    }
  } else {
    return (
      <>
        <CircularProgress />
      </>
    );
  }
};
function App() {
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();
  const tokenGlobal = useSelector(selectToken);
  // console.log("location", location);

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");
    if (tokenLocal) {
      setToken(tokenLocal);
      setLoading(false);
    }
    setLoading(false);
  }, [location.pathname, tokenGlobal]);

  return (
    <>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute token={token} loading={loading} />}>
          <Route path="/exams" element={<Exam />} />
        </Route>
        <Route path="/successpay" element={<SuccessScreen />} />
        <Route path="/web" element={<ExamPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* </Layout> */}
    </>
  );
}

export default App;
