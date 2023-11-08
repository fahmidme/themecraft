// src/components/ThemeInput.tsx
import React from 'react';
import { StyledInput } from '../styles/StyledInput';
import { Container, Title, Description, Logo } from '../styles/StyledComponents';
import logoImage from '../assets/logo.png'; // Make sure the path matches the location of your logo file

const ThemeInput = () => {
  return (
    <Container>
      <Logo src={logoImage} alt="ThemeCraft Logo" />
      <Title>ThemeCraft - Your Theme Artisan</Title>
      <Description>
        Harness the power of AI to craft bespoke web themes from your words. Type in your desired theme description, and let ThemeCraft translate your ideas into a visual language. Fine-tune your creation with our intuitive drag-and-drop interface and watch your vision come to life.
      </Description>
      <StyledInput placeholder="Describe your ideal web theme, e.g., 'Sleek and modern with a dash of playfulness'" />
    </Container>
  );
};

export default ThemeInput;
