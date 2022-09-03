import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div1 = styled.div`
  position: relative;
  padding-left: 4vw;
  padding-top: 0px;
  padding-right: 4vw;
  white-space: nowrap;
  z-index:100;
`;

const LogoLink = styled(Link)`
  position: relative;
  padding: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 700;
  &:before {
    content: "";
    width: 51%;
    height: calc(1rem + .025 * ( (100vw - 576px) / 864));
    background: var(--text-color);
    position: absolute;
    z-index: -1;
    left: -5%;
  }
  & span:nth-child(1){
    color:var(--bg-color);
`;

export const Logo = ({logotext = "Logo Text"}) => {
     let slogotext = logotext.toString().split(" ")
  return (
    <Div1>
      <LogoLink to="/"><span>{slogotext[0]}</span>{slogotext[1]}</LogoLink>
    </Div1>
  );
};
