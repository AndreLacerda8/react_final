import styled from 'styled-components'
import { GameButton } from '../GameButton'

const Title = styled.h4`
  font-size: 1rem;
  color: #868686;
  font-style: italic;
  margin-bottom: 1.25rem;
`

export function ChooseGame(){
  return(
    <>
      <Title>Choose a game</Title>
      <div>
        <GameButton type='Lotofácil' color='#7F3992' />
        <GameButton selected type='Mega-Sena' color='#01AC66' />
        <GameButton type='Lotomania' color='#F79C31' />
      </div>
    </>
  )
}