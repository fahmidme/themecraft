// src/styles/StyledInput.ts
import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 1em;
  padding-right: 3em; // Make room for the button
  color: #333;
  background: #fff;
  border: 2px solid #5b9aa0;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    border-color: #327a81; // Focu border color
    box-shadow: 0 0 0 2px #327a81; // Focus shadow color
  }
`;

// Adjust the colors and box shadow to fit the theme you want for ThemeCraft.
