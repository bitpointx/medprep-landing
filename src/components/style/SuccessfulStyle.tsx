import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Main = styled.div`
  width: 383px;
  height: 390px;
  /* border: 1px solid black; */
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  /* border: 1px solid black; */
`;
export const Para1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 44px;
  text-align: center;
  color: #019782;
`;
export const Para2 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 26px;
  text-align: center;
  color: #374151;
`;
export const Button = styled.button`
  width: 150px;
  height: 50px;
  background: #1472ba;
  box-shadow: 5px 7px 30px rgba(1, 179, 154, 0.2);
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 34px;
  color: #f1f7f6;
  cursor: pointer;
  margin-top: 24px;
`;
