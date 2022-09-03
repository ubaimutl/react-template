import React from "react";
import { ContactFrom } from "../components";
import { ContactInfo } from "../components/widgets/contactInfo";
import { BasicLayout } from "../layouts/basicLayout";

const Contactme = () => {
  return (
    <BasicLayout paddingTop footer>
      <div className="container mb-5 pb-5">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-2 mb-5"> Get in Touch</h1>
          <div className="row">
            <div className="col-lg-6 pe-5 mb-4">
            <p className="text-secondary fw-normal text-uppercase">Location</p>
            <h5 className="mb-3 h2 fw-light">Gerber-Ring 8, Rheinberg 64602, Germany</h5>
            </div>
            <div className="col-lg-6 pe-5 mb-4">
            <p className="text-secondary fw-normal text-uppercase">Phone</p>
            <h5 className="mb-3 h2 fw-light">(05707) 15548</h5>
            </div>
          </div>
          <p className="text-secondary fw-normal text-uppercase">Got a question?</p>
          <h5 class="mb-3 fw-light h2">contact@ubai.me</h5>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Contactme;
