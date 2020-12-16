interface Item {
  type: string
  name: string
  bid_price: number
  selling_price: number
  mark: string | null
  sword_mark: string | null
  shield_mark: string | null
  multiple: boolean
  description: string
}

interface CapacityItem extends Item {
  bid_price_add: number
  selling_price_add: number
  capacity_min: number
  capacity_max: number
}

interface ResultItem extends Item {
  capacity?: number
  blessing?: boolean
  curse?: boolean
}

const range = (begin: number, end: number) =>
  [...Array(end - begin + 1)].map((_, i) => begin + i)

export default class ItemDiscriminator {
  priceType: 'buy' | 'sell'

  constructor(priceType: 'buy' | 'sell') {
    this.priceType = priceType
  }

  public disc(
    item: Item,
    price: number,
    capacity?: number | null
  ): ResultItem | null {
    const items: ResultItem[] = this.generateItems(item, capacity)

    let result: Item | null = null

    items.forEach((dupItem) => {
      const itemPrice = this.getItemPrice(dupItem, dupItem.capacity)
      if (price === itemPrice) {
        result = Object.assign({}, dupItem)
      } else if (price === Math.floor(itemPrice * 1.1)) {
        result = Object.assign({ blessing: true }, dupItem)
      } else if (price === Math.floor(itemPrice * 0.8)) {
        result = Object.assign({ curse: true }, dupItem)
      }
    })
    return result
  }

  // 杖・壺は使用回数がある
  private hasCapacity(item: Item): item is CapacityItem {
    const targetType = ['staff', 'pot']
    return targetType.indexOf(item.type) >= 0
  }

  private generateItems(item: Item, capacity?: number | null): ResultItem[] {
    if (!this.hasCapacity(item)) {
      return [item]
    }

    if (capacity) {
      // 容量が決まっている場合
      return [Object.assign({ capacity }, item)]
    }

    // 容量が不定の場合は取りうる値を全て作る
    const result: ResultItem[] = []
    return range(item.capacity_min, item.capacity_max).reduce(
      (list, capacity) => {
        list.push(Object.assign({ capacity }, item))
        return list
      },
      result
    )
  }

  private getItemPrice(item: Item, capacity?: number): number {
    const basePrice =
      this.priceType === 'buy' ? item.bid_price : item.selling_price

    if (this.hasCapacity(item) && capacity) {
      const addPrice =
        this.priceType === 'buy' ? item.bid_price_add : item.selling_price_add
      return basePrice + addPrice * capacity
    }

    return basePrice
  }
}
