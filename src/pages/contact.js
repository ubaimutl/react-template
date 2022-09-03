import React from "react";
import { ContactFrom } from "../components";
import { ContactInfo } from "../components/widgets/contactInfo";
import { BasicLayout } from "../layouts/basicLayout";

const Contact = () => {
  return (
    <BasicLayout paddingTop>
      <div className="container pb-5">
        <div className="px-4 pb-5">
          <div className="row">
            <div className="col-lg-5 me-auto col-xl-4 py-5 pt-lg-0">
              <ContactInfo />
            </div>
            <div className="col-lg-6">
              <ContactFrom />
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Contact;
