import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "./logo";
import { CenterdMenu } from "../menus/CenterdMenu";
import { ThemeSwitcher1 } from "./themeSwitcher1";
import { MenuButton } from "./menuButton";
import { TopMenu } from "./topMenu";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 101;
  background-color: var(--bg-color);
  transition: background-color 300ms linear,transform .4s cubic-bezier(0,0,.58,1);
  ${(props) =>
    props.scrolled ? "transform: translateY(-100px);opacity:0.6" : ""};
  
  @media screen and (max-width: 992px){
    min-height: 60px;
    height: 60px;
    ${(props) => (props.scrolled ? "transform: translateY(-60px);" : "")};
  }
  @media screen and (min-width: 992px) {
    min-height: 100px;
    height: 100px;
  }
  ${(props) =>
    !props.mop ? "transform: translateY(0px) !important;opacity:1;" : ""};
  
`;

export const HeaderTop = (props) => {
  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const [isScrolled, setScrollingUp] = useState("false");

  useEffect(() => {
    setScrollingUp(!isScrolled);
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      let currentScroll = window.scrollY;
      console.log(isActive)
      if (currentScroll > 100 && isActive === true && currentScroll - lastScroll > 0) {
        setScrollingUp(isScrolled);
      } else {
        setScrollingUp(!isScrolled);
      }
      lastScroll = currentScroll;
    });
  }, []);
  return (
    <>
      <Header scrolled={isScrolled} mop={isActive}>
        <Logo logotext={props.logotext}></Logo>

        {/* <FollowButton>
        <span>Share</span>
      </FollowButton> */}
        {/* <div className="d-none d-lg-block w-100"></div> */}
        <TopMenu />
        <MenuButton func={handleToggle} isActive={isActive} />
      </Header>
      <CenterdMenu isActive={isActive} set={handleToggle} />
      <ThemeSwitcher1 theme={props.theme} />
    </>
  );
};
