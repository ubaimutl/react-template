import React from "react";
import styled from "styled-components";
import { Ibutton } from "../";

const Form = styled.div`
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid var(--text-color);
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: top;
  margin: 0 0 2rem;
  padding: 0.8rem 0;
  font-family: inherit;
  font-size: 14px;
  line-height: 24px;
  font-weight: inherit;
  cursor: pointer;
  background: transparent;
  border-radius: 0;
`;
export const ContactFrom = () => {
  return (
    <Form>
      <h6 className="h6">Get in touch</h6>
      <h3 className="mb-4">
        I would love to hear from you.
      </h3>
      <form id="contact-form" method="POST">
        <div className="row gx-3 gy-4">
          <div className="col-md-6">
            <div className="form-group">
              <Input name="Name" id="name" placeholder="Name *" type="text" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <Input
                name="Email"
                id="email"
                placeholder="Email *"
                type="email"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <Input
                name="Subject"
                id="subject"
                placeholder="Subject *"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">Your message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message *"
                rows={4}
                className="form-control rounded-0"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="send">
              <Ibutton>send</Ibutton>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};
