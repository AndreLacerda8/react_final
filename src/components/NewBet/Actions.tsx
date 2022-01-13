import styled from 'styled-components'
import { CartIcon } from '../../assets/Cart'

const Container = styled.div`
  margin-top: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 50%;
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

export function Actions(){
  return(
    <Container>
      <LeftBox>
        <CommonButton>Complete game</CommonButton>
        <CommonButton>Clear game</CommonButton>
      </LeftBox>
      <ButtonAddCart>
        <CartIcon />
        Add to cart
      </ButtonAddCart>
    </Container>
  )
}