import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.name}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  let all = bad + neutral + good
  let avg = (good - bad) / all
  let positive = (good / all * 100).toFixed(1) + " %"
  
  if (all === 0) {
    return (
      <div>
        No feedback given.
      </div>
      )
  }

  return (
  <table>
    <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="positive" value={positive} />
    </tbody>
  </table>
  )
}

const StatisticLine = (props) => (
  <tr>
    <td style={{width: "70px"}}>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const handleGoodClick = () => {
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <>
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} name="good" />
      <Button handleClick={handleNeutralClick} name="neutral" />
      <Button handleClick={handleBadClick} name="bad" />
      <h1>statistics</h1>
    </div>    
    <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App

