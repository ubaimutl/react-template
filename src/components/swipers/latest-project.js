import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const LatestProjectsSwiper = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div style={{ marginBottom: "30%" }}>
      <div className="container-fluid homefu fu-slider">
        <div class="py-4 text-end">
          <h3 class="fs-4 mb-2">Latest Work</h3>
        </div>
        <header className="sli3-underline-header d-flex justify-content-between my-3">
          <div className="sli3-underline-header__arrows">
            <div className="recent-stories__arrow recent-stories__arrow--prev pr prev_s">
              <BsArrowLeft  />
            </div>
            <div className="recent-stories__arrow recent-stories__arrow--next ne next_s">
              <BsArrowRight />
            </div>
          </div>
        </header>

        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={15}
          navigation={{
            nextEl: ".next_s",
            prevEl: ".prev_s",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 30,
              preventClicks: false,
              preventClicksPropagation: false,
            },
          }}
          modules={[Navigation]}
          className="swiper-container"
        >
          <SwiperSlide>
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <a
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.35 * 100% )" }}
                href="#"
              >
                <div>
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="https://i.imgur.com/mSfj3nH.png"
                  />
                </div>
              </a>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#">Project #1</a>
                </h3>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <a
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.35 * 100% )" }}
                href="#"
              >
                <div>
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="https://i.imgur.com/GyHsCA4.png"
                  />
                </div>
              </a>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#">Project #1</a>
                </h3>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <a
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.35 * 100% )" }}
                href="#"
              >
                <div>
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="https://i.imgur.com/W5iYJ1w.png"
                  />
                </div>
              </a>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#">Project #1</a>
                </h3>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <a
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.35 * 100% )" }}
                href="#"
              >
                <div>
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="https://i.imgur.com/He7T4WB.png"
                  />
                </div>
              </a>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#">Project #1</a>
                </h3>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <a
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.35 * 100% )" }}
                href="#"
              >
                <div>
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="https://i.imgur.com/M0SHO6j.png"
                  />
                </div>
              </a>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#">Project #1</a>
                </h3>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <a
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.35 * 100% )" }}
                href="#"
              >
                <div>
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="https://i.imgur.com/rQmxbI3.png"
                  />
                </div>
              </a>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#">Project #1</a>
                </h3>
              </div>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="card bg-transparent border-0 cardwithshadow minh100 onhoverup">
              <a
                className="card-preview overflow-hidden position-relative w-100"
                style={{ paddingBottom: "calc( 1.35 * 100% )" }}
                href="#"
              >
                <div>
                  <img
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                    src="https://i.imgur.com/Pub03Gq.png"
                  />
                </div>
              </a>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#">Project #1</a>
                </h3>
              </div>
            </div>
          </SwiperSlide>{" "}

        </Swiper>
      </div>
    </div>
  );
};

export default LatestProjectsSwiper;
