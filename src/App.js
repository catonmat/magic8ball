import React, { useState } from 'react'
import _ from 'lodash'
import logo from './logo.svg';
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
  const [profession, setProfession] = useState(false)

  const professions = [
    'Lion Tamer',
    'Dentist',
    'Magician',
    'Escort',
    'Programmer',
    'Musician',
    'President'
  ]

  const handleQuestion = () => {
    setThinking(true)
    setTimeout(() => { 
      const randomIndex = _.random(0, professions.length-1)
      setProfession(professions[randomIndex])
      setThinking(false) 
    }, 2000)
  }

  return (
    <>
      {
        !profession && (
          <p>
            Lara, what profession will you be?
          </p>
        )
      }
      {
        profession && (
          <p>
            I think you should be a {profession}!
          </p>
        )
      }
      {
        thinking && (
          <button
            disabled
          >
            Hmmm... give me a second or two, I'm thinking...
          </button>
        )
      }
      {
        !thinking && !profession && (
          <button
            onClick={handleQuestion}
          >
            Ask me!
          </button>
        )
      }
      {
        !thinking && profession && (
          <button
           onClick={handleQuestion}
          >
            Ask me again!
          </button>
        )
      }
    </>
  )
}

export default App;
