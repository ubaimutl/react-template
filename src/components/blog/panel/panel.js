import React from "react";
import styled from "styled-components";
import { EntryTitle } from "./entry-title";
import { EntryMeta } from "./entry-meta";
import { EntryImage } from "./entry-image";

const Panel = styled.header``;
const EntryOverlay = styled.div``;

export const EntryPanel = (props) => {
  return (
    <Panel className="container d-flex flex-column position-relative w-100">
      <div className="mx-auto w-100 d-flex flex-column position-relative py-5">
        <EntryTitle />
        <EntryMeta />
      </div>
      <EntryImage src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2860&q=80" />
    </Panel>
  );
};
