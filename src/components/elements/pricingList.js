import React from 'react';
import styled from "styled-components";

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

export const PricingList = (props) => {
    return (
        <div className="pricing-list mb-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className="pricing-list-title">
                    <h6 className="heading title m-0">{props.title}</h6>
                </div>
                <div className="d-flex">
                    <div className="title">
                        <span className="regular-price"><b>{props.price}</b></span>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-start  mt-1 pricing-list-details">
                <p className="m-0">{props.description}</p>
                {props.new ? <NewBadge>New</NewBadge> : null}
            </div>
        </div>
    );
};



