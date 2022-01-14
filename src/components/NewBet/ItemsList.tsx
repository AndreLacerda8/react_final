import styled from 'styled-components'
import { CartItem } from './CartItem'

const ItemsListStyle = styled.div`
max-height: 14rem;
overflow-y: auto;
margin-bottom: 2rem;
`

export function ItemsList(props: { addedBets: any[] }){
  return (
    <ItemsListStyle>
      {props.addedBets.map(bet => (
        <CartItem key={bet.id} id={bet.id} numbers={bet.numbers} type={bet.type} price={bet.price} color={bet.color} />
      ))}
    </ItemsListStyle>
  )
}