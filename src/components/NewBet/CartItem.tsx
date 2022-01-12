import styled from 'styled-components'
import { DeleteIcon } from '../../assets/Delete'

const CartItemStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const Border = styled.span`
  background-color: ${prop => prop.color};
  width: 4px;
  height: 4.68rem;
  border-radius: 100px 0 0 100px;
  margin-right: .75rem;
  margin-left: .75rem;
`

const Card = styled.div`
  flex: 1;
  & p{
    color: #868686;
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;
    max-width: 95%;
    word-break: break-word;
  }

  & div{
    display: flex;
    align-items: center;
    padding-top: 0.375rem;
  }

  & div h4{
    color: ${prop => prop.color};
    font-size: 1rem;
    font-style: italic;
    padding-right: 0.375rem;
  }

  & div span{
    color: #868686;
    font-size: 1rem;
  }
`

export function CartItem(props: { numbers: string, type: string, price: string, color: string }){
  return (
    <CartItemStyle>
      <DeleteIcon />
      <Border color={props.color} />
      <Card color={props.color}>
        <p>{props.numbers}</p>
        <div>
          <h4>{props.type}</h4>
          <span>R$ {props.price}</span>
        </div>
      </Card>
    </CartItemStyle>
  )
}