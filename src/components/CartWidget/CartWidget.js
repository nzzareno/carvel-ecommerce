import React from 'react'
import {ReactComponent as Cart} from '../../assets/shopping-bag.svg'
import './CartWidget.scss'

const CartWidget = () => {
  return (
    <div className="cart-icon">
      <Cart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartWidget