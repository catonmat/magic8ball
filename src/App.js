import React, { useState } from 'react'
import _ from 'lodash'
import eightball from './eightball.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={eightball} className="App-logo" alt="logo" />
        <EightBall/>
      </header>
    </div>
  );
}

function EightBall() {
  const [thinking, setThinking] = useState(false)
  const [answer, setAnswer] = useState(false)

  function handleThinking() {
    setThinking(true)
    setTimeout(() => {
      const randomChoice = _.random(0,100)
      if (randomChoice <= 50 ) {
        setAnswer('I think you should do it.')
      } else {
        setAnswer('I think you should reconsider; this is not a wise choice.')
      }
      setThinking(false)
    }, 2000)
  }

  function handleReset() {
    setAnswer(false)
  }

  return (
    <>
      {
        !thinking && !answer && (
          <>
            <p>♎  Please ask me a question Mariana! ♎ </p>
            <textarea 
              cols="30" 
              rows="10"
              placeholder="I can look into the future paths of the multi-verse and select the optimal route for you..."
            >
            </textarea>
            <button
              onClick={() => handleThinking()}
            >
              Submit!
            </button>
          </>
        )
      }
      {
        !thinking && answer && (
          <>
            <p>{answer}</p>
            <p>Feel free to ask another question!</p>
            <button
              onClick={() => handleReset()}
            >
              Ask again!
            </button>
          </>
        )
      }
      {
        thinking && <Thinking />
      }
    </>
  )
}


const Thinking = () => (
  <>
    <p>I'm thinking...</p>
  </>
)


export default App;
