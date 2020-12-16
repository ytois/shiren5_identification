import React, { useMemo } from 'react'
import { AppBar, Button, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    padding: theme.spacing(1),
    backgroundColor: '#263238',
  },
}))

type Props = {
  price: number | null
  priceType: string
  capacity: number | null
  onChangePrice?: (price: number | null) => void
  onChangePriceType?: (priceType: 'buy' | 'sell') => void
  onChangeCapacity?: (capacity: number | null) => void
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const InputArea = (props: Props) => {
  const classes = useStyles()

  const priceTypeText = useMemo(() => {
    return props.priceType === 'buy' ? '買値' : '売値'
  }, [props.priceType])

  const priceTypeColor = useMemo(() => {
    return props.priceType === 'buy' ? 'primary' : 'secondary'
  }, [props.priceType])

  const changePriceType = () => {
    const priceType = props.priceType === 'buy' ? 'sell' : 'buy'
    if (props.onChangePriceType) {
      props.onChangePriceType(priceType)
    }
  }

  const onChangePrice = (event: React.ChangeEvent) => {
    if (!props.onChangePrice || !(event.target instanceof HTMLInputElement)) {
      return
    }
    const price = event.target.value
    props.onChangePrice(price ? Number(price) : null)
  }

  const onChangeCapacity = (event: React.ChangeEvent) => {
    if (
      !props.onChangeCapacity ||
      !(event.target instanceof HTMLInputElement)
    ) {
      return
    }
    const capacity = event.target.value
    props.onChangeCapacity(capacity ? Number(capacity) : null)
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
        <Grid item lg={1} md={2} xs={2}>
          <Button
            color={priceTypeColor}
            variant="contained"
            size="large"
            onClick={changePriceType}
            fullWidth
          >
            {priceTypeText}
          </Button>
        </Grid>
        <Grid item lg={2} md={4} xs={8}>
          <TextField
            label="値段"
            type="number"
            variant="outlined"
            value={props.price || ''}
            onChange={onChangePrice}
            fullWidth
          />
        </Grid>
        <Grid item lg={1} md={2} xs={2}>
          <TextField
            label="容量"
            type="number"
            variant="outlined"
            value={props.capacity || ''}
            onChange={onChangeCapacity}
          />
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default InputArea
