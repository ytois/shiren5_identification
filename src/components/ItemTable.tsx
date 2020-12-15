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
import ItemIcon from './ItemIcon'
import ItemMaster from '../items.json'
import ItemDiscriminator from '../lib/itemFilter'

type Props = {
  price: number
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ItemTable(props: Props) {
  const items = useMemo(() => {
    if (!props.price) {
      return ItemMaster
    }

    const discriminator = new ItemDiscriminator('buy')

    return ItemMaster.reduce((list: any[], item: any) => {
      const res = discriminator.disc(item, props.price)
      if (res) {
        list.push(res)
      }
      return list
    }, [])
  }, [props.price])

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>種類</TableCell>
            <TableCell>名前</TableCell>
            <TableCell>状態</TableCell>
            <TableCell>容量</TableCell>
            <TableCell>基本価格(売値)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name}>
              <TableCell align="center">
                <ItemIcon name={item.type} size={50} />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell align="center">
                {item.blessing ? '祝' : null}
                {item.curse ? '呪' : null}
              </TableCell>
              <TableCell align="center">{item.capacity}</TableCell>
              <TableCell align="right">
                {item.bid_price} ({item.selling_price})
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
