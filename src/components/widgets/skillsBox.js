import React from "react";
import {CircularProgress} from "../elements";

export const SkillsBox = () => {
  return (
    <div className="skill-box mb-4 pb-5">
    <h3 className="h3 mb-4">My Skills</h3>
    <div className="row g-3">
      <div className="col-6 col-md-4 col-lg-6">
        <div className="py-3 px-0 d-flex align-items-center">
          <div>
            <CircularProgress
              percentage={75}
              title=""
              sqSize="50"
              textSize="0.8em"
              strokeWidth="1"
            />
          </div>
          <h6 className="ps-3 mb-0">HTML</h6>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-6">
        <div className="py-3 px-0 d-flex align-items-center">
          <div>
            <CircularProgress
              percentage={100}
              title=""
              sqSize="50"
              textSize="0.8em"
              strokeWidth="1"
            />
          </div>
          <h6 className="ps-3 mb-0">CSS</h6>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-6">
        <div className="py-3 px-0 d-flex align-items-center">
          <div>
            <CircularProgress
              percentage={50}
              title=""
              sqSize="50"
              textSize="0.8em"
              strokeWidth="1"
            />
          </div>
          <h6 className="ps-3 mb-0">React JS</h6>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-6">
        <div className="py-3 px-0 d-flex align-items-center">
          <div>
            <CircularProgress
              percentage={90}
              title=""
              sqSize="50"
              textSize="0.8em"
              strokeWidth="1"
            />
          </div>
          <h6 className="ps-3 mb-0">Angular</h6>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-6">
        <div className="py-3 px-0 d-flex align-items-center">
          <div>
            <CircularProgress
              percentage={63}
              title=""
              sqSize="50"
              textSize="0.8em"
              strokeWidth="1"
            />
          </div>
          <h6 className="ps-3 mb-0">iOs App</h6>
        </div>
      </div>
      <div className="col-6 col-md-4 col-lg-6">
        <div className="py-3 px-0 d-flex align-items-center">
          <div>
            <CircularProgress
              percentage={75}
              title=""
              sqSize="50"
              textSize="0.8em"
              strokeWidth="1"
            />
          </div>
          <h6 className="ps-3 mb-0">App Dev</h6>
        </div>
      </div>
    </div>
  </div>
  );
};

