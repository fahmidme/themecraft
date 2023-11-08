// src/components/ThemeInput.tsx
import React, { useState } from "react";
import { StyledInput } from "../styles/StyledInput";
import { StyledButton } from "../styles/StyledButton"; // Import the styled button
import {
  Container,
  Title,
  Description,
  Logo,
} from "../styles/StyledComponents";
import logoImage from "../assets/logo.png"; // Make sure the path matches the location of your logo file
import generateTheme from "../utils/generateTheme"; // make sure this path is correct
import { StyledForm } from "../styles/StyledForm";
import ThemeVisualizer from "./ThemeVisualizer";

const ThemeInput = () => {
  const [themeDescription, setThemeDescription] = useState("");
  const [generatedTheme, setGeneratedTheme] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: any) => {
    setThemeDescription(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const theme = await generateTheme(themeDescription);
      console.log(theme);
      setGeneratedTheme(theme);
    } catch (err) {
      setError("An error occurred while generating the theme.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Logo src={logoImage} alt="ThemeCraft Logo" />
      <Title>ThemeCraft - Your Custom Theme Builder</Title>
      <Description>
        Enter a description of your desired web theme below, and let ThemeCraft
        generate a unique theme for you.
      </Description>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          placeholder="Describe your theme..."
          value={themeDescription}
          onChange={handleInputChange}
        />
        <StyledButton type="submit" disabled={isLoading}>
          Generate Theme
        </StyledButton>
      </StyledForm>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {generatedTheme && (
        // Render your theme representation based on the generatedTheme data
        <ThemeVisualizer/>
      )}
    </Container>
  );
};

export default ThemeInput;
