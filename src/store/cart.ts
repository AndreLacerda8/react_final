import { createSlice } from '@reduxjs/toolkit'

interface IState {
  numbersSelected: number[]
  totalPrice: number
  betsOnCart: any[]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    numbersSelected: [],
    totalPrice: 0,
    betsOnCart: []
  } as IState,
  reducers: {
    addNumber(state, action){
      const number = action.payload.number
      state.numbersSelected.push(number)
    },
    removeNumber(state, action){
      const number = action.payload.number
      state.numbersSelected = state.numbersSelected.filter(num => num !== number)
    },
    setNumbersSelected(state, action){
      state.numbersSelected = action.payload.numbers
    },
    addBet(state, action){
      const bet = action.payload.bet
      const numbers = state.numbersSelected.sort().join(',')
      bet.numbers = numbers
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