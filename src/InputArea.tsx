import React, { useState, useMemo } from 'react'
import { AppBar, Button, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    padding: theme.spacing(1),
  },
}))

type Props = {
  onChangePriceType?: (priceType: string) => void
  onChangePrice?: (price: number) => void
  onChangeCapacity?: (capacity: number) => void
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const InputArea = (props: Props) => {
  const classes = useStyles()

  const [priceType, setPriceType] = useState('buy')

  const priceTypeText = useMemo(() => {
    return priceType === 'buy' ? '買値' : '売値'
  }, [priceType])

  const priceTypeColor = useMemo(() => {
    return priceType === 'buy' ? 'primary' : 'secondary'
  }, [priceType])

  const changePriceType = () => {
    setPriceType(priceType === 'buy' ? 'sell' : 'buy')
    if (props.onChangePriceType) {
      props.onChangePriceType(priceType)
    }
  }

  const onChangePrice = (event: React.ChangeEvent) => {
    if (!props.onChangePrice || !(event.target instanceof HTMLInputElement)) {
      return
    }
    const price = event.target.value
    props.onChangePrice(Number(price))
  }

  const onChangeCapacity = (event: React.ChangeEvent) => {
    if (
      !props.onChangeCapacity ||
      !(event.target instanceof HTMLInputElement)
    ) {
      return
    }
    const capacity = event.target.value
    props.onChangeCapacity(Number(capacity))
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Button
            color={priceTypeColor}
            variant="contained"
            size="large"
            onClick={changePriceType}
          >
            {priceTypeText}
          </Button>
        </Grid>
        <Grid item>
          <TextField
            label="Price"
            type="number"
            variant="outlined"
            onChange={onChangePrice}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Capacity"
            type="number"
            variant="outlined"
            onChange={onChangeCapacity}
          />
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default InputArea
