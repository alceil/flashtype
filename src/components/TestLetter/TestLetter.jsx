import React from 'react'
import './TestLetter.css'
const TestLetter = ({individualLetterInfo}) => {
  const {status} = individualLetterInfo;

  const statusClass = 
  {
    correct:"test-letter-correct",
    incorrect:"test-letter-incorrect",
    notAttempted:"test-letter-not-attempted"
  }[status]

  console.log(`test-letter ${statusClass}`)
    return (
      <span className={`test-letter ${statusClass}`}>{individualLetterInfo.testLetter}</span>
    )
}

export default TestLetter
