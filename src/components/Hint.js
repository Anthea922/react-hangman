/*Explanation:

Functional Component Declaration: The Hint component is a functional component that takes a prop currentWord.

getHint Function: This function uses a switch statement to provide hints based on the current word. Each case corresponds to a specific programming language with a corresponding hint.

Rendering the Hint: The rendered content is a paragraph (<p>) element containing the hint message returned by the getHint function.

Export: The Hint component is exported for use in other files.*/

import React from 'react';

// Functional component for providing hints during the game
const Hint = ({ currentWord }) => {
    // Function to provide hints based on the current word
    const getHint = () => {
        switch (currentWord.toLowerCase()) {
            // Hints for specific programming languages
            case 'javascript':
                return 'Hint: A scripting language often used for web development.';

            case 'mongodb':
                return 'Hint: A NoSQL database known for its flexibility and scalability.';

            case 'python':
                return 'Hint: Known for its simplicity and readability.';

            case 'json':
                return 'Hint: A lightweight data interchange format.';

            case 'java':
                return 'Hint: A widely used object-oriented programming language.';

            case 'html':
                return 'Hint: The standard markup language for creating web pages.';

            case 'css':
                return 'Hint: Used for styling and layout of web pages.';

            case 'c':
                return 'Hint: A procedural programming language with a strong history.';

            case 'csharp':
                return 'Hint: Part of the Microsoft .NET framework, used for Windows applications.';

            case 'golang':
                return 'Hint: Known for its efficiency and simplicity, developed by Google.';

            case 'kotlin':
                return 'Hint: A modern programming language developed by JetBrains.';

            case 'php':
                return 'Hint: A server-side scripting language widely used for web development.';

            case 'sql':
                return 'Hint: Used for managing and querying relational databases.';

            case 'ruby':
                return 'Hint: Known for its elegant syntax and focus on simplicity and productivity.';

            case 'fortran':
                return 'Hint: One of the oldest programming languages, particularly used for scientific computing.';

            // Default case if the word is not recognized
            default:
                return 'No hint available for this word.';
        }
    };

    // Render the hint within a div with the 'hint' class
    return (
        <div className="hint">
            <p>{getHint()}</p>
        </div>
    );
};

// Export the Hint component for use in other files
export default Hint;
