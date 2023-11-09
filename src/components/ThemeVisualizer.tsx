import React from "react";

// Define the props for ThemeElement to include necessary properties
interface ThemeElement {
  id: string;
  type: string;
  content: string;
  style: React.CSSProperties;
}

// Define the props for Theme which will hold an array of ThemeElement objects
interface Theme {
  elements: ThemeElement[];
}

// Define the props for ThemeVisualizer
interface ThemeVisualizerProps {
  theme: Theme;
}

const ThemeVisualizer: React.FC<ThemeVisualizerProps> = ({ theme }) => {
  // Define the method to render elements based on type
  const renderElement = (element: ThemeElement) => {
    const { id, type, content, style } = element;

    // Render the element based on its type
    switch (type) {
      case "header":
        return (
          <header id={id} key={id} style={style}>
            {content}
          </header>
        );
      case "footer":
        return (
          <footer id={id} key={id} style={style}>
            {content}
          </footer>
        );
      case "nav":
        return (
          <nav id={id} key={id} style={style}>
            {content}
          </nav>
        );
      case "section":
        return (
          <section id={id} key={id} style={style}>
            {content}
          </section>
        );
      case "button":
        return (
          <button
            id={id}
            key={id}
            style={style}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        );
      case "text":
        return (
          <p id={id} key={id} style={style}>
            {content}
          </p>
        );
      case "imagePlaceholder":
        return (
          <div id={id} key={id} style={style}>
            {content}
          </div>
        );
      default:
        return (
          <div id={id} key={id} style={style}>
            {content}
          </div>
        );
    }
  };

  // Render a container with all the theme elements
  return (
    <div className="theme-visualizer-container">
      {theme.elements.map(renderElement)}
    </div>
  );
};

export default ThemeVisualizer;
