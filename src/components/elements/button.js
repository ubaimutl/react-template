import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  padding: 12px 28px;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  font-weight: 600;
  transition: ease all 0.35s;
  display: inline-block;
  position: relative;
  cursor:pointer;
  &:before {
    content: "";
    background: var(--primary-color);
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 100%;
    margin: 0;
    background-color: var(--primary-color);
    -webkit-transition: width .3s ease-in-out;
    -moz-transition: width .3s ease-in-out;
    transition: width .3s ease-in-out;
    z-index: -1;
}
&:hover:before {
    width: 100%;
}
`;

export const Ibutton = (props) => {
  return(
   <StyledButton>
    {props.children}
   </StyledButton>
  )
};
