import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#263238',
  },
  title: {
    padding: theme.spacing(1),
  },
}))

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const TitleBar = () => {
  const classes = useStyles()

  return (
    <AppBar color="primary" position="static" className={classes.appBar}>
      <Typography component="h1" variant="caption" className={classes.title}>
        シレン5 値段識別
      </Typography>
    </AppBar>
  )
}

export default TitleBar
