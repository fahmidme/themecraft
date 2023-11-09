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
        content: `Please generate a JSON configuration containing a list of UI "elements" based on the provided user description. Each element in the 'elements' array should be a comprehensive object that includes the following properties:
  
  - 'id': A unique identifier for the element.
  - 'type': The type of element (e.g., 'button', 'text').
  - 'content': The content to be displayed within the element, such as text.
  - 'style': CSS properties written in camelCase that will be applied inline to the element in a React application.
  - 'defaultStyle': Default CSS properties to fall back on if no custom style is provided.
  - 'interaction': Object describing interaction styles and behaviors such as hover, click, or drag events.
  
  Each element's 'style' and 'defaultStyle' properties should be detailed enough to render the element correctly without external dependencies. The 'interaction' property should specify any dynamic behavior that the element should exhibit on user interaction. Ensure that each element's configuration is clear and detailed for direct use in a React component like 'ThemeVisualizer'.
  The elements must be container components in a wireframe style, such as slick aesthetic fill color with cozy borders.`,
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
