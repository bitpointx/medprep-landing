import styled from "styled-components";

export const Logo = styled.div`
  width: 20%;
`;
export const Img = styled.img`
  @media (max-width: 670px) {
    padding-left: 35px;
  }
  @media (max-width: 540px) {
    width: 160px;
    height: 45px;
  }
`;
export const Head = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  height: 90px;
  background-color: white;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Menubar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 70%;
`;
export const A0 = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #0b303c;
  padding-right: 90px;

  @media (max-width: 837px) {
    font-size: 15px;
    padding-right: 80px;
  }
  @media (max-width: 750px) {
    font-size: 15px;
    padding-right: 50px;
  }
  @media (max-width: 685px) {
    font-size: 14px;
    padding-right: 35px;
  }
  @media (max-width: 580px) {
    font-size: 12px;
  }
  @media (max-width: 426px) {
    display: none;
  }
`;
export const A1 = styled(A0)`
  padding-right: 35px;
`;
