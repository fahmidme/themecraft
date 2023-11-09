import React from "react";

const ThemeVisualizer = ({ theme }: { theme: any }) => {
  const renderElement = (element: any) => {
    const { id, type, content, style, interaction } = element;

    // We're going to use inline event handlers for simplicity, but you could use more complex handlers.
    const eventHandlers = {
      onClick: () => {
        if (interaction.onClick) {
          // eslint-disable-next-line no-eval
          eval(interaction.onClick);
        }
      },
      onMouseOver: (e: any) => {
        if (interaction.onMouseOver) {
          Object.assign(e.currentTarget.style, interaction.onMouseOver);
        }
      },
      onMouseOut: (e: any) => {
        if (interaction.onMouseOut) {
          Object.assign(e.currentTarget.style, style);
        }
      },
    };

    switch (type) {
      case "button":
        return (
          <button
            id={id}
            key={id}
            style={style}
            {...eventHandlers}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        );
      case "text":
        return (
          <div id={id} key={id} style={style} {...eventHandlers}>
            {content}
          </div>
        );
      case "image":
        return (
          <img
            id={id}
            key={id}
            src={content}
            alt=""
            style={style}
            {...eventHandlers}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="theme-visualizer-container">
      {theme.elements.map(renderElement)}
    </div>
  );
};

export default ThemeVisualizer;
