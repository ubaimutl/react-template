import React from "react";
import styled from "styled-components";


const Figure = styled.figure`
height: 100%;
display: flex;
left: auto;
right: auto;
margin-left: 50%;
width: 100vw;
transform: translateX(-50%);
position: relative;
z-index: 2;
`
const Div0=styled.div`
position: relative;
width: 100%;
height: 100%;
margin: 0 auto;
display: block;
overflow: hidden;
`
const PlaceHolder = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #9a9a9a;
z-index: 1;
overflow: hidden;`

const Image = styled.img`
width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    object-position: 50% 50%;
    height: 100%;
`

export const EntryImage = (props) => {
  return(
    <Figure>
      <Div0>
      <div style={{ paddingBottom: "63%" }} />
        <PlaceHolder>
          <Image
            src={props.src}
            alt={props.alt}
            title={props.title}
          />
        </PlaceHolder>
      </Div0>
    </Figure >
  );
};
