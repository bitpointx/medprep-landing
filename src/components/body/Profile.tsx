import React from "react";
// import styled from "styled-components";
// import { selectEmail, selectName, setActiveUser } from "../../Redux/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import img1 from "../images/avatar.png";
// import img2 from "../images/History.png";
// import img3 from "../images/SignOut.png";

// function Profile() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const name: any = useSelector(selectName);
//   const email: any = useSelector(selectEmail);

//   const handleSignOut = () => {
//     dispatch(
//       setActiveUser({
//         name: "",
//         email: "",
//       })
//     );
//     localStorage.clear();
//     navigate("/");
//   };

//   return (
//     <>
//       <Wrapper>
//         <Main>
//           <Div1>
//             <Img0 src={img1} alt="Profile-img" />
//           </Div1>
//           <Div2>
//             <P1>{name}</P1>
//             <P2>{email}</P2>
//           </Div2>
//         </Main>
//         <Line>
//           <Border></Border>
//         </Line>
//         <Frame>
//           <Div3>
//             <Div style={{ width: "18px", height: "18px" }}></Div>
//             {localStorage.getItem("token") ? (
//               <Link to="/exam">
//                 <Button1>GoTo Exam </Button1>
//               </Link>
//             ) : null}
//           </Div3>
//           <Div3>
//             <Img1 src={img2} alt="histroy-img" />
//             <Button1>Exam History </Button1>
//           </Div3>
//           <Div5>
//             <Img2 src={img3} alt="SignOut-img" />
//             <Button2 onClick={handleSignOut}>Sign Out</Button2>
//           </Div5>
//         </Frame>
//       </Wrapper>
//     </>
//   );
// }

// export default Profile;

// // const Div4 = styled.div``;
// const Div = styled.div``;
// // const Button1 = styled.button``;
// const Wrapper = styled.div`
//   width: auto;
//   height: 154px;
//   background: #ffffff;
//   border: 0.3px solid #ffffff;
//   border-radius: 8px;
// `;
// const Main = styled.div`
//   width: 249px;
//   height: 53px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 5px;
//   gap: 6px;
// `;

// const Div1 = styled.div`
//   display: flex;
//   align-items: center;
//   width: 40px;
//   height: 40px;
// `;
// const Div2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   width: 184px;
//   height: 40px;
// `;
// const Img0 = styled.img`
//   width: 35px;
//   height: 35px;
// `;
// const Img1 = styled.img`
//   width: 18px;
//   height: 18px;
// `;
// const Img2 = styled.img`
//   width: 18px;
//   height: 18px;
// `;
// const P1 = styled.p`
//   font-family: "Rubik";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 15px;
//   line-height: 18px;
//   color: #3d3838;
// `;
// const P2 = styled(P1)`
//   font-size: 14px;
//   line-height: 17px;
//   color: #6b6b6b;
// `;
// const Frame = styled.div`
//   width: 230px;
//   height: 84px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin: 9px auto;
// `;
// const Div3 = styled.div`
//   width: 200px;
//   height: 41px;
//   display: flex;
//   margin: auto;
//   align-items: center;
//   gap: 12px;
//   background: #ffffff;
//   border-radius: 4px;
// `;
// const Div5 = styled(Div3)``;

// const Button1 = styled.button`
//   font-family: "Rubik";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 17px;
//   color: #3d3838;
//   border: none;
//   background-color: white;
//   cursor: pointer;
// `;
// const Button2 = styled(Button1)``;

// const Line = styled.div`
//   display: flex;
//   justify-content: center;
// `;
// const Border = styled.div`
//   border-bottom: 0.5px solid #ecf0f1;
//   width: 220px;
// `;
