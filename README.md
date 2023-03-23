# Self Empathy App

This is a React app designed to help users practice self-empathy by generating compassionate responses to their negative self-talk. The app uses the OpenAI API to generate empathetic responses, and stores user data in a Firestore database provided by Firebase.

Getting Started

To run the app locally, follow these steps:

    Clone the repository to your local machine.
    Install the dependencies by running npm install.
    Set up a Firebase project and create a Firestore database.
    Create a file named .env.local in the root directory of the project and add your Firebase configuration details in the following format:

makefile

VITE_FIREBASE_API_KEY=<your-api-key>
VITE_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
VITE_FIREBASE_PROJECT_ID=<your-project-id>
VITE_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
VITE_FIREBASE_APP_ID=<your-app-id>

    Run the development server by running npm run dev.
    Open the app in your browser at http://localhost:3000.

Available Scripts

In the project directory, you can run:
npm run dev

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
npm run build

Builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
npm run preview

Runs the built app in preview mode.
Open http://localhost:5000 to view it in the browser.
Dependencies

    firebase: A platform for building web and mobile applications provided by Google.
    openai: A package for interacting with the OpenAI API, which provides AI-powered language tools.
    react: A JavaScript library for building user interfaces.
    react-dom: Provides DOM-specific methods that can be used at the top level of your app.
    react-router-dom: A package that provides routing capabilities for React apps.
    react-select: A package that provides a customizable select component for React.
    vite-plugin-svgr: A plugin for Vite that allows you to use SVG files as React components.

Dev Dependencies

    @types/react: Provides type definitions for React.
    @types/react-dom: Provides type definitions for React DOM.
    @vitejs/plugin-react: A plugin for Vite that allows you to use React in your app.
    autoprefixer: A plugin that adds vendor prefixes to CSS rules.
    css: A package that allows you to use CSS as a JS module.
    post: A plugin for Vite that allows you to transform CSS with JS.
    tailwindcss: A utility-first CSS framework.
    vite: A build tool and development server for modern web apps.

Contributing

Contributing:

Thank you for considering contributing to the Self Empathy App! We welcome and appreciate contributions from everyone. Here are a few guidelines to help you get started:

    Fork the repository on GitHub and clone it to your local machine.

    Install the necessary dependencies using npm install.

    Make your changes in a separate branch, following the Git flow model.

    Test your changes thoroughly by running npm run dev to start the development server.

    Once you have tested your changes, submit a pull request with a clear description of your changes and their purpose.

    Your pull request will be reviewed by a member of the development team. They may ask for further changes or additional information.

    Once your pull request has been approved, it will be merged into the main branch.

Thank you for your contribution!
