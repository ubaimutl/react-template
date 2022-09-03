import React from "react";

export const FullWidthImage = (props) => {
  return (
    <figure className="yon-media-image ">
      <div className="yon-progressive">
        <div className="aspect-ratio-placeholder-fill aspect-ratio-1-1" />
        <div className="yon-progressive__placeholder-image ">
          {" "}
          <img
            fifu-featured={1}
            width={1950}
            height={1301}
            src="https://images.unsplash.com/photo-1580983553428-01fd27e32ef6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
        </div>
      </div>
    </figure>
  );
};
