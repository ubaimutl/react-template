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

const Elements = () => {
  return (
    <BasicLayout footer paddingTop>
      <Container>
        <div className="">
          <h2 className="title mb-4">Counters</h2>
       </div>
        <Row className="sec_sp">
          <Col md="6" lg="4">
            <Counter title="Esdon Deisdsder" number="9854K" />
          </Col>
          <Col md="6" lg="4">
            <Counter title="Sofree Macheot latee" number="534K" />
          </Col>
          <Col md="6" lg="4">
            <Counter title="Id Paespa Pevloper" number="534K" />
          </Col>
          <Col md="6" lg="4">
            <Counter title="Dewdsasn Devlore" number="9854K" />
          </Col>
          <Col md="6" lg="4">
            <Counter title="Codade Macheot latee" number="534K" />
          </Col>
          <Col md="6" lg="4">
            <Counter title="Ros Pousapa Pevlewer" number="534K" />
          </Col>
        </Row>
        <div className="">
          <h2 className="title mb-4">Progressbar</h2>       </div>

        <Row className="pt-5 mt-5">
          <Col md="6" lg="4">
            <CircularProgress percentage={75} title="Msit amet" />
          </Col>
          <Col md="6" lg="4">
            <CircularProgress percentage={90} title="Sipsum" />
          </Col>
          <Col md="6" lg="4">
            <CircularProgress percentage={53} title="Econsectetur" />
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
              title="Lorem ipsum dolor."
              price="$24.99"
              description="Lorem ipsum dolor sit amet, consectetur."
              new
            />
            <PricingList
              title="Lorem ipsum dolor."
              price="$9.00"
              description="Lorem ipsum dolor sit amet, consectetur."
              new
            />

            <PricingList
              title="Lorem ipsum dolor."
              price="$8.00"
              description="Lorem ipsum dolor sit amet, consectetur."
              new
            />

            <PricingList
              title="Lorem ipsum dolor."
              price="$15.00"
              description="Lorem ipsum dolor sit amet, consectetur."
              new
            />
          </Col>
          <Col lg="6">
            <PricingList
              title="Lorem ipsum dolor."
              price="$100.00"
              description="Lorem ipsum dolor sit amet, consectetur."
              new
            />
            <PricingList
              title="Lorem ipsum dolor."
              price="$90.00"
              description="Lorem ipsum dolor sit amet, consectetur."
              new
            />

            <PricingList
              title="Lorem ipsum dolor."
              price="$60.00"
              description="Lorem ipsum dolor sit amet, consectetur."
              new
            />

            <PricingList
              title="Lorem ipsum dolor."
              price="$10.00"
              description="Lorem ipsum dolor sit amet, consectetur."
              new
            />
          </Col>
        </Row>

        <Row className="py-5 mt-5">
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

export default Elements;
