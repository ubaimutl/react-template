import React from "react";
import LatestProjectsSwiper from "../swipers/latest-project";
import { CallToAction } from "../elements/callToAction";
import {Counter} from "../elements/counter";
import  ControlledCarousel from "./testimonial";

const Home = () => {
  return (
    <section className="home-section">
      <div id="home-top" className="home-top route bg-image">
        <div className="home-top-content d-table h-100 w-100">
          <div className="table-cell">
            <div className="container">
              <h1 className="home-top-text mb-4">
                HI, I'M A VISUAL ARTIST, PHOTOGRAPHER AND ILLUSTRATOR
              </h1>
            </div>
          </div>
        </div>
      </div>
      <LatestProjectsSwiper />
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-6 pe-xl-5 py-5">
            <div className="home-intro one-page-nav">
              <h6>
                <span>Hello.</span>
              </h6>
              <h1>
                We Have <br />
                Design
                <br />
                Experience
              </h1>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
              <div className="btn-bar">
                <a
                  className="opp-btn opp-btn-theme"
                  data-scroll-nav={4}
                  href="#contactus"
                >
                  Let’s Talk
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-image">
              <img src="" title="" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <CallToAction />
        <Counter number='342' title="tatd sadfasd asdf" />
        <Counter number='342' title="tatd sadfasd asdf" />
      </div>
    </section>
  );
};

export default Home;
