// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      const cartLength = cartList.length
      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-heading">
            Order Total: <span className="cart-summary">Rs {total}/- </span>
          </h1>
          <p className="cart-summary-description">{cartLength} items in cart</p>
          <button className="cart-summary-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
