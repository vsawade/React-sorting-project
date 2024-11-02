// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ControlPanel from './components/ControlPanel';
import ArrayContainer from './components/ArrayContainer';
import ExplanationBox from './components/ExplanationBox';
import bubbleSort from './sortingAlgorithms/bubbleSort';
import insertionSort from './sortingAlgorithms/insertionSort';
import selectionSort from './sortingAlgorithms/selectionSort';

// Styled component for main container
const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: linear-gradient(135deg, #f4f4f9, #e0eafc);
    min-height: 100vh;
`;

// Styled component for the title
const AppTitle = styled.h1`
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
`;

function App() {
    const [array, setArray] = useState([]);
    const [explanation, setExplanation] = useState([]);
    const [algorithm, setAlgorithm] = useState("bubble");

    // Function to handle sorting based on selected algorithm
    const handleSort = () => {
        setExplanation([]); // Clear explanations at the start of sorting
        let sortingSteps;

        // Choose the sorting algorithm based on selection
        if (algorithm === "bubble") sortingSteps = bubbleSort([...array]);
        else if (algorithm === "insertion") sortingSteps = insertionSort([...array]);
        else sortingSteps = selectionSort([...array]);

        // Execute each step with a delay for visualization
        executeSortingSteps(sortingSteps);
    };

    // Function to execute sorting steps with delay for visualization
    const executeSortingSteps = (steps) => {
        steps.forEach((step, index) => {
            setTimeout(() => {
                setArray(step.array); // Update array for current step
                setExplanation((prev) => [...prev, step.explanation]); // Append explanation
            }, index * 500); // Adjust delay as needed (500ms here)
        });
    };

    return (
        <AppContainer>
            <AppTitle>Sorting Algorithm Visualizer</AppTitle>
            
            {/* Control Panel for input, array generation, and algorithm selection */}
            <ControlPanel
                array={array}
                setArray={setArray}
                algorithm={algorithm}
                setAlgorithm={setAlgorithm}
                onSort={handleSort}
            />
            
            {/* Container to display the array */}
            <ArrayContainer array={array} />
            
            {/* Explanation box to show step-by-step sorting process */}
            <ExplanationBox explanation={explanation} />
        </AppContainer>
    );
}

export default App;
