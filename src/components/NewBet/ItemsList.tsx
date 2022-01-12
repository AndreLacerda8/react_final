import styled from 'styled-components'
import { CartItem } from './CartItem'

const ItemsListStyle = styled.div`
max-height: 14rem;
overflow-y: auto;
margin-bottom: 2rem;
`

export function ItemsList(){
  return (
    <ItemsListStyle>
      <CartItem numbers='01,03,04,05,06' type='Mega-Sena' price='4,50' color='#01AC66' />
      <CartItem numbers='01,02,04,05,06,07,09,15,17,20,21, 22,23,24,25' type='Lotofácil' price='2,50' color='#7F3992' />
    </ItemsListStyle>
  )
}