import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineBarChart,
} from "react-icons/ai";

export const SharePanel = (props) => {
  return (
    <div>
      <div className="position-sticky d-none d-lg-block" style={{ top: 100 }}>
        <div className="d-flex flex-column align-items-center">
          <div>
            <div className="d-flex flex-column align-items-center">
              <span class="cs-meta-icon">
                <AiOutlineBarChart size={25} />
              </span>
              <span>1.9K</span>
              <span>views</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex align-items-center flex-column">
              <span>
                <small class="text-muted">Shares</small>
              </span>
              <span>
                <small>249</small>
              </span>
            </div>
            <div className="mt-3 d-flex d-lg-block">
              <div class="mt-2">
                <a
                  href="https://www.facebook.com/sharer.php?u=#/"
                  target="_blank"
                  className="d-flex align-items-center flex-column"
                >
                  <AiFillFacebook size={25} />
                  <span>
                    <small class="text-muted">110</small>
                  </span>
                </a>
              </div>
              <div class="mt-2">
                <a
                  href="https://twitter.com/share?&text=#"
                  target="_blank"
                  className="d-flex align-items-center flex-column"
                >
                  <AiFillTwitterSquare size={25} />
                  <span>
                    <small class="text-muted">40</small>
                  </span>
                </a>
              </div>
              <div class="mt-2">
                <a
                  href="https://www.linkedin.com/cws/share?url=#"
                  target="_blank"
                  className="d-flex align-items-center flex-column"
                >
                  <AiFillLinkedin size={25} />
                  <span>
                    <small class="text-muted">99</small>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const ShareMobile = () => {
  return(
    <div className="d-flex py-2 px-4 my-4 justify-content-between align-items-center d-lg-none">
      <div className="col-6 fs-5">
      <span>by</span>
        <span className="ms-1">
          Ubai Mutl
        </span>
      </div>
    <div className="d-flex">
    <div class="">
      <a
        href="https://www.facebook.com/sharer.php?u=#"
        target="_blank"
        className="d-flex align-items-center flex-column"
      >
        <AiFillFacebook size={25} />
      </a>
    </div>
    <div class="ms-2">
      <a
        href="https://twitter.com/share?&text=#"
        target="_blank"
        className="d-flex align-items-center flex-column"
      >
        <AiFillTwitterSquare size={25} />
      </a>
    </div>
    <div class="ms-2">
      <a
        href="https://www.linkedin.com/cws/share?url=#"
        target="_blank"
        className="d-flex align-items-center flex-column"
      >
        <AiFillLinkedin size={25} />
      </a>
    </div>
  </div>
  </div>
  )
}