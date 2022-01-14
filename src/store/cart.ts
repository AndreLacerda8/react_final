import { createSlice } from '@reduxjs/toolkit'

interface IState {
  selectedNumbers: number[]
  totalPrice: number
  betsOnCart: any[]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    selectedNumbers: [],
    totalPrice: 0,
    betsOnCart: []
  } as IState,
  reducers: {
    addNumber(state, action){
      const number = action.payload.number
      state.selectedNumbers.unshift(number)
    },
    removeNumber(state, action){
      const number = action.payload.number
      state.selectedNumbers = state.selectedNumbers.filter(num => num !== number)
    },
    addBet(state, action){
      const bet = action.payload.bet
      state.totalPrice += Number(bet.price.replace(',', '.'))
      state.betsOnCart.unshift(bet)
    },
    removeBet(state, action){
      const bet = action.payload.bet
      state.totalPrice -= Number(bet.price.replace(',', '.'))
      state.betsOnCart = state.betsOnCart.filter(curBet => curBet.id !== bet.id)
    }
  }
})

const cartActions = cartSlice.actions

export { cartSlice, cartActions }