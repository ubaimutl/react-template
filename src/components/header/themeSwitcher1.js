import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div1 = styled.div`
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
  -webkit-transform: rotate(-90deg) translate(-50%, 0);
  -ms-transform: rotate(-90deg) translate(-50%, 0);
  transform: rotate(-90deg) translate(-50%, 0);
  left: 4vh;
  position: fixed;
  top: 50%;
  z-index: 50;
  min-height: 3.5rem;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  @media screen and (min-width: 1181px) and (max-width: 1440px) {
    left: 2.75vh;
  }
  @media screen and (min-width: 992px) {
    min-height: 100px;
    height: 100px;
  }
  @media screen and (max-width: 1180px) {
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: rotate(0) translate(0,-50%);
    -ms-transform: rotate(0) translate(0,-50%);
    transform: rotate(0) translate(0,-50%);
    left: 1.25rem;
    bottom: calc(-5vh + 1.25rem);
    top:unset
}
`;

const Sspan = styled.span`
font-size: 12px;
padding: 4px;
background-color: black;
`;
export const ThemeSwitcher1 = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <Div1>
        <div className="text-uppercase border border-2" role="button" onClick={themetoggle} >
          <Sspan className="text-dark bg-white">Light</Sspan>
          <Sspan className="text-white">Dark</Sspan>
        </div>
    </Div1>
  );
};
