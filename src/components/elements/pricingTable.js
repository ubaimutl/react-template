import React from 'react';
import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Ibutton} from "./button"

const NewBadge = styled.span`
background-color: var(--primary-color);
color: #fff;
font-size: .9rem;
font-weight: 500;
padding: 0.35rem 0.5rem;
line-height: 1;
-webkit-border-radius: 0.35rem;
border-radius: 0.35rem;
`;


export const PricingTable = (props) => {
    return (
<Card className="bg-transparent mb-4 rounded-0">
          <div className="card-header bg-transparent py-3 border-0">
            <h4 className="my-0 fw-normal text-center">Free</h4>
          </div>
          <Card.Body >
            <Card.Title className="text-center">$0<small className="text-muted fw-light">/mo</small></Card.Title>
            <p class="card-text my-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <ul class="list-unstyled my-4">
              <li class="px-3 py-2 border-bottom"> Cras justo odio</li>
              <li class="px-3 py-2 border-bottom"> Dapibus ac facilisis in</li>
              <li class="px-3 py-2 border-bottom"> Vestibulum at eros</li>
            </ul>
            <div className="text-center">
            <Ibutton type="button">Sign up for free</Ibutton>
            </div>
          </Card.Body>
        </Card>
    );
};

