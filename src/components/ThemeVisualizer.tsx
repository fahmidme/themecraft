// src/components/ThemeVisualizer.tsx
import React, { useEffect, useState } from "react";
import interact from "interactjs";

// Define the props for ThemeElement to include necessary properties
export interface ThemeElement {
  id: string;
  type: string;
  content: string;
  style: React.CSSProperties;
}

// Define the props for Theme which will hold an array of ThemeElement objects
export interface Theme {
  elements: ThemeElement[];
}

// Define the props for ThemeVisualizer
interface ThemeVisualizerProps {
  theme: Theme;
}

const ThemeVisualizer: React.FC<
  ThemeVisualizerProps & {
    onElementUpdate: (updatedElements: ThemeElement[]) => void;
  }
> = ({ theme, onElementUpdate }) => {
  const [localTheme, setLocalTheme] = useState(theme);

  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  // Function to update element style
  const updateElementStyle = (
    id: string,
    styleUpdates: React.CSSProperties
  ) => {
    setLocalTheme((prevTheme) => {
      const updatedElements = prevTheme.elements.map((element) => {
        if (element.id === id) {
          return { ...element, style: { ...element.style, ...styleUpdates } };
        }
        return element;
      });
      onElementUpdate(updatedElements); // Notify ThemeInput about the change
      return { ...prevTheme, elements: updatedElements };
    });
  };

  useEffect(() => {
    theme.elements.forEach((element) => {
      const target = document.getElementById(element.id);
      if (target) {
        interact(target)
          .draggable({
            inertia: true,
            modifiers: [
              interact.modifiers.restrictRect({
                restriction: "parent",
                endOnly: true,
              }),
            ],
            autoScroll: true,
          })
          .resizable({
            edges: { left: true, right: true, bottom: true, top: true },
            inertia: true,
          })
          .on("dragmove", (event) => {
            const target = event.target;
            const x =
              (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
            const y =
              (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

            target.style.transform = `translate(${x}px, ${y}px)`;
            target.setAttribute("data-x", x.toString());
            target.setAttribute("data-y", y.toString());
          })
          .on("resizemove", (event) => {
            const target = event.target;
            let x = parseFloat(target.getAttribute("data-x")) || 0;
            let y = parseFloat(target.getAttribute("data-y")) || 0;

            target.style.width = event.rect.width + "px";
            target.style.height = event.rect.height + "px";

            x += event.deltaRect.left;
            y += event.deltaRect.top;

            target.style.transform = `translate(${x}px, ${y}px)`;
            target.setAttribute("data-x", x.toString());
            target.setAttribute("data-y", y.toString());
          });
      }
    });

    return () => {
      theme.elements.forEach((element) => {
        const target = document.getElementById(element.id);
        if (target) {
          interact(target).unset();
        }
      });
    };
  }, [localTheme]);

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
