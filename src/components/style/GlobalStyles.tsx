import styled from "styled-components";
import BackGroundImg from "../images/Exam-list.png";

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${BackGroundImg});
  background-size: 100% 100%;
`;
export const Container = styled.div`
  display: grid;
  place-items: center;
  border-radius: 10px;
  height: 300px;
  width: 400px;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
`;
export const Para = styled.div`
  color: #f1f7f6;
  font-family: Rubik;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;
