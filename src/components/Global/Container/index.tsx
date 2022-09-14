import { border } from "@mui/system";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface DivInterface {
  children: ReactNode;
  width?: string;
  height?: string;
  borderRadius?: string;
  bgcolor?: string;
  padding: string;
  margin?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  border?: string;
  flexWrap?: string;
  gridTemplateColumns?: string;
  gridColumnGap?: string;
  gap?: string;
  position?: string;
  top?: string;
  left?: string;
  zIndex?: number;
}

const Div = styled.div<
  Pick<
    DivInterface,
    | "bgcolor"
    | "padding"
    | "margin"
    | "borderRadius"
    | "border"
    | "justifyContent"
    | "width"
    | "height"
    | "display"
    | "alignItems"
    | "flexDirection"
    | "flexWrap"
    | "gridTemplateColumns"
    | "gridColumnGap"
    | "gap"
    | "position"
    | "zIndex"
    | "top"
    | "left"
  >
>`
  background: ${(props) => (props.bgcolor ? props.bgcolor : "#fff")};
  padding: ${(props) => (props.padding ? props.padding : "0px ")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "0px"};
  border: ${(props) => (props.border ? props.border : "0px")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : ""};
  display: ${(props) => (props.display ? props.display : "")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : ""};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "")};
  grid-column-gap: ${(props) =>
    props.gridColumnGap ? props.gridColumnGap : ""};
  grid-template-columns: ${(props) =>
    props.gridTemplateColumns ? props.gridTemplateColumns : ""};
  gap: ${(props) => (props.gap ? props.gap : "")};
  position: ${(props) => (props.position ? props.position : "")};
  top: ${(props) => (props.top ? props.top : "")};
  left: ${(props) => (props.left ? props.left : "")};
  z-index: ${(props) => (props.zIndex ? props.zIndex : "")};

  // flex-direction: column;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

const CommonContainer: FC<DivInterface> = ({
  children,
  bgcolor,
  padding,
  margin,
  width,
  height,
  border,
  borderRadius,
  flexDirection,
  display,
  justifyContent,
  alignItems,
  flexWrap,
  gridTemplateColumns,
  gridColumnGap,
  gap,
  position,
  zIndex,
  top,
  left,
}) => {
  return (
    <Div
      bgcolor={bgcolor}
      padding={padding}
      margin={margin}
      height={height}
      width={width}
      border={border}
      borderRadius={borderRadius}
      flexDirection={flexDirection}
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      gridTemplateColumns={gridTemplateColumns}
      gridColumnGap={gridColumnGap}
      gap={gap}
      position={position}
      zIndex={zIndex}
      top={top}
      left={left}
    >
      {children}
    </Div>
  );
};

export default CommonContainer;
