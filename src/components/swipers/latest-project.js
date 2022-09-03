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
                    src="https://images.unsplash.com/photo-1662003496587-8b41cf5818e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
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
                    src="https://images.unsplash.com/photo-1516247524857-8dc5f4786cb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
                    src="https://images.unsplash.com/photo-1588829608085-3a321dd3239f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
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
                    src="https://images.unsplash.com/photo-1504587614488-3259c5c1d9b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
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
                    src="https://images.unsplash.com/photo-1527239441953-caffd968d952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
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
                    src="https://images.unsplash.com/photo-1523634540939-0be5fba32c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
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
                    src="https://images.unsplash.com/photo-1597160449583-5c76ed653055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80"
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
