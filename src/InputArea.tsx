import React from 'react'
import { AppBar, Button, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    padding: theme.spacing(1),
  },
}))

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const InputArea = () => {
  const classes = useStyles()

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
          <Button color="primary" variant="contained" size="large">
            買値
          </Button>
        </Grid>
        <Grid item>
          <TextField label="Price" type="number" variant="outlined" />
        </Grid>
        <Grid item>
          <TextField label="Capacity" type="number" variant="outlined" />
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default InputArea
