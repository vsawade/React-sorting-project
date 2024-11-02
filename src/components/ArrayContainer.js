// src/components/ArrayContainer.js
import React from 'react';
import styled from 'styled-components';
import NumberBox from './NumberBox';

const ArrayWrapper = styled.div`
    display: flex;
    gap: 10px;
    padding: 10px;
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 5px;
    min-height: 60px;
`;

const ArrayContainer = ({ array }) => {
    return (
        <ArrayWrapper>
            {array.map((num, index) => (
                <NumberBox key={index} value={num} />
            ))}
        </ArrayWrapper>
    );
};

export default ArrayContainer;
