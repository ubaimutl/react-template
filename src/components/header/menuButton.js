import React from "react";
import styled from "styled-components";



const ButtonHolder = styled.div`
position: relative;
padding-left: 4vw;
padding-top: 0;
padding-right: 4vw;
z-index:100;
@media screen and (min-width: 992px) {
  width: auto;
}
  order: 1;
`;

const Hamburger = styled.div`
position: relative;
display: inline-block;
vertical-align: top;
width: 32px;
height: 11px;
line-height: 1;
cursor:pointer;
& span {
  position: absolute;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: currentColor;
  transition: transform 0.5s ease;
}
& span:nth-child(1) {
  top: 0;
  ${(props) => (!props.opend ? "transform: rotate(45deg);" : "")};
}
& span:nth-child(2) {
  top: calc(100% - 1px);
  ${(props) => (!props.opend ? "transform: rotate(-45deg);" : "")};
}
`;


export const MenuButton = (props) => {
    return(
        <ButtonHolder>
        <Hamburger opend={props.isActive} onClick={props.func}>
          <span></span>
          <span></span>
        </Hamburger>
      </ButtonHolder>
    )
}