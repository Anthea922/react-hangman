
/*Explanation:

Import Statements:

import React from 'react';: Imports the React library, allowing the use of JSX and React components.
import Hangman from './components/Hangman';: Imports the Hangman component from the './components/Hangman' file.
Functional Component:

function App() {...}: Defines a functional component named App.
JSX Structure:

<div className="App">...</div>: Represents a div with the class name "App" as the root container for the component.
Child Component:

<Hangman />: Renders the Hangman component within the App component.
Export:

export default App;: Exports the App component as the default export of this file.
This file serves as the entry point of the React application, where the App component is rendered,
and it, in turn, includes the Hangman component. The structure is concise and adheres to React's component-based architecture.*/
// Import the React library
import React from 'react';

// Import the Hangman component from the './components/Hangman' file
import Hangman from './components/Hangman';

// Functional component named App
function App() {
  // Return JSX representing the structure of the App component
  return (
    // A div with className "App" containing the Hangman component
    <div className="App">
      {/* Render the Hangman component*/}
      <Hangman />
    </div>
  );
}

// Export the App component as the default export of this file
export default App;

