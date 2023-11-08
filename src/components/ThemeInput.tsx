// src/components/ThemeInput.tsx
import React from 'react';
import { Container, StyledInput } from '../styles/StyledInput'; // Update the path as necessary

const ThemeInput = () => {
  return (
    <Container>
      <StyledInput placeholder="Describe your theme..." />
    </Container>
  );
};

export default ThemeInput;
