// src/styles/StyledInput.ts
import styled, { keyframes } from 'styled-components';

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
  50% {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  }
  100% {
    transform: translateY(0);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

export const StyledInput = styled.input`
  padding: 1em;
  margin: 4.20em;
  color: #333; // Text color
  background: #fff; // Input background color
  border: 2px solid #5b9aa0; // Border color
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  }

  &:focus {
    outline: none;
    border-color: #327a81; // Focu border color
    box-shadow: 0 0 0 2px #327a81; // Focus shadow color
  }

  animation: ${floatAnimation} 4s ease-in-out infinite;
`;

// Adjust the colors and box shadow to fit the theme you want for ThemeCraft.
