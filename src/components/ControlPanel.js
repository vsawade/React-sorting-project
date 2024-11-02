// src/components/ControlPanel.js
import React, { useState } from 'react';
import styled from 'styled-components';

const PanelContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 250px;
`;

const Select = styled.select`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0056b3;
    }
`;

const ControlPanel = ({ array, setArray, algorithm, setAlgorithm, onSort }) => {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => setInput(e.target.value);

    const handleGenerateArray = () => {
        setArray(input.split(',').map(Number).slice(0, 8)); // Limit to 8 elements
    };

    return (
        <PanelContainer>
            <Input
                type="text"
                placeholder="Enter numbers separated by commas"
                value={input}
                onChange={handleInputChange}
            />
            <Button onClick={handleGenerateArray}>Generate Array</Button>
            <Select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
                <option value="bubble">Bubble Sort</option>
                <option value="insertion">Insertion Sort</option>
                <option value="selection">Selection Sort</option>
            </Select>
            <Button onClick={onSort}>Start Sorting</Button>
        </PanelContainer>
    );
};

export default ControlPanel;
