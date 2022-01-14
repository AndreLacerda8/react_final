import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { CartItem } from './CartItem'

const ItemsListStyle = styled.div`
max-height: 14rem;
overflow-y: auto;
margin-bottom: 2rem;
`

export function ItemsList(props: { deleteBet: (id: string) => void }){
  const { betsOnCart } = useSelector((state: { cart: any }) => state.cart)
  
  return (
    <ItemsListStyle>
      {betsOnCart.map((bet: any) => (
        <CartItem onDeleteItem={() => props.deleteBet(bet.id)} key={bet.id} id={bet.id} numbers={bet.numbers} type={bet.type} price={bet.price} color={bet.color} />
      ))}
    </ItemsListStyle>
  )
}