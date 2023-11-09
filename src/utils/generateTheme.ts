// src/utils/generateTheme.ts
const generateTheme = async (description: string, openAIKey: string) => {
  // Data payload for the POST request
  const data = {
    model: "gpt-4-1106-preview",
    max_tokens: 1500,
    messages: [
      {
        role: "system",
        content: `Create a JSON structure with an array named "elements". Each item within this array should represent a UI element, defined by a set of properties that allow the 'ThemeVisualizer' React component to render a UI accurately. The properties are as follows:

        - 'id': A unique string identifier for each element.
        - 'type': A string indicating the UI element type (e.g., 'header', 'footer', 'nav', 'section', 'button', 'text', 'imagePlaceholder').
        - 'content': Text or description for the element, serving as a placeholder or label.
        - 'style': An object containing extensive CSS properties in camelCase notation, reflecting a creative modern design.

        The stylings MUST follow these:
        - Aesthetically pleasing modern design.
        - Consistent color scheme.
        - Appropriate layout spacing and alignment.
        - Elements can be positioned in absolute but they should all be in harmony.

        The output JSON should be easily interpretable by the 'ThemeVisualizer' to showcase a visual layout of the UI. Interaction behaviors should be simplistic, focusing on fundamental user actions without intricate animations or color variations. Use the user's description to guide the generation of the UI elements. Ensure clarity and completeness for straightforward integration within a React environment.`,
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
        Authorization: `Bearer ${openAIKey}`,
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
