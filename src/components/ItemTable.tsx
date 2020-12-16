import React, { useMemo, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Hidden,
  Typography,
} from '@material-ui/core'
import ItemIcon from './ItemIcon'
import ItemMaster from '../items.json'
import ItemDiscriminator from '../lib/itemFilter'
import ItemDialog from './ItemDialog'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  caption: {
    margin: theme.spacing(1),
  },
  description: {
    maxWidth: '500px',
  },
}))

type Props = {
  price: number | null
  priceType: 'buy' | 'sell'
  capacity: number | null
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ItemTable(props: Props) {
  const classes = useStyles()

  const [selectedItem, setItem] = useState(null)
  const [dialog, setDialog] = useState<boolean>(false)

  function handleCellClick(item: any) {
    setItem(item)
    if (item) {
      setDialog(true)
    }
  }
  function dialogClose() {
    setDialog(false)
  }

  const items = useMemo(() => {
    if (!props.price) {
      return ItemMaster
    }

    const discriminator = new ItemDiscriminator(props.priceType)

    return ItemMaster.reduce((list: any[], item: any) => {
      if (props.price) {
        const res = discriminator.disc(item, props.price, props.capacity)
        if (res) {
          list.push(res)
        }
      }
      return list
    }, [])
  }, [props.price, props.priceType, props.capacity])

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">種類</TableCell>
            <TableCell>名前</TableCell>
            <TableCell align="center">状態</TableCell>
            <TableCell align="center">容量</TableCell>
            <Hidden xsDown>
              <TableCell align="center">基本価格</TableCell>
            </Hidden>
            <Hidden mdDown>
              <TableCell className={classes.description}>説明</TableCell>
            </Hidden>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name}>
              <TableCell align="center">
                <ItemIcon name={item.type} size={50} />
              </TableCell>
              <TableCell onClick={() => handleCellClick(item)}>
                {item.name}
              </TableCell>
              <TableCell align="center">
                {item.blessing ? '祝' : null}
                {item.curse ? '呪' : null}
              </TableCell>
              <TableCell align="center">{item.capacity || '-'}</TableCell>
              <Hidden xsDown>
                <TableCell align="right">
                  {props.priceType === 'buy' ? item.bid_price : ''}
                  {props.priceType === 'sell' ? item.selling_price : ''}
                </TableCell>
              </Hidden>
              <Hidden mdDown>
                <TableCell className={classes.description}>
                  {item.description}
                </TableCell>
              </Hidden>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography
        className={classes.caption}
        align="right"
        component="p"
        variant="caption"
      >
        ※容量は床落ちの初期容量のみを考慮しています
      </Typography>

      <ItemDialog item={selectedItem} open={dialog} onClose={dialogClose} />
    </TableContainer>
  )
}
