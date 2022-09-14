import React, { useRef, useState, useEffect } from "react";
// import img1 from "../images/medprep_logo.png";
// import img2 from "../images/avatar.png";
// import { Head, Logo, A0, A1, Img, Menubar } from "../style/Menubar";
// import Popover from "@mui/material/Popover";
// import { Avatar, IconButton } from "@mui/material";
// import { selectEmail } from "../../Redux/userSlice";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Profile from "./Profile";
// import axios from "axios";
// import { setActiveUser } from "../../Redux/userSlice";
// import { useDispatch } from "react-redux";

// const profileurl =
//   "https://medpred-dev-backend.herokuapp.com/api/v1/web/profile";

// function Header() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem("token");
//       const res = await axios.get(profileurl, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log(res.data);

//       dispatch(
//         setActiveUser({
//           name: res.data.data.name,
//           email: res.data.data.email,
//           id: res.data.data.id,
//           // token: res.data.data.token,
//         })
//       );
//     };
//     fetchData()
//       // make sure to catch any error
//       .catch(console.error);
//     // navigate("/");
//   }, []);

//   const email: any = useSelector(selectEmail);
//   const [open, setopen] = useState(false);
//   const ref = useRef(null);
//   const handleClick = (event: any) => {
//     setopen(true);
//   };
//   const handleClose = () => {
//     setopen(false);
//   };

//   return (
//     <>
//       <Head style={{ border: "2px solid red" }}>
//         <Logo style={{ border: "2px solid black" }}>
//           <Link to="/">
//             <Img src={img1} />
//           </Link>
//         </Logo>
//         <Menubar style={{ border: "2px solid black" }}>
//           <Link to="#" style={{ textDecoration: "none" }}>
//             <A0>Medprep Mobile App</A0>
//           </Link>
//           <Link to="#" style={{ textDecoration: "none" }}>
//             <A1>Medprep Web Exam</A1>
//           </Link>
//           {email ? (
//             <IconButton onClick={handleClick} ref={ref!}>
//               <Avatar src={img2} />
//             </IconButton>
//           ) : null}
//           <Popover
//             open={open}
//             anchorEl={ref.current}
//             onClose={handleClose}
//             container={ref.current}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "right",
//             }}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//           >
//             <Profile />
//           </Popover>
//         </Menubar>
//       </Head>
//     </>
//   );
// }

// export default Header;
