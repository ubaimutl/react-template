import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Menu = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 1;

&  .toggler{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
}
& .hamburger{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    /* background: var(--primary-color); */
    display: flex;
    align-items: center;
    justify-content: center;
}
  visibility: ${(props) =>
    !props.visible ? "visible !important;" : "hidden;"};
`;

<div class="menu-wrap">
        <div class="hamburger"><div></div></div>
        <div class="menu">
            <div>
                <div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Merch</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
