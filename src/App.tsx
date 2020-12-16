import React, { useState } from 'react'
import InputArea from './components/InputArea'
import ItemTable from './components/ItemTable'
import { Container } from '@material-ui/core'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const [price, setPrice] = useState<number | null>(null)
  const [priceType, setPriceType] = useState<'buy' | 'sell'>('buy')
  const [capacity, setCapacity] = useState<number | null>(null)

  const changePrice = (price: number | null) => {
    console.log(price)
    setPrice(price)
  }

  const changePriceType = (priceType: 'buy' | 'sell') => {
    setPriceType(priceType)
  }

  const changeCapacity = (capacity: number | null) => {
    setCapacity(capacity)
  }

  return (
    <div className="App">
      <InputArea
        price={price}
        priceType={priceType}
        capacity={capacity}
        onChangePrice={changePrice}
        onChangePriceType={changePriceType}
        onChangeCapacity={changeCapacity}
      />
      <Container>
        <ItemTable price={price} priceType={priceType} capacity={capacity} />
      </Container>
    </div>
  )
}

export default App
