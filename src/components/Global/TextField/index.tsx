import React, { FC, ReactNode } from "react";
import styled from "styled-components";

type StyleType =
  | "tiny"
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge";

interface TextFieldInterface {
  children: ReactNode;
  size?: StyleType;
  color?: string;
  padding?: string;
  textAlign?: string;
  margin?: string;
}

const textStyle: { [key in StyleType]: any } = {
  tiny: {
    fontSize: "15px",
    lineHeight: "20px",
    fontWeight: "400",
    fontfamily: "Rubik",
    fontstyle: "normal",
  },
  extraSmall: {
    fontSize: "19px",
    lineHeight: "32px",
    fontWeight: "350",
    fontfamily: "Rubik",
    fontstyle: "normal",
  },
  small: {
    fontSize: "22px",
    lineHeight: "35px",
    fontWeight: "500",
    fontfamily: "Rubik",
    fontstyle: "normal",
  },
  medium: {
    fontSize: "32px",
    lineHeight: "60px",
    fontWeight: "500",
    fontfamily: "Rubik",
    fontstyle: "normal",
  },
  large: {
    fontSize: "37px",
    lineHeight: "60px",
    fontWeight: "500",
    fontfamily: "Rubik",
    fontstyle: "normal",
  },
  extraLarge: {
    fontSize: "50px",
    lineHeight: "60px",
    fontWeight: "500",
    fontfamily: "Rubik",
    fontstyle: "normal",
  },
};

const TextField = styled.p<
  Pick<TextFieldInterface, "color" | "padding" | "margin" | "textAlign">
>`
  color: ${(props) => (props.color ? props.color : "11181F")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "justify")};

  width: 100%;
  height: auto;

  // @media (max-width: 600px) {
  //   color: red;
  // }
`;

const CommonTextField: FC<TextFieldInterface> = ({
  children,
  size,
  color,
  padding,
  textAlign,
  margin,
}) => {
  const inlineStyle = {
    ...textStyle[size ?? "extraSmall"],
  };

  return (
    <TextField
      color={color}
      style={inlineStyle}
      padding={padding}
      margin={margin}
      textAlign={textAlign}
    >
      {children}
    </TextField>
  );
};

export default CommonTextField;
