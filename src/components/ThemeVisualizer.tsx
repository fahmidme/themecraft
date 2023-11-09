import React from 'react';

interface InteractionStyles {
  onMouseOver?: React.CSSProperties;
  onMouseOut?: React.CSSProperties;
  onClick?: () => void; // If you want to handle click events dynamically
  // ... include other interactions as necessary
}

interface ThemeElement {
  id: string;
  type: string;
  content: string;
  style: React.CSSProperties;
  defaultStyle?: React.CSSProperties;
  interaction?: InteractionStyles;
}

interface Theme {
  elements: ThemeElement[];
}

interface ThemeVisualizerProps {
  theme: Theme;
}

const ThemeVisualizer: React.FC<ThemeVisualizerProps> = ({ theme }) => {
  // Handle mouse over interaction
  const onMouseOver = (e: React.MouseEvent<HTMLElement>, interactionStyle?: React.CSSProperties) => {
    if (interactionStyle) {
      Object.assign(e.currentTarget.style, interactionStyle);
    }
  };

  // Handle mouse out interaction
  const onMouseOut = (e: React.MouseEvent<HTMLElement>, element: ThemeElement) => {
    const defaultStyle = element.defaultStyle || element.style; // Fallback to element style if default is not provided
    Object.assign(e.currentTarget.style, defaultStyle);
  };

  // Handle click interaction if needed
  const onClick = (handler?: () => void) => {
    if (handler) {
      handler();
    }
  };

  const renderElement = (element: ThemeElement) => {
    const { id, type, content, style, interaction } = element;

    // Construct the interaction handlers for each element
    const interactionHandlers = {
      onMouseOver: (e: React.MouseEvent<HTMLElement>) => onMouseOver(e, interaction?.onMouseOver),
      onMouseOut: (e: React.MouseEvent<HTMLElement>) => onMouseOut(e, element),
      onClick: () => onClick(interaction?.onClick),
    };

    // Render the element based on its type
    switch (type) {
      case "button":
        return (
          <button
            id={id}
            key={id}
            style={style}
            {...interactionHandlers}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        );
      // ... handle other types like 'header', 'footer', 'nav', 'section' as needed
      default:
        return (
          <div
            id={id}
            key={id}
            style={style}
            {...interactionHandlers}
          >
            {content}
          </div>
        );
    }
  };

  return <div className="theme-visualizer-container">{theme.elements.map(renderElement)}</div>;
};

export default ThemeVisualizer;
