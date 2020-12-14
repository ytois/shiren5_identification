import React, { useState } from 'react'
import InputArea from './InputArea'
import ItemTable from './ItemTable'
import { Container } from '@material-ui/core'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const [price, setPrice] = useState(1000)
  const handleChange = (price: number) => {
    setPrice(price)
  }

  return (
    <div className="App">
      <InputArea onChangePrice={handleChange} />
      <Container>
        <ItemTable price={price} />
      </Container>
    </div>
  )
}

export default App
