import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Mediterranean',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32
  //   }
  // ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
    },
    IncreaseItemQty(state, action) {
      // state.cart = state.cart.map(item => item.pizzaId === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
      const item = state.cart.find(item => item.pizzaId === action.payload)
      item.quantity++
      item.totalPrice = item.unitPrice * item.quantity
    },
    decreaseItemQty(state, action) {
      const item = state.cart.find(item => item.pizzaId === action.payload)
      item.quantity--
      item.totalPrice = item.unitPrice * item.quantity

      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action)
      }
    },
    clearCart(state) {
      state.cart = []
    }
  }
})

export const { addItem, deleteItem, IncreaseItemQty, decreaseItemQty, clearCart } = cartSlice.actions

export default cartSlice.reducer

export const getTotalCartPrice = (state) => state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0)
export const getTotalCartQty = (state) => state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0)
export const getCartItems = (state) => state.cart.cart