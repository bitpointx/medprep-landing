import styled from "styled-components";

export const H1 = styled.h1`
  margin-top: 5.8rem;
  font-weight: 500;
  font-size: 35px;
  line-height: 60px;
  text-align: center;

  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 37px;
  }
  @media (max-width: 540px) {
    font-size: 22px;
    margin-top: 1.8rem;
  }
`;
export const Para = styled.p`
  margin-top: 1.1rem;
  text-align: center;
  font-weight: 300;
  font-size: 19px;
  line-height: 28px;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 24px;
    margin-top: 1rem;
  }
  @media (max-width: 540px) {
    font-size: 8px;
    line-height: 12px;
    margin-top: 0;
  }
`;
