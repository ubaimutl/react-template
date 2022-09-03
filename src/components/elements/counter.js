import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";


const Countdiv = styled.div`
  margin-bottom: 0.5rem;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
`;

const Number = styled.div`
  font-size: 2.75rem;
  font-weight:700;
`;

export const Counter = (props) => {
  return (
    <div className="text-center mb-4">
      <Countdiv>
        <Number>
          <span> {props.number}</span>
        </Number>
      </Countdiv>
      <h6 className="h6">{props.title}</h6>
    </div>
  );
};
