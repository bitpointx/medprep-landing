import styled from "styled-components";

export const Div1 = styled.div`
  padding-top: 3.6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (max-width: 540px) {
    display: block;
    margin-left: auto;
    padding-top: 0;
    margin-left: 2.5rem;
  }
`;

export const Div0 = styled.div`
  @media (max-width: 540px) {
    padding-top: 2.5rem;
  }
`;

export const Div2 = styled.div`
  padding-bottom: 3.6rem;
  background-color: #0b303c;

  @media (max-width: 540px) {
    padding-top: 2.5rem;
    padding-bottom: 2.2rem;
  }
`;

export const Main = styled.div`
  height: auto;
  width: 100%;
`;

export const SUR = styled.div`
  background-color: #0b303c;
  /* margin: "50px 0px 0px 0px"; */
`;

export const H2 = styled.h2`
  font-weight: 500;
  font-size: 20px;
  color: #f1f7f6;

  @media (max-width: 540px) {
    padding-top: 0.5rem;
    font-size: 16px;
  }
`;

export const P = styled.p`
  margin-top: 1rem;
  font-weight: 400;
  font-size: 18px;
  line-height: 34px;
  color: rgba(241, 247, 246, 0.8);

  @media (max-width: 426px) {
    line-height: 20px;
    font-size: 12px;
  }
  @media (max-width: 540px) {
    line-height: 9px;
  }
`;

export const Img = styled.img`
  width: 200px;
  height: 90.67px;
  margin: auto;
`;

export const Para = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 34px;
  color: rgba(241, 247, 246, 0.8);

  @media (max-width: 426px) {
    padding-left: 0;
    display: none;
  }
`;
export const DIV = styled.div`
  display: grid;
  /* grid-template-columns: 76% 24%; */
  /* grid-template-columns: 68% 32%; */
  grid-template-columns: 22% 22% 22% 23% 11%;
`;

export const Div3 = styled.div``;
