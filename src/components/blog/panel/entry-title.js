
import React from "react";
import styled from "styled-components";

const Tilte = styled.h1`
margin-top: auto;
font-size: 2rem;
    line-height: 1;
@media (min-width: 1020px) {
    font-size: 2.75rem;
		line-height: 1;
}
`
const SubTitle = styled.div`
font-size:28px;

`

export const EntryTitle = () => {
    return(
   <div className="mt-auto">
                <Tilte className="fw-bolder">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla.</Tilte>
                <SubTitle className="text-muted lh-1">How to fit more reading time into a busy lifestyle
</SubTitle>
                </div>
    )
}