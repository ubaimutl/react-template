import React from "react";
import {
  CallToAction,
  PricingList,
  Counter,
  CircularProgress,
  PricingTable,
} from "../elements";
import { Ibutton } from "../";
import { BasicLayout } from "../layouts/basicLayout";

const Skills = () => {
  return (
    <BasicLayout>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading mb-5 pb-5">
              <h3 className="h3">Skills and Experience</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
            <div className="skill-box mb-4 pb-5">
              <h3>My Skills</h3>
              <div className="row g-3">
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="feature-box-02 py-3 px-0">
                    <div>
                      <CircularProgress
                        percentage={75}
                        title=""
                        sqSize="50"
                        textSize="0.8em"
                        strokeWidth="1"
                      />
                    </div>
                    <h6>HTML</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="feature-box-02 py-3 px-0">
                    <div>
                      <CircularProgress
                        percentage={100}
                        title=""
                        sqSize="50"
                        textSize="0.8em"
                        strokeWidth="1"
                      />
                    </div>
                    <h6>CSS</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="feature-box-02 py-3 px-0">
                    <div>
                      <CircularProgress
                        percentage={50}
                        title=""
                        sqSize="50"
                        textSize="0.8em"
                        strokeWidth="1"
                      />
                    </div>
                    <h6>React JS</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="feature-box-02 py-3 px-0">
                    <div>
                      <CircularProgress
                        percentage={90}
                        title=""
                        sqSize="50"
                        textSize="0.8em"
                        strokeWidth="1"
                      />
                    </div>
                    <h6>Angular</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="feature-box-02 py-3 px-0">
                    <div>
                      <CircularProgress
                        percentage={63}
                        title=""
                        sqSize="50"
                        textSize="0.8em"
                        strokeWidth="1"
                      />
                    </div>
                    <h6>iOs App</h6>
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-6">
                  <div className="feature-box-02 py-3 px-0">
                    <div>
                      <CircularProgress
                        percentage={75}
                        title=""
                        sqSize="50"
                        textSize="0.8em"
                        strokeWidth="1"
                      />
                    </div>
                    <h6>App Dev</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience-box my-4">
              <h3>Experience</h3>
              <ul>
                <li>
                  <h6>Jan 2021 - Present</h6>
                  <div className="eb-right">
                    <h5>Creative Director</h5>
                    <span>pxdraft Ltd, UK</span>
                  </div>
                </li>
                <li>
                  <h6>Jan 2021 - Present</h6>
                  <div className="eb-right">
                    <h5>Creative Director</h5>
                    <span>pxdraft Ltd, UK</span>
                  </div>
                </li>
                <li>
                  <h6>Jan 2021 - Present</h6>
                  <div className="eb-right">
                    <h5>Creative Director</h5>
                    <span>pxdraft Ltd, UK</span>
                  </div>
                </li>
                <li>
                  <h6>Jan 2021 - Present</h6>
                  <div className="eb-right">
                    <h5>Creative Director</h5>
                    <span>pxdraft Ltd, UK</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-xl-5 mx-auto pt-5 pt-lg-0 mb-5 pb-5">
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <div
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.30 * 100% )" }}
              >
                <div>
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="https://images.unsplash.com/photo-1501078319173-5d5298f2faf8"
                    alt="Ubai Multl"
                  />
                </div>
              </div>
              <div className="text-center my-3">
                <Ibutton>Hire me</Ibutton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Skills;
