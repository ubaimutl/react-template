import React from "react";
import {
  CallToAction,
  PricingList,
  Counter,
  CircularProgress,
  PricingTable,
} from "../components";
import { Ibutton, SkillsBox,ExperiencesBox } from "../components";
import { BasicLayout } from "../layouts/basicLayout";

const Skills = () => {
  return (
    <BasicLayout paddingTop>
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
            <SkillsBox />
<ExperiencesBox />
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
