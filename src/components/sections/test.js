import React from "react";
import LatestProjectsSwiper from "../swipers/latest-project";
import {
  CallToAction,
  PricingList,
  Counter,
  CircularProgress,
  PricingTable,
} from "../elements";
import { Container, Row, Col } from "react-bootstrap";

const Tome = () => {
  return (
    <section className="home-section pt-5 mt-5">
      <Container>
        <div className="text-center">
          <h4 className="title">Layout Variants </h4>
        </div>
        <Row className="sec_sp">
          <Col md="6" lg="4">
            <Counter title="Python Devloper" number="9854K" />
          </Col>
          <Col md="6" lg="4">
            <Counter title="Coffe Macheot latee" number="534K" />
          </Col>
          <Col md="6" lg="4">
            <Counter title="Im Patapa Pevloper" number="534K" />
          </Col>
          <Col md="6" lg="4">
            <Counter title="Python Devloper" number="9854K" />
          </Col>
          <Col md="6" lg="4">
            <Counter title="Coffe Macheot latee" number="534K" />
          </Col>
          <Col md="6" lg="4">
            <Counter title="Im Patapa Pevloper" number="534K" />
          </Col>
        </Row>

        <Row className="pt-5 mt-5">
          <Col md="6" lg="4">
            <CircularProgress percentage={75} title="Marketing" />
          </Col>
          <Col md="6" lg="4">
            <CircularProgress percentage={90} title="Sales Repo" />
          </Col>
          <Col md="6" lg="4">
            <CircularProgress percentage={53} title="Exprirencec" />
          </Col>
        </Row>
      </Container>
      <div
        className="container pt-5"
        style={{ paddingRight: "4.1vw", paddingLeft: "4.1vw" }}
      >
        <div className="text-center pb-4">
          <h4 className="title">Layout Variants </h4>
        </div>
        <Row>
          <Col lg="6">
            <PricingList
              title="Café Latte M"
              price="$6.00"
              description="Double espresso / steamed milk / placed foam"
              new
            />
            <PricingList
              title="Café Latte M"
              price="$6.00"
              description="Double espresso / steamed milk / placed foam"
              new
            />

            <PricingList
              title="Café Latte M"
              price="$6.00"
              description="Double espresso / steamed milk / placed foam"
              new
            />

            <PricingList
              title="Café Latte M"
              price="$6.00"
              description="Double espresso / steamed milk / placed foam"
              new
            />
          </Col>
          <Col lg="6">
            <PricingList
              title="Café Latte M"
              price="$6.00"
              description="Double espresso / steamed milk / placed foam"
              new
            />
            <PricingList
              title="Café Latte M"
              price="$6.00"
              description="Double espresso / steamed milk / placed foam"
              new
            />

            <PricingList
              title="Café Latte M"
              price="$6.00"
              description="Double espresso / steamed milk / placed foam"
              new
            />

            <PricingList
              title="Café Latte M"
              price="$6.00"
              description="Double espresso / steamed milk / placed foam"
              new
            />
          </Col>
        </Row>

        <Row className="pt-5 mt-5">
          <Col md="6" lg="4">
            <PricingTable />
          </Col>
          <Col md="6" lg="4">
          <PricingTable />
          </Col>
          <Col md="6" lg="4">
          <PricingTable />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Tome;
