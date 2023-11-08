// src/styles/StyledButton.ts
import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.6em 1.2em;
  margin-top: 1em; // Adjust as needed
  background-color: #5b9aa0; // Button background color
  color: white; // Button text color
  border: none;
  border-radius: 5px; // Adjust to match your design preferences
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #327a81; // Darker shade for hover state
    transform: translateY(-2px); // Slight lift effect
  }

  &:active {
    transform: translateY(1px); // Push down effect on click
  }

  &:disabled {
    background-color: #c0c0c0; // Disabled state color
    cursor: not-allowed;
  }
`;

// Make sure to import this StyledButton component in your ThemeInput.tsx and use it instead of the regular button tag.
