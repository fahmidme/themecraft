// src/styles/StyledForm.ts
import styled, { keyframes } from "styled-components";

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

export const StyledForm = styled.form`
  position: relative; // Set relative positioning context
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  max-width: 85%;
  width: 420px;

  animation: ${floatAnimation} 4s ease-in-out infinite;
`;
