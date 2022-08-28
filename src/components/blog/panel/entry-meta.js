import React from "react";
import styled from "styled-components";


const List= styled.li`
font-size:0.6875rem;
&:after{
  margin-right: 0.5rem;
  content: "|";
  margin-left: 0.5rem;
}`
export const EntryMeta = () => {
  return (
    <ul className="d-flex mt-3 list-unstyled">
      <List className="d-flex">
        by 
        <span className="ml-1">
          Elliot Alderson
        </span>
      </List>
      <List className="d-flex">September 17, 2018</List>
      <List className="d-flex">2.8K views</List>
    </ul>
  );
};
