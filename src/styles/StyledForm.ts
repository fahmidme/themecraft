// src/styles/StyledForm.ts
import styled, { keyframes, css } from "styled-components";

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

interface StyledFormProps {
  generatedTheme: any; // Use a more specific type if possible
}

export const StyledForm = styled.form<StyledFormProps>`
  position: relative;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  max-width: 85%;
  width: 420px;
  animation: ${floatAnimation} 4s ease-in-out infinite;
  transition: bottom 0.5s ease-in-out;

  ${({ generatedTheme }) =>
    generatedTheme &&
    css`
      position: absolute;
      bottom: 6.9%;
      z-index: 1;
      left: 50%;
      transform: translateX(-50%);
      animation: none; // Stop floating animation
    `}
`;
