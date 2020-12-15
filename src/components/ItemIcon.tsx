import React from 'react'

type Props = {
  name:
    | string
    | 'arrow'
    | 'bracelet'
    | 'grass'
    | 'onigiri'
    | 'peach'
    | 'pot'
    | 'scroll'
    | 'shield'
    | 'staff'
    | 'stone'
    | 'sword'
    | 'talisman'
    | 'torch'
  small?: boolean
  medium?: boolean
  large?: boolean
  size: number | string
}

const Size = {
  small: 10,
  medium: 20,
  large: 30,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ItemIcon(props: Props) {
  const path = `/assets/${props.name}.png`
  let size = Size.medium

  if (props.small) {
    size = Size.small
  } else if (props.large) {
    size = Size.large
  }

  return <img src={path} width={size} height={size} alt={props.name} />
}

export default ItemIcon
