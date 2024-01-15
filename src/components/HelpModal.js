/*Explanation:

Functional Component Declaration: The HelpModal component is a functional component that takes two props, isOpen (boolean) and onClose (function).

Main Container with Conditional Class: The main container div has a dynamic class open based on the isOpen prop. This class controls the visibility of the modal.

Modal Content: Inside the main container, there's another div for the modal content. This is where the rules and title are displayed.

Close Button: The 'x' symbol acts as a close button. It triggers the onClose function when clicked.

Rules: There are four rules listed in the modal, each represented by a paragraph (<p>) element.</p>*/
// HelpModal.js
import React from 'react';

// Functional component for displaying help modal
const HelpModal = ({ isOpen, onClose }) => {
    // The main div with conditional class 'open' based on modal state
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            {/* Modal content div */}
            <div className="modal-content">
                {/* Close button represented by 'x', triggers onClose function */}
                <span className="close" onClick={onClose}>&times;</span>
                {/* Modal title */}
                <h2>Hangman Game Rules</h2>
                {/* Rule 1 */}
                <p>1. Guess the programming language letter by letter.</p>
                {/* Rule 2 */}
                <p>2. You can make up to 10 incorrect guesses.</p>
                {/* Rule 3 */}
                <p>3. If you guess all the letters correctly, you win!</p>
                {/* Rule 4 */}
                <p>4. If you make 10 incorrect guesses, you lose.</p>
            </div>
        </div>
    );
};

// Export the HelpModal component for use in other files
export default HelpModal;

