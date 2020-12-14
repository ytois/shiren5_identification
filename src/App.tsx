import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from '@material-ui/core'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button color="primary" href="https://reactjs.org">
          Learn React
        </Button>
      </header>
    </div>
  )
}

export default App
