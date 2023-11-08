// src/styles/StyledForm.ts
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; // This ensures that all form items are horizontally centered
  width: 100%; // This ensures that the form takes the full width of its container
  max-width: 600px; // This prevents the form from stretching too wide on larger screens
  gap: 20px; // This adds space between form items, replace with the desired value
`;