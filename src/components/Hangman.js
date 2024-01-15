/*Code explanation: 
Explanation:

Component Structure and State:

The Hangman component is a class-based React component that manages the state related to the game.
The state includes the count of mistakes, guessed letters, the current word to be guessed, and the status of the Help Modal.
Default Properties:

defaultProps are set for the maximum allowed wrong guesses (maxWrong) and an array of images representing the Hangman states.
Event Handlers:

handleGuess: Handles user guesses, updates the state based on correctness.
resetButton: Resets the game state.
toggleHelpModal: Toggles the visibility of the Help Modal.
Guessed Word Generation:

The guessedWord function generates the word to be displayed with placeholders for unguessed letters.
Rendering:

The render method defines the structure of the component.
Destructuring is used for easy access to state and props.
Keyboard Buttons:

The alphabet buttons are dynamically generated using the Array.from method.
Buttons are conditionally rendered based on whether the letter is a valid lowercase English letter.
Styles are applied to indicate whether a letter has been guessed.
Help Modal Integration:

The Help Modal component is conditionally rendered based on the state isHelpModalOpen.
The HelpModal component is imported and used to display game rules.
This Hangman.js file provides a structured and modular implementation for the Hangman game, with clear explanations for each part of the code. The code is organized to enhance readability and maintainability.*/


//Import necessary modules and components
import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './Words.js';
import HelpModal from './HelpModal';
import Hint from './Hint';

// Importing images representing different hangman states
import step0 from "../images/state1.gif";
import step1 from "../images/state2.gif";
import step2 from "../images/state3.gif";
import step3 from "../images/state4.gif";
import step4 from "../images/state5.gif";
import step5 from "../images/state6.gif";
import step6 from "../images/state7.gif";
import step7 from "../images/state8.gif";
import step8 from "../images/state9.gif";
import step9 from "../images/state10.gif";
import step10 from "../images/state11.gif";

// Class component for the Hangman game
class Hangman extends Component {
  // Default props for the Hangman component
  static defaultProps = {
    maxWrong: 10, // Maximum allowed wrong guesses
    images: [
      step0, step1, step2, step3, step4,
      step5, step6, step7, step8, step9, step10
    ], // Hangman state images for each wrong guess
  };

  // Initial state for the Hangman component
  state = {
    mistake: 0, // Number of wrong guesses
    guessed: new Set([]), // Set to store guessed letters
    answer: randomWord(), // Random word to guess
    isHelpModalOpen: false, // Flag to control Help Modal visibility
  };

  // Function to handle user's letter guess
  handleGuess = (letter) => {
    if (!this.state.guessed.has(letter)) {
      this.setState((st) => ({
        guessed: st.guessed.add(letter),
        mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
      }));
    }
  };

  // Function to generate the guessed word with underscores for unrevealed letters
  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  // Function to reset the game by setting the state to initial values
  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
    });
  };

  // Function to toggle the Help Modal's visibility
  toggleHelpModal = () => {
    this.setState((prevState) => ({
      isHelpModalOpen: !prevState.isHelpModalOpen,
    }));
  };

  // Function to display the correct word if the user has lost
  displayCorrectWord = () => {
    return (
      <div>
        <p className="correct-word-message">Unfortunately you lost. 😕 The correct word was: {this.state.answer}</p>
      </div>
    );
  };

  // Function to render the game status based on win/lose
  renderGameStatus() {
    const { isWinner, gameOver } = this.getGameStatus();
    if (isWinner) {
      return "Congratulations! You won😃!!!";
    } else if (gameOver) {
      return this.displayCorrectWord();
    }
    return null;
  }

  // Function to get the current game status
  getGameStatus() {
    const { mistake } = this.state;
    const { maxWrong } = this.props;
    const gameOver = mistake >= maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    return { isWinner, gameOver };
  }

  render() {
    // Destructuring state and props for easy access
    const { mistake, isHelpModalOpen, answer } = this.state;
    const { maxWrong, images } = this.props;
    // Determine game status
    const { isWinner, gameOver } = this.getGameStatus()

    // Return the rendered JSX
    return (
      <div className="Hangman container">
        {/* Header for the Hangman game*/}
        <header className='text-center'>
          <h1>Hangman</h1>
          <p>Find the hidden word - Enter a letter</p>
        </header>

        {/* Display the number of wrong guesses*/}
        <div className="float-right">Wrong Guesses: {mistake} of {maxWrong}</div>

        {/* Display the hangman image based on the number of mistakes */}
        <div className="text-center">
          <img src={images[mistake]} alt={`Hangman state ${mistake + 1}`} />
        </div>

        <div className="text-center">
          {/* Display the word with underscores for unguessed letters*/}
          <p>Guess the Programming Language:</p>
          <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>

          {/* Display game status (win/lose) */}
          <p>{this.renderGameStatus()}</p>

          {/* Representing the keyboard as buttons */}
          <div className="keyboard">
            {Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)).map((letter) => (
              /^[a-z]$/.test(letter) && (
                <button
                  // Button for each letter, with class 'clicked' if already guessed
                  className={`btn btn-keyboard ${this.state.guessed.has(letter) ? 'clicked' : ''}`}
                  key={letter}
                  value={letter}
                  onClick={() => this.handleGuess(letter)}
                  disabled={this.state.guessed.has(letter) || gameOver || isWinner}
                >
                  {letter}
                </button>
              )
            ))}
          </div>

          {/* Reset button to start a new game */}
          <button className='btn btn-info' onClick={this.resetButton}>Reset</button>

          {/* Help button to toggle the visibility of the HelpModal*/}
          <button className='btn btn-info m-2' onClick={this.toggleHelpModal}>
            Help
          </button>

          {/* HelpModal component rendered if isHelpModalOpen is true */}
          <HelpModal isOpen={isHelpModalOpen} onClose={this.toggleHelpModal} />
          {/* Hint component with the current word as a prop */}
          <Hint currentWord={answer} />
        </div>
      </div>
    );
  }
}

// Exporting the Hangman component for use in other files
export default Hangman;


