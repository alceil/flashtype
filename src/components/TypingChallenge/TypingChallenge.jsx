import React from 'react'
import TestLetter from '../TestLetter/TestLetter'
import './TypingChallenge.css'
const TypingChallenge = ({
    selectedParagraph,
    timerStarted,
    timeRemaining,
    testInfo,
    onInputChange
}) => {
    console.log("typing info",testInfo)
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{timeRemaining>10?timeRemaining:`0${timeRemaining}`}</p>
                <p className="timer-info">
                    {!timerStarted&&"Start typing to type"}</p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {
                            testInfo.map((individualLetterInfo,index)=>{
                                return <TestLetter key = {index} individualLetterInfo={individualLetterInfo}/>
                            })
                        }
                        
                        {/* {selectedParagraph } */}
                    </div>

                </div>
                <div className="textarea-right">
                    <textarea onChange={(e)=> onInputChange(e.target.value)} className="textarea" placeholder="start typing here">
                        
                    </textarea>

                </div>
            </div>
            
        </div>
    )
}

export default TypingChallenge
