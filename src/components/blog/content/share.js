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
      <div className="sticky-top" style={{ top: 100 }}>
        <div className="d-flex flex-column align-items-center">
          <div>
            <div className="d-flex flex-column align-items-center">
              <span class="cs-meta-icon">
                <AiOutlineBarChart size={25} />
              </span>
              <span>2.1K</span>
              <span>views</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex align-items-center flex-column">
              <span>
                <small class="text-muted">Shares</small>
              </span>
              <span>
                <small>120</small>
              </span>
            </div>
            <div className="mt-3">
              <div class="mt-2">
                <a
                  href="https://www.facebook.com/sharer.php?u=https://blueprinttheme.com/blueprint/2020/02/17/how-to-have-more-focused-hours-in-your-day/"
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
                  href="https://twitter.com/share?&text=How%20to%20Have%20More%20Focused%20Hours%20in%20Your%20Day&via=envato&url=https://blueprinttheme.com/blueprint/2020/02/17/how-to-have-more-focused-hours-in-your-day/"
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
                  href="https://pinterest.com/pin/create/bookmarklet/?url=https://blueprinttheme.com/blueprint/2020/02/17/how-to-have-more-focused-hours-in-your-day/&media=https://blueprinttheme.com/blueprint/wp-content/uploads/sites/2/demo-image-00002-683x1024.jpg"
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
