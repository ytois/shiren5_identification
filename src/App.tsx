import React from 'react'
import InputArea from './InputArea'
import ItemTable from './ItemTable'
import { Container } from '@material-ui/core'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <div className="App">
      <InputArea />
      <Container>
        <ItemTable />
      </Container>
    </div>
  )
}

export default App
