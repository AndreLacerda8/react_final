import styled from 'styled-components'
import { CartIcon } from '../../assets/Cart'

const Container = styled.div`
  margin-top: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 720px){
    flex-direction: column;
    justify-content: center;
  }
`

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 50%;

  @media(max-width: 720px){
    width: 100%;
    justify-content: space-around;
    margin-bottom: 1.5rem;
  }
`

const CommonButton = styled.button`
  padding: 1rem 1.5rem;
  background-color: transparent;
  border: 1px solid var(--color-green-strong);
  border-radius: 10px;
  color: var(--color-green-strong);
  font-size: 1rem;
  cursor: pointer;
  transition: all .3s;

  &:hover{
    background-color: #ddd;
  }

  &:first-child{
    margin-right: 1.5rem;
  }
`

const ButtonAddCart = styled(CommonButton)`
  background-color: var(--color-green-strong);
  color: #fff;
  display: flex;
  align-items: center;

  &:hover{
    filter: brightness(1.1);
    background-color: var(--color-green-strong);
  }
`

export function Actions(props: { onClear: () => void, onComplete: () => void, onAddToCart: () => void }){
  return(
    <Container>
      <LeftBox>
        <CommonButton onClick={props.onComplete}>Complete game</CommonButton>
        <CommonButton onClick={props.onClear}>Clear game</CommonButton>
      </LeftBox>
      <ButtonAddCart onClick={props.onAddToCart}>
        <CartIcon />
        Add to cart
      </ButtonAddCart>
    </Container>
  )
}