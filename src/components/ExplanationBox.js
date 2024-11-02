// src/components/ExplanationBox.js
import React from 'react';
import styled from 'styled-components';

const ExplanationWrapper = styled.div`
    margin-top: 20px;
    padding: 15px;
    max-height: 200px;
    overflow-y: auto;
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

const ExplanationBox = ({ explanation }) => {
    return (
        <ExplanationWrapper>
            {explanation.map((step, index) => (
                <p key={index}>{step}</p>
            ))}
        </ExplanationWrapper>
    );
};

export default ExplanationBox;
