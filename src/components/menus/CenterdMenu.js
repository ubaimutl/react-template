import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuButton } from "../header/menuButton";
const Menu = styled.div`
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 101;
  visibility: ${(props) =>
    !props.visible ? "visible !important;" : "hidden;"};
`;

const StyledDiv_1 = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: var(--menu-bg-color);
  backdrop-filter: saturate(20%) blur(0.3rem);
  will-change: transform;
  transform: ${(props) =>
    !props.visible ? "translateY(0%)" : "translateY(-100%)"};
  & li {
    ${(props) =>
      !props.visible ? "transform: translateY(0); opacity: 1;" : ""}
  }
`;

const StyledDiv_2 = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden auto;
`;

const StyledDiv_3 = styled.div`
  @media (min-width: 992px) {
    margin-left: 33.3333%;
  }
`;

const StyledUl = styled.ul`
  padding-top: 20vh;
  padding-bottom: 20vh;
  padding-left: 0px;
  @media (min-width: 992px) {
    padding-top: 10vh;
    padding-bottom: 10vh;
  }
`;

const StyledLi = styled.li`
  list-style: none;
  margin: 10px 0px;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.4s ease-out;
`;

const StyledA = styled(Link)`
  display: block;
  font-size: 2.5rem;
  text-decoration: none;
  line-height: 1;
  font-size: 2rem;
  display: inline-block;
  position: relative;
  text-transform: uppercase;
  font-weight: 500;
  transition: color 250ms cubic-bezier(0, 0, 0.58, 1) 0s;
  padding: 4px 0px;
  margin-bottom: 1vw;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  margin-right: 10px;
  &:before {
    content: "";
    background: var(--primary-color);
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    margin: 0;
    background-color: var(--primary-color);
    -webkit-transition: width 0.3s ease-in-out;
    -moz-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
    z-index: -1;
  }
  &:hover:before {
    width: 100%;
  }
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-menu-color);
  @media screen and (max-width: 992px) {
    min-height: 60px;
    height: 60px;
  }
  z-index: 1;
  @media screen and (min-width: 992px) {
    min-height: 100px;
    height: 100px;
  }
`;
const BigText = styled.h2`
  position: absolute;
  left: 0;
  top: 0;
  margin-top: -0.5em;
  margin-right: -0.25em;
  pointer-events: none;
  z-index: -1;
  word-wrap: break-word;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: currentColor;
  opacity: 0.5;
  @media (min-width: 1280px) {
    font-size: 200px;
    line-height: 1;
  }
  @media (max-width: 992px) {
    position: absolute;
    top: 50vh;
    right: 0;
    text-align: right;
    font-size: 140px;
    transform-origin: right top;
    transform: translate3d(-40%, -100%, 0) rotate(-90deg);
  }
`;

export const CenterdMenu = (props) => {
  return (
    <Menu visible={props.isActive}>
      <StyledDiv_1 visible={props.isActive}>
        <Header>
          <MenuButton isActive={props.isActive} func={props.set} />
          <div onClick={props.set}></div>
          <BigText>Menu</BigText>
        </Header>
        <StyledDiv_2>
          <StyledDiv_3 className="p-3">
            <StyledUl>
              <StyledLi>
                <StyledA to="/" onClick={props.set}>
                  Home
                </StyledA>
              </StyledLi>
              <StyledLi>
                <StyledA to="/portfolio" onClick={props.set}>
                  Portfolio
                </StyledA>
              </StyledLi>
              <StyledLi>
                <StyledA to="/about" onClick={props.set}>
                  About
                </StyledA>
              </StyledLi>
              <StyledLi>
                <StyledA to="/contact" onClick={props.set}>
                  Contact
                </StyledA>
              </StyledLi>
              <StyledLi>
                <StyledA to="/blog" onClick={props.set}>
                  blog
                </StyledA>
              </StyledLi>
              <StyledLi>
                <StyledA to="/elements" onClick={props.set}>
                Elements
                </StyledA>
              </StyledLi>
            </StyledUl>
          </StyledDiv_3>
        </StyledDiv_2>
      </StyledDiv_1>
    </Menu>
  );
};
