import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
    background-color: #3498db;
    color: white;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    transition: transform 0.3s, background-color 0.3s;

    /* Conditional styles for different colors */
    ${({ highlight }) =>
        highlight === "red" &&
        css`
            background-color: #e74c3c;
        `}
    ${({ highlight }) =>
        highlight === "blue" &&
        css`
            background-color: #2980b9;
        `}
`;

const NumberBox = ({ value, highlight }) => {
    return <Box highlight={highlight}>{value}</Box>;
};

export default NumberBox;
