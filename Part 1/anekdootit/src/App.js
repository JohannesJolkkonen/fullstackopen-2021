import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClickHandler}>{props.text}</button>
  )

const MostVotedAnecdote = ({mostvoted}) => {
  return (
  <>
    <h2>Anecdote with most votes</h2>
      <p>{mostvoted}</p>
  </>
  )
}

const AnecdoteOfTheDay = (props) => {
  return(
  <>
    <h2>Anecdote of the day</h2>
    <p>{props.selected}</p>
    <p>Has {props.points} votes</p>
  </>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Fear is the little-death that brings total obliteration',
    'Once beaten, twice shy',
    'Debugging is twice as hard as writing the code in the first place',
    'If it is not broken, dont fix it.'
  ]
  
  let rand = Math.floor((Math.random() * anecdotes.length))
  console.log('Random number: ' + rand)
  const [selected, setSelected] = useState(rand)  
  const [points, setPoints] = useState({ 0: 1, 1: 4, 2: 3, 3: 2, 4: 0 })

  
  const randomClickHandler = () => {
    let rand = Math.floor((Math.random() * anecdotes.length))
    setSelected(rand)
  }

  const voteClickHandler = () => {
    const copy = { ...points }
    copy[selected] += 1
    setPoints(copy)
  }

  const voteCalculator = () => {
      const maxKey = Object.keys(points).filter(x => {
          return points[x] === Math.max.apply(null,
            Object.values(points))
          }
       )
      console.log('Most voted index: ' + maxKey[0])
      return anecdotes[maxKey[0]]
  }

  console.log('voteCalculator returns: ' +voteCalculator())
  
  return (
    <div>
      <AnecdoteOfTheDay selected={anecdotes[selected]} points={points[selected]} />
      <Button onClickHandler={voteClickHandler} text="Vote"/>
      <Button onClickHandler={randomClickHandler} text="New anecdote" />
      <MostVotedAnecdote mostvoted={voteCalculator()}/>
    </div>
  )
}


export default App;
