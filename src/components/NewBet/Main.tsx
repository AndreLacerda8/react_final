import styled from 'styled-components'
import { Cart } from './Cart'
import { ChooseGame } from './ChooseGame'
import { ChooseNumbers } from './ChooseNumbers'
import { DescriptionGame } from './DescriptionGame'
import { NewBetTitle } from './NewBetTitle'

const MainStyle = styled.main`
  padding: 0 12.5rem 0 8.125rem;
  display: flex;
`

const SectionGames = styled.section`
  margin-top: 4.6rem;
  width: 68%;
`

const SectionCart = styled.section`
  margin-top: 2.6rem;
  margin-left: 2.5rem;
  width: 35%;
`

export function Main(){
  return (
    <MainStyle>
      <SectionGames>
        <NewBetTitle text='Mega-Sena' />
        <ChooseGame />
        <DescriptionGame />
        <ChooseNumbers qtdNumbers={36} />
      </SectionGames>
      <SectionCart>
        <Cart />
      </SectionCart>
    </MainStyle>
  )
}