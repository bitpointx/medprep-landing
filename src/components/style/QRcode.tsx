import styled from "styled-components";

// export const Div = styled.div`
//   text-align: center;
//   margin-top: 80px;
//   height: auto;
//   width: 100%;
//   background-color: #1472ba;

//   @media (max-width: 540px) {
//     margin-top: 3.4rem;
//   }
// `;
export const H2 = styled.h2`
  padding-top: 3rem;
  font-weight: 500;
  font-size: 40px;
  line-height: 55px;
  color: #ededed;

  @media (max-width: 768px) {
    font-size: 27px;
  }
  @media (max-width: 540px) {
    padding-top: 2.2rem;
    font-size: 0.9rem;
  }
`;

export const P = styled.p`
  padding-top: 1.7rem;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
  color: #f1f7f6;

  @media (max-width: 768px) {
    font-size: 17px;
    padding-top: 0.3rem;
  }
  @media (max-width: 540px) {
    font-size: 10px;
    padding-top: 0;
    line-height: 1px;
  }
`;

export const Input1 = styled.input`
  width: 385px;
  height: 64px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  color: #aaaaaa;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 300;
  padding-left: 2rem;
  outline: none;

  @media (max-width: 540px) {
    width: 230px;
    height: 35px;
    font-size: 15px;
  }
`;
export const Button = styled.input`
  margin-top: 1.5rem;
  width: 188px;
  height: 64px;
  font-weight: 600;
  font-family: "Rubik";
  font-size: 20px;
  border: none;
  border-radius: 5px;
  color: #01b39a;
  cursor: pointer;
  padding: 0px;

  @media (max-width: 540px) {
    width: 63px;
    height: 32px;
    font-size: 13px;
    display: grid;
    align-self: center;
    margin-bottom: 3.5rem;
    margin-top: 0.6rem;
    padding: 0;
  }
`;
export const Img = styled.img`
  width: 224px;
  height: 220px;
  margin-top: 3rem;

  @media (max-width: 540px) {
    padding-top: 0.4rem;
    margin: auto;
    width: 170px;
    height: 170px;
  }
`;
// export const Main = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;

//   @media (max-width: 540px) {
//     display: flex;
//     flex-direction: column;
//     flex-wrap: "nowrap";
//   }
// `;

export const Div2 = styled.div`
  display: flex;
  margin-top: 4.5rem;
  margin-left: 2px;
  flex-direction: column;

  @media (max-width: 426px) {
    margin-top: 0;
    margin: auto;
  }

  @media (max-width: 540px) {
    margin-top: 0.3rem;
    margin: auto;
  }
`;
