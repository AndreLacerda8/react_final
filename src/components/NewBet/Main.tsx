import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { httpAxios } from '../../functions/axios'
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

interface IGame{
  id: number
  type: string
  description: string
  range: number
  price: number
  max_number: number
  color: string
}

export function Main(){
  const [filter, setFilter] = useState('Mega-Sena')
  const [games, setGames] = useState<IGame[]>([])
  const [currentGame, setCurrentGame] = useState<IGame | null>(null)

  useEffect(() => {
    httpAxios('/cart_games').then(resp => setGames(resp.data.types)).then(() => setCurrentGame(games[1]))
  }, [])

  function filterHandler(type: string){
    setFilter(type)
    const gameSelected = games.find(game => game.type === type)
    setCurrentGame(gameSelected || null)
  }

  return (
    <MainStyle>
      <SectionGames>
        <NewBetTitle text='Mega-Sena' />
        <ChooseGame onFilter={filterHandler} filter={filter} />
        <DescriptionGame text={currentGame ? currentGame.description : ''} />
        <ChooseNumbers qtdNumbers={currentGame ? currentGame.max_number : 0} />
      </SectionGames>
      <SectionCart>
        <Cart />
      </SectionCart>
    </MainStyle>
  )
}