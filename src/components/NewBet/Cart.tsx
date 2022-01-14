import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowRight } from '../../assets/ArrowRight'
import { UserInputsContext } from '../../contexts/UserContext'
import { httpAxios } from '../../functions/axios'
import { ModalError } from '../ModalError'
import { ItemsList } from './ItemsList'

const CartStyle = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #E2E2E2;
  border-radius: 10px;
  padding-left: 1.25rem;
  margin-bottom: 5rem;
  position: relative;
`

const Title = styled.h2`
  color: var(--color-gray-strong);
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Price = styled.h3`
  color: var(--color-gray-strong);
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: normal;
  margin-bottom: 3rem;

  & strong{
    font-style: italic;
  }
`

const SaveButton = styled.button`
  background-color: #E2E2E2;
  color: var(--color-green-strong);
  border: none;
  border-radius: 0 0 10px 10px;
  width: 100%;
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  position: absolute;
  bottom: -5rem;
  left: 0;

  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
  transition: filter .3s;

  &:hover{
    filter: brightness(.9);
  }
`

export function Cart(props: { addedBets: any[], deleteBet: (id: string) => void, totalPrice: number }){
  const token = localStorage.getItem('authTokenLottery')
  const navigate = useNavigate()

  const { changeError, error } = useContext(UserInputsContext)

  async function saveBetsHandler(){
    const formatedBets = props.addedBets.map(bet => ({
      game_id: bet.game_id,
      numbers: bet.numbers.split(',').map((num: string) => Number(num))
    }))
    console.log(formatedBets)
    try{
      await httpAxios.post('/bet/new-bet', { games: formatedBets }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      navigate('/dashboard')
    } catch(err: any){
      changeError(err.response.data.message)
    }
  }

  return(
    <CartStyle>
      {error && <ModalError />}
      <Title>Cart</Title>
      <ItemsList deleteBet={props.deleteBet} addedBets={props.addedBets} />
      <Price>
        <strong>Cart </strong>
        Total: R$ {props.totalPrice.toFixed(2).replace('.', ',')}
      </Price>
      <SaveButton onClick={saveBetsHandler}>
        Save
        <ArrowRight color='var(--color-green-strong)' />
      </SaveButton>
    </CartStyle>
  )
}