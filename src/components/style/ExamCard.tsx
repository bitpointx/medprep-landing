import styled from "styled-components";

export const Background = styled.div`
  position: relative;
`;
export const Img3 = styled.img`
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: auto;
`;
export const Colon = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  // border: 1px solid red;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  gap: 35px;
  width: 100%;
  height: auto;
  margin: 4rem 0;
`;
export const Main = styled.div`
  padding: 18px;
  // background: red;
  width: 364px;
  height: auto;
  background: #ffffff;
  border-radius: 8px;
`;
export const Img = styled.img`
  width: 328px;
  height: 218px;
`;

export const Img1 = styled.img`
  width: 16px;
  height: 16px;
`;
export const Img2 = styled.img`
  width: 16px;
  height: 15px;
`;

export const Border = styled.div`
  border: 1px solid #ecf0f1;
`;
export const Underline = styled.div`
  margin: 12px 0;
`;

export const Content = styled.div`
  margin: 8px 0;
  padding: 0px;
  width: 328px;
  height: 171px;
  border-radius: 6px;
`;
export const Title = styled.div`
  display: flex;
  margin-bottom: 9px;
`;
export const Po = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #1472ba;
`;

export const P1 = styled.p`
  padding-left: 7px;
`;
export const P2 = styled.p`
  padding-left: 7px;
`;

export const Time = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 0;
`;
export const QN = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
  display: flex;
  align-items: center;
`;
export const MIN = styled(QN)``;

export const Sec = styled(QN)``;

export const Date = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

export const Startdate = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #6b6b6b;
`;
export const End = styled(Startdate)``;

export const Foot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 0.2rem;
`;
export const RS = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1472ba;
`;
export const Button = styled.button`
  width: 86px;
  height: 37px;
  background: #ffffff;
  border: 1px solid #1472ba;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 450;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
  text-transform: capitalize;
  color: #1472ba;
  &:active {
      background: #243745; 
    }
`;
