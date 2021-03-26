import React from 'react'
import TestContainer from '../TestContainer/TestContainer'
import './ChallengeSection.css'

const ChallengeSection = ({ 
    selectedParagraph,
    timerStarted,
     timeRemaining, 
     words,
     characters,
      wpm,
      testInfo,
      onInputChange,
      startAgain
    }) => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test now!
            </h1>
            <TestContainer 
            testInfo={testInfo} 
            selectedParagraph ={selectedParagraph} 
            timerStarted={timerStarted} 
            timeRemaining={timeRemaining} 
            words={words} 
            characters={characters} 
            wpm={wpm}
            onInputChange={onInputChange}
            startAgain={startAgain}
            />
        </div>

    )
}

export default ChallengeSection
