import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledButton = styled(Button)`
    background-color: #111013;
    font-family: "DM Sans",sans-serif;
    font-size: .95em;
    border: 2px solid transparent;
    padding: 0 1.15rem;
    min-height: 3.125rem;
`;

const Ctadiv = styled.div.attrs({
    className: 'd-flex flex-column flex-md-row align-items-center justify-content-between',
})`
    width: 100%;
    position: relative;
    background-color: rgba(220, 40, 40, 0.1);
    padding: 3rem;
    @media screen and (max-width: 1024px){
        align-items:start !important;
        padding: 2rem;
    }
`;

export const CallToAction = (params) => {
    return (
        <Ctadiv>
            <div className="heading title">
                <div className="subtitle">
                    Create UI/UX Design from a Silicon Valley.{" "}
                </div>
                <h3 className="title">
                    Let’s work and build
                    <br /> something great together.{" "}
                </h3>
            </div>
            <div className="holder">
                <StyledButton>Get Strated</StyledButton>
            </div>
        </Ctadiv>
    );
};
