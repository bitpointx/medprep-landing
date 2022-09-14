import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 35% 33%;
  grid-column-gap: 85px;
  margin-top: 60px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: none;
  }

  @media (max-width: 540px) {
    margin-top: 30px;
  }
`;

export const Top = styled.div`
  margin-top: 80px;

  @media (max-width: 540px) {
    margin-top: 50px;
  }
`;
export const SPAB = styled.div`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 60px;
  text-align: center;
  color: #11181f;

  @media (max-width: 768px) {
    font-size: 38px;
  }
  @media (max-width: 426px) {
    font-size: 32px;
  }
  @media (max-width: 540px) {
    font-size: 26px;
  }
`;
export const Para = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 300;
  font-size: 21px;
  padding-top: 10px;
  text-align: center;

  @media (max-width: 540px) {
    font-size: 16px;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 1px;
    width: 520px;
  }

  @media (max-width: 426px) {
    width: 340px;
  }
  @media (max-width: 540px) {
    width: 360px;
  }
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 1px;
    width: 520px;
  }
  @media (max-width: 426px) {
    width: 340px;
  }
  @media (max-width: 540px) {
    width: 360px;
  }
`;
export const Typography1 = styled.p`
  font-size: 22px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  color: #11181f;

  @media (max-width: 540px) {
    font-size: 16px;
  }
  @media (max-width: 540px) {
    font-size: 14px;
  }
`;
export const Typography2 = styled.p`
  color: #11181f;
  font-family: Rubik;
  text-align: justify;

  @media (max-width: 540px) {
    font-size: 11px;
  }
`;
