// src/utils/generateTheme.ts
const generateTheme = async (description: string) => {
  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY; // API key from environment variables
  const OPENAI_ORG_ID = process.env.REACT_APP_OPENAI_ORG_ID; // Organization ID from environment variables

  // Data payload for the POST request
  const data = {
    model: "gpt-4-1106-preview", // Using the latest available model
    messages: [
      {
        role: "system",
        content:
          "You are a creative assistant skilled in web design. Your task is to generate a detailed JSON theme configuration based on a textual description provided by a user. Ensure that the JSON object contains specific fields for colors, fonts, and layout. Be concise and format the JSON correctly.",
      },
      {
        role: "user",
        content: description, // User's input to generate a theme
      },
    ],
    response_format: {
      type: "json_object",
    }
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
    console.log(jsonResponse);

    // Check if the response is as expected
    if (!jsonResponse.choices || jsonResponse.choices.length === 0) {
      throw new Error("No response from OpenAI API");
    }

    // Return the message content from the latest response
    return jsonResponse.choices[jsonResponse.choices.length - 1].message
      .content;
  } catch (error) {
    console.error("Error making API call:", error);
    // Handle errors appropriately in your app
    return null;
  }
};

export default generateTheme;
