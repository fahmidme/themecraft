
# ThemeCraft

ThemeCraft is a dynamic, AI-powered web theme generator designed as a learning and starting point for creating dynamic, AI-generated websites. It leverages OpenAI's capabilities to interpret user descriptions and generate unique web themes, complete with interactive elements that can be dragged and resized.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repository/themecraft.git
   ```

2. Navigate to the project directory:

   ```bash
   cd themecraft
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Setting Up the Environment

1. Create a `.env` file in the root directory of the project.
2. Obtain your OpenAI API key and organization ID.
3. Add these keys to your `.env` file:

   ```env
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   REACT_APP_OPENAI_ORG_ID=your_openai_organization_id
   ```

### Running the Project

To start the project, run:

```bash
npm start
```

or

```bash
yarn start
```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Features

- **Dynamic Theme Generation**: Enter a description and let the AI generate a unique web theme.
- **Interactive Elements**: Drag and resize elements to customize the layout.
- **Download Capability**: Download the generated theme as an HTML file, including any customizations made.

## Room for Improvement

While ThemeCraft serves as a robust starting point, there are several areas for potential enhancements:

- **Enhanced Styling**: More sophisticated and varied styling options could be implemented.
- **Robust Download Functionality**: Improving the download feature to ensure all styles and changes are accurately reflected in the HTML file.
- **Extended Functionality**: Integration with more AI features or additional customization options for users.

## Contributing

Contributions to enhance ThemeCraft are welcome. Whether it's improving existing features, adding new capabilities, or fixing bugs, your contributions can help make ThemeCraft a more powerful tool for web theme generation.

## License

This project is licensed under the [MIT License](LICENSE).
