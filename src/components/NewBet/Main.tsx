import styled from 'styled-components'
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
    </MainStyle>
  )
}