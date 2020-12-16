import React from 'react'
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  TextField,
  Typography,
} from '@material-ui/core'
import ItemIcon from './ItemIcon'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(1),
  },
  list: {
    maxWidth: '500px',
  },
  description: {
    marginBottom: theme.spacing(2),
  },
}))

interface Props {
  item: any
  open: boolean
  onClose: () => void
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function ItemDialog(props: Props) {
  const classes = useStyles()
  const { item, open } = props
  const handleClose = () => {
    props.onClose()
  }

  function bidPriceText(item: any) {
    if (!item || !item.bid_price) {
      return ''
    }
    const addText = item.bid_price_add ? ` (+${item.bid_price_add})` : ''
    return `${item.bid_price}${addText}`
  }

  function sellingPriceText(item: any) {
    if (!item || !item.selling_price) {
      return ''
    }
    const addText = item.selling_price_add
      ? ` (+${item.selling_price_add})`
      : ''
    return `${item.selling_price}${addText}`
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <ItemIcon name={item && item.type} size={50} />
        <Typography component="span" className={classes.title}>
          {item && item.name}
        </Typography>
      </DialogTitle>

      <List className={classes.list}>
        <ListItem className={classes.description}>
          <Typography variant="caption">{item && item.description}</Typography>
        </ListItem>
        <ListItem>
          <TextField
            label="買値"
            value={bidPriceText(item)}
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="売値"
            value={sellingPriceText(item)}
            InputProps={{ readOnly: true }}
          />
        </ListItem>
        <ListItem>
          {item.mark && (
            <TextField
              label="印"
              value={item.mark}
              InputProps={{ readOnly: true }}
            />
          )}
          {item.sword_mark && (
            <TextField
              label="剣印"
              value={item.sword_mark}
              InputProps={{ readOnly: true }}
            />
          )}
          {item.shield_mark && (
            <TextField
              label="盾印"
              value={item.shield_mark}
              InputProps={{ readOnly: true }}
            />
          )}
          {item.capacity_min && (
            <TextField
              label="容量"
              value={`${item.capacity_min} - ${item.capacity_max}`}
              InputProps={{ readOnly: true }}
            />
          )}
          {item.multiple && (
            <TextField
              label="重複"
              value={item.multiple ? '○' : '-'}
              InputProps={{ readOnly: true }}
            />
          )}
        </ListItem>
      </List>
    </Dialog>
  )
}
