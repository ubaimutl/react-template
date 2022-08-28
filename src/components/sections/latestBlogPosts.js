import React from "react";
import { Link } from "react-router-dom";

export const LatestBlogPosts = () => {
  return (
    <div className="section section-blog py-5">
      <div className="container-fluid py-5">
        <div class="py-4 text-center">
          <h2 class="h2 mb-3">Latest News</h2>
          <p class="fs-6 fw-lighter">
            Keep up with our latest news also design and development tips &amp;
            tricks to help you become more proffesional
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 card border-0 bg-transparent p-4">
            <a
              className="card-preview overflow-hidden position-relative w-100"
              style={{ paddingBottom: "calc( 0.53 * 100% )" }}
              href=""
            >
              <div>
                <img
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                  src="https://images.unsplash.com/photo-1519558260268-cde7e03a0152"
                  alt="Pic 5"
                />
              </div>
            </a>
            <div className="card-body">
              <div className="card-meta">
                <a href="#">RECIPES</a> · 12 min read
              </div>
              <h3 className="card-title ">
                <Link to="/post">
                  How to bulid a Virtual Assistant Python
                </Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-4 card border-0 bg-transparent p-4">
            <a
              className="card-preview overflow-hidden position-relative w-100"
              style={{ paddingBottom: "calc( 0.53 * 100% )" }}
              href=""
            >
              <div>
                <img
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                  src="https://images.unsplash.com/photo-1546146830-2cca9512c68e"
                />
              </div>
            </a>
            <div className="card-body">
              <div className="card-meta">
                <a href="#">Architecture</a> · 8 min read
              </div>
              <h3 className="card-title">
                <Link to="/post">
                  15 Tips every Programmer should know
                </Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-4 card border-0 bg-transparent p-4">
            <a
              className="card-preview overflow-hidden position-relative w-100"
              style={{ paddingBottom: "calc( 0.53 * 100% )" }}
              href=""
            >
              <div>
                <img
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                  src="https://images.unsplash.com/photo-1589739847561-01aff5d0567a"
                  alt="Pic 7"
                />
              </div>
            </a>
            <div className="card-body">
              <div className="card-meta">
                <a href="#">Photography</a> · 10 min read
              </div>
              <h3 className="card-title">
                <Link to="/post">
                Top 10 best cameras of all time
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
