import React from 'react'
import {ContactFrom} from "../";
import {ContactInfo} from "../widgets/contactInfo";

const Contact = () => { 
    return (
        <section
  data-scroll-index={4}
  id="contactus"
  className="section contactus-section"
>
  <div className="container">
    <div className="row section-heading">
      <div className="col-lg-6">
        <h6>
          <span>Contact</span>
        </h6>
        <h3>
          <span>Let's Discuss Project</span>
        </h3>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
<ContactFrom />
      </div>
      <div className="col-lg-5 ms-auto col-xl-4 pt-5 pt-lg-0">
        <ContactInfo />
        <div className="text-center pt-5">
          <img src="assets/img/contact.svg" title="" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

    )
 }

 export default Contact;