import React, { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Testimonialsection = styled.div.attrs({
  className: "d-flex justify-content-between align-items-center pb-5",
})`
background: #8c8c8c12;
  min-height: 50vh;
  & .carousel-indicators [data-bs-target] {
    background-color: var(--text-color);
  }
`;

const CarouselCaption = styled(Carousel.Caption)`
  position: initial;
  color: var(--text-color);
  padding: 3rem;
  & img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;
export const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const ref = useRef(null);

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  return (
    <Testimonialsection>
      <Container fluid>
        <Row>
          <Col lg={4} className="p-5 text-center text-lg-start">
            <div>
              <h6 className="h6 fw-light">Testimonial</h6>
            </div>

            <h3 className="h4">
              What my clients
              <br /> say about me.
            </h3>
          </Col>
          <Col lg={8}>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              ref={ref}
              controls={false}
            >
              <Carousel.Item>
                <CarouselCaption>
                  <div>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                  <img src="https://source.unsplash.com/user/c_v_r/100x100" />
                  <div className="py-1">John Dohe</div>
                </CarouselCaption>
              </Carousel.Item>
              <Carousel.Item>
                <CarouselCaption>
                  <div>
                    <h3>Second slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                  <img src="https://source.unsplash.com/user/c_v_r/100x100" />
                  <div className="py-1">John Dohe</div>
                </CarouselCaption>
              </Carousel.Item>
              <Carousel.Item>
                <CarouselCaption>
                  <div>
                    <h3>Third slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                  <img src="https://source.unsplash.com/user/c_v_r/100x100" />
                  <div className="py-1">John Dohe</div>
                </CarouselCaption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Testimonialsection>
  );
};
