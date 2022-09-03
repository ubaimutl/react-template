import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopMenuContainer = styled.div`
  position: relative;
  padding-left: 4vw;
  padding-top: 0;
  min-width: 50%;
  padding-right: 4vw;
  justify-content:center;

`;
const NavLink = styled(Link)`
  padding: 6px 0 12px 0;
  position: relative;
  font-size: 14px;
`;

const ListItem = styled.li`
  white-space: nowrap;
  position: relative;
  margin-top: 0, 375rem;
  margin-left: 1rem;
`;


export const TopMenu = () => {
    return(
        <TopMenuContainer className="w-100 d-none d-lg-flex">
        <ul className="d-flex justify-content-end list-unstyled m-0">
          <ListItem>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="blog">Blog</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="about">About</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="contact">Contact</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="elements">Elements</NavLink>
          </ListItem>
        </ul>
      </TopMenuContainer>
    )
}