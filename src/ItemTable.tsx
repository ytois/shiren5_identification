import React from 'react'
import { AppBar, Button, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'
import Items from './items.json'

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    padding: theme.spacing(1),
  },
}))

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ItemTable() {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>種類</TableCell>
            <TableCell>名前</TableCell>
            <TableCell>容量</TableCell>
            <TableCell>買値</TableCell>
            <TableCell>売値</TableCell>
            <TableCell>印</TableCell>
            <TableCell>重複</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Items.map((item) => (
            <TableRow key={item.name}>
              <TableCell align="center">{item.type}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="center">
                {item.capacity_min} ～ {item.capacity_max}
              </TableCell>
              <TableCell align="right">{item.bid_price}</TableCell>
              <TableCell align="right">{item.selling_price}</TableCell>
              <TableCell align="center">
                {item.mark} / {item.sword_mark} / {item.shield_mark}
              </TableCell>
              <TableCell align="center">{item.multiple}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
