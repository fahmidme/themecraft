// src/styles/StyledComponents.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // This will horizontally center the children in the container
  height: 100vh; // This makes the container take up the full viewport height
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #333; // Change the color based on your theme
`;

export const Description = styled.p`
  font-size: 1em;
  text-align: center;
  color: #666; // Change the color based on your theme
  max-width: 600px; // This ensures that the text is not too wide on larger screens
  margin: 0 auto; // This will center the paragraph
`;

export const Logo = styled.img`
  max-width: 100px; // Set this to the desired width
  margin-bottom: 16px; // Adds space between the logo and the title
  border-radius: 10px; // Adjust this value to get the desired roundness of the edges
`;

export const ThemeVisualizerContainer = styled.div`
  width: 100%; // Take up the full width of the parent
  min-height: 50vh; // Minimum height to ensure it takes space even if empty
  height: 80vh;
  position: relative; // Relative positioning for absolute children
  background-color: #f8f8f8; // A light background to differentiate from the rest of the app
  border-radius: 8px; // Optional: rounded corners
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Optional: some shadow for depth
  border-radius: 15px;
  overflow: auto; // Allow scrolling for overflow content
`;
