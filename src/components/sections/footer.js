import React from "react";
import styled from "styled-components";
import {Logo} from "../header/logo";

const FooterSection =  styled.div.attrs({
  className: "container-fluid pb-0 mb-0 pt-3 justify-content-center",
})`
background:#000;
color:#fff;
`;
export const Footer = () => {
  return (
    <FooterSection>
    <div className="row my-5 justify-content-center py-5">
      <div className="col-11">
        <div className="row  pb-5">
          <div className="col-xl-8 col-md-4 col-sm-4 col-12">
            <h3 className="text-muted mb-md-0 mb-5 bold-text">UBAI MUTL</h3>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-4 col-12">
            <h6 className="mb-3 mb-lg-4 bold-text ">
              <b>MENU</b>
            </h6>
            <ul className="list-unstyled bold-text">
              <li className="mb-2"><b>Home</b></li>
              <li className="mb-2"><b>About</b></li>
              <li className="mb-2"><b>Blog</b></li>
              <li className="mb-2"><b>Portfolio</b></li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-4 col-12">
            <h6 className="mb-3 mb-lg-4 bold-text mt-sm-0 mt-5">
              <b>ADDRESS</b>
            </h6>
            <p className="mb-1">345,Lorem ipsum .</p>
            <p>SDOLOR SIT AMET</p>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-xl-8 col-md-4 col-sm-4 col-auto  my-md-0 mt-5 order-sm-1 order-3 align-self-end">
          <h2><a className="text-light" href="mailto:contact@ubai.me">contact@ubai.me</a></h2>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
    
            <small>
            All rights reserved,2022 ®
            </small>
          </div>
          <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3   ">
            <small>
             Made By UbaiMutl
            </small>
          </div>
        </div>
      </div>
    </div>
</FooterSection>

  );
};
