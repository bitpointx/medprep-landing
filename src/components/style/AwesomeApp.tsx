import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f1f7f6;
  margin-top: 9.6rem;

  @media (max-width: 540px) {
    margin-top: 1.8rem;
  }
`;
export const H1 = styled.h1`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 60px;
  text-align: center;
  color: #0b303c;
  padding-top: 30px;

  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 30px;
  }

  @media (max-width: 540px) {
    font-size: 1.12rem;
    padding-top: 25px;
  }
`;

export const Main = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 38% 31%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto; // yasle Div lai Center maa laijanxa.
  }
`;
export const Div1 = styled.div`
  margin-top: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Div2 = styled.div`
  padding-top: 46px;

  @media (max-width: 540px) {
    padding-top: 36px;
  }
`;

export const IMG1 = styled.img`
  width: 280px;
  height: 425px;
  margin-bottom: 3rem;
`;
export const IMG2 = styled.img`
  width: 19px;
  height: 19px;
`;
export const IMG3 = styled.img`
  width: 15px;
  height: 17px;
`;

export const SPAN = styled.span`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 46px;

  @media (max-width: 540px) {
    font-size: 1.12rem;
    line-height: 22px;
  }
`;
export const P = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  color: #11181f;

  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 15px;
  }
  @media (max-width: 540px) {
    font-weight: 450px;
    font-size: 0.46rem;
    line-height: 10px;
  }
`;
export const P1 = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 25px;
  padding-top: 20px;

  @media (max-width: 540px) {
    font-size: 11px;
    line-height: 18px;
  }
`;
export const P2 = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 25px;
  padding-top: 20px;
  padding-left: 11px;

  @media (max-width: 540px) {
    font-size: 11px;
    line-height: 20px;
  }
`;
export const P3 = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 25px;
  padding-top: 15px;
  padding-left: 12px;

  @media (max-width: 540px) {
    font-size: 11px;
    line-height: 20px;
  }
`;
export const Btn = styled.button`
  background-color: #1472ba;
  /* background-color: ${(props) => (props.color ? "#1472BA" : "#F5F7FB")}; */
  margin-top: 25px;
  margin-bottom: 50px;
  color: #f1f7f6;
  /* color: ${(props) => props.color}; */
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  width: 121px;
  height: 45px;
  box-shadow: 5px 7px 30px rgba(1, 179, 154, 0.2);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;

  @media (max-width: 540px) {
    font-size: 11px;
    width: 100px;
    height: 32px;
  }
`;

export const Div3 = styled.div`
  display: flex;
  align-items: center;
`;
export const Div4 = styled.div`
  display: flex;
  align-items: center;
`;
