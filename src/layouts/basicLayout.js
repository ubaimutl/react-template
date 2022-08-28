import React from "react";
import { HeaderTop, Footer } from "../components";
import styled from "styled-components";

const Layout = styled.div`
  ${(props) =>
    props.top
      ? `padding-top:60px;
  @media (max-width: 992px){
    padding-top:30px
  }`
      : ""};
`;

export const BasicLayout = (props) => {
  return (
    <Layout top={props.paddingTop}>
      {props.children}
      {props.footer && <Footer />}
    </Layout>
  );
};
