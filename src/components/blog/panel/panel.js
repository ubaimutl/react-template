import React from "react";
import styled from "styled-components";
import { EntryTitle } from "./entry-title";
import { EntryMeta } from "./entry-meta";

const Panel= styled.header`
&:before {
    content: '';
    display: table;
    box-sizing: border-box;
    width: 0;
    height: 100%;
    @media (min-width: 720px) {
        padding-bottom: 50%;
        }
    @media (min-width: 1200px){
    padding-bottom: 30%;
    min-height: 500px;
    }
   
}
`
const EntryOverlay = styled.div`
position: absolute !important;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
&:after{
    background: rgba(0,0,0,0.25);
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transition: .2s ease all;
}
`

export const EntryPanel = (props) => {
    return(
        <Panel className="d-flex position-relative justify-content-start w-100">
            <EntryOverlay>
            <img
  width={1920}
  height={1024}
  src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2860&q=80"
  style={{
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    OObjectFit: "cover",
    objectFit: "cover",
    fontFamily: '"object-fit: cover'
  }}
/>

            </EntryOverlay>
            <div className="container mx-auto w-100 d-flex flex-column position-relative py-5 text-light">
             <EntryTitle />
             <EntryMeta />
             </div>
        </Panel>
    )
}