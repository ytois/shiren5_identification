import React, { useMemo } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'
import ItemMaster from './items.json'

type Props = {
  price?: number
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ItemTable(props: Props) {
  const items = useMemo(() => {
    return ItemMaster.filter((item: any) => {
      if (!props.price) {
        return true
      }
      return item.bid_price === props.price
    })
  }, [props.price])

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
          {items.map((item) => (
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
