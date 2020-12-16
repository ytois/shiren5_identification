import React, { useState } from 'react'
import TitleBar from './components/TitleBar'
import InputArea from './components/InputArea'
import ItemTable from './components/ItemTable'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(10),
  },
}))

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const classes = useStyles()

  const [price, setPrice] = useState<number | null>(null)
  const [priceType, setPriceType] = useState<'buy' | 'sell'>('buy')
  const [capacity, setCapacity] = useState<number | null>(null)

  const changePrice = (price: number | null) => {
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
      <TitleBar />
      <Container className={classes.container}>
        <ItemTable price={price} priceType={priceType} capacity={capacity} />
      </Container>
      <InputArea
        price={price}
        priceType={priceType}
        capacity={capacity}
        onChangePrice={changePrice}
        onChangePriceType={changePriceType}
        onChangeCapacity={changeCapacity}
      />
    </div>
  )
}

export default App
