// src/styles/StyledButton.ts
import styled from "styled-components";

export const StyledButton = styled.button`
  position: absolute;
  right: 0; // To account for the border of the StyledInput
  top: 0; // To account for the border of the StyledInput
  height: 100%;
  width: 48px; // keep it square
  border: none;
  background-color: transparent; // Match the input background color
  cursor: pointer;

  &:hover {
    font-size: 1.2em; // Increase the font size on hover
  }

  &:active {
    transform: translateY(1px); // Push down effect on click
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

// Make sure to import this StyledButton component in your ThemeInput.tsx and use it instead of the regular button tag.
