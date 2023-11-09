// src/components/ThemeInput.tsx
import React, { useState } from "react";
import { StyledInput } from "../styles/StyledInput";
import { StyledButton } from "../styles/StyledButton"; // Import the styled button
import {
  Container,
  Title,
  Description,
  Logo,
  ThemeVisualizerContainer,
} from "../styles/StyledComponents";
import logoImage from "../assets/logo.png"; // Make sure the path matches the location of your logo file
import generateTheme from "../utils/generateTheme"; // make sure this path is correct
import { StyledForm } from "../styles/StyledForm";
import ThemeVisualizer, { Theme, ThemeElement } from "./ThemeVisualizer";

const ThemeInput = () => {
  const [themeDescription, setThemeDescription] = useState("");
  const [generatedTheme, setGeneratedTheme] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [updatedTheme, setUpdatedTheme] = useState<Theme | null>(null);

  const handleElementUpdate = (updatedElements: ThemeElement[]) => {
    setUpdatedTheme({ elements: updatedElements });
  };

  const handleInputChange = (event: any) => {
    setThemeDescription(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const theme = await generateTheme(themeDescription);
      setGeneratedTheme(theme);
    } catch (err) {
      setError("An error occurred while generating the theme.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadThemeAsHtml = () => {
    const themeToDownload = updatedTheme || generatedTheme;

    if (!themeToDownload) return;

    // Example Google Font link - replace with your actual font link
    const googleFontLink =
      '<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">';

    let htmlContent = `<!DOCTYPE html><html lang="en"><head><title>Downloaded Theme</title>${googleFontLink}</head><body>`;

    themeToDownload.elements.forEach((element: any) => {
      const { id, type, content, style } = element;

      // Convert styles from camelCase to kebab-case and format values
      const styleString = Object.entries(style)
        .map(([key, value]) => {
          const formattedKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
          const formattedValue =
            typeof value === "number" ? `${value}px` : value;
          return `${formattedKey}: ${formattedValue};`;
        })
        .join(" ");

      htmlContent += `<${type} id="${id}" style="${styleString}">${content}</${type}>`;
    });

    htmlContent += "</body></html>";

    // Create a Blob from the HTML string
    const blob = new Blob([htmlContent], { type: "text/html" });
    const href = URL.createObjectURL(blob);

    // Create a temporary link and trigger the download
    const link = document.createElement("a");
    link.href = href;
    link.download = "theme.html"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <Container>
      {!generatedTheme && (
        <>
          <Logo src={logoImage} alt="ThemeCraft Logo" />
          <Title>ThemeCraft</Title>
          <Description>
            Enter a description of your desired web theme below, and let
            ThemeCraft generate a unique theme for you.
          </Description>
        </>
      )}
      <StyledForm onSubmit={handleSubmit} generatedTheme={generatedTheme}>
        <StyledInput
          placeholder="Describe your theme..."
          value={themeDescription}
          onChange={handleInputChange}
          // Add a padding-right to make space for the button
          style={{ paddingRight: "60px" }}
        />
        <StyledButton type="submit" disabled={isLoading}>
          🔮
        </StyledButton>
        {generatedTheme && (
          <StyledButton
            type="button"
            onClick={downloadThemeAsHtml}
            style={{ right: -45, fontSize: "1.5rem" }}
          >
            ⬇️
          </StyledButton>
        )}
      </StyledForm>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {generatedTheme && (
        <>
          <ThemeVisualizerContainer className="theme-visualizer-container">
            <ThemeVisualizer
              theme={generatedTheme}
              onElementUpdate={handleElementUpdate}
            />
          </ThemeVisualizerContainer>
        </>
      )}
    </Container>
  );
};

export default ThemeInput;
