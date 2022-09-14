import styled from "styled-components";

export const Div1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 2.7rem;

  @media (max-width: 540px) {
    margin-top: 0.4rem;
  }

  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }
`;
export const Div2 = styled.div`
  height: 18rem;
  width: 23rem;
  background: #f1f7f6;
  border-radius: 10px;

  @media (max-width: 1152px) {
    margin: 2.2rem;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
  @media (max-width: 540px) {
    width: 300px;
    height: 210px;
    margin-top: 0;
  }
`;
export const H2 = styled.h2`
  font-size: 19px;
  line-height: 60px;
  margin-top: 1rem;
  color: #11181f;

  @media (max-width: 540px) {
    font-size: 18px;
    margin-top: 0.1rem;
  }
`;
export const Para1 = styled.p`
  font-weight: 300;
  color: #11181f;

  @media (max-width: 540px) {
    font-size: 14px;
  }
`;

// export const Para2 = styled(Para1)``;

export const Img = styled.img`
  margin-top: 2rem;
  width: 52px;
  height: 52px;

  @media (max-width: 540px) {
    width: 54px;
    height: 54px;
  }
`;
