import styled from 'styled-components'
import { ArrowRight } from '../../assets/ArrowRight'
import { GameButton } from '../GameButton'
import { BetCard } from './BetCard'

const MainStyle = styled.main`
  width: 100%;
  padding: 0 12.5rem 0 8.125rem;
  margin-top: 4.4rem;
`

const HeaderMain = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-style: italic;
  color: var(--color-gray-strong);
  margin-right: 2.8rem;
`

const ButtonFilter = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-style: italic;
  color: #868686;
  margin-right: 1rem;
  cursor: pointer;
`

const ButtonNewBet = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  color: var(--color-green);
  margin-right: 1rem;
  margin-left: auto;
  cursor: pointer;
  transition: filter .3s;

  &:hover{
    filter: brightness(.9);
  }
`

export function Main(){
  return (
    <MainStyle>
      <HeaderMain>
        <Title>Recent Games</Title>
        <ButtonFilter>Filters</ButtonFilter>
        <div>
          <GameButton type='Lotofácil' color='#7F3992' />
          <GameButton selected type='Mega-Sena' color='#01AC66' />
          <GameButton type='Lotomania' color='#F79C31' />
        </div>
        <ButtonNewBet>
          New Bet
          <ArrowRight color='#B5C401' />
        </ButtonNewBet>
      </HeaderMain>
      <div>
        <BetCard
          numbers='01,02,04,05,06,07,09,15,17,20,21,22,23,24,25'
          date='30/11/2020'
          price='2,50'
          type='Lotofácil'
          color='#7F3992' 
        />
        <BetCard
          numbers='01,02,04,05,06,07,09,15,17,20,21,22,23,24,25'
          date='30/11/2020'
          price='2,50'
          type='Megasena'
          color='#01AC66' 
        />
        <BetCard
          numbers='01,02,04,05,06,07,09,15,17,20,21,22,23,24,25'
          date='30/11/2020'
          price='2,50'
          type='Lotomania'
          color='#F79C31' 
        />
      </div>
    </MainStyle>
  )
}