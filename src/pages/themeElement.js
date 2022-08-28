import React from "react";
import {
  CallToAction,
  PricingList,
  Counter,
  CircularProgress,
  PricingTable,
} from "../components";
import { BasicLayout } from "../layouts/basicLayout";
import { Container, Row, Col } from "react-bootstrap";

const Tome = () => {
  return (
    <BasicLayout footer paddingTop>
      <Container>
        <div className="">
          <h2 className="title mb-4">Counters</h2>
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
        <div className="">
          <h2 className="title mb-4">Progressbar</h2>       </div>

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
          <h2 className="title mb-4">Layout Variants </h2>
        </div>
        <div className="">
          <h2 className="title mb-4">Pricing List </h2>
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
    </BasicLayout>
  );
};

export default Tome;
