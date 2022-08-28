import React from "react";
import styled from "styled-components";
import { BsPhone, BsEnvelope, BsMap } from "react-icons/bs";

export const ContactInfo = () => {
  return (
    <div>
      <div className="row">
        <h6 className="h6">
          <span>Contact</span>
        </h6>
        <h3 className="mb-4">
          <span>Let's Discuss Project</span>
        </h3>
        <address>
          <strong>Email:</strong>
          <a href="mailto:name@domain.com">name@domain.com</a>
          <p>
            <strong>Phone:</strong> (555)123-4567
          </p>
        </address>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. </p>
      </div>
    </div>
  );
};
