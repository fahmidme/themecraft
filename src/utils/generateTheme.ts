// src/utils/generateTheme.ts
const generateTheme = async (description: string) => {
  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // API key from environment variables
  const OPENAI_ORG_ID = process.env.REACT_APP_OPENAI_ORG_ID; // Organization ID from environment variables

  // Data payload for the POST request
  const data = {
    model: "gpt-4-1106-preview",
    max_tokens: 2500,
    messages: [
      {
        role: "system",
        content: `Please generate a JSON containing a list of UI "elements" that conform to a wireframe theme based on the provided user description. Each element in the 'elements' array should be a comprehensive object that includes the following properties:
        
          - 'id': A unique identifier for the element.
          - 'type': The type of UI element (e.g., 'header', 'footer', 'nav', 'section', 'button', 'text', 'imagePlaceholder').
          - 'content': A placeholder text or description indicating the element's purpose or content.
          - 'style': CSS properties written in camelCase for inline styles that give the element a wireframe appearance, using only monochromatic colors and simple borders.
          - 'defaultStyle': Default wireframe CSS properties that will be used if no custom style is provided.
          - 'interaction': An object describing interaction styles and behaviors such as hover or click events, keeping inline with the wireframe theme.
        
        The 'elements' should be structured to enable a React component like 'ThemeVisualizer' to render a visual representation of a UI wireframe. The 'interaction' property should specify any simple dynamic behavior that the element should exhibit on user interaction, without complex animations or color changes. The response should be clear and detailed for direct implementation in a React application.`,
      },
      {
        role: "user",
        content: description, // User-provided description for custom UI elements.
      },
    ],
    response_format: {
      type: "json_object",
    },
  };

  // Using fetch to make the API call
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        ...(OPENAI_ORG_ID && { "OpenAI-Organization": OPENAI_ORG_ID }), // Conditionally add the organization ID
      },
      body: JSON.stringify(data),
    });

    const jsonResponse = await response.json();

    // Check if the response is as expected
    if (!jsonResponse.choices || jsonResponse.choices.length === 0) {
      throw new Error("No response from OpenAI API");
    }

    const responseContent =
      jsonResponse.choices[jsonResponse.choices.length - 1].message.content;
    console.log(responseContent);

    // Return the message content from the latest response
    return JSON.parse(responseContent);
  } catch (error) {
    console.error("Error making API call:", error);
    // Handle errors appropriately in your app
    return null;
  }
};

export default generateTheme;
