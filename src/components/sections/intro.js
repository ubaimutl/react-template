import React, { useState } from "react";
import styled from "styled-components";
import { useTypingText } from "../../hooks/useTypingtext";


const Div1 = styled.div`
display: table-cell;
vertical-align: middle;
table-layout: fixed;
padding: 15% 0;
@media screen and (max-width: 992px){
    padding: 20% 0;
}
`;
const Introh1 = styled.h1`
    font-size: 40px;
    line-height: 1.2em;
    letter-spacing: .05em;
    margin: 25px 0;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    font-weight: 500;

@media only screen and (max-width: 768px){font-size: 39px !important;}
@media only screen and (max-width: 680px){font-size: 24px !important;}

`;

export const IntroSection = () => {
    const { word, stop, start ,color } = useTypingText(
        ["adipiscing", "consectetur", "dolor"],
        130,
        20,
      );
    return(
        <section>
            <div className="d-table w-100 text-start text-lg-center">
                <Div1>
                    <div className="container">
                        <Introh1>Lorem ipsum dolor sit amet<br />
                        consectetur adipiscing <br />
                        elit. Aenean. {word}</Introh1>
                    </div>
                </Div1>
            </div>
        </section>
    )
}